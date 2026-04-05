"use client"

import { useState, useEffect } from "react"
import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    Zap
} from "lucide-react"
import {
    getAllBookings,
    getApprovedTestimonials,
    getAllServices,
    getAllContacts,
    getAllSubscriptions,
} from "@/lib/admin-firebase-service"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function AdminDashboardPage() {
    const [activeTab, setActiveTab] = useState("dashboard")
    const [bookings, setBookings] = useState<any[]>([])
    const [testimonials, setTestimonials] = useState<any[]>([])
    const [services, setServices] = useState<any[]>([])
    const [contacts, setContacts] = useState<any[]>([])
    const [subscriptions, setSubscriptions] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [aiBusinessName, setAiBusinessName] = useState("")
    const [aiLocation, setAiLocation] = useState("Gold Coast")
    const [aiBusinessType, setAiBusinessType] = useState("")
    const [aiServiceFocus, setAiServiceFocus] = useState("commercial cleaning, carpet cleaning, pest control")
    const [aiDraft, setAiDraft] = useState("")
    const [aiLoading, setAiLoading] = useState(false)
    const [aiError, setAiError] = useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const [bookingsData, testimonialsData, servicesData, contactsData, subscriptionsData] = await Promise.all([
                    getAllBookings(),
                    getApprovedTestimonials(),
                    getAllServices(),
                    getAllContacts(),
                    getAllSubscriptions()
                ])
                setBookings(bookingsData)
                setTestimonials(testimonialsData)
                setServices(servicesData)
                setContacts(contactsData)
                setSubscriptions(subscriptionsData)
            } catch (error) {
                console.error("Error fetching admin data:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const filteredBookings = bookings.filter(b =>
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.package?.category?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const stats = [
        {
            title: "Total Bookings",
            value: bookings.length,
            icon: CalendarDays,
            description: "Lifetime bookings recorded",
            trend: "+12.5%",
            trendUp: true,
            color: "blue"
        },
        {
            title: "Active Users",
            value: "148",
            icon: Users,
            description: "Registered customers",
            trend: "+5.4%",
            trendUp: true,
            color: "indigo"
        },
        {
            title: "Revenue",
            value: "NPR " + bookings.reduce((acc, curr) => acc + (curr.package?.totalPrice || curr.package?.price || 0), 0).toLocaleString(),
            icon: DollarSign,
            description: "Total gross revenue",
            trend: "+8.2%",
            trendUp: true,
            color: "emerald"
        },
        {
            title: "Success Rate",
            value: "98.5%",
            icon: TrendingUp,
            description: "Customer satisfaction",
            trend: "+2.1%",
            trendUp: true,
            color: "amber"
        },
    ]

    const discoverySuburbs = [
        "Gold Coast",
        "Southport",
        "Surfers Paradise",
        "Robina",
        "Burleigh Heads",
        "Broadbeach",
        "Nerang",
        "Labrador",
    ]

    const targetBusinessTypes = [
        "Real estate agencies",
        "Property managers",
        "Airbnb property managers",
        "Offices and coworking spaces",
        "Restaurants and cafes",
        "Gyms and fitness centers",
        "Hotels and hostels",
        "Medical and dental clinics",
    ]

    const leadFields = [
        "business_name",
        "website",
        "email",
        "phone",
        "location",
        "lead_status",
    ]

    const leadStatuses = ["new", "contacted", "replied", "interested", "not interested", "converted"]

    const weeklyReportMetrics = [
        "Number of leads collected",
        "Messages sent",
        "Replies received",
        "Quotes requested",
        "Customers converted",
    ]

    async function generateOutreachDraft() {
        if (!aiBusinessName.trim()) {
            setAiError("Business name is required.")
            return
        }

        setAiLoading(true)
        setAiError("")

        try {
            const response = await fetch("/api/admin/ai-outreach", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    businessName: aiBusinessName,
                    location: aiLocation,
                    businessType: aiBusinessType,
                    serviceFocus: aiServiceFocus,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to generate outreach draft")
            }

            setAiDraft(data.message)
        } catch (error: any) {
            setAiError(error.message || "Failed to generate outreach draft")
        } finally {
            setAiLoading(false)
        }
    }

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

    return (
        <div className="container py-8 sm:py-12">
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
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
                                        <p className="text-slate-400 text-xs">Admin Access: Granted</p>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full h-10 rounded-lg border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium text-xs">
                                    View Security Logs
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </aside>

                <main className="lg:col-span-3 space-y-8">
                    {activeTab === "dashboard" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
                                    <p className="text-slate-500 font-medium text-base">Welcome back, here's what's happening today.</p>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-xs font-medium text-slate-600">Live Updates</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                                {stats.map((stat, i) => (
                                    <div key={i} className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-slate-200">
                                        <div className={cn("absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full opacity-10 blur-2xl transition-all group-hover:opacity-20",
                                            stat.color === "blue" ? "bg-blue-500" :
                                                stat.color === "indigo" ? "bg-indigo-500" :
                                                    stat.color === "emerald" ? "bg-emerald-500" :
                                                        "bg-amber-500"
                                        )} />
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                                                <h3 className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</h3>
                                            </div>
                                            <div className={cn("p-3 rounded-xl",
                                                stat.color === "blue" ? "bg-blue-50 text-blue-600" :
                                                    stat.color === "indigo" ? "bg-indigo-50 text-indigo-600" :
                                                        stat.color === "emerald" ? "bg-emerald-50 text-emerald-600" :
                                                            "bg-amber-50 text-amber-600"
                                            )}>
                                                <stat.icon className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center text-sm">
                                            <span className={cn("flex items-center font-medium",
                                                stat.trendUp ? "text-green-600" : "text-red-600"
                                            )}>
                                                {stat.trend}
                                                <TrendingUp className="ml-1 h-3 w-3" />
                                            </span>
                                            <span className="ml-2 text-slate-400">{stat.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

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
                                    <div className="grid gap-4 lg:grid-cols-2">
                                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Step 1: Lead Discovery</p>
                                            <p className="mt-2 text-sm text-slate-700">Search local businesses in these locations:</p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {discoverySuburbs.map((suburb) => (
                                                    <span key={suburb} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                                                        {suburb}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Priority Business Types</p>
                                            <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                                                {targetBusinessTypes.map((type) => (
                                                    <li key={type} className="flex items-start gap-2">
                                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                                                        <span>{type}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="grid gap-4 lg:grid-cols-3">
                                        <div className="rounded-xl border border-slate-100 p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Step 2-3: Data Capture</p>
                                            <p className="mt-2 text-sm text-slate-700">Collect and store leads with:</p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {leadFields.map((field) => (
                                                    <span key={field} className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-medium text-white">
                                                        {field}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="mt-3 text-xs text-slate-500">Default on create: lead_status = "new"</p>
                                        </div>

                                        <div className="rounded-xl border border-slate-100 p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Step 4-5: Outreach Rules</p>
                                            <ul className="mt-2 space-y-2 text-sm text-slate-700">
                                                <li className="flex items-start gap-2">
                                                    <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                                                    <span>Generate personalized messages under 3 sentences.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                                                    <span>Mention business name, Gold Coast location, and service offer.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                                                    <span>Send via email, website form, or SMS. Limit to 30-50/day.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="rounded-xl border border-slate-100 p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Step 6-8: Follow-up Logic</p>
                                            <p className="mt-2 text-sm text-slate-700">Track lifecycle statuses:</p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {leadStatuses.map((status) => (
                                                    <span key={status} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                                                        {status}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="mt-3 text-xs text-slate-500">If no response after 3 days, send a polite follow-up. If positive response, mark as interested and request property size/service details for quote.</p>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Step 9: Weekly Reporting</p>
                                        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                                            {weeklyReportMetrics.map((metric) => (
                                                <div key={metric} className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                                                    {metric}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                                            <div className="flex items-center justify-between gap-4">
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Free AI API Integration</p>
                                                    <h3 className="mt-1 text-base font-bold text-slate-900">Outreach Draft Generator</h3>
                                                </div>
                                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                                                    OpenRouter FREE
                                                </span>
                                            </div>

                                            <div className="mt-4 grid gap-3 md:grid-cols-2">
                                                <Input
                                                    value={aiBusinessName}
                                                    onChange={(e) => setAiBusinessName(e.target.value)}
                                                    placeholder="Business name"
                                                    className="h-11 rounded-xl border-slate-200 bg-white"
                                                />
                                                <Input
                                                    value={aiLocation}
                                                    onChange={(e) => setAiLocation(e.target.value)}
                                                    placeholder="Location"
                                                    className="h-11 rounded-xl border-slate-200 bg-white"
                                                />
                                                <Input
                                                    value={aiBusinessType}
                                                    onChange={(e) => setAiBusinessType(e.target.value)}
                                                    placeholder="Business type"
                                                    className="h-11 rounded-xl border-slate-200 bg-white"
                                                />
                                                <Input
                                                    value={aiServiceFocus}
                                                    onChange={(e) => setAiServiceFocus(e.target.value)}
                                                    placeholder="Service focus"
                                                    className="h-11 rounded-xl border-slate-200 bg-white"
                                                />
                                            </div>

                                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                                                <Button
                                                    onClick={generateOutreachDraft}
                                                    disabled={aiLoading}
                                                    className="h-11 rounded-xl bg-slate-900 px-5 text-white hover:bg-slate-800"
                                                >
                                                    {aiLoading ? "Generating..." : "Generate Outreach Draft"}
                                                </Button>
                                                <p className="text-xs text-slate-500">Manual review only. No automatic sending is enabled.</p>
                                            </div>

                                            {aiError && (
                                                <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                                                    {aiError}
                                                </div>
                                            )}

                                            <div className="mt-4">
                                                <Textarea
                                                    value={aiDraft}
                                                    onChange={(e) => setAiDraft(e.target.value)}
                                                    placeholder="Your AI-generated outreach draft will appear here."
                                                    className="min-h-[140px] rounded-2xl border-slate-200 bg-white text-sm text-slate-700"
                                                />
                                            </div>
                                        </div>

                                        <div className="rounded-2xl border border-slate-100 bg-white p-5">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Generator Rules</p>
                                            <ul className="mt-4 space-y-3 text-sm text-slate-700">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                                                    <span>Message stays under 3 sentences.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                                                    <span>Mentions the business name and Gold Coast location.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                                                    <span>Offers cleaning or pest control services and asks for a free quote opportunity.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                                                    <span>Requires <span className="font-semibold">OPENROUTER_API_KEY</span> in environment variables. Using Qwen 3.6 Plus (FREE).</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

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
                                                            {booking.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-slate-900 text-sm">{booking.name}</p>
                                                            <div className="flex items-center gap-2 mt-0.5">
                                                                <span className="text-xs text-slate-500">{booking.package?.category || 'Custom'}</span>
                                                                <span className="text-[10px] text-slate-300">•</span>
                                                                <span className="text-xs text-slate-400">{new Date(booking.createdAt?.seconds * 1000).toLocaleDateString()}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-semibold text-slate-900 text-sm">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                        <div className="flex items-center justify-end gap-1 mt-1">
                                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                                Received
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="space-y-6">
                                    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg relative overflow-hidden">
                                        <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 translate-y--12 rounded-full bg-white/10 blur-3xl"></div>
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
                                                ].map((service, i) => (
                                                    <div key={i} className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-sm backdrop-blur-sm">
                                                        <span>{service.label}</span>
                                                        <div className="flex items-center gap-1.5">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                                            <span className="text-green-300 font-medium">{service.status}</span>
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
                                                <h4 className="font-semibold text-slate-900">New Feedback</h4>
                                                <p className="text-sm text-slate-500">{testimonials.length} reviews pending</p>
                                            </div>
                                        </div>
                                        <Button className="mt-4 w-full bg-slate-900 text-white hover:bg-slate-800 rounded-xl" size="sm">Review All</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "bookings" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Bookings Management</h2>
                                    <p className="text-slate-500 font-medium text-base">Detailed overview of all client requests.</p>
                                </div>
                                <div className="relative w-full md:w-80">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search by name or package..."
                                        className="h-14 pl-12 rounded-2xl border-gray-100 bg-white focus:ring-primary/10 shadow-sm"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Client Profile</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Service</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Add-ons</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Financials</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {filteredBookings.map((booking, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-4">
                                                                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                                                                    {booking.name.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-slate-900 text-sm">{booking.name}</p>
                                                                    <div className="flex items-center gap-1.5 mt-0.5">
                                                                        <Clock className="w-3 h-3 text-slate-400" />
                                                                        <span className="text-xs text-slate-500">{new Date(booking.createdAt?.seconds * 1000).toLocaleDateString()}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="text-sm font-medium text-slate-900">{booking.package?.category || 'Custom'}</p>
                                                            <span className="inline-flex mt-1 items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                                {booking.package?.frequency}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {booking.package?.includeInterior ? (
                                                                <div className="flex items-center gap-1.5 text-indigo-600">
                                                                    <Sparkles className="w-4 h-4" />
                                                                    <span className="text-xs font-medium">Interior Included</span>
                                                                </div>
                                                            ) : (
                                                                <span className="text-xs text-slate-400">—</span>
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="font-semibold text-slate-900 text-sm">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                            <div className="mt-1 flex items-center gap-1.5">
                                                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                                                <span className="text-xs text-slate-500">Pending</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <Button variant="outline" size="sm" className="h-8 text-xs font-medium rounded-lg border-slate-200 text-slate-700 hover:bg-slate-50">Manage</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {filteredBookings.length === 0 && (
                                                    <tr>
                                                        <td colSpan={5} className="px-6 py-12 text-center">
                                                            <div className="flex flex-col items-center justify-center space-y-3">
                                                                <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center">
                                                                    <Search className="h-6 w-6 text-slate-400" />
                                                                </div>
                                                                <p className="text-sm font-medium text-slate-500">No bookings found</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "services" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Service Offerings</h2>
                                    <p className="text-slate-500 font-medium text-base">Manage all available services.</p>
                                </div>
                            </div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Service Name</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Description</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {services.map((service, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-slate-900 text-sm">{service.title || service.name}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-600 max-w-md truncate">{service.description}</td>
                                                        <td className="px-6 py-4 text-right">
                                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-slate-100 rounded-lg">
                                                                <span className="sr-only">Edit</span>
                                                                <Sparkles className="h-4 w-4 text-slate-400" />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {services.length === 0 && (
                                                    <tr>
                                                        <td colSpan={3} className="px-6 py-12 text-center text-slate-500 text-sm">No services found.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "messages" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Inbox</h2>
                                    <p className="text-slate-500 font-medium text-base">Inquiries from the contact form.</p>
                                </div>
                            </div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Details</th>
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
                                                                <span className="text-sm text-slate-600 font-medium">
                                                                    {contact.createdAt ? new Date(contact.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                                                                </span>
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
                                                    <tr>
                                                        <td colSpan={4} className="px-6 py-12 text-center text-slate-500 text-sm">No messages found.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "subscribers" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Newsletter Subscribers</h2>
                                    <p className="text-slate-500 font-medium text-base">Active email list subscribers.</p>
                                </div>
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
                                                        <td className="px-6 py-4 text-sm text-slate-500">
                                                            {sub.createdAt ? new Date(sub.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                                {sub.status || 'Active'}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {subscriptions.length === 0 && (
                                                    <tr>
                                                        <td colSpan={3} className="px-6 py-12 text-center text-slate-500 text-sm">No subscribers found.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

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

                            {/* SEO Metrics Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                                <div className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-purple-100 shadow-sm transition-all hover:shadow-md hover:border-purple-200">
                                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-purple-500 opacity-10 blur-2xl transition-all group-hover:opacity-20" />
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-slate-500">Total Backlinks</p>
                                            <h3 className="mt-2 text-3xl font-bold text-slate-900">15</h3>
                                        </div>
                                        <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-sm">
                                        <span className="flex items-center font-medium text-green-600">+3 this month<TrendingUp className="ml-1 h-3 w-3" /></span>
                                    </div>
                                </div>

                                <div className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
                                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-blue-500 opacity-10 blur-2xl transition-all group-hover:opacity-20" />
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-slate-500">Average DA</p>
                                            <h3 className="mt-2 text-3xl font-bold text-slate-900">65</h3>
                                        </div>
                                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                                            <TrendingUp className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-sm">
                                        <span className="flex items-center font-medium text-green-600">Quality score: Good</span>
                                    </div>
                                </div>

                                <div className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-green-100 shadow-sm transition-all hover:shadow-md hover:border-green-200">
                                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-green-500 opacity-10 blur-2xl transition-all group-hover:opacity-20" />
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-slate-500">Active Partnerships</p>
                                            <h3 className="mt-2 text-3xl font-bold text-slate-900">8</h3>
                                        </div>
                                        <div className="p-3 rounded-xl bg-green-50 text-green-600">
                                            <Users className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-sm">
                                        <span className="flex items-center font-medium text-amber-600">5 pending outreach</span>
                                    </div>
                                </div>

                                <div className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-orange-100 shadow-sm transition-all hover:shadow-md hover:border-orange-200">
                                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-orange-500 opacity-10 blur-2xl transition-all group-hover:opacity-20" />
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-slate-500">Emails Sent</p>
                                            <h3 className="mt-2 text-3xl font-bold text-slate-900">47</h3>
                                        </div>
                                        <div className="p-3 rounded-xl bg-orange-50 text-orange-600">
                                            <MessageSquare className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-sm">
                                        <span className="flex items-center font-medium text-green-600">23% response rate</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-purple-100 p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 rounded-xl">
                                            <Sparkles className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg font-bold text-slate-900">AI-Powered Quick Actions</CardTitle>
                                            <p className="text-sm text-slate-500 mt-1">Generate campaigns and outreach with AI</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        <Button className="h-20 flex-col gap-2 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                                            <span className="text-xs font-semibold">Real Estate Campaign</span>
                                        </Button>
                                        <Button className="h-20 flex-col gap-2 bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                                            <span className="text-xs font-semibold">Directory Submissions</span>
                                        </Button>
                                        <Button className="h-20 flex-col gap-2 bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl">
                                            <MessageSquare className="h-6 w-6" />
                                            <span className="text-xs font-semibold">Generate Email</span>
                                        </Button>
                                        <Button className="h-20 flex-col gap-2 bg-gradient-to-br from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl">
                                            <TrendingUp className="h-6 w-6" />
                                            <span className="text-xs font-semibold">SEO Report</span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Backlink Database Preview */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6 flex flex-row items-center justify-between bg-white">
                                    <div>
                                        <CardTitle className="text-lg font-bold text-slate-900">Pre-loaded Backlink Database</CardTitle>
                                        <p className="text-slate-500 text-sm mt-1">50 real estate agencies + 48 directories ready for outreach</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-200">
                                            50 Agencies
                                        </span>
                                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
                                            48 Directories
                                        </span>
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
                                                ].map((agency, i) => (
                                                    <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                                                        <div>
                                                            <p className="font-medium text-sm text-slate-900">{agency.name}</p>
                                                            <p className="text-xs text-slate-500">{agency.suburb}</p>
                                                        </div>
                                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-bold text-green-700 ring-1 ring-green-200">
                                                            DA {agency.da}
                                                        </span>
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
                                                ].map((dir, i) => (
                                                    <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                                                        <div>
                                                            <p className="font-medium text-sm text-slate-900">{dir.name}</p>
                                                            <p className="text-xs text-slate-500">Est. time: {dir.time}</p>
                                                        </div>
                                                        <span className={cn(
                                                            "inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1",
                                                            dir.da >= 90 ? "bg-purple-50 text-purple-700 ring-purple-200" :
                                                            dir.da >= 80 ? "bg-green-50 text-green-700 ring-green-200" :
                                                            "bg-blue-50 text-blue-700 ring-blue-200"
                                                        )}>
                                                            DA {dir.da}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-purple-100 rounded-lg">
                                                <Zap className="h-5 w-5 text-purple-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-slate-900 text-sm">6-Month Backlink Roadmap</p>
                                                <p className="text-xs text-slate-600 mt-0.5">Week-by-week plan: 15 → 150+ backlinks. Average DA 68+</p>
                                            </div>
                                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                                                View Full Roadmap
                                            </Button>
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
                                        <Button variant="outline" size="sm" className="text-xs font-medium border-slate-200">
                                            Add Partnership
                                        </Button>
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
                                            <div key={i} className={cn(
                                                "p-4 rounded-xl text-center border",
                                                stage.color === "slate" ? "bg-slate-50 border-slate-200" :
                                                stage.color === "blue" ? "bg-blue-50 border-blue-200" :
                                                stage.color === "indigo" ? "bg-indigo-50 border-indigo-200" :
                                                stage.color === "purple" ? "bg-purple-50 border-purple-200" :
                                                stage.color === "green" ? "bg-green-50 border-green-200" :
                                                "bg-emerald-50 border-emerald-200"
                                            )}>
                                                <p className={cn(
                                                    "text-2xl font-bold",
                                                    stage.color === "slate" ? "text-slate-900" :
                                                    stage.color === "blue" ? "text-blue-900" :
                                                    stage.color === "indigo" ? "text-indigo-900" :
                                                    stage.color === "purple" ? "text-purple-900" :
                                                    stage.color === "green" ? "text-green-900" :
                                                    "text-emerald-900"
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
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                                            Above Industry Average
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "ai-agent" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">AI Agent Control Center</h2>
                                    <p className="text-slate-500 font-medium text-base">Autonomous backlink acquisition and outreach powered by AI.</p>
                                </div>
                                <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-2 rounded-xl border border-emerald-200 shadow-sm">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-semibold text-emerald-700">Agent Online • Qwen 3.6 Plus (Free)</span>
                                </div>
                            </div>

                            {/* AI Agent Status */}
                            <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-emerald-100 p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-emerald-100 rounded-xl animate-pulse">
                                                <Zap className="h-5 w-5 text-emerald-600" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-bold text-slate-900">Agentic AI System</CardTitle>
                                                <p className="text-sm text-slate-500 mt-1">OpenRouter • qwen/qwen3.6-plus:free (100% FREE)</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-300">
                                            ✓ Connected
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 md:grid-cols-3">
                                        <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Sparkles className="h-4 w-4 text-purple-600" />
                                                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">AI Capabilities</p>
                                            </div>
                                            <ul className="space-y-1.5 text-sm text-slate-700">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />Generate partnership emails</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />Personalize by business type</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />Create follow-up sequences</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />Analyze competitors</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <TrendingUp className="h-4 w-4 text-blue-600" />
                                                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Today's Stats</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-600">Emails generated</span>
                                                    <span className="font-bold text-slate-900">12</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-600">Tokens used</span>
                                                    <span className="font-bold text-slate-900">4,521</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-600">Cost</span>
                                                    <span className="font-bold text-emerald-600">$0.00 (FREE)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Model Info</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-600">Model</span>
                                                    <span className="font-bold text-slate-900">Qwen 3.6+</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-600">Context</span>
                                                    <span className="font-bold text-slate-900">1M tokens</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-600">Type</span>
                                                    <span className="font-bold text-purple-600">Agentic</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* AI Actions Grid */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
                                        <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                            <Sparkles className="h-5 w-5 text-purple-600" />
                                            Generate Campaign
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-sm text-slate-600 mb-4">Let AI analyze your database and create a personalized outreach campaign targeting high-DA businesses.</p>
                                        <div className="space-y-3">
                                            <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold">
                                                <Sparkles className="h-4 w-4 mr-2" />
                                                Generate Real Estate Campaign
                                            </Button>
                                            <Button variant="outline" className="w-full h-12 border-purple-200 text-purple-700 hover:bg-purple-50 rounded-xl font-semibold">
                                                Generate Directory Campaign
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                                        <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                            <MessageSquare className="h-5 w-5 text-green-600" />
                                            Email Generator
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-sm text-slate-600 mb-4">Generate personalized partnership emails using AI. Each email is optimized for response rates.</p>
                                        <div className="space-y-3">
                                            <Input 
                                                placeholder="Business name (e.g., Ray White Southport)"
                                                className="h-11 rounded-xl"
                                            />
                                            <Button className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold">
                                                <Zap className="h-4 w-4 mr-2" />
                                                Generate AI Email
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* AI Generated Content Preview */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6 bg-white">
                                    <CardTitle className="text-lg font-bold text-slate-900">Recent AI Generations</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {[
                                            { business: "Ray White Surfers Paradise", type: "Partnership Email", time: "2 min ago" },
                                            { business: "LJ Hooker Southport", type: "Follow-up Email", time: "15 min ago" },
                                            { business: "Yelp Directory", type: "Listing Description", time: "1 hour ago" },
                                        ].map((gen, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-purple-100 rounded-lg">
                                                        <Sparkles className="h-4 w-4 text-purple-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-sm text-slate-900">{gen.business}</p>
                                                        <p className="text-xs text-slate-500">{gen.type} • {gen.time}</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm" className="text-xs">
                                                    View
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab !== "dashboard" && activeTab !== "bookings" && activeTab !== "services" && activeTab !== "messages" && activeTab !== "subscribers" && activeTab !== "seo" && activeTab !== "ai-agent" && (
                        <div className="flex flex-col items-center justify-center py-32 animate-in fade-in duration-1000">
                            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 relative group">
                                <AlertCircle className="w-10 h-10 text-slate-300 relative z-10" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Module Under Construction</h3>
                            <p className="text-slate-500 font-medium mt-2 text-center max-w-md">The <span className="text-blue-600 font-semibold">{activeTab}</span> module is being updated.</p>
                            <Button variant="outline" onClick={() => setActiveTab("dashboard")} className="mt-8 h-10 px-6 rounded-lg text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 border-slate-200">Return to Dashboard</Button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
