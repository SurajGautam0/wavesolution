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
import { getAllBookings, getApprovedTestimonials } from "@/lib/firebase-service"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AdminDashboardPage() {
    const [activeTab, setActiveTab] = useState("dashboard")
    const [bookings, setBookings] = useState<any[]>([])
    const [testimonials, setTestimonials] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const [bookingsData, testimonialsData] = await Promise.all([
                    getAllBookings(),
                    getApprovedTestimonials()
                ])
                setBookings(bookingsData)
                setTestimonials(testimonialsData)
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
                        <Card className="border-none shadow-2xl shadow-blue-900/5 bg-white rounded-[2.5rem] overflow-hidden">
                            <div className="bg-primary p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16" />
                                <h2 className="text-xl font-black uppercase tracking-widest relative z-10">Admin Panel</h2>
                                <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mt-1 relative z-10">Crystalfront v2.0</p>
                            </div>
                            <CardContent className="p-6">
                                <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-2xl shadow-blue-900/5 bg-blue-950 rounded-[2.5rem] overflow-hidden hidden lg:block">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-white/10 rounded-2xl">
                                        <ShieldCheck className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-sm">Secure Session</p>
                                        <p className="text-white/40 text-[10px] uppercase font-black">Admin Access: Granted</p>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full h-12 rounded-full border-white/10 text-white hover:bg-white/5 font-black text-[10px] uppercase tracking-widest">
                                    Security Logs
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </aside>

                <main className="lg:col-span-3 space-y-10">
                    {activeTab === "dashboard" && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h1 className="text-4xl sm:text-5xl font-black text-blue-950 tracking-tighter">Command Center</h1>
                                    <p className="text-muted-foreground font-medium text-lg">System-wide overview and real-time analytics.</p>
                                </div>
                                <div className="flex items-center space-x-2 bg-blue-50 px-5 py-3 rounded-2xl border border-blue-100">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-black uppercase tracking-widest text-primary">Live Data</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                                {stats.map((stat, i) => (
                                    <Card key={i} className="border-none shadow-sm shadow-blue-900/5 bg-white rounded-[2rem] overflow-hidden transition-all hover:scale-[1.03] active:scale-95 group cursor-default">
                                        <CardContent className="p-8">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className={cn("p-4 rounded-2xl transition-transform group-hover:rotate-12",
                                                    stat.color === "blue" ? "bg-blue-50 text-blue-600" :
                                                        stat.color === "indigo" ? "bg-indigo-50 text-indigo-600" :
                                                            stat.color === "emerald" ? "bg-emerald-50 text-emerald-600" :
                                                                "bg-amber-50 text-amber-600"
                                                )}>
                                                    <stat.icon className="h-6 w-6" />
                                                </div>
                                                <div className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                    stat.trendUp ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                                                )}>
                                                    {stat.trend}
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-black text-blue-950 mb-1">{stat.value}</h3>
                                            <p className="text-[10px] font-black text-blue-900/30 uppercase tracking-[0.2em] leading-none mb-1">{stat.title}</p>
                                            <p className="text-[10px] text-muted-foreground font-bold">{stat.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                                <Card className="xl:col-span-2 border-none shadow-2xl shadow-blue-900/5 bg-white rounded-[2.5rem] overflow-hidden">
                                    <CardHeader className="border-b border-gray-50 p-8 sm:p-10 flex flex-row items-center justify-between">
                                        <div>
                                            <CardTitle className="text-2xl font-black text-blue-950 uppercase tracking-tight">Recent Activity</CardTitle>
                                            <p className="text-muted-foreground text-xs font-medium mt-1">Latest 5 bookings from Lalitpur area</p>
                                        </div>
                                        <Button variant="ghost" onClick={() => setActiveTab("bookings")} className="text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/5">View All</Button>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-gray-50">
                                            {bookings.slice(0, 5).map((booking, i) => (
                                                <div key={i} className="px-8 sm:px-10 py-6 sm:py-8 flex items-center justify-between hover:bg-slate-50 transition-all group">
                                                    <div className="flex items-center space-x-5">
                                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center font-black text-primary text-xl uppercase shadow-sm border border-blue-100/50 group-hover:scale-110 transition-transform">
                                                            {booking.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="text-base font-black text-blue-950">{booking.name}</p>
                                                            <div className="flex items-center space-x-2 mt-1">
                                                                <span className="text-[10px] font-black text-blue-500/60 uppercase tracking-widest">{booking.package?.category || 'Custom'}</span>
                                                                <span className="w-1 h-1 bg-gray-200 rounded-full" />
                                                                <span className="text-[10px] font-bold text-muted-foreground">{new Date(booking.createdAt?.seconds * 1000).toLocaleDateString()}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-black text-blue-950">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                        <div className="flex items-center justify-end space-x-1 mt-1">
                                                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                                                            <span className="text-[10px] font-black text-green-500 uppercase">Received</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="space-y-8">
                                    <Card className="border-none shadow-2xl shadow-blue-900/5 bg-primary rounded-[2.5rem] overflow-hidden text-white relative">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse" />
                                        <CardHeader className="p-10 pb-0 relative z-10">
                                            <Zap className="w-10 h-10 text-secondary mb-4" />
                                            <CardTitle className="text-2xl font-black uppercase tracking-tight">System Node</CardTitle>
                                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Global Health Status</p>
                                        </CardHeader>
                                        <CardContent className="p-10 space-y-6 relative z-10">
                                            <div className="space-y-4">
                                                {[
                                                    { label: "Core Firestore", status: "Active", color: "text-green-400" },
                                                    { label: "Asset Storage", status: "Healthy", color: "text-green-400" },
                                                    { label: "Auth Bridge", status: "Healthy", color: "text-green-400" },
                                                ].map((service, i) => (
                                                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10">
                                                        <span className="text-xs font-black uppercase tracking-widest">{service.label}</span>
                                                        <span className={`text-[10px] font-black uppercase tracking-widest ${service.color}`}>{service.status}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-none shadow-2xl shadow-blue-900/5 bg-white rounded-[2.5rem] overflow-hidden">
                                        <CardContent className="p-10 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6">
                                                <MessageSquare className="w-10 h-10 text-primary" />
                                            </div>
                                            <h4 className="text-xl font-black text-blue-950 uppercase">Feedback</h4>
                                            <p className="text-sm text-muted-foreground font-medium mt-2 mb-6">{testimonials.length} reviews awaiting your moderation.</p>
                                            <Button className="w-full h-14 rounded-full bg-blue-50 hover:bg-blue-100 text-primary font-black uppercase tracking-widest shadow-none border-none">Moderate</Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "bookings" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h1 className="text-4xl sm:text-5xl font-black text-blue-950 tracking-tighter">Bookings</h1>
                                    <p className="text-muted-foreground font-medium text-lg">Detailed management of all client requests.</p>
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

                            <Card className="border-none shadow-2xl shadow-blue-900/5 bg-white rounded-[2.5rem] overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse min-w-[800px]">
                                            <thead className="bg-slate-50/50 border-b border-gray-100">
                                                <tr>
                                                    <th className="px-10 py-8 text-[10px] font-black text-blue-950 uppercase tracking-[0.2em]">Client Profile</th>
                                                    <th className="px-10 py-8 text-[10px] font-black text-blue-950 uppercase tracking-[0.2em]">Service Details</th>
                                                    <th className="px-10 py-8 text-[10px] font-black text-blue-950 uppercase tracking-[0.2em]">Add-ons</th>
                                                    <th className="px-10 py-8 text-[10px] font-black text-blue-950 uppercase tracking-[0.2em]">Financials</th>
                                                    <th className="px-10 py-8 text-[10px] font-black text-blue-950 uppercase tracking-[0.2em] text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {filteredBookings.map((booking, i) => (
                                                    <tr key={i} className="hover:bg-slate-50/80 transition-all group">
                                                        <td className="px-10 py-8">
                                                            <div className="flex items-center space-x-5">
                                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center font-black text-primary uppercase text-sm border border-blue-100/50">
                                                                    {booking.name.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <p className="text-base font-black text-blue-950">{booking.name}</p>
                                                                    <p className="text-[10px] font-bold text-muted-foreground flex items-center mt-1">
                                                                        <Clock className="w-3 h-3 mr-1" /> {new Date(booking.createdAt?.seconds * 1000).toLocaleDateString()}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-10 py-8 font-medium">
                                                            <p className="text-xs font-black text-blue-950">{booking.package?.category || 'Custom'}</p>
                                                            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mt-1 bg-blue-50 w-fit px-2 py-0.5 rounded-full">{booking.package?.frequency}</p>
                                                        </td>
                                                        <td className="px-10 py-8">
                                                            {booking.package?.includeInterior ? (
                                                                <div className="flex items-center space-x-2 text-indigo-600">
                                                                    <Sparkles className="w-3 h-3" />
                                                                    <span className="text-[10px] font-black uppercase tracking-widest">Interior</span>
                                                                </div>
                                                            ) : (
                                                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">—</span>
                                                            )}
                                                        </td>
                                                        <td className="px-10 py-8">
                                                            <p className="text-base font-black text-blue-950">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-yellow-50 text-yellow-600 border border-yellow-100 mt-2">
                                                                New Request
                                                            </span>
                                                        </td>
                                                        <td className="px-10 py-8 text-right">
                                                            <Button className="h-10 rounded-full bg-primary hover:bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest px-6 shadow-lg shadow-primary/20">Manage</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {filteredBookings.length === 0 && (
                                        <div className="py-20 text-center space-y-4">
                                            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto opacity-20" />
                                            <p className="text-sm font-black text-blue-950/20 uppercase tracking-widest">No matching bookings found</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab !== "dashboard" && activeTab !== "bookings" && (
                        <div className="flex flex-col items-center justify-center py-32 animate-in fade-in duration-1000">
                            <div className="w-28 h-28 bg-blue-50 rounded-[3rem] flex items-center justify-center mb-10 shadow-inner border border-blue-50 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <AlertCircle className="w-14 h-14 text-primary/20 relative z-10" />
                            </div>
                            <h3 className="text-3xl font-black text-blue-950 uppercase tracking-tight">Access Restricted</h3>
                            <p className="text-muted-foreground font-medium text-lg mt-3 text-center max-w-md">The <span className="text-primary font-black uppercase">{activeTab}</span> module is currently being optimized for high-performance data processing.</p>
                            <Button onClick={() => setActiveTab("dashboard")} className="mt-10 h-14 px-10 rounded-full bg-blue-50 hover:bg-blue-100 text-primary font-black uppercase tracking-widest border-none shadow-none">Back to Overview</Button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
