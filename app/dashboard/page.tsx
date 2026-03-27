"use client"

import { useState, useEffect } from "react"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { getBookingsByUser, getAllServices, updateUser } from "@/lib/firebase-service"
import { useRouter } from "next/navigation"
import { DashboardSupportPanel } from "@/components/dashboard-support-panel"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import {
    CalendarDays,
    Clock,
    CreditCard,
    MapPin,
    ArrowRight,
    Clock,
    CreditCard,
    MapPin,
    ArrowRight,
    Star,
    Shield,
    Sparkles,
    Loader2
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
            setProfileData({
                name: user.name || "",
                phone: user.phone || "",
                address: user.address || "",
                instructions: user.instructions || ""
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
            } else if (!user) {
                // Wait a bit for auth to initialize
                setTimeout(() => {
                    // If still no user after a timeout, we might stop loading, 
                    // but useAuth usually handles the initial check quickly.
                    // We'll let the user effect re-run when user becomes available.
                }, 1000)
            }
        }

        if (user) {
            fetchData()
        } else {
            // If user is null initially (before auth check completes), we might show loading
            // But if auth check completes and user is null, middleware redirects.
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

    // Sort bookings: by createdAt desc
    const sortedBookings = [...bookings].sort((a, b) => {
        const timeA = a.createdAt?.seconds || 0
        const timeB = b.createdAt?.seconds || 0
        return timeB - timeA
    })

    const futureBookings = sortedBookings.filter(b => b.status === 'scheduled' || b.status === 'pending')
    // Next booking is the most recent future booking - wait, sortedBookings is DESC (newest first).
    // Future bookings logic: technically 'next' should be the one closest to now in the future.
    // However, without a 'serviceDate' field, we can't truly know. 
    // We'll just show the latest 'pending' or 'scheduled' request as "Next Service" for now.
    const nextBooking = futureBookings.length > 0 ? futureBookings[0] : null

    const recentActivity = sortedBookings.slice(0, 3)
    const completedBookings = sortedBookings.filter(b => b.status === 'completed')

    if (loading && user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-50">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        )
    }

    return (
        <div className="container py-8 sm:py-12">
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                            <div className="bg-slate-900 p-6 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16" />
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg border-2 border-slate-800">
                                        {user?.name?.charAt(0) || "U"}
                                    </div>
                                    <div>
                                        <h2 className="text-base font-bold text-white max-w-[150px] truncate">{user?.name || "Welcome User"}</h2>
                                        <p className="text-slate-400 text-xs font-medium capitalize">{user?.role || "Member"}</p>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <UserNav activeTab={activeTab} setActiveTab={setActiveTab} />
                            </CardContent>
                        </Card>

                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                            <div className="absolute right-0 top-0 h-32 w-32 bg-white/10 rounded-full blur-3xl translate-x-10 -translate-y-10" />
                            <div className="relative z-10">
                                <Shield className="w-8 h-8 text-blue-200 mb-4" />
                                <h3 className="font-bold text-lg">Crystal Cover</h3>
                                <p className="text-blue-100 text-xs mt-1 mb-4">Your services are insured and guaranteed for quality.</p>
                                <Button size="sm" variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 border-0">View Policy</Button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="lg:col-span-3 space-y-8">

                    {/* OVERVIEW TAB */}
                    {activeTab === "dashboard" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
                            {/* Header Section */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">My Dashboard</h1>
                                    <p className="text-slate-500 font-medium text-base mt-1">Manage your bookings and account preferences.</p>
                                </div>
                                <Button onClick={() => router.push('/#booking')} className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 rounded-xl px-6 h-12">
                                    Book New Service
                                </Button>
                            </div>

                            {/* Status Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <CalendarDays className="w-24 h-24" />
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-slate-500 text-sm font-medium">Next Service</p>
                                        <h3 className="text-xl font-bold text-slate-900 mt-1">{nextBooking ? new Date(nextBooking.createdAt.seconds * 1000).toLocaleDateString() : "No upcoming"}</h3>
                                        <p className="text-blue-600 text-xs font-semibold mt-2 flex items-center">
                                            <Clock className="w-3 h-3 mr-1" /> {nextBooking ? (nextBooking.package?.category || "Service") : "Book now to schedule"}
                                        </p>
                                    </div>
                                </Card>
                                <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <CreditCard className="w-24 h-24" />
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-slate-500 text-sm font-medium">Total Spent</p>
                                        <h3 className="text-2xl font-bold text-slate-900 mt-1">NPR {totalSpent.toLocaleString()}</h3>
                                        <p className="text-green-600 text-xs font-semibold mt-2 flex items-center">
                                            <Sparkles className="w-3 h-3 mr-1" /> Lifetime Value
                                        </p>
                                    </div>
                                </Card>
                                <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <MapPin className="w-24 h-24" />
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-slate-500 text-sm font-medium">Primary Address</p>
                                        <h3 className="text-lg font-bold text-slate-900 mt-1 truncate">{user?.address || "Address Not Set"}</h3>
                                        <p className="text-slate-400 text-xs font-semibold mt-2">Default Location</p>
                                    </div>
                                </Card>
                            </div>

                            {/* Recent Bookings Section */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6 flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle className="text-lg font-bold text-slate-900">Recent Activity</CardTitle>
                                        <p className="text-slate-500 text-sm mt-1">Your latest service history</p>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => setActiveTab('bookings')} className="text-slate-500 hover:text-slate-900">View All</Button>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y divide-slate-50">
                                        {recentActivity.length > 0 ? (
                                            recentActivity.map((booking) => (
                                                <div key={booking.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                                            <Sparkles className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-slate-900 text-sm">{booking.package?.category || "Custom Service"}</p>
                                                            <p className="text-xs text-slate-500 mt-1 flex items-center">
                                                                <CalendarDays className="w-3 h-3 mr-1" /> {booking.createdAt ? new Date(booking.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-medium text-slate-900 text-sm">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${booking.status === 'completed' ? 'bg-green-50 text-green-700' :
                                                                booking.status === 'cancelled' ? 'bg-red-50 text-red-700' :
                                                                    'bg-blue-50 text-blue-700'
                                                            }`}>
                                                            {booking.status || 'Pending'}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-12 text-center text-slate-500 text-sm">
                                                No recent bookings found.
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Featured Promotion / Services Preview */}
                            {services.length > 0 && (
                                <div className="rounded-2xl bg-slate-900 p-8 text-white relative overflow-hidden shadow-2xl shadow-slate-900/10">
                                    <div className="absolute right-0 top-0 h-64 w-64 bg-blue-500 rounded-full blur-3xl opacity-20 translate-x-20 -translate-y-20" />
                                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                        <div>
                                            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20 mb-4">
                                                <Star className="w-3 h-3 mr-1" /> Featured Service
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">{services[0].title}</h3>
                                            <p className="text-slate-400 max-w-md line-clamp-2">{services[0].description}</p>
                                        </div>
                                        <Button onClick={() => router.push('/#booking')} className="bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl px-8 h-12 flex items-center">
                                            Book Now <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "support" && (
                        <DashboardSupportPanel user={user} />
                    )}

                    {/* BOOKINGS TAB */}
                    {activeTab === "bookings" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-6 duration-500">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">My Bookings</h1>
                                <p className="text-slate-500 font-medium text-base mt-1">Full history of your scheduled services.</p>
                            </div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="divide-y divide-slate-50">
                                        {bookings.length > 0 ? (
                                            bookings.map((booking) => (
                                                <div key={booking.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50 transition-colors gap-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                                            <CalendarDays className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900 text-base">{booking.package?.category || "Custom Service"}</p>
                                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                                                                <span className="text-xs text-slate-500 flex items-center">
                                                                    <Clock className="w-3 h-3 mr-1" /> Booked: {booking.createdAt ? new Date(booking.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                                                                </span>
                                                                <span className="text-xs text-slate-500 flex items-center">
                                                                    ID: #{booking.id.slice(0, 8)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                                                        <div className="text-right">
                                                            <p className="font-bold text-slate-900">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                            <p className="text-xs text-slate-500">{booking.package?.frequency || "One-time"}</p>
                                                        </div>
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                                booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                                                    'bg-blue-100 text-blue-800'
                                                            }`}>
                                                            {booking.status || 'Pending'}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-20 text-center flex flex-col items-center justify-center">
                                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                                    <CalendarDays className="w-10 h-10 text-slate-300" />
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900">No Bookings Found</h3>
                                                <p className="text-slate-500 mt-2 max-w-sm mx-auto">You haven't made any bookings yet.</p>
                                                <Button onClick={() => router.push('/#booking')} className="mt-6">Book Your First Service</Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* SERVICE HISTORY TAB */}
                    {activeTab === "history" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-6 duration-500">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Service History</h1>
                                <p className="text-slate-500 font-medium text-base mt-1">Review your past completed cleanings.</p>
                            </div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="divide-y divide-slate-50">
                                        {completedBookings.length > 0 ? (
                                            completedBookings.map((booking) => (
                                                <div key={booking.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50 transition-colors gap-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                                            <Sparkles className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900 text-base">{booking.package?.category || "Custom Service"}</p>
                                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                                                                <span className="text-xs text-slate-500 flex items-center">
                                                                    <CalendarDays className="w-3 h-3 mr-1" /> Completed: {booking.createdAt ? new Date(booking.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                                                                </span>
                                                                <span className="text-xs text-slate-500 flex items-center">
                                                                    ID: #{booking.id.slice(0, 8)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                                                        <div className="text-right">
                                                            <p className="font-bold text-slate-900">NPR {(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString()}</p>
                                                            <p className="text-xs text-slate-500">Paid</p>
                                                        </div>
                                                        <Button variant="outline" size="sm" className="hidden sm:flex" onClick={() => toast({ title: "Receipt generation coming soon!" })}>
                                                            Receipt
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-20 text-center flex flex-col items-center justify-center">
                                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                                    <Sparkles className="w-10 h-10 text-slate-300" />
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900">No History Yet</h3>
                                                <p className="text-slate-500 mt-2 max-w-sm mx-auto">Your completed services will appear here.</p>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* PROFILE SETTINGS TAB */}
                    {activeTab === "profile" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-6 duration-500">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Profile Settings</h1>
                                <p className="text-slate-500 font-medium text-base mt-1">Update your personal information and cleaning preferences.</p>
                            </div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-6">
                                    <CardTitle>Personal Information</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <form onSubmit={handleProfileSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input 
                                                    id="name" 
                                                    value={profileData.name} 
                                                    onChange={e => setProfileData({...profileData, name: e.target.value})}
                                                    placeholder="John Doe" 
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input 
                                                    id="phone" 
                                                    value={profileData.phone} 
                                                    onChange={e => setProfileData({...profileData, phone: e.target.value})}
                                                    placeholder="0400 000 000" 
                                                />
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <Label htmlFor="address">Primary Address</Label>
                                                <Input 
                                                    id="address" 
                                                    value={profileData.address} 
                                                    onChange={e => setProfileData({...profileData, address: e.target.value})}
                                                    placeholder="123 Example Street, Suburb, State Postcode" 
                                                />
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <Label htmlFor="instructions">Permanent Cleaning Instructions (Optional)</Label>
                                                <Textarea 
                                                    id="instructions" 
                                                    value={profileData.instructions} 
                                                    onChange={e => setProfileData({...profileData, instructions: e.target.value})}
                                                    placeholder="E.g., Please enter through the side gate. Watch out for the dog. Use green cleaning products only."
                                                    className="resize-none h-24"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-end pt-4 border-t border-slate-100">
                                            <Button type="submit" disabled={isSavingProfile} className="bg-blue-600 hover:bg-blue-700">
                                                {isSavingProfile && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                                Save Settings
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* OTHER TABS PLACEHOLDER */}
                    {activeTab !== "dashboard" && activeTab !== "bookings" && activeTab !== "support" && activeTab !== "history" && activeTab !== "profile" && (
                        <div className="flex flex-col items-center justify-center py-32 animate-in fade-in duration-500">
                            <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                                <Clock className="w-10 h-10 text-slate-400" />
}
