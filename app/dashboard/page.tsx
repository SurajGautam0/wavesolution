"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { getBookingsByUser, getAllServices, updateUser } from "@/lib/firebase-service"
import { DashboardSupportPanel } from "@/components/dashboard-support-panel"
import { DashboardHeader } from "@/components/dashboard-header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { businessInfo, siteLinks } from "@/lib/business-info"
import {
    CalendarDays,
    Clock,
    CreditCard,
    MapPin,
    ArrowRight,
    Star,
    Shield,
    Sparkles,
    Loader2,
    Phone,
    MessageCircle,
    ChevronRight,
    CheckCircle2,
    AlertCircle,
    Package,
    Home,
    FileText
} from "lucide-react"

export default function UserDashboardPage() {
    const { user } = useAuth()
    const router = useRouter()
    const { toast } = useToast()
    const [activeTab, setActiveTab] = useState("dashboard")
    const [bookings, setBookings] = useState<any[]>([])
    const [services, setServices] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isSavingProfile, setIsSavingProfile] = useState(false)
    const [profileData, setProfileData] = useState({
        name: "",
        phone: "",
        address: "",
        instructions: ""
    })

    useEffect(() => {
        if (user) {
            const u = user as any
            setProfileData({
                name: user.name || "",
                phone: u.phone || "",
                address: user.address || "",
                instructions: u.instructions || ""
            })
        }
    }, [user])

    useEffect(() => {
        const fetchData = async () => {
            if (user?.id) {
                try {
                    const [userBookings, allServices] = await Promise.all([
                        getBookingsByUser(user.id),
                        getAllServices()
                    ])
                    setBookings(userBookings)
                    setServices(allServices)
                } catch (error) {
                    console.error("Error fetching dashboard data:", error)
                } finally {
                    setLoading(false)
                }
            }
        }

        if (user) {
            fetchData()
        }
    }, [user])

    const handleProfileSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user?.id) return
        
        setIsSavingProfile(true)
        try {
            await updateUser(user.id, profileData)
            toast({
                title: "Profile Updated",
                description: "Your profile information has been successfully saved.",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to update profile. Please try again.",
                variant: "destructive"
            })
        } finally {
            setIsSavingProfile(false)
        }
    }

    // Derived Data
    const totalSpent = bookings.reduce((sum, booking) => sum + (booking.package?.totalPrice || booking.package?.price || 0), 0)

    const sortedBookings = [...bookings].sort((a, b) => {
        const timeA = a.createdAt?.seconds || 0
        const timeB = b.createdAt?.seconds || 0
        return timeB - timeA
    })

    const futureBookings = sortedBookings.filter(b => b.status === 'scheduled' || b.status === 'pending')
    const nextBooking = futureBookings.length > 0 ? futureBookings[0] : null
    const recentActivity = sortedBookings.slice(0, 3)
    const completedBookings = sortedBookings.filter(b => b.status === 'completed')

    if (loading && user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#F3F3F3]">
                <Loader2 className="w-8 h-8 animate-spin text-[#39BDE4]" />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#F3F3F3]">
            <DashboardHeader />

            <div className="classic-container py-6 sm:py-8 lg:py-10">
                <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
                    {/* Sidebar */}
                    <aside className="lg:sticky lg:top-24 lg:self-start">
                        <div className="space-y-4">
                            {/* User Card */}
                            <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <div className="bg-gradient-to-r from-[#333365] to-[#333365]/90 p-5 relative overflow-hidden">
                                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#39BDE4]/20 blur-xl" />
                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-full bg-[#39BDE4] flex items-center justify-center text-white font-bold text-lg shrink-0">
                                            {user?.name?.charAt(0)?.toUpperCase() || "U"}
                                        </div>
                                        <div className="min-w-0">
                                            <h2 className="text-sm font-bold text-white truncate">{user?.name || "Welcome"}</h2>
                                            <p className="text-white/60 text-xs font-medium capitalize">{user?.role || "Member"}</p>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-2">
                                    <UserNav activeTab={activeTab} setActiveTab={setActiveTab} />
                                </CardContent>
                            </Card>

                            {/* Quick Contact Card */}
                            <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-5 space-y-3">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Need Help?</p>
                                    <div className="space-y-2">
                                        <a
                                            href={businessInfo.phoneHref}
                                            className="flex items-center gap-3 rounded-xl bg-[#F3F3F3] p-3 text-sm font-semibold text-slate-700 hover:bg-[#39BDE4]/10 hover:text-secondary transition-colors"
                                        >
                                            <Phone className="h-4 w-4 text-[#39BDE4]" />
                                            {businessInfo.phoneDisplay}
                                        </a>
                                        <a
                                            href={`https://wa.me/${businessInfo.phoneE164.replace(/\D/g, "")}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 rounded-xl bg-[#F3F3F3] p-3 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                                        >
                                            <MessageCircle className="h-4 w-4 text-green-500" />
                                            WhatsApp Chat
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="min-w-0 space-y-6">

                        {/* ========== OVERVIEW TAB ========== */}
                        {activeTab === "dashboard" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                                {/* Welcome Banner */}
                                <div className="rounded-2xl bg-gradient-to-r from-[#333365] to-[#333365]/80 p-6 sm:p-8 text-white relative overflow-hidden">
                                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#39BDE4]/15 blur-2xl" />
                                    <div className="relative z-10">
                                        <p className="text-white/60 text-sm font-medium">Welcome back,</p>
                                        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                                            {user?.name?.split(" ")[0] || "there"} 👋
                                        </h1>
                                        <p className="text-white/70 text-sm mt-2 max-w-md">
                                            {futureBookings.length > 0
                                                ? `You have ${futureBookings.length} upcoming booking${futureBookings.length > 1 ? "s" : ""}.`
                                                : "Ready for your next clean? Book a service in seconds."}
                                        </p>
                                        <Button
                                            asChild
                                            className="mt-5 h-11 rounded-full bg-[#39BDE4] px-6 text-xs font-black uppercase tracking-widest text-white hover:bg-[#249FC5]"
                                        >
                                            <Link href={siteLinks.book}>
                                                Book a Clean <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-[#39BDE4]/10 flex items-center justify-center">
                                                <CalendarDays className="h-5 w-5 text-[#39BDE4]" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-black text-slate-900">{futureBookings.length}</p>
                                                <p className="text-xs font-semibold text-slate-500">Upcoming</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center">
                                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-black text-slate-900">{completedBookings.length}</p>
                                                <p className="text-xs font-semibold text-slate-500">Completed</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                                                <CreditCard className="h-5 w-5 text-secondary" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-black text-slate-900">${totalSpent.toLocaleString()}</p>
                                                <p className="text-xs font-semibold text-slate-500">Total Spent</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center">
                                                <Star className="h-5 w-5 text-amber-500" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-black text-slate-900">{bookings.length}</p>
                                                <p className="text-xs font-semibold text-slate-500">Total Bookings</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>

                                {/* Upcoming Booking */}
                                {nextBooking && (
                                    <Card className="border border-[#39BDE4]/20 shadow-sm bg-white rounded-2xl overflow-hidden">
                                        <CardHeader className="border-b border-slate-100 p-5">
                                            <div className="flex items-center justify-between">
                                                <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-[#39BDE4] animate-pulse" />
                                                    Next Upcoming Service
                                                </CardTitle>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-[#39BDE4] hover:text-[#249FC5] hover:bg-[#39BDE4]/5 text-xs font-semibold"
                                                    onClick={() => setActiveTab("bookings")}
                                                >
                                                    View All <ChevronRight className="ml-1 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-5">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-14 w-14 rounded-2xl bg-[#39BDE4]/10 flex items-center justify-center shrink-0">
                                                        <Package className="h-7 w-7 text-[#39BDE4]" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">{nextBooking.package?.category || "Cleaning Service"}</p>
                                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500">
                                                            <span className="flex items-center gap-1">
                                                                <CalendarDays className="h-3.5 w-3.5" />
                                                                {nextBooking.createdAt ? new Date(nextBooking.createdAt.seconds * 1000).toLocaleDateString() : "TBD"}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <MapPin className="h-3.5 w-3.5" />
                                                                {nextBooking.address || "Gold Coast"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 sm:flex-shrink-0">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                                                        {nextBooking.status || "Pending"}
                                                    </span>
                                                    <span className="text-lg font-black text-slate-900">
                                                        ${(nextBooking.package?.totalPrice || nextBooking.package?.price || 0).toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Recent Activity */}
                                <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="border-b border-slate-100 p-5">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-base font-bold text-slate-900">Recent Activity</CardTitle>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-[#39BDE4] hover:text-[#249FC5] hover:bg-[#39BDE4]/5 text-xs font-semibold"
                                                onClick={() => setActiveTab("bookings")}
                                            >
                                                View All <ChevronRight className="ml-1 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        {recentActivity.length > 0 ? (
                                            <div className="divide-y divide-slate-100">
                                                {recentActivity.map((booking) => (
                                                    <div key={booking.id} className="p-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
                                                                booking.status === 'completed'
                                                                    ? 'bg-green-50 text-green-600'
                                                                    : booking.status === 'cancelled'
                                                                        ? 'bg-red-50 text-red-600'
                                                                        : 'bg-[#39BDE4]/10 text-[#39BDE4]'
                                                            }`}>
                                                                {booking.status === 'completed' ? (
                                                                    <CheckCircle2 className="h-5 w-5" />
                                                                ) : booking.status === 'cancelled' ? (
                                                                    <AlertCircle className="h-5 w-5" />
                                                                ) : (
                                                                    <Sparkles className="h-5 w-5" />
                                                                )}
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-slate-900 text-sm">{booking.package?.category || "Service"}</p>
                                                                <p className="text-xs text-slate-500 mt-0.5">
                                                                    {booking.createdAt ? new Date(booking.createdAt.seconds * 1000).toLocaleDateString() : "N/A"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="font-bold text-slate-900 text-sm">${(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mt-1 ${
                                                                booking.status === 'completed'
                                                                    ? 'bg-green-50 text-green-700'
                                                                    : booking.status === 'cancelled'
                                                                        ? 'bg-red-50 text-red-700'
                                                                        : 'bg-blue-50 text-blue-700'
                                                            }`}>
                                                                {booking.status || "Pending"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-12 text-center">
                                                <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                                                    <FileText className="h-8 w-8 text-slate-300" />
                                                </div>
                                                <p className="text-sm font-semibold text-slate-600">No activity yet</p>
                                                <p className="text-xs text-slate-400 mt-1">Your bookings will appear here.</p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Quick Actions */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <Link href={siteLinks.book} className="group">
                                        <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl p-5 hover:border-[#39BDE4]/30 hover:shadow-md transition-all cursor-pointer h-full">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-[#39BDE4]/10 flex items-center justify-center group-hover:bg-[#39BDE4] transition-colors">
                                                    <CalendarDays className="h-6 w-6 text-[#39BDE4] group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-sm">Book a Service</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">Schedule a new clean</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>

                                    <Link href={siteLinks.homeCleaning} className="group">
                                        <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl p-5 hover:border-secondary/30 hover:shadow-md transition-all cursor-pointer h-full">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                                                    <Home className="h-6 w-6 text-secondary group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-sm">Browse Services</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">View all cleaning options</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>

                                    <Link href="/contact" className="group">
                                        <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl p-5 hover:border-green-400/30 hover:shadow-md transition-all cursor-pointer h-full">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                                    <MessageCircle className="h-6 w-6 text-green-500 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-sm">Contact Support</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">Get help with your account</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </div>

                                {/* Trust Bar */}
                                <div className="rounded-2xl bg-white border border-slate-200 p-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-semibold text-slate-500">
                                    <span className="flex items-center gap-2">
                                        <Shield className="h-4 w-4 text-[#39BDE4]" />
                                        Fully Insured
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        Satisfaction Guaranteed
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Star className="h-4 w-4 text-amber-400" />
                                        5-Star Rated Service
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* ========== SUPPORT TAB ========== */}
                        {activeTab === "support" && (
                            <DashboardSupportPanel user={user} />
                        )}

                        {/* ========== BOOKINGS TAB ========== */}
                        {activeTab === "bookings" && (
                            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">My Bookings</h2>
                                        <p className="text-slate-500 text-sm mt-1">All your scheduled and past services.</p>
                                    </div>
                                    <Button
                                        asChild
                                        className="h-10 rounded-full bg-[#39BDE4] px-5 text-xs font-black uppercase tracking-widest text-white hover:bg-[#249FC5]"
                                    >
                                        <Link href={siteLinks.book}>Book New Service</Link>
                                    </Button>
                                </div>

                                <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardContent className="p-0">
                                        {bookings.length > 0 ? (
                                            <div className="divide-y divide-slate-100">
                                                {bookings.map((booking) => (
                                                    <div key={booking.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                                                        <div className="flex items-center gap-4">
                                                            <div className="h-12 w-12 rounded-2xl bg-[#39BDE4]/10 flex items-center justify-center shrink-0">
                                                                <Package className="h-6 w-6 text-[#39BDE4]" />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-slate-900">{booking.package?.category || "Custom Service"}</p>
                                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-500">
                                                                    <span className="flex items-center gap-1">
                                                                        <CalendarDays className="h-3.5 w-3.5" />
                                                                        {booking.createdAt ? new Date(booking.createdAt.seconds * 1000).toLocaleDateString() : "N/A"}
                                                                    </span>
                                                                    <span>ID: #{booking.id.slice(0, 8)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-4 sm:flex-shrink-0 pl-16 sm:pl-0">
                                                            <div className="text-right">
                                                                <p className="font-black text-slate-900">${(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                                <p className="text-[10px] font-semibold text-slate-400 uppercase">{booking.package?.frequency || "One-time"}</p>
                                                            </div>
                                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                                                                booking.status === 'completed'
                                                                    ? 'bg-green-50 text-green-700'
                                                                    : booking.status === 'cancelled'
                                                                        ? 'bg-red-50 text-red-700'
                                                                        : 'bg-blue-50 text-blue-700'
                                                            }`}>
                                                                {booking.status || "Pending"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-16 text-center">
                                                <div className="h-20 w-20 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-5">
                                                    <CalendarDays className="h-10 w-10 text-slate-300" />
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900">No Bookings Yet</h3>
                                                <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">You haven&apos;t made any bookings. Start by scheduling your first clean.</p>
                                                <Button asChild className="mt-6 h-11 rounded-full bg-[#39BDE4] px-6 text-xs font-black uppercase tracking-widest text-white hover:bg-[#249FC5]">
                                                    <Link href={siteLinks.book}>Book Your First Service</Link>
                                                </Button>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* ========== HISTORY TAB ========== */}
                        {activeTab === "history" && (
                            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Service History</h2>
                                    <p className="text-slate-500 text-sm mt-1">Review your completed cleaning services.</p>
                                </div>

                                <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardContent className="p-0">
                                        {completedBookings.length > 0 ? (
                                            <div className="divide-y divide-slate-100">
                                                {completedBookings.map((booking) => (
                                                    <div key={booking.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                                                        <div className="flex items-center gap-4">
                                                            <div className="h-12 w-12 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                                                                <CheckCircle2 className="h-6 w-6 text-green-500" />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-slate-900">{booking.package?.category || "Custom Service"}</p>
                                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-500">
                                                                    <span className="flex items-center gap-1">
                                                                        <CalendarDays className="h-3.5 w-3.5" />
                                                                        {booking.createdAt ? new Date(booking.createdAt.seconds * 1000).toLocaleDateString() : "N/A"}
                                                                    </span>
                                                                    <span>ID: #{booking.id.slice(0, 8)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-4 sm:flex-shrink-0 pl-16 sm:pl-0">
                                                            <div className="text-right">
                                                                <p className="font-black text-slate-900">${(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                                <p className="text-[10px] font-semibold text-green-600 uppercase">Paid</p>
                                                            </div>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="rounded-full border-slate-200 text-xs font-semibold text-slate-600 hover:border-[#39BDE4]/30 hover:text-[#39BDE4]"
                                                                onClick={() => toast({ title: "Receipt generation coming soon!" })}
                                                            >
                                                                Receipt
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-16 text-center">
                                                <div className="h-20 w-20 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-5">
                                                    <CheckCircle2 className="h-10 w-10 text-slate-300" />
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900">No History Yet</h3>
                                                <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">Your completed services will appear here once finished.</p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* ========== PROFILE TAB ========== */}
                        {activeTab === "profile" && (
                            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Profile Settings</h2>
                                    <p className="text-slate-500 text-sm mt-1">Update your personal information and cleaning preferences.</p>
                                </div>

                                <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="border-b border-slate-100 p-5">
                                        <CardTitle className="text-base font-bold text-slate-900">Personal Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <form onSubmit={handleProfileSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</Label>
                                                    <Input
                                                        id="name"
                                                        value={profileData.name}
                                                        onChange={e => setProfileData({...profileData, name: e.target.value})}
                                                        placeholder="Your full name"
                                                        className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4] focus:ring-[#39BDE4]/10"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</Label>
                                                    <Input
                                                        id="phone"
                                                        value={profileData.phone}
                                                        onChange={e => setProfileData({...profileData, phone: e.target.value})}
                                                        placeholder="0400 000 000"
                                                        className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4] focus:ring-[#39BDE4]/10"
                                                    />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <Label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-slate-500">Primary Address</Label>
                                                    <Input
                                                        id="address"
                                                        value={profileData.address}
                                                        onChange={e => setProfileData({...profileData, address: e.target.value})}
                                                        placeholder="123 Example Street, Suburb, QLD 4215"
                                                        className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4] focus:ring-[#39BDE4]/10"
                                                    />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <Label htmlFor="instructions" className="text-xs font-bold uppercase tracking-wider text-slate-500">Cleaning Instructions (Optional)</Label>
                                                    <Textarea
                                                        id="instructions"
                                                        value={profileData.instructions}
                                                        onChange={e => setProfileData({...profileData, instructions: e.target.value})}
                                                        placeholder="E.g., Please enter through the side gate. Watch out for the dog. Use green cleaning products only."
                                                        className="resize-none h-28 rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4] focus:ring-[#39BDE4]/10"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-end pt-4 border-t border-slate-100">
                                                <Button
                                                    type="submit"
                                                    disabled={isSavingProfile}
                                                    className="h-11 rounded-full bg-[#39BDE4] px-6 text-xs font-black uppercase tracking-widest text-white hover:bg-[#249FC5]"
                                                >
                                                    {isSavingProfile && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                                    Save Changes
                                                </Button>
                                            </div>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                    </main>
                </div>
            </div>
        </div>
    )
}
