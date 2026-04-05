"use client"

import { useState, useEffect, useMemo } from "react"
import { useAuth } from "@/lib/auth-context"
import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import {
    Users,
    CalendarDays,
    DollarSign,
    TrendingUp,
    CheckCircle2,
    Clock,
    AlertCircle,
    Search,
    MessageSquare,
    Sparkles,
    ShieldCheck,
    Zap,
    Trash2,
    Plus,
    BarChart3,
    FileText,
    Tag,
    Link2,
} from "lucide-react"
import {
    getAllBookings,
    getApprovedTestimonials,
    getAllTestimonials,
    getAllServices,
    getAllContacts,
    getAllSubscriptions,
    getAllUsers,
    getAllCoupons,
    getAllPosts,
    updateBookingStatus,
    approveTestimonial,
    saveCoupon,
    deleteCoupon,
    savePost,
    deletePost,
    togglePostPublished,
    updateUserRole,
} from "@/lib/admin-firebase-service"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

// ─── helpers ────────────────────────────────────────────────────────────────

function fmtDate(ts: any) {
    if (!ts?.seconds) return "N/A"
    return new Date(ts.seconds * 1000).toLocaleDateString()
}

function statusColor(status: string) {
    switch (status) {
        case "confirmed": return "bg-green-50 text-green-700 ring-green-600/20"
        case "completed": return "bg-blue-50 text-blue-700 ring-blue-600/20"
        case "cancelled": return "bg-red-50 text-red-700 ring-red-600/20"
        default: return "bg-yellow-50 text-yellow-700 ring-yellow-600/20"
    }
}

// ─── component ──────────────────────────────────────────────────────────────

