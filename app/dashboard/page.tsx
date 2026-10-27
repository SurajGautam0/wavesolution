"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import Link from "next/link"
import {
    ArrowRight,
    BadgeCheck,
    CalendarClock,
    CalendarDays,
    CalendarPlus,
    Check,
    CheckCircle2,
    ChevronRight,
    Clock3,
    FileText,
    Home,
    Loader2,
    LogIn,
    Mail,
    MapPin,
    MessageCircle,
    Package,
    Pencil,
    Phone,
    ShieldCheck,
    Wallet,
    type LucideIcon,
} from "lucide-react"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSupportPanel } from "@/components/dashboard-support-panel"
import { UserNav } from "@/components/user-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-context"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { getBookingsByUser, updateUser } from "@/lib/firebase-service"
import { cn } from "@/lib/utils"

// ─── helpers ────────────────────────────────────────────────────────────────

type BookingRecord = Record<string, any>

const ACTIVE_STATUSES = ["pending", "confirmed", "scheduled", "en-route", "in-progress"]

const STATUS_STYLES: Record<string, { label: string; className: string; dot: string }> = {
    pending: { label: "Pending", className: "border-amber-200 bg-amber-50 text-amber-800", dot: "bg-amber-500" },
    confirmed: { label: "Confirmed", className: "border-blue-200 bg-blue-50 text-blue-800", dot: "bg-blue-500" },
    scheduled: { label: "Scheduled", className: "border-cyan-200 bg-cyan-50 text-cyan-800", dot: "bg-cyan-600" },
    "en-route": { label: "En route", className: "border-violet-200 bg-violet-50 text-violet-800", dot: "bg-violet-500" },
    "in-progress": { label: "In progress", className: "border-orange-200 bg-orange-50 text-orange-800", dot: "bg-orange-500" },
    completed: { label: "Completed", className: "border-emerald-200 bg-emerald-50 text-emerald-800", dot: "bg-emerald-500" },
    cancelled: { label: "Cancelled", className: "border-rose-200 bg-rose-50 text-rose-700", dot: "bg-rose-500" },
}

function statusOf(booking: BookingRecord) {
    return String(booking?.status || "pending").toLowerCase()
}

function isActiveBooking(booking: BookingRecord) {
    return ACTIVE_STATUSES.includes(statusOf(booking))
}

function bookingAmount(booking: BookingRecord) {
    const raw = booking?.package?.totalPrice
        ?? booking?.package?.price
        ?? booking?.totalPrice
        ?? booking?.price
        ?? 0
    const value = Number(raw)
    return Number.isFinite(value) ? value : 0
}

function formatMoney(value: number) {
    return `A$${value.toLocaleString("en-AU", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`
}

function bookingDate(booking: BookingRecord): Date | null {
    const scheduled = booking?.scheduledDate || booking?.date
    if (scheduled) {
        const parsed = new Date(scheduled)
        if (!Number.isNaN(parsed.getTime())) return parsed
    }
    if (booking?.createdAt?.seconds) return new Date(booking.createdAt.seconds * 1000)
    return null
}

function bookingTime(booking: BookingRecord) {
    return booking?.scheduledTime || booking?.time || ""
}

function bookingService(booking: BookingRecord) {
    return booking?.package?.category || booking?.service || "Cleaning service"
}

function bookingFrequency(booking: BookingRecord) {
    return booking?.package?.frequency || "One-time"
}

function bookingReference(booking: BookingRecord) {
    if (!booking?.id) return "Reference pending"
    return `#${String(booking.id).slice(-6).toUpperCase()}`
}

function bookingAddress(booking: BookingRecord) {
    return [booking?.address, booking?.city, booking?.postcode].filter(Boolean).join(", ")
}

function bookingProperty(booking: BookingRecord) {
    const parts = []
    if (booking?.bedrooms) parts.push(`${booking.bedrooms} bed`)
    if (booking?.bathrooms) parts.push(`${booking?.bathrooms} bath`)
    return booking?.propertyType || (parts.length ? parts.join(" · ") : "On file")
}

function formatDate(date: Date | null) {
    if (!date) return "Date to be confirmed"
    return date.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short", year: "numeric" })
}

function formatShortDate(date: Date | null) {
    if (!date) return "To be confirmed"
    return date.toLocaleDateString("en-AU", { day: "numeric", month: "short" })
}

function dateValue(booking: BookingRecord) {
    const time = bookingDate(booking)?.getTime()
    return typeof time === "number" ? time : Number.MAX_SAFE_INTEGER
}

// ─── small presentational pieces ────────────────────────────────────────────

function StatusBadge({ status }: { status?: string }) {
    const key = String(status || "pending").toLowerCase()
    const style = STATUS_STYLES[key] || { label: key.replace(/-/g, " "), className: "border-slate-200 bg-slate-50 text-slate-700", dot: "bg-slate-400" }
    return (
        <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium capitalize", style.className)}>
            <span className={cn("h-1.5 w-1.5 rounded-full", style.dot)} />
            {style.label}
        </span>
    )
}

