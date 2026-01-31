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
import { getAllBookings, getApprovedTestimonials, getAllServices, getAllContacts, getAllSubscriptions } from "@/lib/firebase-service"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AdminDashboardPage() {
    const [activeTab, setActiveTab] = useState("dashboard")
    const [bookings, setBookings] = useState<any[]>([])
    const [testimonials, setTestimonials] = useState<any[]>([])
    const [services, setServices] = useState<any[]>([])
    const [contacts, setContacts] = useState<any[]>([])
    const [subscriptions, setSubscriptions] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")

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
                                <p className="text-slate-400 text-xs font-medium mt-1 relative z-10">Crystalfront v2.1</p>
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
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Bookings Management</h1>
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
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Service Offerings</h1>
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
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Inbox</h1>
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
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Newsletter Subscribers</h1>
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

                    {activeTab !== "dashboard" && activeTab !== "bookings" && activeTab !== "services" && activeTab !== "messages" && activeTab !== "subscribers" && (
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