export default function AdminDashboardPage() {
    const { user } = useAuth()

    // ── core data
    const [activeTab, setActiveTab] = useState("dashboard")
    const [bookings, setBookings] = useState<any[]>([])
    const [testimonials, setTestimonials] = useState<any[]>([])
    const [allTestimonials, setAllTestimonials] = useState<any[]>([])
    const [services, setServices] = useState<any[]>([])
    const [contacts, setContacts] = useState<any[]>([])
    const [subscriptions, setSubscriptions] = useState<any[]>([])
    const [users, setUsers] = useState<any[]>([])
    const [coupons, setCoupons] = useState<any[]>([])
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")

    // ── AI outreach (dashboard)
    const [aiBusinessName, setAiBusinessName] = useState("")
    const [aiLocation, setAiLocation] = useState("Gold Coast")
    const [aiBusinessType, setAiBusinessType] = useState("")
    const [aiServiceFocus, setAiServiceFocus] = useState("commercial cleaning, carpet cleaning, pest control")
    const [aiDraft, setAiDraft] = useState("")
    const [aiLoading, setAiLoading] = useState(false)
    const [aiError, setAiError] = useState("")

    // ── booking management
    const [managingBooking, setManagingBooking] = useState<any>(null)
    const [bookingStatusUpdating, setBookingStatusUpdating] = useState(false)

    // ── testimonial management
    const [testimonialUpdating, setTestimonialUpdating] = useState<string | null>(null)

    // ── coupon management
    const [couponCode, setCouponCode] = useState("")
    const [couponDiscount, setCouponDiscount] = useState("")
    const [couponExpiry, setCouponExpiry] = useState("")
    const [couponMaxUses, setCouponMaxUses] = useState("")
    const [couponSaving, setCouponSaving] = useState(false)

    // ── post management
    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")
    const [postSaving, setPostSaving] = useState(false)

    // ── user role
    const [roleUpdating, setRoleUpdating] = useState<string | null>(null)

    // ── AI agent tab
    const [agentBizName, setAgentBizName] = useState("")
    const [agentEmailDraft, setAgentEmailDraft] = useState("")
    const [agentEmailLoading, setAgentEmailLoading] = useState(false)
    const [agentCampaignLoading, setAgentCampaignLoading] = useState<string | null>(null)
    const [agentCampaignDraft, setAgentCampaignDraft] = useState("")
    const [aiGenerations, setAiGenerations] = useState<Array<{ business: string; type: string; time: string }>>([])
    const [aiSessionCount, setAiSessionCount] = useState(0)

    // ─── fetch all data ────────────────────────────────────────────────────

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const [
                    bookingsData,
                    testimonialsData,
                    allTestimonialsData,
                    servicesData,
                    contactsData,
                    subscriptionsData,
                    usersData,
                    couponsData,
                    postsData,
                ] = await Promise.all([
                    getAllBookings(),
                    getApprovedTestimonials(),
                    getAllTestimonials(),
                    getAllServices(),
                    getAllContacts(),
                    getAllSubscriptions(),
                    getAllUsers(),
                    getAllCoupons(),
                    getAllPosts(),
                ])
                setBookings(bookingsData)
                setTestimonials(testimonialsData)
                setAllTestimonials(allTestimonialsData)
                setServices(servicesData)
                setContacts(contactsData)
                setSubscriptions(subscriptionsData)
                setUsers(usersData)
                setCoupons(couponsData)
                setPosts(postsData)
            } catch (error) {
                console.error("Error fetching admin data:", error)
                toast.error("Failed to load some dashboard data")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    // ─── derived / filtered ────────────────────────────────────────────────

    const filteredBookings = useMemo(
        () =>
            bookings.filter(
                (b) =>
                    b.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    b.package?.category?.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        [bookings, searchTerm],
    )

    const pendingTestimonials = useMemo(
        () => allTestimonials.filter((t) => !t.approved),
        [allTestimonials],
    )

    const totalRevenue = useMemo(
        () => bookings.reduce((acc, b) => acc + (b.package?.totalPrice || b.package?.price || 0), 0),
        [bookings],
    )

    const monthlyBreakdown = useMemo(() => {
        const months: Record<string, { bookings: number; revenue: number; contacts: number; subscribers: number }> = {}
        const now = new Date()
        for (let i = 5; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
            const key = d.toLocaleString("default", { month: "short", year: "numeric" })
            months[key] = { bookings: 0, revenue: 0, contacts: 0, subscribers: 0 }
        }
        bookings.forEach((b) => {
            if (!b.createdAt?.seconds) return
            const key = new Date(b.createdAt.seconds * 1000).toLocaleString("default", { month: "short", year: "numeric" })
            if (months[key]) {
                months[key].bookings++
                months[key].revenue += b.package?.totalPrice || b.package?.price || 0
            }
        })
        contacts.forEach((c) => {
            if (!c.createdAt?.seconds) return
            const key = new Date(c.createdAt.seconds * 1000).toLocaleString("default", { month: "short", year: "numeric" })
            if (months[key]) months[key].contacts++
        })
        subscriptions.forEach((s) => {
            if (!s.createdAt?.seconds) return
            const key = new Date(s.createdAt.seconds * 1000).toLocaleString("default", { month: "short", year: "numeric" })
            if (months[key]) months[key].subscribers++
        })
        return Object.entries(months).map(([month, data]) => ({ month, ...data }))
    }, [bookings, contacts, subscriptions])

    // ─── action handlers ───────────────────────────────────────────────────

    const stats = [
        {
            title: "Total Bookings",
            value: bookings.length,
            icon: CalendarDays,
            description: "Lifetime bookings recorded",
            trend: "+12.5%",
            trendUp: true,
            color: "blue",
        },
        {
            title: "Active Users",
            value: users.length || 0,
            icon: Users,
            description: "Registered customers",
            trend: "+5.4%",
            trendUp: true,
            color: "indigo",
        },
        {
            title: "Revenue",
            value: "NPR " + totalRevenue.toLocaleString(),
            icon: DollarSign,
            description: "Total gross revenue",
            trend: "+8.2%",
            trendUp: true,
            color: "emerald",
        },
        {
            title: "Success Rate",
            value: bookings.length > 0
                ? Math.round((bookings.filter((b) => b.status === "completed").length / bookings.length) * 100) + "%"
                : "—",
            icon: TrendingUp,
            description: "Completed bookings",
            trend: "+2.1%",
            trendUp: true,
            color: "amber",
        },
    ]

    async function generateOutreachDraft() {
        if (!aiBusinessName.trim()) { setAiError("Business name is required."); return }
        setAiLoading(true); setAiError("")
        try {
            const res = await fetch("/api/admin/ai-outreach", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ businessName: aiBusinessName, location: aiLocation, businessType: aiBusinessType, serviceFocus: aiServiceFocus }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.message || "Failed to generate outreach draft")
            setAiDraft(data.message)
        } catch (error: any) {
            setAiError(error.message || "Failed to generate outreach draft")
        } finally {
            setAiLoading(false)
        }
    }

    async function handleUpdateBookingStatus(bookingId: string, status: string) {
        setBookingStatusUpdating(true)
        try {
            await updateBookingStatus(bookingId, status)
            setBookings((prev) => prev.map((b) => (b.id === bookingId ? { ...b, status } : b)))
            if (managingBooking?.id === bookingId) setManagingBooking((prev: any) => ({ ...prev, status }))
            toast.success("Status updated to " + status)
        } catch {
            toast.error("Failed to update status")
        } finally {
            setBookingStatusUpdating(false)
        }
    }

    async function handleApproveTestimonial(id: string, approved: boolean) {
        setTestimonialUpdating(id)
        try {
            await approveTestimonial(id, approved)
            setAllTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, approved } : t)))
            toast.success(approved ? "Testimonial approved" : "Testimonial hidden")
        } catch {
            toast.error("Failed to update testimonial")
        } finally {
            setTestimonialUpdating(null)
        }
    }

    async function handleSaveCoupon() {
        if (!couponCode.trim() || !couponDiscount.trim()) { toast.error("Code and discount are required"); return }
        setCouponSaving(true)
        try {
            const newCoupon = await saveCoupon({
                code: couponCode.toUpperCase(),
                discount: Number(couponDiscount),
                expiry: couponExpiry || null,
                maxUses: couponMaxUses ? Number(couponMaxUses) : null,
                usedCount: 0,
            })
            setCoupons((prev) => [newCoupon, ...prev])
            setCouponCode(""); setCouponDiscount(""); setCouponExpiry(""); setCouponMaxUses("")
            toast.success("Coupon created")
        } catch {
            toast.error("Failed to create coupon")
        } finally {
            setCouponSaving(false)
        }
    }

    async function handleDeleteCoupon(id: string) {
        try {
            await deleteCoupon(id)
            setCoupons((prev) => prev.filter((c) => c.id !== id))
            toast.success("Coupon deleted")
        } catch {
            toast.error("Failed to delete coupon")
        }
    }

    async function handleSavePost() {
        if (!postTitle.trim() || !postContent.trim()) { toast.error("Title and content are required"); return }
        setPostSaving(true)
        try {
            const slug = postTitle.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
            const newPost = await savePost({ title: postTitle, content: postContent, slug })
            setPosts((prev) => [newPost, ...prev])
            setPostTitle(""); setPostContent("")
            toast.success("Post saved as draft")
        } catch {
            toast.error("Failed to save post")
        } finally {
            setPostSaving(false)
        }
    }

    async function handleDeletePost(id: string) {
        try {
            await deletePost(id)
            setPosts((prev) => prev.filter((p) => p.id !== id))
            toast.success("Post deleted")
        } catch {
            toast.error("Failed to delete post")
        }
    }

    async function handleTogglePublished(id: string, published: boolean) {
        try {
            await togglePostPublished(id, !published)
            setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, published: !published } : p)))
            toast.success(!published ? "Post published" : "Post unpublished")
        } catch {
            toast.error("Failed to update post")
        }
    }

    async function handleUpdateUserRole(userId: string, role: string) {
        setRoleUpdating(userId)
        try {
            await updateUserRole(userId, role)
            setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, role } : u)))
            toast.success("Role updated to " + role)
        } catch {
            toast.error("Failed to update role")
        } finally {
            setRoleUpdating(null)
        }
    }

    async function handleAgentEmail() {
        if (!agentBizName.trim()) { toast.error("Business name is required"); return }
        setAgentEmailLoading(true)
        try {
            const res = await fetch("/api/admin/ai-outreach", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ businessName: agentBizName, location: "Gold Coast", businessType: "", serviceFocus: "commercial cleaning, carpet cleaning, pest control" }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.message)
            setAgentEmailDraft(data.message)
            setAiGenerations((prev) => [{ business: agentBizName, type: "Partnership Email", time: "just now" }, ...prev.slice(0, 4)])
            setAiSessionCount((n) => n + 1)
        } catch (err: any) {
            toast.error(err.message || "Failed to generate email")
        } finally {
            setAgentEmailLoading(false)
        }
    }

    async function handleAgentCampaign(campaignType: string) {
        setAgentCampaignLoading(campaignType)
        try {
            const businessType = campaignType === "Real Estate" ? "real estate agency" : "local business directory"
            const res = await fetch("/api/admin/ai-outreach", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ businessName: `Gold Coast ${campaignType}`, location: "Gold Coast", businessType, serviceFocus: "commercial cleaning, carpet cleaning, pest control" }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.message)
            setAgentCampaignDraft(data.message)
            setAiGenerations((prev) => [{ business: campaignType + " Campaign", type: "Campaign Email", time: "just now" }, ...prev.slice(0, 4)])
            setAiSessionCount((n) => n + 1)
        } catch (err: any) {
            toast.error(err.message || "Failed to generate campaign")
        } finally {
            setAgentCampaignLoading(null)
        }
    }

    // ─── loading ───────────────────────────────────────────────────────────

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="flex flex-col items-center space-y-4">
                    <Zap className="h-10 w-10 text-primary animate-pulse" />
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-900/40">Synchronizing Dashboard...</p>
                </div>
            </div>
        )
    }

    // ─── render ────────────────────────────────────────────────────────────

    return (
        <div className="container py-8 sm:py-12">
            {/* Booking Manage Dialog */}
            <Dialog open={!!managingBooking} onOpenChange={(open) => !open && setManagingBooking(null)}>
                <DialogContent className="max-w-lg rounded-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-bold text-slate-900">Manage Booking</DialogTitle>
                    </DialogHeader>
                    {managingBooking && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-xs text-slate-500 font-medium">Client</p>
                                    <p className="font-semibold text-slate-900 mt-0.5">{managingBooking.name}</p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-xs text-slate-500 font-medium">Service</p>
                                    <p className="font-semibold text-slate-900 mt-0.5">{managingBooking.package?.category || "Custom"}</p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-xs text-slate-500 font-medium">Amount</p>
                                    <p className="font-semibold text-slate-900 mt-0.5">NPR {(managingBooking.package?.totalPrice || managingBooking.package?.price || 0).toLocaleString()}</p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-xs text-slate-500 font-medium">Date</p>
                                    <p className="font-semibold text-slate-900 mt-0.5">{fmtDate(managingBooking.createdAt)}</p>
                                </div>
                                {managingBooking.email && (
                                    <div className="col-span-2 rounded-xl bg-slate-50 p-3">
                                        <p className="text-xs text-slate-500 font-medium">Email</p>
                                        <p className="font-semibold text-slate-900 mt-0.5">{managingBooking.email}</p>
                                    </div>
                                )}
                                {managingBooking.phone && (
                                    <div className="col-span-2 rounded-xl bg-slate-50 p-3">
                                        <p className="text-xs text-slate-500 font-medium">Phone</p>
                                        <p className="font-semibold text-slate-900 mt-0.5">{managingBooking.phone}</p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Update Status</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {["pending", "confirmed", "completed", "cancelled"].map((s) => (
                                        <Button
                                            key={s}
                                            size="sm"
                                            variant={managingBooking.status === s ? "default" : "outline"}
                                            disabled={bookingStatusUpdating}
                                            onClick={() => handleUpdateBookingStatus(managingBooking.id, s)}
                                            className={cn("rounded-xl capitalize h-10 font-medium", managingBooking.status === s ? "bg-slate-900 text-white" : "border-slate-200")}
                                        >
                                            {s}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                            <div className="bg-slate-900 p-6 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16" />
                                <h2 className="text-lg font-bold relative z-10">Admin Panel</h2>
                                <p className="text-slate-400 text-xs font-medium mt-1 relative z-10">WaveSolution v2.1</p>
                            </div>
                            <CardContent className="p-4">
                                <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />
                            </CardContent>
                        </Card>

                        <Card className="border border-slate-100 shadow-sm bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden hidden lg:block text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm">
                                        <ShieldCheck className="h-5 w-5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Secure Session</p>
                                        <p className="text-slate-400 text-xs">{user?.email || "Admin Access: Granted"}</p>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full h-10 rounded-lg border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium text-xs"
                                    onClick={() => setActiveTab("settings")}
                                >
                                    View Security Logs
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </aside>

                {/* Main content */}
                <main className="lg:col-span-3 space-y-8">

                    {/* ── DASHBOARD ─────────────────────────────────────────────────── */}
                    {activeTab === "dashboard" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
                                    <p className="text-slate-500 font-medium text-base">Welcome back, {user?.name || "Admin"}.</p>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-medium text-slate-600">Live Updates</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                                {stats.map((stat, i) => (
                                    <div key={i} className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-slate-200">
                                        <div className={cn("absolute right-0 top-0 h-24 w-24 translate-x-8 rounded-full opacity-10 blur-2xl transition-all group-hover:opacity-20",
                                            stat.color === "blue" ? "bg-blue-500" : stat.color === "indigo" ? "bg-indigo-500" : stat.color === "emerald" ? "bg-emerald-500" : "bg-amber-500"
                                        )} />
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                                                <h3 className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</h3>
                                            </div>
                                            <div className={cn("p-3 rounded-xl",
                                                stat.color === "blue" ? "bg-blue-50 text-blue-600" : stat.color === "indigo" ? "bg-indigo-50 text-indigo-600" : stat.color === "emerald" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                                            )}>
                                                <stat.icon className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center text-sm">
                                            <span className={cn("flex items-center font-medium", stat.trendUp ? "text-green-600" : "text-red-600")}>
                                                {stat.trend}<TrendingUp className="ml-1 h-3 w-3" />
                                            </span>
                                            <span className="ml-2 text-slate-400">{stat.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* AI Automation System */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6 bg-white">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <CardTitle className="text-lg font-bold text-slate-900">Wave Solution AI Automation System</CardTitle>
                                            <p className="mt-1 text-sm text-slate-500">Business lead discovery and outreach workflow for Gold Coast, QLD.</p>
                                        </div>
                                        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                                            Monthly Goal: 20-30 New Customers
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    {/* Outreach Draft Generator */}
                                    <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                                            <div className="flex items-center justify-between gap-4">
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">AI API Integration</p>
                                                    <h3 className="mt-1 text-base font-bold text-slate-900">Outreach Draft Generator</h3>
                                                </div>
                                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">OpenRouter FREE</span>
                                            </div>
                                            <div className="mt-4 grid gap-3 md:grid-cols-2">
                                                <Input value={aiBusinessName} onChange={(e) => setAiBusinessName(e.target.value)} placeholder="Business name" className="h-11 rounded-xl border-slate-200 bg-white" />
                                                <Input value={aiLocation} onChange={(e) => setAiLocation(e.target.value)} placeholder="Location" className="h-11 rounded-xl border-slate-200 bg-white" />
                                                <Input value={aiBusinessType} onChange={(e) => setAiBusinessType(e.target.value)} placeholder="Business type" className="h-11 rounded-xl border-slate-200 bg-white" />
                                                <Input value={aiServiceFocus} onChange={(e) => setAiServiceFocus(e.target.value)} placeholder="Service focus" className="h-11 rounded-xl border-slate-200 bg-white" />
                                            </div>
                                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                                                <Button onClick={generateOutreachDraft} disabled={aiLoading} className="h-11 rounded-xl bg-slate-900 px-5 text-white hover:bg-slate-800">
                                                    {aiLoading ? "Generating..." : "Generate Outreach Draft"}
                                                </Button>
                                                <p className="text-xs text-slate-500">Manual review only. No automatic sending.</p>
                                            </div>
                                            {aiError && <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{aiError}</div>}
                                            <div className="mt-4">
                                                <Textarea value={aiDraft} onChange={(e) => setAiDraft(e.target.value)} placeholder="AI-generated draft appears here." className="min-h-[140px] rounded-2xl border-slate-200 bg-white text-sm text-slate-700" />
                                            </div>
                                        </div>
                                        <div className="rounded-2xl border border-slate-100 bg-white p-5">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Generator Rules</p>
                                            <ul className="mt-4 space-y-3 text-sm text-slate-700">
                                                {[
                                                    { icon: CheckCircle2, color: "text-emerald-600", text: "Message stays under 3 sentences." },
                                                    { icon: CheckCircle2, color: "text-emerald-600", text: "Mentions business name and Gold Coast location." },
                                                    { icon: CheckCircle2, color: "text-emerald-600", text: "Offers cleaning or pest control and asks for a free quote." },
                                                    { icon: AlertCircle, color: "text-amber-600", text: "Requires OPENROUTER_API_KEY environment variable." },
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <item.icon className={cn("mt-0.5 h-4 w-4 shrink-0", item.color)} />
                                                        <span>{item.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent Bookings + Status Widget */}
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                                <Card className="xl:col-span-2 border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="border-b border-slate-50 p-6 flex flex-row items-center justify-between bg-white">
                                        <div>
                                            <CardTitle className="text-lg font-bold text-slate-900">Recent Bookings</CardTitle>
                                            <p className="text-slate-500 text-sm mt-1">Latest service requests</p>
                                        </div>
                                        <Button variant="outline" size="sm" onClick={() => setActiveTab("bookings")} className="text-xs font-medium border-slate-200">View All</Button>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-slate-50">
                                            {bookings.slice(0, 5).map((booking, i) => (
                                                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                                                            {booking.name?.charAt(0) || "?"}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-slate-900 text-sm">{booking.name}</p>
                                                            <div className="flex items-center gap-2 mt-0.5">
                                                                <span className="text-xs text-slate-500">{booking.package?.category || "Custom"}</span>
                                                                <span className="text-[10px] text-slate-300">•</span>
                                                                <span className="text-xs text-slate-400">{fmtDate(booking.createdAt)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-semibold text-slate-900 text-sm">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                        <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset mt-1 capitalize", statusColor(booking.status || "pending"))}>
                                                            {booking.status || "pending"}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                            {bookings.length === 0 && (
                                                <div className="p-12 text-center text-slate-500 text-sm">No bookings yet.</div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="space-y-6">
                                    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg relative overflow-hidden">
                                        <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 rounded-full bg-white/10 blur-3xl" />
                                        <div className="relative z-10">
                                            <div className="mb-4 inline-flex rounded-lg bg-white/20 p-2 ring-1 ring-inset ring-white/10">
                                                <Zap className="h-5 w-5 text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold">System Status</h3>
                                            <p className="mt-1 text-sm text-blue-100">All systems operational</p>
                                            <div className="mt-6 space-y-3">
                                                {[
                                                    { label: "Database", status: "Healthy" },
                                                    { label: "Storage", status: "Healthy" },
                                                    { label: "Auth", status: "Healthy" },
                                                ].map((s, i) => (
                                                    <div key={i} className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-sm backdrop-blur-sm">
                                                        <span>{s.label}</span>
                                                        <div className="flex items-center gap-1.5">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                                            <span className="text-green-300 font-medium">{s.status}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                                <MessageSquare className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900">Pending Reviews</h4>
                                                <p className="text-sm text-slate-500">{pendingTestimonials.length} awaiting approval</p>
                                            </div>
                                        </div>
                                        <Button onClick={() => setActiveTab("messages")} className="mt-4 w-full bg-slate-900 text-white hover:bg-slate-800 rounded-xl" size="sm">Review All</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── BOOKINGS ───────────────────────────────────────────────────── */}
                    {activeTab === "bookings" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Bookings Management</h2>
                                    <p className="text-slate-500 font-medium text-base">Detailed overview of all client requests.</p>
                                </div>
                                <div className="relative w-full md:w-80">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search by name or package..." className="h-14 pl-12 rounded-2xl border-gray-100 bg-white focus:ring-primary/10 shadow-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                </div>
                            </div>
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Service</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {filteredBookings.map((booking, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">{booking.name?.charAt(0) || "?"}</div>
                                                                <div>
                                                                    <p className="font-semibold text-slate-900 text-sm">{booking.name}</p>
                                                                    <p className="text-xs text-slate-400">{fmtDate(booking.createdAt)}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="text-sm font-medium text-slate-900">{booking.package?.category || "Custom"}</p>
                                                            <p className="text-xs text-slate-500">{booking.package?.frequency}</p>
                                                        </td>
                                                        <td className="px-6 py-4 font-semibold text-slate-900 text-sm">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset capitalize", statusColor(booking.status || "pending"))}>
                                                                {booking.status || "pending"}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <Button variant="outline" size="sm" className="h-8 text-xs font-medium rounded-lg border-slate-200" onClick={() => setManagingBooking(booking)}>Manage</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {filteredBookings.length === 0 && (
                                                    <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-500 text-sm">No bookings found.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── USERS ─────────────────────────────────────────────────────── */}
                    {activeTab === "users" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">User Management</h2>
                                <p className="text-slate-500 font-medium text-base">{users.length} registered users.</p>
                            </div>
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Joined</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Change Role</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {users.map((u, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="h-9 w-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm">{u.name?.charAt(0) || "?"}</div>
                                                                <p className="font-semibold text-slate-900 text-sm">{u.name || "Unknown"}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-slate-600">{u.email}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-500">{fmtDate(u.createdAt)}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset capitalize",
                                                                u.role === "admin" ? "bg-purple-50 text-purple-700 ring-purple-600/20" : "bg-slate-50 text-slate-600 ring-slate-200"
                                                            )}>{u.role || "user"}</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                disabled={roleUpdating === u.id}
                                                                className="h-8 text-xs font-medium rounded-lg border-slate-200"
                                                                onClick={() => handleUpdateUserRole(u.id, u.role === "admin" ? "user" : "admin")}
                                                            >
                                                                {roleUpdating === u.id ? "..." : u.role === "admin" ? "Demote" : "Make Admin"}
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {users.length === 0 && (
                                                    <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-500 text-sm">No users found.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── COUPONS ───────────────────────────────────────────────────── */}
                    {activeTab === "coupons" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Coupon Management</h2>
                                <p className="text-slate-500 font-medium text-base">Create and manage discount codes.</p>
                            </div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><Plus className="h-4 w-4" /> Create New Coupon</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                        <Input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Code (e.g. SAVE20)" className="h-11 rounded-xl uppercase" />
                                        <Input value={couponDiscount} onChange={(e) => setCouponDiscount(e.target.value)} type="number" min="1" max="100" placeholder="Discount %" className="h-11 rounded-xl" />
                                        <Input value={couponExpiry} onChange={(e) => setCouponExpiry(e.target.value)} type="date" placeholder="Expiry date" className="h-11 rounded-xl" />
                                        <Input value={couponMaxUses} onChange={(e) => setCouponMaxUses(e.target.value)} type="number" min="1" placeholder="Max uses (optional)" className="h-11 rounded-xl" />
                                    </div>
                                    <Button onClick={handleSaveCoupon} disabled={couponSaving} className="mt-4 h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
                                        {couponSaving ? "Saving..." : "Create Coupon"}
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Code</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Discount</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Expiry</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Used / Max</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {coupons.map((c, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4"><span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md text-sm">{c.code}</span></td>
                                                        <td className="px-6 py-4 font-semibold text-emerald-700 text-sm">{c.discount}% off</td>
                                                        <td className="px-6 py-4 text-sm text-slate-500">{c.expiry || "No expiry"}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-600">{c.usedCount || 0} / {c.maxUses || "∞"}</td>
                                                        <td className="px-6 py-4 text-right">
                                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg" onClick={() => handleDeleteCoupon(c.id)}>
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {coupons.length === 0 && (
                                                    <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-500 text-sm">No coupons yet. Create one above.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── PRICING ───────────────────────────────────────────────────── */}
                    {activeTab === "pricing" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Pricing Overview</h2>
                                <p className="text-slate-500 font-medium text-base">Revenue breakdown from all bookings.</p>
                            </div>

                            {/* Revenue by service category */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900">Revenue by Service Category</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Bookings</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg Price</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Revenue</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {(() => {
                                                    const byCategory: Record<string, { count: number; revenue: number }> = {}
                                                    bookings.forEach((b) => {
                                                        const cat = b.package?.category || "Custom"
                                                        if (!byCategory[cat]) byCategory[cat] = { count: 0, revenue: 0 }
                                                        byCategory[cat].count++
                                                        byCategory[cat].revenue += b.package?.totalPrice || b.package?.price || 0
                                                    })
                                                    const rows = Object.entries(byCategory).sort((a, b) => b[1].revenue - a[1].revenue)
                                                    if (rows.length === 0) return (
                                                        <tr><td colSpan={4} className="px-6 py-12 text-center text-slate-500 text-sm">No booking data yet.</td></tr>
                                                    )
                                                    return rows.map(([cat, data], i) => (
                                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                            <td className="px-6 py-4 font-semibold text-slate-900 text-sm">{cat}</td>
                                                            <td className="px-6 py-4 text-sm text-slate-600">{data.count}</td>
                                                            <td className="px-6 py-4 text-sm text-slate-600">NPR {Math.round(data.revenue / data.count).toLocaleString()}</td>
                                                            <td className="px-6 py-4 font-semibold text-emerald-700 text-sm">NPR {data.revenue.toLocaleString()}</td>
                                                        </tr>
                                                    ))
                                                })()}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Summary */}
                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    { label: "Total Revenue", value: "NPR " + totalRevenue.toLocaleString(), color: "emerald" },
                                    { label: "Total Bookings", value: bookings.length, color: "blue" },
                                    { label: "Avg per Booking", value: bookings.length > 0 ? "NPR " + Math.round(totalRevenue / bookings.length).toLocaleString() : "—", color: "indigo" },
                                ].map((s, i) => (
                                    <div key={i} className={cn("rounded-2xl p-6 border",
                                        s.color === "emerald" ? "bg-emerald-50 border-emerald-100" : s.color === "blue" ? "bg-blue-50 border-blue-100" : "bg-indigo-50 border-indigo-100"
                                    )}>
                                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{s.label}</p>
                                        <p className={cn("text-2xl font-bold mt-1",
                                            s.color === "emerald" ? "text-emerald-700" : s.color === "blue" ? "text-blue-700" : "text-indigo-700"
                                        )}>{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── POSTS ─────────────────────────────────────────────────────── */}
                    {activeTab === "posts" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Content Management</h2>
                                <p className="text-slate-500 font-medium text-base">Create and manage blog posts.</p>
                            </div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><Plus className="h-4 w-4" /> New Post</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <Input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder="Post title" className="h-11 rounded-xl" />
                                    <Textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="Write your content here..." className="min-h-[160px] rounded-xl text-sm" />
                                    <Button onClick={handleSavePost} disabled={postSaving} className="h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
                                        {postSaving ? "Saving..." : "Save as Draft"}
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="divide-y divide-slate-50">
                                        {posts.map((post, i) => (
                                            <div key={i} className="p-6 flex items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <p className="font-semibold text-slate-900 text-sm truncate">{post.title}</p>
                                                        <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset shrink-0",
                                                            post.published ? "bg-green-50 text-green-700 ring-green-600/20" : "bg-slate-50 text-slate-600 ring-slate-200"
                                                        )}>{post.published ? "Published" : "Draft"}</span>
                                                    </div>
                                                    <p className="text-xs text-slate-400 font-mono">/{post.slug}</p>
                                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{post.content}</p>
                                                </div>
                                                <div className="flex items-center gap-2 shrink-0">
                                                    <Button variant="outline" size="sm" className="h-8 text-xs rounded-lg border-slate-200" onClick={() => handleTogglePublished(post.id, post.published)}>
                                                        {post.published ? "Unpublish" : "Publish"}
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg" onClick={() => handleDeletePost(post.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                        {posts.length === 0 && (
                                            <div className="p-12 text-center text-slate-500 text-sm">No posts yet. Create one above.</div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── SEO ───────────────────────────────────────────────────────── */}
                    {activeTab === "seo" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">SEO & Backlink Dashboard</h2>
                                    <p className="text-slate-500 font-medium text-base">Track backlinks, partnerships, and SEO metrics.</p>
                                </div>
                                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-xl border border-purple-200 shadow-sm">
                                    <Sparkles className="h-4 w-4 text-purple-600 animate-pulse" />
                                    <span className="text-xs font-semibold text-purple-700">AI-Powered Backlink System</span>
                                </div>
                            </div>

                            {/* SEO Metrics */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                                {[
                                    { label: "Total Backlinks", value: "15", sub: "+3 this month", subColor: "text-green-600", icon: <Link2 className="h-5 w-5" />, border: "border-purple-100", bg: "bg-purple-50 text-purple-600", glow: "bg-purple-500" },
                                    { label: "Average DA", value: "65", sub: "Quality score: Good", subColor: "text-green-600", icon: <TrendingUp className="h-5 w-5" />, border: "border-blue-100", bg: "bg-blue-50 text-blue-600", glow: "bg-blue-500" },
                                    { label: "Active Partnerships", value: "8", sub: "5 pending outreach", subColor: "text-amber-600", icon: <Users className="h-5 w-5" />, border: "border-green-100", bg: "bg-green-50 text-green-600", glow: "bg-green-500" },
                                    { label: "Emails Sent", value: "47", sub: "23% response rate", subColor: "text-green-600", icon: <MessageSquare className="h-5 w-5" />, border: "border-orange-100", bg: "bg-orange-50 text-orange-600", glow: "bg-orange-500" },
                                ].map((m, i) => (
                                    <div key={i} className={cn("group relative overflow-hidden bg-white p-6 rounded-2xl border shadow-sm transition-all hover:shadow-md", m.border)}>
                                        <div className={cn("absolute right-0 top-0 h-24 w-24 translate-x-8 rounded-full opacity-10 blur-2xl transition-all group-hover:opacity-20", m.glow)} />
                                        <div className="flex items-start justify-between">
                                            <div><p className="text-sm font-medium text-slate-500">{m.label}</p><h3 className="mt-2 text-3xl font-bold text-slate-900">{m.value}</h3></div>
                                            <div className={cn("p-3 rounded-xl", m.bg)}>{m.icon}</div>
                                        </div>
                                        <div className="mt-4 text-sm"><span className={cn("font-medium", m.subColor)}>{m.sub}</span></div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-purple-100 p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 rounded-xl"><Sparkles className="h-5 w-5 text-purple-600" /></div>
                                        <div>
                                            <CardTitle className="text-lg font-bold text-slate-900">AI-Powered Quick Actions</CardTitle>
                                            <p className="text-sm text-slate-500 mt-1">Navigate to AI tools and analytics</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        <Button onClick={() => setActiveTab("ai-agent")} className="h-20 flex-col gap-2 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                            <span className="text-xs font-semibold">Real Estate Campaign</span>
                                        </Button>
                                        <Button onClick={() => setActiveTab("ai-agent")} className="h-20 flex-col gap-2 bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                                            <span className="text-xs font-semibold">Directory Submissions</span>
                                        </Button>
                                        <Button onClick={() => setActiveTab("ai-agent")} className="h-20 flex-col gap-2 bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl">
                                            <MessageSquare className="h-6 w-6" />
                                            <span className="text-xs font-semibold">Generate Email</span>
                                        </Button>
                                        <Button onClick={() => setActiveTab("reports")} className="h-20 flex-col gap-2 bg-gradient-to-br from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl">
                                            <TrendingUp className="h-6 w-6" />
                                            <span className="text-xs font-semibold">SEO Report</span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Backlink Database */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6 flex flex-row items-center justify-between bg-white">
                                    <div>
                                        <CardTitle className="text-lg font-bold text-slate-900">Pre-loaded Backlink Database</CardTitle>
                                        <p className="text-slate-500 text-sm mt-1">50 real estate agencies + 48 directories ready for outreach</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-200">50 Agencies</span>
                                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">48 Directories</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 lg:grid-cols-2">
                                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">Top Real Estate Agencies</p>
                                            <div className="space-y-2">
                                                {[
                                                    { name: "Ray White Surfers Paradise", da: 78, suburb: "Surfers Paradise" },
                                                    { name: "LJ Hooker Southport", da: 75, suburb: "Southport" },
                                                    { name: "Harcourts Coastal", da: 72, suburb: "Broadbeach" },
                                                    { name: "McGrath Gold Coast", da: 70, suburb: "Burleigh Heads" },
                                                    { name: "Professionals Mermaid Beach", da: 68, suburb: "Mermaid Beach" },
                                                ].map((a, i) => (
                                                    <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                                                        <div><p className="font-medium text-sm text-slate-900">{a.name}</p><p className="text-xs text-slate-500">{a.suburb}</p></div>
                                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-bold text-green-700 ring-1 ring-green-200">DA {a.da}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">Top Directories (Week 1)</p>
                                            <div className="space-y-2">
                                                {[
                                                    { name: "Google Business Profile", da: 100, time: "30 min" },
                                                    { name: "Yelp Australia", da: 93, time: "20 min" },
                                                    { name: "Yellow Pages Australia", da: 87, time: "15 min" },
                                                    { name: "True Local", da: 82, time: "15 min" },
                                                    { name: "Hotfrog Australia", da: 78, time: "10 min" },
                                                ].map((d, i) => (
                                                    <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                                                        <div><p className="font-medium text-sm text-slate-900">{d.name}</p><p className="text-xs text-slate-500">Est. time: {d.time}</p></div>
                                                        <span className={cn("inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1",
                                                            d.da >= 90 ? "bg-purple-50 text-purple-700 ring-purple-200" : d.da >= 80 ? "bg-green-50 text-green-700 ring-green-200" : "bg-blue-50 text-blue-700 ring-blue-200"
                                                        )}>DA {d.da}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-purple-100 rounded-lg"><Zap className="h-5 w-5 text-purple-600" /></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-slate-900 text-sm">6-Month Backlink Roadmap</p>
                                                <p className="text-xs text-slate-600 mt-0.5">Week-by-week plan: 15 → 150+ backlinks. Average DA 68+</p>
                                            </div>
                                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setActiveTab("reports")}>View Report</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Partnership Pipeline */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6 bg-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle className="text-lg font-bold text-slate-900">Partnership Pipeline</CardTitle>
                                            <p className="text-slate-500 text-sm mt-1">Track outreach progress and conversions</p>
                                        </div>
                                        <Button variant="outline" size="sm" className="text-xs font-medium border-slate-200" onClick={() => { toast.info("Use the AI Agent tab to generate outreach emails for new leads.") }}>Add Partnership</Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                                        {[
                                            { stage: "New Leads", count: 50, color: "slate" },
                                            { stage: "Contacted", count: 23, color: "blue" },
                                            { stage: "Interested", count: 12, color: "indigo" },
                                            { stage: "Negotiating", count: 5, color: "purple" },
                                            { stage: "Active", count: 8, color: "green" },
                                            { stage: "Listing Live", count: 3, color: "emerald" },
                                        ].map((stage, i) => (
                                            <div key={i} className={cn("p-4 rounded-xl text-center border",
                                                stage.color === "slate" ? "bg-slate-50 border-slate-200" : stage.color === "blue" ? "bg-blue-50 border-blue-200" : stage.color === "indigo" ? "bg-indigo-50 border-indigo-200" : stage.color === "purple" ? "bg-purple-50 border-purple-200" : stage.color === "green" ? "bg-green-50 border-green-200" : "bg-emerald-50 border-emerald-200"
                                            )}>
                                                <p className={cn("text-2xl font-bold",
                                                    stage.color === "slate" ? "text-slate-900" : stage.color === "blue" ? "text-blue-900" : stage.color === "indigo" ? "text-indigo-900" : stage.color === "purple" ? "text-purple-900" : stage.color === "green" ? "text-green-900" : "text-emerald-900"
                                                )}>{stage.count}</p>
                                                <p className="text-xs font-medium text-slate-600 mt-1">{stage.stage}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                                            <div>
                                                <p className="font-semibold text-slate-900 text-sm">Conversion Rate: 16%</p>
                                                <p className="text-xs text-slate-600">8 active partnerships from 50 leads</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Above Industry Average</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── AI AGENT ──────────────────────────────────────────────────── */}
                    {activeTab === "ai-agent" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">AI Agent Control Center</h2>
                                    <p className="text-slate-500 font-medium text-base">Autonomous backlink acquisition and outreach powered by AI.</p>
                                </div>
                                <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-2 rounded-xl border border-emerald-200 shadow-sm">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-semibold text-emerald-700">Agent Online • FREE via OpenRouter</span>
                                </div>
                            </div>

                            <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-emerald-100 p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-emerald-100 rounded-xl animate-pulse"><Zap className="h-5 w-5 text-emerald-600" /></div>
                                            <div>
                                                <CardTitle className="text-lg font-bold text-slate-900">Agentic AI System</CardTitle>
                                                <p className="text-sm text-slate-500 mt-1">OpenRouter • qwen/qwen-2.5-72b-instruct:free (100% FREE)</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-300">✓ Connected</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 md:grid-cols-3">
                                        <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                            <div className="flex items-center gap-2 mb-2"><Sparkles className="h-4 w-4 text-purple-600" /><p className="text-xs font-bold uppercase tracking-wide text-slate-500">AI Capabilities</p></div>
                                            <ul className="space-y-1.5 text-sm text-slate-700">
                                                {["Generate partnership emails", "Personalize by business type", "Create follow-up sequences", "Analyze competitors"].map((c, i) => (
                                                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />{c}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                            <div className="flex items-center gap-2 mb-2"><TrendingUp className="h-4 w-4 text-blue-600" /><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Session Stats</p></div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm"><span className="text-slate-600">Emails generated</span><span className="font-bold text-slate-900">{aiSessionCount}</span></div>
                                                <div className="flex justify-between text-sm"><span className="text-slate-600">Drafts created</span><span className="font-bold text-slate-900">{aiGenerations.length}</span></div>
                                                <div className="flex justify-between text-sm"><span className="text-slate-600">Cost</span><span className="font-bold text-emerald-600">$0.00 (FREE)</span></div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                            <div className="flex items-center gap-2 mb-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Model Info</p></div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm"><span className="text-slate-600">Model</span><span className="font-bold text-slate-900">Qwen 2.5 72B</span></div>
                                                <div className="flex justify-between text-sm"><span className="text-slate-600">Context</span><span className="font-bold text-slate-900">128K tokens</span></div>
                                                <div className="flex justify-between text-sm"><span className="text-slate-600">Type</span><span className="font-bold text-purple-600">Instruction</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Campaign Generator */}
                                <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
                                        <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2"><Sparkles className="h-5 w-5 text-purple-600" />Generate Campaign</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-sm text-slate-600 mb-4">Let AI create a personalized outreach campaign targeting high-DA businesses.</p>
                                        <div className="space-y-3">
                                            <Button
                                                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold"
                                                disabled={agentCampaignLoading !== null}
                                                onClick={() => handleAgentCampaign("Real Estate")}
                                            >
                                                <Sparkles className="h-4 w-4 mr-2" />
                                                {agentCampaignLoading === "Real Estate" ? "Generating..." : "Generate Real Estate Campaign"}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full h-12 border-purple-200 text-purple-700 hover:bg-purple-50 rounded-xl font-semibold"
                                                disabled={agentCampaignLoading !== null}
                                                onClick={() => handleAgentCampaign("Directory")}
                                            >
                                                {agentCampaignLoading === "Directory" ? "Generating..." : "Generate Directory Campaign"}
                                            </Button>
                                        </div>
                                        {agentCampaignDraft && (
                                            <div className="mt-4">
                                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Generated Campaign Draft</p>
                                                <Textarea value={agentCampaignDraft} onChange={(e) => setAgentCampaignDraft(e.target.value)} className="min-h-[120px] rounded-xl text-sm" />
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Email Generator */}
                                <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                                        <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2"><MessageSquare className="h-5 w-5 text-green-600" />Email Generator</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-sm text-slate-600 mb-4">Generate a personalized partnership email. Each email is optimized for response rates.</p>
                                        <div className="space-y-3">
                                            <Input value={agentBizName} onChange={(e) => setAgentBizName(e.target.value)} placeholder="Business name (e.g. Ray White Southport)" className="h-11 rounded-xl" />
                                            <Button
                                                className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold"
                                                disabled={agentEmailLoading}
                                                onClick={handleAgentEmail}
                                            >
                                                <Zap className="h-4 w-4 mr-2" />
                                                {agentEmailLoading ? "Generating..." : "Generate AI Email"}
                                            </Button>
                                        </div>
                                        {agentEmailDraft && (
                                            <div className="mt-4">
                                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Generated Email Draft</p>
                                                <Textarea value={agentEmailDraft} onChange={(e) => setAgentEmailDraft(e.target.value)} className="min-h-[120px] rounded-xl text-sm" />
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Recent AI Generations */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6 bg-white">
                                    <CardTitle className="text-lg font-bold text-slate-900">Recent AI Generations</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    {aiGenerations.length === 0 ? (
                                        <div className="text-center text-slate-400 text-sm py-8">No generations yet. Use the tools above to get started.</div>
                                    ) : (
                                        <div className="space-y-4">
                                            {aiGenerations.map((gen, i) => (
                                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-purple-100 rounded-lg"><Sparkles className="h-4 w-4 text-purple-600" /></div>
                                                        <div>
                                                            <p className="font-semibold text-sm text-slate-900">{gen.business}</p>
                                                            <p className="text-xs text-slate-500">{gen.type} • {gen.time}</p>
                                                        </div>
                                                    </div>
                                                    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-green-200">Generated</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── REPORTS ───────────────────────────────────────────────────── */}
                    {activeTab === "reports" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Analytics & Reports</h2>
                                <p className="text-slate-500 font-medium text-base">Performance overview for the last 6 months.</p>
                            </div>

                            {/* Summary cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { label: "Total Bookings", value: bookings.length, color: "blue" },
                                    { label: "Total Revenue", value: "NPR " + totalRevenue.toLocaleString(), color: "emerald" },
                                    { label: "Messages", value: contacts.length, color: "indigo" },
                                    { label: "Subscribers", value: subscriptions.length, color: "amber" },
                                ].map((s, i) => (
                                    <div key={i} className={cn("rounded-2xl p-5 border",
                                        s.color === "blue" ? "bg-blue-50 border-blue-100" : s.color === "emerald" ? "bg-emerald-50 border-emerald-100" : s.color === "indigo" ? "bg-indigo-50 border-indigo-100" : "bg-amber-50 border-amber-100"
                                    )}>
                                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{s.label}</p>
                                        <p className={cn("text-2xl font-bold mt-1",
                                            s.color === "blue" ? "text-blue-700" : s.color === "emerald" ? "text-emerald-700" : s.color === "indigo" ? "text-indigo-700" : "text-amber-700"
                                        )}>{s.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Monthly table */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900">Monthly Breakdown (Last 6 Months)</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Month</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Bookings</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Revenue</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Messages</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">New Subscribers</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {monthlyBreakdown.map((row, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-slate-900 text-sm">{row.month}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-600">{row.bookings}</td>
                                                        <td className="px-6 py-4 text-sm font-semibold text-emerald-700">{row.revenue > 0 ? "NPR " + row.revenue.toLocaleString() : "—"}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-600">{row.contacts}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-600">{row.subscribers}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Booking status breakdown */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900">Booking Status Breakdown</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 sm:grid-cols-4">
                                        {["pending", "confirmed", "completed", "cancelled"].map((s) => {
                                            const count = bookings.filter((b) => (b.status || "pending") === s).length
                                            return (
                                                <div key={s} className={cn("rounded-xl p-4 text-center border", statusColor(s).includes("yellow") ? "bg-yellow-50 border-yellow-100" : statusColor(s).includes("green") ? "bg-green-50 border-green-100" : statusColor(s).includes("blue") ? "bg-blue-50 border-blue-100" : "bg-red-50 border-red-100")}>
                                                    <p className="text-2xl font-bold text-slate-900">{count}</p>
                                                    <p className="text-xs font-medium text-slate-600 mt-1 capitalize">{s}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── SERVICES ──────────────────────────────────────────────────── */}
                    {activeTab === "services" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Service Offerings</h2>
                                <p className="text-slate-500 font-medium text-base">Manage all available services.</p>
                            </div>
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Service Name</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Description</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Added</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {services.map((service, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-slate-900 text-sm">{service.title || service.name}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-600 max-w-md truncate">{service.description}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-500">{fmtDate(service.createdAt)}</td>
                                                    </tr>
                                                ))}
                                                {services.length === 0 && (
                                                    <tr><td colSpan={3} className="px-6 py-12 text-center text-slate-500 text-sm">No services found.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── MESSAGES (+ Testimonials) ─────────────────────────────────── */}
                    {activeTab === "messages" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Inbox & Reviews</h2>
                                <p className="text-slate-500 font-medium text-base">Contact form messages and customer testimonials.</p>
                            </div>

                            {/* Contact messages */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><MessageSquare className="h-4 w-4" />Contact Messages ({contacts.length})</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Message</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {contacts.map((contact, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-1.5">
                                                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                                <span className="text-sm text-slate-600 font-medium">{fmtDate(contact.createdAt)}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="font-semibold text-slate-900 text-sm">{contact.name}</div>
                                                            <div className="text-xs text-slate-500 mt-0.5">{contact.email}</div>
                                                            {contact.phone && <div className="text-xs text-slate-500">{contact.phone}</div>}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm font-medium text-slate-800">{contact.subject}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-600 max-w-sm truncate">{contact.message}</td>
                                                    </tr>
                                                ))}
                                                {contacts.length === 0 && (
                                                    <tr><td colSpan={4} className="px-6 py-12 text-center text-slate-500 text-sm">No messages yet.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Testimonials management */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                                            <Sparkles className="h-4 w-4 text-amber-500" />
                                            Customer Reviews ({allTestimonials.length})
                                        </CardTitle>
                                        {pendingTestimonials.length > 0 && (
                                            <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">{pendingTestimonials.length} pending</span>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y divide-slate-50">
                                        {allTestimonials.map((t, i) => (
                                            <div key={i} className="p-6 flex items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <p className="font-semibold text-slate-900 text-sm">{t.name || "Anonymous"}</p>
                                                        <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
                                                            t.approved ? "bg-green-50 text-green-700 ring-green-600/20" : "bg-amber-50 text-amber-700 ring-amber-600/20"
                                                        )}>{t.approved ? "Approved" : "Pending"}</span>
                                                    </div>
                                                    {t.rating && <p className="text-xs text-amber-500 mb-1">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</p>}
                                                    <p className="text-sm text-slate-600 line-clamp-2">{t.message || t.text || t.review}</p>
                                                    <p className="text-xs text-slate-400 mt-1">{fmtDate(t.createdAt)}</p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled={testimonialUpdating === t.id}
                                                    className={cn("h-8 text-xs rounded-lg shrink-0",
                                                        t.approved ? "border-red-200 text-red-600 hover:bg-red-50" : "border-green-200 text-green-700 hover:bg-green-50"
                                                    )}
                                                    onClick={() => handleApproveTestimonial(t.id, !t.approved)}
                                                >
                                                    {testimonialUpdating === t.id ? "..." : t.approved ? "Unapprove" : "Approve"}
                                                </Button>
                                            </div>
                                        ))}
                                        {allTestimonials.length === 0 && (
                                            <div className="p-12 text-center text-slate-500 text-sm">No reviews yet.</div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── SUBSCRIBERS ───────────────────────────────────────────────── */}
                    {activeTab === "subscribers" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Newsletter Subscribers</h2>
                                <p className="text-slate-500 font-medium text-base">{subscriptions.length} active email subscribers.</p>
                            </div>
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subscribed On</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {subscriptions.map((sub, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4 font-medium text-slate-900 text-sm">{sub.email}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-500">{fmtDate(sub.createdAt)}</td>
                                                        <td className="px-6 py-4 text-right">
                                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{sub.status || "Active"}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {subscriptions.length === 0 && (
                                                    <tr><td colSpan={3} className="px-6 py-12 text-center text-slate-500 text-sm">No subscribers yet.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── SETTINGS ──────────────────────────────────────────────────── */}
                    {activeTab === "settings" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Settings & Security</h2>
                                <p className="text-slate-500 font-medium text-base">Admin account configuration and access log.</p>
                            </div>

                            {/* Account Info */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" />Account Information</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="rounded-xl bg-slate-50 p-4">
                                            <p className="text-xs text-slate-500 font-medium mb-1">Name</p>
                                            <p className="font-semibold text-slate-900">{user?.name || "—"}</p>
                                        </div>
                                        <div className="rounded-xl bg-slate-50 p-4">
                                            <p className="text-xs text-slate-500 font-medium mb-1">Email</p>
                                            <p className="font-semibold text-slate-900">{user?.email || "—"}</p>
                                        </div>
                                        <div className="rounded-xl bg-slate-50 p-4">
                                            <p className="text-xs text-slate-500 font-medium mb-1">Role</p>
                                            <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-200 capitalize">{user?.role || "admin"}</span>
                                        </div>
                                        <div className="rounded-xl bg-slate-50 p-4">
                                            <p className="text-xs text-slate-500 font-medium mb-1">User ID</p>
                                            <p className="font-mono text-xs text-slate-600 truncate">{user?.id || "—"}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* API Config */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><Zap className="h-4 w-4 text-amber-500" />API Configuration</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    {[
                                        { name: "OpenRouter API", key: "OPENROUTER_API_KEY", desc: "Used for AI outreach draft generation. Get a free key at openrouter.ai/keys", model: "qwen/qwen-2.5-72b-instruct:free" },
                                        { name: "Firebase", key: "FIREBASE_*", desc: "Authentication, Firestore database, and file storage.", model: null },
                                    ].map((api, i) => (
                                        <div key={i} className="flex items-start justify-between p-4 rounded-xl border border-slate-100 bg-slate-50">
                                            <div>
                                                <p className="font-semibold text-slate-900 text-sm">{api.name}</p>
                                                <p className="text-xs text-slate-500 mt-0.5">{api.desc}</p>
                                                {api.model && <p className="text-xs font-mono text-slate-400 mt-1">Model: {api.model}</p>}
                                            </div>
                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200 shrink-0 ml-4">Configured</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Security / Activity Log */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-blue-600" />Activity Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {[
                                            { label: "Total Users", value: users.length, icon: Users },
                                            { label: "Total Bookings", value: bookings.length, icon: CalendarDays },
                                            { label: "Contact Messages", value: contacts.length, icon: MessageSquare },
                                            { label: "Newsletter Subscribers", value: subscriptions.length, icon: FileText },
                                            { label: "Published Posts", value: posts.filter((p) => p.published).length, icon: FileText },
                                            { label: "Active Coupons", value: coupons.filter((c) => c.active).length, icon: Tag },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                                <div className="p-2 bg-white rounded-lg border border-slate-100"><item.icon className="h-4 w-4 text-slate-500" /></div>
                                                <div>
                                                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                                                    <p className="font-bold text-slate-900">{item.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