function SectionIntro({
    eyebrow,
    title,
    description,
    action,
}: {
    eyebrow: string
    title: string
    description: string
    action?: ReactNode
}) {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{eyebrow}</p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
                <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>
            </div>
            {action ? <div className="flex shrink-0 items-center gap-2">{action}</div> : null}
        </div>
    )
}

function EmptyState({
    icon: Icon,
    title,
    description,
    action,
}: {
    icon: LucideIcon
    title: string
    description: string
    action?: ReactNode
}) {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                <Icon className="h-5 w-5 text-slate-400" />
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-900">{title}</p>
            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">{description}</p>
            {action ? <div className="mt-5">{action}</div> : null}
        </div>
    )
}

function LoadingScreen() {
    return (
        <div className="min-h-screen bg-[#F6F7F9]">
            <DashboardHeader />
            <div className="classic-container py-8 lg:py-10">
                <div className="lg:grid lg:grid-cols-[264px_minmax(0,1fr)] lg:gap-8">
                    <div className="hidden h-[430px] animate-pulse rounded-xl border border-slate-200 bg-white lg:block" />
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />
                            <div className="h-8 w-64 animate-pulse rounded bg-slate-200" />
                            <div className="h-4 w-80 animate-pulse rounded bg-slate-200" />
                        </div>
                        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 xl:grid-cols-4">
                            {[0, 1, 2, 3].map((index) => (
                                <div key={index} className="h-32 animate-pulse bg-white p-5">
                                    <div className="h-3 w-20 rounded bg-slate-100" />
                                    <div className="mt-4 h-7 w-16 rounded bg-slate-100" />
                                </div>
                            ))}
                        </div>
                        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
                            <div className="h-72 animate-pulse rounded-xl border border-slate-200 bg-white" />
                            <div className="h-72 animate-pulse rounded-xl border border-slate-200 bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ─── page ───────────────────────────────────────────────────────────────────

export default function UserDashboardPage() {
    const { user, loading: authLoading } = useAuth()
    const { toast } = useToast()

    const [activeTab, setActiveTab] = useState("dashboard")
    const [bookings, setBookings] = useState<BookingRecord[]>([])
    const [loading, setLoading] = useState(true)
    const [isSavingProfile, setIsSavingProfile] = useState(false)
    const [profileData, setProfileData] = useState({
        name: "",
        phone: "",
        address: "",
        instructions: "",
    })

    useEffect(() => {
        if (user) {
            const record = user as any
            setProfileData({
                name: user.name || "",
                phone: record.phone || "",
                address: record.address || "",
                instructions: record.instructions || "",
            })
        }
    }, [user])

    useEffect(() => {
        let cancelled = false

        async function fetchBookings() {
            if (!user?.id) {
                setLoading(false)
                return
            }
            try {
                const userBookings = await getBookingsByUser(user.id)
                if (!cancelled) setBookings(userBookings)
            } catch (error) {
                console.error("Error fetching dashboard data:", error)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        if (user) fetchBookings()
        else setLoading(false)

        return () => {
            cancelled = true
        }
    }, [user])

    async function handleProfileSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (!user?.id) return

        setIsSavingProfile(true)
        try {
            await updateUser(user.id, profileData)
            toast({
                title: "Profile updated",
                description: "Your contact details have been saved.",
            })
        } catch (error) {
            toast({
                title: "Could not save profile",
                description: "Please check your connection and try again.",
                variant: "destructive",
            })
        } finally {
            setIsSavingProfile(false)
        }
    }

    // ── derived data
    const activeBookings = useMemo(
        () => bookings.filter(isActiveBooking).sort((a, b) => dateValue(a) - dateValue(b)),
        [bookings],
    )
    const completedBookings = useMemo(
        () => bookings.filter((booking) => statusOf(booking) === "completed").sort((a, b) => dateValue(b) - dateValue(a)),
        [bookings],
    )
    const recentActivity = useMemo(() => [...bookings].sort((a, b) => dateValue(b) - dateValue(a)).slice(0, 5), [bookings])

    const nextBooking = activeBookings[0] || null
    const totalSpent = completedBookings.reduce((sum, booking) => sum + bookingAmount(booking), 0)
    const firstBookingDate = [...bookings].sort((a, b) => dateValue(a) - dateValue(b))[0]

    const firstName = user?.name?.trim().split(/\s+/)[0] || ""
    const initials = (user?.name || "")
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("") || "U"

    const nextDate = nextBooking ? bookingDate(nextBooking) : null

    const stats = [
        {
            label: "Upcoming services",
            value: activeBookings.length.toLocaleString("en-AU"),
            hint: nextDate ? `Next on ${formatShortDate(nextDate)}` : "Nothing scheduled",
            icon: CalendarDays,
        },
        {
            label: "Completed services",
            value: completedBookings.length.toLocaleString("en-AU"),
            hint: completedBookings.length
                ? `Last on ${formatShortDate(bookingDate(completedBookings[0]))}`
                : "No completed services yet",
            icon: CheckCircle2,
        },
        {
            label: "Lifetime spend",
            value: formatMoney(totalSpent),
            hint: "Completed services only",
            icon: Wallet,
        },
        {
            label: "Total bookings",
            value: bookings.length.toLocaleString("en-AU"),
            hint: firstBookingDate
                ? `Since ${bookingDate(firstBookingDate)?.getFullYear() || new Date().getFullYear()}`
                : "No bookings yet",
            icon: FileText,
        },
    ]

    if (authLoading) return <LoadingScreen />

    const accountDetails = [
        { label: "Email address", value: user?.email || "Not provided", icon: Mail, href: user?.email ? `mailto:${user.email}` : undefined },
        { label: "Phone number", value: (user as any)?.phone || "Not provided", icon: Phone, href: (user as any)?.phone ? `tel:${String((user as any).phone).replace(/\s+/g, "")}` : undefined },
        { label: "Service address", value: (user as any)?.address || "Not provided", icon: MapPin },
    ]

    const receiptHref = (reference: string) =>
        `mailto:${businessInfo.email}?subject=${encodeURIComponent(`Receipt request - ${reference}`)}`

    return (
        <div className="min-h-screen bg-[#F6F7F9]">
            <DashboardHeader />

            <div className="classic-container py-6 sm:py-8 lg:py-10">
                <div className="lg:grid lg:grid-cols-[264px_minmax(0,1fr)] lg:gap-8">
                    {/* ── sidebar ─────────────────────────────────────────── */}
                    <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                            <div className="border-b border-slate-200 p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#333365] text-sm font-semibold text-white">
                                        {initials}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-slate-900">{user?.name || "Guest account"}</p>
                                        <p className="break-all text-[11px] leading-4 text-slate-500">{user?.email || "Not signed in"}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                                    <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">Account</span>
                                    <span className="text-[11px] font-semibold capitalize text-slate-700">{user?.role || "Customer"}</span>
                                </div>
                            </div>
                            <div className="p-2">
                                <UserNav activeTab={activeTab} setActiveTab={setActiveTab} />
                            </div>
                        </div>

                        <div className="mt-4 hidden rounded-xl border border-slate-200 bg-white p-5 lg:block">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Account support</p>
                            <div className="mt-2 space-y-1">
                                <a
                                    href={businessInfo.phoneHref}
                                    className="flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-slate-50"
                                >
                                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                    <span className="min-w-0">
                                        <span className="block text-sm font-medium text-slate-900">{businessInfo.phoneDisplay}</span>
                                        <span className="block text-xs text-slate-500">Mon–Sat, 8am–6pm</span>
                                    </span>
                                </a>
                                <a
                                    href={`mailto:${businessInfo.email}`}
                                    className="flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-slate-50"
                                >
                                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                    <span className="min-w-0">
                                        <span className="block break-words text-xs font-medium text-slate-900">{businessInfo.email}</span>
                                        <span className="block text-xs text-slate-500">Replies within one business day</span>
                                    </span>
                                </a>
                                <a
                                    href={`https://wa.me/${businessInfo.phoneE164.replace(/\D/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-slate-50"
                                >
                                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                    <span className="min-w-0">
                                        <span className="block text-sm font-medium text-slate-900">WhatsApp</span>
                                        <span className="block text-xs text-slate-500">Fastest response during the day</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* ── main ────────────────────────────────────────────── */}
                    <main className="mt-6 min-w-0 space-y-6 lg:mt-0">
                        {!user && (
                            <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                                <p className="flex items-start gap-2 text-sm text-slate-600">
                                    <LogIn className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                    Sign in to view your bookings, service history and saved details.
                                </p>
                                <Button asChild variant="outline" size="sm" className="rounded-lg border-slate-300 bg-white">
                                    <Link href="/login">Sign in</Link>
                                </Button>
                            </div>
                        )}

                        {/* ========== OVERVIEW ========== */}
                        {activeTab === "dashboard" && (
                            <div className="space-y-6">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="min-w-0">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Client portal</p>
                                        <h1 className="mt-1.5 text-[26px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                                            Account overview
                                        </h1>
                                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                            {firstName
                                                ? `${firstName}, here is a summary of your bookings, payments and account details.`
                                                : "A summary of your bookings, payments and account details."}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="h-10 rounded-lg border-slate-300 bg-white px-3.5 text-sm font-medium text-slate-700 shadow-none hover:bg-slate-50 hover:text-slate-900"
                                        >
                                            <Link href="/contact">Contact support</Link>
                                        </Button>
                                        <Button
                                            asChild
                                            className="h-10 rounded-lg bg-[#333365] px-4 text-sm font-medium text-white shadow-none hover:bg-[#3d3d78]"
                                        >
                                            <Link href={siteLinks.book}>Book a service</Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* KPI strip */}
                                {loading && user ? (
                                    <section aria-hidden="true" className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 xl:grid-cols-4">
                                        {[0, 1, 2, 3].map((index) => (
                                            <div key={index} className="bg-white p-4 sm:p-5">
                                                <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />
                                                <div className="mt-4 h-7 w-16 animate-pulse rounded bg-slate-100" />
                                                <div className="mt-3 h-3 w-20 animate-pulse rounded bg-slate-100" />
                                            </div>
                                        ))}
                                    </section>
                                ) : (
                                    <section aria-label="Account summary" className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 xl:grid-cols-4">
                                        {stats.map(({ label, value, hint, icon: Icon }) => (
                                            <div key={label} className="bg-white p-4 sm:p-5">
                                                <div className="flex items-center justify-between gap-2">
                                                    <p className="text-xs font-medium text-slate-500">{label}</p>
                                                    <Icon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                                                </div>
                                                <p className="mt-3 truncate text-[26px] font-semibold leading-none tracking-tight text-slate-900 tabular-nums">
                                                    {value}
                                                </p>
                                                <p className="mt-2 truncate text-xs text-slate-500">{hint}</p>
                                            </div>
                                        ))}
                                    </section>
                                )}

                                {loading && user ? (
                                    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
                                        <div className="h-72 animate-pulse rounded-xl border border-slate-200 bg-white" />
                                        <div className="h-72 animate-pulse rounded-xl border border-slate-200 bg-white" />
                                    </div>
                                ) : (
                                    <>
                                        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
                                            {/* Next appointment */}
                                            <section className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                                                <header className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
                                                    <div>
                                                        <h2 className="text-sm font-semibold text-slate-900">Next appointment</h2>
                                                        <p className="mt-0.5 text-xs text-slate-500">Your soonest scheduled service</p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab("bookings")}
                                                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 transition-colors hover:text-slate-900"
                                                    >
                                                        View all
                                                        <ChevronRight className="h-3.5 w-3.5" />
                                                    </button>
                                                </header>

                                                {nextBooking ? (
                                                    <>
                                                        <div className="flex-1 p-5">
                                                            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                                                                <div className="flex shrink-0 items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 sm:w-24 sm:flex-col sm:gap-1 sm:px-2 sm:py-4 sm:text-center">
                                                                    <span className="text-2xl font-semibold leading-none text-slate-900 tabular-nums">
                                                                        {nextDate ? nextDate.getDate() : "—"}
                                                                    </span>
                                                                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600">
                                                                        {nextDate ? nextDate.toLocaleDateString("en-AU", { month: "short" }) : "Date"}
                                                                    </span>
                                                                    <span className="ml-auto text-[11px] text-slate-500 sm:ml-0">
                                                                        {nextDate ? nextDate.toLocaleDateString("en-AU", { weekday: "short" }) : "TBC"}
                                                                    </span>
                                                                </div>

                                                                <div className="min-w-0 flex-1">
                                                                    <div className="flex flex-wrap items-center gap-2">
                                                                        <h3 className="text-base font-semibold text-slate-900">{bookingService(nextBooking)}</h3>
                                                                        <StatusBadge status={nextBooking.status} />
                                                                    </div>
                                                                    <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                                                                        <div className="flex items-start gap-2.5">
                                                                            <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                                            <div className="min-w-0">
                                                                                <dt className="text-xs text-slate-500">Scheduled time</dt>
                                                                                <dd className="mt-0.5 text-sm font-medium text-slate-900">
                                                                                    {bookingTime(nextBooking) || "Time to be confirmed"}
                                                                                </dd>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-start gap-2.5">
                                                                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                                            <div className="min-w-0">
                                                                                <dt className="text-xs text-slate-500">Service address</dt>
                                                                                <dd className="mt-0.5 text-sm font-medium text-slate-900">
                                                                                    {bookingAddress(nextBooking) || "Address to be confirmed"}
                                                                                </dd>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-start gap-2.5">
                                                                            <Home className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                                            <div className="min-w-0">
                                                                                <dt className="text-xs text-slate-500">Property</dt>
                                                                                <dd className="mt-0.5 text-sm font-medium text-slate-900">
                                                                                    {bookingProperty(nextBooking)}
                                                                                </dd>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-start gap-2.5">
                                                                            <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                                            <div className="min-w-0">
                                                                                <dt className="text-xs text-slate-500">Frequency</dt>
                                                                                <dd className="mt-0.5 text-sm font-medium text-slate-900">
                                                                                    {bookingFrequency(nextBooking)}
                                                                                </dd>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-start gap-2.5">
                                                                            <Package className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                                            <div className="min-w-0">
                                                                                <dt className="text-xs text-slate-500">Booking reference</dt>
                                                                                <dd className="mt-0.5 text-sm font-medium text-slate-900 tabular-nums">
                                                                                    {bookingReference(nextBooking)}
                                                                                </dd>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-start gap-2.5">
                                                                            <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                                            <div className="min-w-0">
                                                                                <dt className="text-xs text-slate-500">Service total</dt>
                                                                                <dd className="mt-0.5 text-sm font-medium text-slate-900 tabular-nums">
                                                                                    {formatMoney(bookingAmount(nextBooking))}
                                                                                </dd>
                                                                            </div>
                                                                        </div>
                                                                    </dl>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
                                                            <p className="text-xs leading-5 text-slate-500">
                                                                To change or cancel, contact us at least 24 hours before your appointment.
                                                            </p>
                                                            <a
                                                                href={businessInfo.phoneHref}
                                                                className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-700 transition-colors hover:text-slate-900"
                                                            >
                                                                <Phone className="h-3.5 w-3.5" />
                                                                {businessInfo.phoneDisplay}
                                                            </a>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <EmptyState
                                                        icon={CalendarDays}
                                                        title="No upcoming appointments"
                                                        description="When you book a cleaning service, the details will appear here."
                                                        action={
                                                            <Button asChild className="h-10 rounded-lg bg-[#333365] px-4 text-sm font-medium text-white hover:bg-[#3d3d78]">
                                                                <Link href={siteLinks.book}>
                                                                    <CalendarPlus className="mr-2 h-4 w-4" />
                                                                    Book a service
                                                                </Link>
                                                            </Button>
                                                        }
                                                    />
                                                )}
                                            </section>

                                            {/* Account details */}
                                            <section className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                                                <header className="border-b border-slate-200 px-5 py-4">
                                                    <h2 className="text-sm font-semibold text-slate-900">Account details</h2>
                                                    <p className="mt-0.5 text-xs text-slate-500">Contact information used for your bookings</p>
                                                </header>
                                                <div className="flex-1 divide-y divide-slate-100 px-5">
                                                    {accountDetails.map((detail) => (
                                                        <div key={detail.label} className="flex items-start gap-3 py-4">
                                                            <detail.icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                            <div className="min-w-0">
                                                                <p className="text-xs text-slate-500">{detail.label}</p>
                                                                {detail.href ? (
                                                                    <a
                                                                        href={detail.href}
                                                                        className="mt-0.5 block break-words text-sm font-medium text-slate-900 hover:underline"
                                                                    >
                                                                        {detail.value}
                                                                    </a>
                                                                ) : (
                                                                    <p className={cn("mt-0.5 break-words text-sm font-medium", detail.value === "Not provided" ? "text-slate-400" : "text-slate-900")}>
                                                                        {detail.value}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="border-t border-slate-200 bg-slate-50 p-4">
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() => setActiveTab("profile")}
                                                        className="w-full rounded-lg border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                                    >
                                                        <Pencil className="mr-2 h-4 w-4" />
                                                        Edit profile
                                                    </Button>
                                                </div>
                                            </section>
                                        </div>

                                        {/* Recent activity */}
                                        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                                            <header className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
                                                <div>
                                                    <h2 className="text-sm font-semibold text-slate-900">Recent activity</h2>
                                                    <p className="mt-0.5 text-xs text-slate-500">Your latest service requests</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveTab("bookings")}
                                                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 transition-colors hover:text-slate-900"
                                                >
                                                    View all bookings
                                                    <ChevronRight className="h-3.5 w-3.5" />
                                                </button>
                                            </header>

                                            {recentActivity.length ? (
                                                <>
                                                    <div className="hidden overflow-x-auto md:block">
                                                        <table className="w-full text-sm">
                                                            <thead>
                                                                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                                                                    <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Service</th>
                                                                    <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Scheduled</th>
                                                                    <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Status</th>
                                                                    <th scope="col" className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-slate-100">
                                                                {recentActivity.map((booking) => (
                                                                    <tr key={booking.id} className="transition-colors hover:bg-slate-50/80">
                                                                        <td className="px-5 py-4">
                                                                            <p className="font-medium text-slate-900">{bookingService(booking)}</p>
                                                                            <p className="mt-0.5 text-xs text-slate-500 tabular-nums">{bookingReference(booking)}</p>
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-5 py-4 text-slate-600">{formatDate(bookingDate(booking))}</td>
                                                                        <td className="px-5 py-4"><StatusBadge status={booking.status} /></td>
                                                                        <td className="whitespace-nowrap px-5 py-4 text-right font-medium text-slate-900 tabular-nums">
                                                                            {formatMoney(bookingAmount(booking))}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <ul className="divide-y divide-slate-100 md:hidden">
                                                        {recentActivity.map((booking) => (
                                                            <li key={booking.id} className="p-5">
                                                                <div className="flex items-start justify-between gap-3">
                                                                    <div className="min-w-0">
                                                                        <p className="truncate text-sm font-medium text-slate-900">{bookingService(booking)}</p>
                                                                        <p className="mt-0.5 text-xs text-slate-500">
                                                                            {formatDate(bookingDate(booking))}
                                                                        </p>
                                                                    </div>
                                                                    <StatusBadge status={booking.status} />
                                                                </div>
                                                                <div className="mt-3 flex items-center justify-between gap-3">
                                                                    <span className="text-xs text-slate-500 tabular-nums">{bookingReference(booking)}</span>
                                                                    <span className="text-sm font-semibold text-slate-900 tabular-nums">{formatMoney(bookingAmount(booking))}</span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                <EmptyState
                                                    icon={FileText}
                                                    title="No activity yet"
                                                    description="Your bookings and completed services will appear here."
                                                />
                                            )}
                                        </section>

                                        {/* Quick actions */}
                                        <section className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
                                            <Link href={siteLinks.book} className="group flex items-center gap-3 bg-white px-4 py-4 transition-colors hover:bg-slate-50">
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600">
                                                    <CalendarPlus className="h-4 w-4" />
                                                </span>
                                                <span className="min-w-0 flex-1">
                                                    <span className="block text-sm font-medium text-slate-900">Book a service</span>
                                                    <span className="block truncate text-xs text-slate-500">Schedule your next clean</span>
                                                </span>
                                                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-500" />
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => setActiveTab("history")}
                                                className="group flex items-center gap-3 bg-white px-4 py-4 text-left transition-colors hover:bg-slate-50"
                                            >
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600">
                                                    <Clock3 className="h-4 w-4" />
                                                </span>
                                                <span className="min-w-0 flex-1">
                                                    <span className="block text-sm font-medium text-slate-900">Service history</span>
                                                    <span className="block truncate text-xs text-slate-500">Review past appointments</span>
                                                </span>
                                                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-500" />
                                            </button>
                                            <Link href="/contact" className="group flex items-center gap-3 bg-white px-4 py-4 transition-colors hover:bg-slate-50">
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600">
                                                    <MessageCircle className="h-4 w-4" />
                                                </span>
                                                <span className="min-w-0 flex-1">
                                                    <span className="block text-sm font-medium text-slate-900">Contact support</span>
                                                    <span className="block truncate text-xs text-slate-500">Ask about a booking</span>
                                                </span>
                                                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-500" />
                                            </Link>
                                        </section>

                                        <footer className="flex flex-col gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                                                <span className="inline-flex items-center gap-1.5">
                                                    <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                                                    Fully insured
                                                </span>
                                                <span className="inline-flex items-center gap-1.5">
                                                    <BadgeCheck className="h-3.5 w-3.5 text-slate-400" />
                                                    Police-checked team
                                                </span>
                                                <span className="inline-flex items-center gap-1.5">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                                                    Satisfaction guarantee
                                                </span>
                                            </div>
                                            <span>All amounts in AUD</span>
                                        </footer>
                                    </>
                                )}
                            </div>
                        )}

                        {/* ========== BOOKINGS ========== */}
                        {activeTab === "bookings" && (
                            <div className="space-y-5">
                                <SectionIntro
                                    eyebrow="Bookings"
                                    title="All bookings"
                                    description="Every service request you have made with Wave Solution, including those still awaiting confirmation."
                                    action={
                                        <Button asChild className="h-10 rounded-lg bg-[#333365] px-4 text-sm font-medium text-white hover:bg-[#3d3d78]">
                                            <Link href={siteLinks.book}>Book a service</Link>
                                        </Button>
                                    }
                                />

                                <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                                    {bookings.length ? (
                                        <>
                                            <div className="hidden overflow-x-auto md:block">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="border-b border-slate-200 bg-slate-50 text-left">
                                                            <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Reference</th>
                                                            <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Service</th>
                                                            <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Scheduled</th>
                                                            <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Status</th>
                                                            <th scope="col" className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-100">
                                                        {bookings.map((booking) => (
                                                            <tr key={booking.id} className="transition-colors hover:bg-slate-50/80">
                                                                <td className="whitespace-nowrap px-5 py-4 text-xs font-medium text-slate-500 tabular-nums">
                                                                    {bookingReference(booking)}
                                                                </td>
                                                                <td className="px-5 py-4">
                                                                    <p className="font-medium text-slate-900">{bookingService(booking)}</p>
                                                                    <p className="mt-0.5 text-xs text-slate-500">{bookingFrequency(booking)}</p>
                                                                </td>
                                                                <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                                                                    <p>{formatDate(bookingDate(booking))}</p>
                                                                    <p className="mt-0.5 text-xs text-slate-500">{bookingTime(booking) || "Time to be confirmed"}</p>
                                                                </td>
                                                                <td className="px-5 py-4"><StatusBadge status={booking.status} /></td>
                                                                <td className="whitespace-nowrap px-5 py-4 text-right font-medium text-slate-900 tabular-nums">
                                                                    {formatMoney(bookingAmount(booking))}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            <ul className="divide-y divide-slate-100 md:hidden">
                                                {bookings.map((booking) => (
                                                    <li key={booking.id} className="p-5">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <div className="min-w-0">
                                                                <p className="truncate text-sm font-medium text-slate-900">{bookingService(booking)}</p>
                                                                <p className="mt-0.5 text-xs text-slate-500">
                                                                    {formatDate(bookingDate(booking))}
                                                                    {bookingTime(booking) ? ` · ${bookingTime(booking)}` : ""}
                                                                </p>
                                                            </div>
                                                            <StatusBadge status={booking.status} />
                                                        </div>
                                                        <div className="mt-3 flex items-center justify-between gap-3 text-xs">
                                                            <span className="text-slate-500 tabular-nums">{bookingReference(booking)}</span>
                                                            <span className="text-sm font-semibold text-slate-900 tabular-nums">{formatMoney(bookingAmount(booking))}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-col gap-1 border-t border-slate-200 bg-slate-50 px-5 py-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                                                <span>
                                                    {bookings.length} booking{bookings.length === 1 ? "" : "s"} recorded · {activeBookings.length} active
                                                </span>
                                                <span className="tabular-nums">
                                                    Total value {formatMoney(bookings.reduce((sum, booking) => sum + bookingAmount(booking), 0))}
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <EmptyState
                                            icon={CalendarDays}
                                            title="No bookings yet"
                                            description="Once you request a service, it will appear here with its status and schedule."
                                            action={
                                                <Button asChild className="h-10 rounded-lg bg-[#333365] px-4 text-sm font-medium text-white hover:bg-[#3d3d78]">
                                                    <Link href={siteLinks.book}>Book your first service</Link>
                                                </Button>
                                            }
                                        />
                                    )}
                                </section>
                            </div>
                        )}

                        {/* ========== HISTORY ========== */}
                        {activeTab === "history" && (
                            <div className="space-y-5">
                                <SectionIntro
                                    eyebrow="Service history"
                                    title="Completed services"
                                    description="A record of the cleaning services we have completed for you."
                                />

                                <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                                    {completedBookings.length ? (
                                        <>
                                            <div className="hidden overflow-x-auto md:block">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="border-b border-slate-200 bg-slate-50 text-left">
                                                            <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Reference</th>
                                                            <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Service</th>
                                                            <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Completed</th>
                                                            <th scope="col" className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Amount</th>
                                                            <th scope="col" className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Receipt</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-100">
                                                        {completedBookings.map((booking) => (
                                                            <tr key={booking.id} className="transition-colors hover:bg-slate-50/80">
                                                                <td className="whitespace-nowrap px-5 py-4 text-xs font-medium text-slate-500 tabular-nums">
                                                                    {bookingReference(booking)}
                                                                </td>
                                                                <td className="px-5 py-4">
                                                                    <p className="font-medium text-slate-900">{bookingService(booking)}</p>
                                                                    <p className="mt-0.5 text-xs text-slate-500">{bookingFrequency(booking)}</p>
                                                                </td>
                                                                <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                                                                    {formatDate(bookingDate(booking))}
                                                                </td>
                                                                <td className="whitespace-nowrap px-5 py-4 text-right font-medium text-slate-900 tabular-nums">
                                                                    {formatMoney(bookingAmount(booking))}
                                                                </td>
                                                                <td className="whitespace-nowrap px-5 py-4 text-right">
                                                                    <Button asChild variant="outline" size="sm" className="h-8 rounded-md border-slate-300 bg-white px-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                                                                        <a href={receiptHref(bookingReference(booking))}>Request</a>
                                                                    </Button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            <ul className="divide-y divide-slate-100 md:hidden">
                                                {completedBookings.map((booking) => (
                                                    <li key={booking.id} className="p-5">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <div className="min-w-0">
                                                                <p className="truncate text-sm font-medium text-slate-900">{bookingService(booking)}</p>
                                                                <p className="mt-0.5 text-xs text-slate-500">{formatDate(bookingDate(booking))}</p>
                                                            </div>
                                                            <span className="text-sm font-semibold text-slate-900 tabular-nums">{formatMoney(bookingAmount(booking))}</span>
                                                        </div>
                                                        <div className="mt-3 flex items-center justify-between gap-3">
                                                            <span className="text-xs text-slate-500 tabular-nums">{bookingReference(booking)}</span>
                                                            <a
                                                                href={receiptHref(bookingReference(booking))}
                                                                className="text-xs font-medium text-slate-700 underline-offset-4 hover:underline"
                                                            >
                                                                Request receipt
                                                            </a>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-col gap-1 border-t border-slate-200 bg-slate-50 px-5 py-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                                                <span>{completedBookings.length} completed service{completedBookings.length === 1 ? "" : "s"}</span>
                                                <span className="tabular-nums">Total {formatMoney(totalSpent)}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <EmptyState
                                            icon={CheckCircle2}
                                            title="No completed services yet"
                                            description="Completed cleaning services and their history will appear here."
                                        />
                                    )}
                                </section>

                                <p className="text-xs leading-5 text-slate-500">
                                    Receipts are issued by email. Choose “Request” to open a pre-addressed email, or call{" "}
                                    <a href={businessInfo.phoneHref} className="font-medium text-slate-700 hover:underline">
                                        {businessInfo.phoneDisplay}
                                    </a>
                                    .
                                </p>
                            </div>
                        )}

                        {/* ========== PROFILE ========== */}
                        {activeTab === "profile" && (
                            <div className="space-y-5">
                                <SectionIntro
                                    eyebrow="Profile"
                                    title="Profile settings"
                                    description="Keep your contact details and cleaning instructions up to date for future appointments."
                                />

                                <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
                                    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                                        <header className="border-b border-slate-200 px-5 py-4">
                                            <h2 className="text-sm font-semibold text-slate-900">Personal information</h2>
                                            <p className="mt-0.5 text-xs text-slate-500">Used to contact you about your bookings</p>
                                        </header>
                                        <form onSubmit={handleProfileSubmit}>
                                            <div className="space-y-6 p-5">
                                                <div className="grid gap-5 sm:grid-cols-2">
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="name" className="text-xs font-medium text-slate-600">Full name</Label>
                                                        <Input
                                                            id="name"
                                                            value={profileData.name}
                                                            onChange={(event) => setProfileData({ ...profileData, name: event.target.value })}
                                                            placeholder="Your full name"
                                                            autoComplete="name"
                                                            className="h-11 rounded-lg border-slate-300 bg-white text-sm focus-visible:border-[#333365] focus-visible:ring-2 focus-visible:ring-[#333365]/15 focus-visible:ring-offset-0"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="phone" className="text-xs font-medium text-slate-600">Phone number</Label>
                                                        <Input
                                                            id="phone"
                                                            value={profileData.phone}
                                                            onChange={(event) => setProfileData({ ...profileData, phone: event.target.value })}
                                                            placeholder="0400 000 000"
                                                            autoComplete="tel"
                                                            className="h-11 rounded-lg border-slate-300 bg-white text-sm focus-visible:border-[#333365] focus-visible:ring-2 focus-visible:ring-[#333365]/15 focus-visible:ring-offset-0"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="h-px bg-slate-100" />

                                                <div className="space-y-5">
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="address" className="text-xs font-medium text-slate-600">Primary service address</Label>
                                                        <Input
                                                            id="address"
                                                            value={profileData.address}
                                                            onChange={(event) => setProfileData({ ...profileData, address: event.target.value })}
                                                            placeholder="Street address, suburb, QLD postcode"
                                                            autoComplete="street-address"
                                                            className="h-11 rounded-lg border-slate-300 bg-white text-sm focus-visible:border-[#333365] focus-visible:ring-2 focus-visible:ring-[#333365]/15 focus-visible:ring-offset-0"
                                                        />
                                                        <p className="text-xs text-slate-500">We use this address to schedule and route your cleaning appointments.</p>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="instructions" className="text-xs font-medium text-slate-600">Access and cleaning notes</Label>
                                                        <Textarea
                                                            id="instructions"
                                                            value={profileData.instructions}
                                                            onChange={(event) => setProfileData({ ...profileData, instructions: event.target.value })}
                                                            placeholder="Parking, entry instructions, pets, product preferences or areas to prioritise."
                                                            rows={4}
                                                            className="min-h-24 resize-y rounded-lg border-slate-300 bg-white text-sm focus-visible:border-[#333365] focus-visible:ring-2 focus-visible:ring-[#333365]/15 focus-visible:ring-offset-0"
                                                        />
                                                        <p className="text-xs text-slate-500">Shared only with the cleaners assigned to your booking.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                                                <p className="text-xs text-slate-500">Changes apply to future bookings.</p>
                                                <Button
                                                    type="submit"
                                                    disabled={isSavingProfile}
                                                    className="h-10 rounded-lg bg-[#333365] px-5 text-sm font-medium text-white hover:bg-[#3d3d78]"
                                                >
                                                    {isSavingProfile && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                                    Save changes
                                                </Button>
                                            </div>
                                        </form>
                                    </section>

                                    <aside className="space-y-4">
                                        <section className="rounded-xl border border-slate-200 bg-white p-5">
                                            <h3 className="text-sm font-semibold text-slate-900">How we use your details</h3>
                                            <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                                                <li className="flex gap-2.5">
                                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                    Your address and access notes help the team arrive prepared.
                                                </li>
                                                <li className="flex gap-2.5">
                                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                    We only contact you about bookings, quotes and support requests.
                                                </li>
                                                <li className="flex gap-2.5">
                                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                    Your details are never sold or shared with third parties.
                                                </li>
                                            </ul>
                                        </section>
                                        <section className="rounded-xl border border-slate-200 bg-white p-5">
                                            <h3 className="text-sm font-semibold text-slate-900">Need to change your email?</h3>
                                            <p className="mt-1.5 text-sm leading-6 text-slate-500">
                                                Your sign-in email is managed separately. Contact support and we will update it for you.
                                            </p>
                                            <a
                                                href={`mailto:${businessInfo.email}`}
                                                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:underline"
                                            >
                                                {businessInfo.email}
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </a>
                                        </section>
                                    </aside>
                                </div>
                            </div>
                        )}

                        {/* ========== SUPPORT ========== */}
                        {activeTab === "support" && <DashboardSupportPanel user={user} />}
                    </main>
                </div>
            </div>
        </div>
    )
}
