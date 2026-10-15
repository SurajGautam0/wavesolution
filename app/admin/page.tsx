"use client"

import { useState, useEffect, useMemo, type FormEvent } from "react"
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
    ShieldCheck,
    Trash2,
    Plus,
    BarChart3,
    FileText,
    Tag,
    Link2,
    Activity,
    MapPin,
    PlusCircle,
    Save,
    Send,
    UserRound,
    UserRoundSearch,
    ListChecks,
    Star,
    Loader2,
    Building2,
    Briefcase,
    Copy,
    Sliders,
    MailCheck,
    Download,
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
    updatePost,
    deletePost,
    togglePostPublished,
    updateUserRole,
    updateBookingOperations,
    updateContactLead,
    getAllQuotes,
    createQuote,
    updateQuoteStatus,
    getAuditLog,
    recordAdminActivity,
    getAllInvoices,
    createInvoice,
    updateInvoicePayment,
    getEmailRecords,
    saveEmailRecord,
} from "@/lib/admin-firebase-service"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"

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
    const { user, loading: authLoading } = useAuth()
    const router = useRouter()

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
    const [quotes, setQuotes] = useState<any[]>([])
    const [auditLog, setAuditLog] = useState<any[]>([])
    const [invoices, setInvoices] = useState<any[]>([])
    const [emailRecords, setEmailRecords] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [subscriberSearch, setSubscriberSearch] = useState("")
    const filteredSubscriptions = subscriptions.filter((sub) =>
        String(sub.email || "").toLowerCase().includes(subscriberSearch.trim().toLowerCase())
    )

    const exportSubscribers = () => {
        const escapeCsv = (value: unknown) => `"${String(value ?? "").replace(/"/g, '""')}"`
        const rows = [
            ["Email address", "Subscribed on", "Status"],
            ...filteredSubscriptions.map((sub) => [sub.email, fmtDate(sub.createdAt), sub.status || "Active"]),
        ]
        const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\r\n")
        const url = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" }))
        const link = document.createElement("a")
        link.href = url
        link.download = "wave-solution-newsletter-subscribers.csv"
        link.click()
        URL.revokeObjectURL(url)
    }

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
    const [postExcerpt, setPostExcerpt] = useState("")
    const [postSeoTitle, setPostSeoTitle] = useState("")
    const [postSeoDescription, setPostSeoDescription] = useState("")
    const [editingPost, setEditingPost] = useState<any>(null)
    const [postSaving, setPostSaving] = useState(false)

    // ── user role
    const [roleUpdating, setRoleUpdating] = useState<string | null>(null)

    // ── operations / CRM / quotes
    const [operationDrafts, setOperationDrafts] = useState<Record<string, any>>({})
    const [leadDrafts, setLeadDrafts] = useState<Record<string, any>>({})
    const [quoteDraft, setQuoteDraft] = useState({ customerName: "", customerEmail: "", customerPhone: "", service: "Bond cleaning", propertySize: "", bedrooms: 2, bathrooms: 1, amount: "", addOns: "" })
    const [quoteSaving, setQuoteSaving] = useState(false)
    const [operationFilter, setOperationFilter] = useState("all")
    const [invoiceDrafts, setInvoiceDrafts] = useState<Record<string, any>>({})
    const [emailDraft, setEmailDraft] = useState({ to: "", subject: "", body: "" })
    const [emailSending, setEmailSending] = useState(false)
    const [emailConnection, setEmailConnection] = useState<{ connected: boolean; email?: string; error?: string } | null>(null)

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
        if (authLoading) return
        if (!user) router.replace("/login")
        else if (user.role !== "admin") router.replace("/dashboard")
    }, [authLoading, user, router])

    useEffect(() => {
        if (authLoading || user?.role !== "admin") return
        async function fetchData() {
            try {
                setLoading(true)
                const [
                    bookingsRes,
                    allTestimonialsRes,
                    servicesRes,
                    contactsRes,
                    subscriptionsRes,
                    usersRes,
                    couponsRes,
                    postsRes,
                ] = await Promise.allSettled([
                    getAllBookings(),
                    getAllTestimonials(),
                    getAllServices(),
                    getAllContacts(),
                    getAllSubscriptions(),
                    getAllUsers(),
                    getAllCoupons(),
                    getAllPosts(),
                ])

                const getVal = (res: PromiseSettledResult<any[]>) =>
                    res.status === "fulfilled" && Array.isArray(res.value) ? res.value : []

                const bookingsData = getVal(bookingsRes)
                const allTestimonialsData = getVal(allTestimonialsRes)
                const servicesData = getVal(servicesRes)
                const contactsData = getVal(contactsRes)
                const subscriptionsData = getVal(subscriptionsRes)
                const usersData = getVal(usersRes)
                const couponsData = getVal(couponsRes)
                const postsData = getVal(postsRes)

                setBookings(bookingsData)
                setAllTestimonials(allTestimonialsData)
                setTestimonials(allTestimonialsData.filter((t: any) => t.approved))
                setServices(servicesData)
                setContacts(contactsData)
                setSubscriptions(subscriptionsData)
                setUsers(usersData)
                setCoupons(couponsData)
                setPosts(postsData)

                // Log which collections failed in console without throwing an alert
                const failed = [
                    { name: "bookings", res: bookingsRes },
                    { name: "testimonials", res: allTestimonialsRes },
                    { name: "services", res: servicesRes },
                    { name: "contacts", res: contactsRes },
                    { name: "subscriptions", res: subscriptionsRes },
                    { name: "users", res: usersRes },
                    { name: "coupons", res: couponsRes },
                    { name: "posts", res: postsRes },
                ].filter(item => item.res.status === "rejected")

                if (failed.length > 0) {
                    console.warn("Some dashboard collections could not be fetched:", failed.map(f => f.name))
                }
            } catch (error) {
                console.error("Error fetching admin data:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [authLoading, user?.role])

    useEffect(() => {
        const requestedTab = new URLSearchParams(window.location.search).get("tab")
        if (requestedTab) setActiveTab(requestedTab)
    }, [])

    useEffect(() => {
        if (activeTab === "quotes" || activeTab === "dashboard") {
            getAllQuotes().then(setQuotes).catch(() => toast.error("Unable to load quotes. Check Firestore permissions."))
        }
        if (activeTab === "activity") {
            getAuditLog().then(setAuditLog).catch(() => toast.error("Unable to load activity history."))
        }
        if (activeTab === "invoices") {
            getAllInvoices().then(setInvoices).catch(() => toast.error("Unable to load invoices. Check Firestore permissions."))
        }
        if (activeTab === "communications") {
            getEmailRecords().then(setEmailRecords).catch(() => toast.error("Unable to load email history."))
            void checkEmailConnection()
        }
    }, [activeTab])

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
            writeAudit("Updated booking status", bookingId, `Status set to ${status}`)
            toast.success("Status updated to " + status)
        } catch {
            toast.error("Failed to update status")
        } finally {
            setBookingStatusUpdating(false)
        }
    }

    async function writeAudit(action: string, target: string, details: string) {
        try {
            await recordAdminActivity({ actor: user?.email || "Admin", action, target, details })
        } catch (error) {
            // The operational change has already succeeded; an unavailable log must not misreport it.
            console.warn("Admin activity log could not be written", error)
        }
    }

    async function saveOperation(booking: any) {
        const draft = operationDrafts[booking.id] || {}
        try {
            await updateBookingOperations(booking.id, {
                assignedTo: draft.assignedTo ?? booking.assignedTo ?? "",
                scheduledDate: draft.scheduledDate ?? booking.scheduledDate ?? booking.date ?? "",
                scheduledTime: draft.scheduledTime ?? booking.scheduledTime ?? booking.time ?? "",
                internalNotes: draft.internalNotes ?? booking.internalNotes ?? "",
            })
            setBookings((rows) => rows.map((row) => row.id === booking.id ? { ...row, ...draft, assignedTo: draft.assignedTo ?? booking.assignedTo ?? "", scheduledDate: draft.scheduledDate ?? booking.scheduledDate ?? booking.date ?? "", scheduledTime: draft.scheduledTime ?? booking.scheduledTime ?? booking.time ?? "", internalNotes: draft.internalNotes ?? booking.internalNotes ?? "" } : row))
            toast.success("Job schedule saved")
            writeAudit("Updated job schedule", booking.id, "Assignment, schedule or internal job note changed")
        } catch {
            toast.error("Could not save job details. Check Firestore permissions and try again.")
        }
    }

    async function saveLead(contact: any) {
        const draft = leadDrafts[contact.id] || {}
        try {
            await updateContactLead(contact.id, {
                leadStatus: draft.leadStatus ?? contact.leadStatus ?? "new",
                internalNotes: draft.internalNotes ?? contact.internalNotes ?? "",
            })
            setContacts((rows) => rows.map((row) => row.id === contact.id ? { ...row, leadStatus: draft.leadStatus ?? contact.leadStatus ?? "new", internalNotes: draft.internalNotes ?? contact.internalNotes ?? "" } : row))
            toast.success("Lead updated")
            writeAudit("Updated lead", contact.id, `Lead status: ${draft.leadStatus ?? contact.leadStatus ?? "new"}`)
        } catch {
            toast.error("Could not update this lead. Check Firestore permissions and try again.")
        }
    }

    async function handleCreateQuote(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!quoteDraft.customerName.trim() || !quoteDraft.service.trim() || Number(quoteDraft.amount) <= 0) {
            toast.error("Enter a customer, service and quote amount")
            return
        }
        setQuoteSaving(true)
        try {
            const quote = await createQuote({
                customerName: quoteDraft.customerName.trim(), customerEmail: quoteDraft.customerEmail.trim(), customerPhone: quoteDraft.customerPhone.trim(),
                service: quoteDraft.service.trim(), propertySize: quoteDraft.propertySize.trim(), bedrooms: Number(quoteDraft.bedrooms), bathrooms: Number(quoteDraft.bathrooms),
                addOns: quoteDraft.addOns.split(",").map((item) => item.trim()).filter(Boolean), amount: Number(quoteDraft.amount), status: "draft",
            })
            setQuotes((rows) => [quote, ...rows])
            setQuoteDraft({ customerName: "", customerEmail: "", customerPhone: "", service: "Bond cleaning", propertySize: "", bedrooms: 2, bathrooms: 1, amount: "", addOns: "" })
            toast.success("Quote saved as draft")
            writeAudit("Created quote", quote.id, `${quote.service} · $${quote.amount}`)
        } catch {
            toast.error("Could not save quote. Check Firestore permissions and try again.")
        } finally {
            setQuoteSaving(false)
        }
    }

    async function changeQuoteStatus(quote: any, status: string) {
        try {
            await updateQuoteStatus(quote.id, status)
            setQuotes((rows) => rows.map((row) => row.id === quote.id ? { ...row, status } : row))
            toast.success("Quote updated")
            writeAudit("Updated quote", quote.id, `Quote status: ${status}`)
        } catch {
            toast.error("Could not update quote status")
        }
    }

    async function checkEmailConnection() {
        try {
            const token = await auth.currentUser?.getIdToken()
            if (!token) throw new Error("Sign in again to check email settings")
            const response = await fetch("/api/admin/email/status", { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" })
            const result = await response.json()
            setEmailConnection(result)
        } catch (error: any) {
            setEmailConnection({ connected: false, error: error.message || "Unable to check email connection" })
        }
    }

    async function handleSendCustomerEmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setEmailSending(true)
        try {
            const token = await auth.currentUser?.getIdToken()
            if (!token) throw new Error("Your session expired. Sign in again.")
            const response = await fetch("/api/admin/email", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(emailDraft),
            })
            const result = await response.json()
            if (!response.ok || !result.success) throw new Error(result.message || "Email could not be sent")

            try {
                const record = await saveEmailRecord({ ...emailDraft, status: "sent", messageId: result.messageId, sentBy: user?.email || "Admin" })
                setEmailRecords((rows) => [record, ...rows])
            } catch (error) {
                console.warn("Email was sent but its history record could not be saved", error)
            }
            writeAudit("Sent customer email", emailDraft.to, emailDraft.subject)
            toast.success(`Email sent to ${emailDraft.to}`)
            setEmailDraft({ to: "", subject: "", body: "" })
        } catch (error: any) {
            toast.error(error.message || "Email could not be sent")
        } finally {
            setEmailSending(false)
        }
    }

    async function handleCreateInvoice(booking: any) {
        const amountDue = Number(booking.package?.totalPrice || booking.package?.price || 0)
        if (amountDue <= 0) {
            toast.error("This booking has no price. Create or update its quote first.")
            return
        }
        const now = new Date()
        const invoiceNumber = `WS-${now.getFullYear()}-${booking.id.slice(-6).toUpperCase()}`
        try {
            const invoice = await createInvoice({
                bookingId: booking.id,
                invoiceNumber,
                customerName: booking.name || "Customer",
                customerEmail: booking.email || "",
                customerPhone: booking.phone || "",
                service: booking.package?.category || booking.service || "Cleaning service",
                amountDue,
                amountPaid: 0,
                status: "unpaid",
                currency: "AUD",
                issuedAt: now.toISOString(),
            })
            setInvoices((rows) => [invoice, ...rows])
            toast.success(`Invoice ${invoiceNumber} created`)
            writeAudit("Created invoice", invoice.id, `${invoiceNumber} · A$${amountDue.toLocaleString("en-AU")}`)
        } catch (error: any) {
            toast.error(error.message || "Invoice could not be created")
        }
    }

    async function handleSaveInvoicePayment(invoice: any) {
        const draft = invoiceDrafts[invoice.id] || {}
        const amountPaid = Math.max(0, Math.min(invoice.amountDue, Number(draft.amountPaid ?? invoice.amountPaid ?? 0)))
        const status = amountPaid >= invoice.amountDue ? "paid" : amountPaid > 0 ? "partial" : "unpaid"
        try {
            await updateInvoicePayment(invoice.id, {
                amountPaid,
                status,
                paymentMethod: draft.paymentMethod ?? invoice.paymentMethod ?? "",
                paymentReference: draft.paymentReference ?? invoice.paymentReference ?? "",
            })
            setInvoices((rows) => rows.map((row) => row.id === invoice.id ? { ...row, amountPaid, status, paymentMethod: draft.paymentMethod ?? invoice.paymentMethod ?? "", paymentReference: draft.paymentReference ?? invoice.paymentReference ?? "" } : row))
            toast.success("Payment record updated")
            writeAudit("Updated invoice payment", invoice.id, `${status} · A$${amountPaid.toLocaleString("en-AU")}`)
        } catch {
            toast.error("Payment record could not be updated. Check Firestore permissions.")
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
            const slug = (editingPost?.slug || postTitle).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
            const postData = { title: postTitle.trim(), content: postContent, slug, excerpt: postExcerpt, seoTitle: postSeoTitle, seoDescription: postSeoDescription }
            if (editingPost) {
                const updatedPost = await updatePost(editingPost.id, postData)
                setPosts((prev) => prev.map((post) => post.id === editingPost.id ? { ...post, ...updatedPost } : post))
                writeAudit("Edited blog post", editingPost.id, postData.title)
                toast.success("Post changes saved")
            } else {
                const newPost = await savePost(postData)
                setPosts((prev) => [newPost, ...prev])
                writeAudit("Created blog draft", newPost.id, postData.title)
                toast.success("Post saved as draft")
            }
            clearPostEditor()
        } catch {
            toast.error("Failed to save post. Check the slug and Firestore permissions.")
        } finally {
            setPostSaving(false)
        }
    }

    function clearPostEditor() {
        setEditingPost(null)
        setPostTitle("")
        setPostContent("")
        setPostExcerpt("")
        setPostSeoTitle("")
        setPostSeoDescription("")
    }

    function editPost(post: any) {
        setEditingPost(post)
        setPostTitle(post.title || "")
        setPostContent(post.content || "")
        setPostExcerpt(post.excerpt || "")
        setPostSeoTitle(post.seoTitle || "")
        setPostSeoDescription(post.seoDescription || "")
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    async function handleDeletePost(id: string) {
        try {
            await deletePost(id)
            setPosts((prev) => prev.filter((p) => p.id !== id))
            writeAudit("Deleted blog post", id, "Blog record deleted")
            toast.success("Post deleted")
        } catch {
            toast.error("Failed to delete post")
        }
    }

    async function handleTogglePublished(id: string, published: boolean) {
        try {
            await togglePostPublished(id, !published)
            setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, published: !published } : p)))
            writeAudit(published ? "Unpublished blog post" : "Published blog post", id, "CMS visibility changed")
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
            writeAudit("Changed user role", userId, `Role set to ${role}`)
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

    if (loading || authLoading || user?.role !== "admin") {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="flex flex-col items-center space-y-3">
                    <Loader2 className="h-8 w-8 text-slate-700 animate-spin" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Loading Workspace...</p>
                </div>
            </div>
        )
    }

    // ─── render ────────────────────────────────────────────────────────────

    return (
        <div className="mx-auto w-full max-w-[1680px] px-3 py-3 sm:px-6 sm:py-6 lg:px-8">
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
                                    <p className="font-semibold text-slate-900 mt-0.5">A${(managingBooking.package?.totalPrice || managingBooking.package?.price || 0).toLocaleString("en-AU")}</p>
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

            <div className="flex min-w-0 flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-7">
                {/* Sidebar */}
                <aside className="min-w-0 lg:col-span-1">
                    <div className="space-y-4 lg:sticky lg:top-20">
                        <Card className="min-w-0 overflow-hidden rounded-2xl border-slate-200/80 bg-white shadow-sm lg:sticky lg:top-[4.75rem]">
                            <div className="hidden border-b border-slate-100 px-5 py-5 lg:block">
                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">Wave Solution</p>
                                <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Operations</h2>
                                <p className="mt-1 text-xs text-slate-500">Workspace · {user?.role || "Admin"}</p>
                            </div>
                            <CardContent className="min-w-0 p-2 lg:p-3">
                                <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />
                            </CardContent>
                        </Card>

                        <div className="-mx-1 rounded-2xl border border-slate-200/80 bg-white px-3 py-2 shadow-sm lg:hidden">
                            <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Jump to</p>
                            <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} compactMobile />
                        </div>

                        <div className="hidden rounded-2xl border border-slate-200/80 bg-white p-4 lg:block">
                            <div className="flex items-center gap-3"><span className="rounded-xl bg-emerald-50 p-2 text-emerald-700"><ShieldCheck className="h-4 w-4" /></span><div className="min-w-0"><p className="text-xs font-semibold text-slate-800">Signed in</p><p className="truncate text-[11px] text-slate-500">{user?.email || "Admin account"}</p></div></div>
                        </div>
                    </div>
                </aside>

                {/* Main content */}
                <main className="min-w-0 space-y-6 sm:space-y-8">

                    {/* ── DASHBOARD ─────────────────────────────────────────────────── */}
                    {activeTab === "dashboard" && (
                        <div className="space-y-6">
                            <section className="relative overflow-hidden rounded-[28px] bg-[#142b3b] p-7 text-white shadow-sm sm:p-9">
                                <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
                                <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-end">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Wave Solution · Operations</p>
                                        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Operations overview{user?.name ? ` · ${user.name.split(" ")[0]}` : ""}</h1>
                                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">Your bookings, field jobs and customer enquiries in one workspace.</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <Button onClick={() => setActiveTab("quotes")} className="rounded-xl bg-cyan-400 px-4 font-semibold text-slate-950 hover:bg-cyan-300"><PlusCircle className="mr-2 h-4 w-4" />Create quote</Button>
                                        <Button onClick={() => setActiveTab("operations")} variant="outline" className="rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"><ListChecks className="mr-2 h-4 w-4" />Open job board</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {[
                                    { label: "Bookings", value: bookings.length.toLocaleString(), note: `${bookings.filter((b) => !["completed", "cancelled"].includes((b.status || "").toLowerCase())).length} active`, icon: CalendarDays, color: "text-blue-700 bg-blue-50" },
                                    { label: "New enquiries", value: contacts.filter((c) => !c.leadStatus || c.leadStatus === "new").length.toLocaleString(), note: `${contacts.length} total leads`, icon: UserRoundSearch, color: "text-violet-700 bg-violet-50" },
                                    { label: "Jobs to schedule", value: bookings.filter((b) => !b.scheduledDate && !b.date && b.status !== "cancelled" && b.status !== "completed").length.toLocaleString(), note: "Needs a date or time", icon: Clock, color: "text-amber-700 bg-amber-50" },
                                    { label: "Recorded booking value", value: `A$${totalRevenue.toLocaleString("en-AU")}`, note: "From saved bookings", icon: DollarSign, color: "text-emerald-700 bg-emerald-50" },
                                ].map((metric) => (
                                    <Card key={metric.label} className="rounded-2xl border-slate-200/80 shadow-sm">
                                        <CardContent className="p-5">
                                            <div className="flex items-start justify-between"><div><p className="text-sm font-medium text-slate-500">{metric.label}</p><p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{metric.value}</p></div><span className={cn("rounded-xl p-2.5", metric.color)}><metric.icon className="h-5 w-5" /></span></div>
                                            <p className="mt-3 text-xs text-slate-500">{metric.note}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </section>

                            <section className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.8fr)]">
                                <Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-sm">
                                    <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                                        <div><CardTitle className="text-base font-semibold text-slate-900">Latest bookings</CardTitle><p className="mt-1 text-sm text-slate-500">Recent customer requests and job status</p></div>
                                        <Button variant="outline" size="sm" onClick={() => setActiveTab("bookings")} className="rounded-lg">All bookings</Button>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-slate-100">
                                            {bookings.slice(0, 6).map((booking) => <button key={booking.id} onClick={() => setManagingBooking(booking)} className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50 sm:px-6">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">{booking.name?.charAt(0) || "?"}</span>
                                                <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold text-slate-900">{booking.name || "New customer"}</span><span className="mt-1 block truncate text-xs text-slate-500">{booking.package?.category || booking.service || "Cleaning service"} · {booking.scheduledDate || booking.date || "Date not set"}</span></span>
                                                <span className="text-right"><span className="block text-sm font-semibold text-slate-900">A${(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString("en-AU")}</span><span className={cn("mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium capitalize ring-1 ring-inset", statusColor(booking.status || "pending"))}>{booking.status || "pending"}</span></span>
                                            </button>)}
                                            {bookings.length === 0 && <p className="px-6 py-12 text-center text-sm text-slate-500">No bookings have been recorded yet.</p>}
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="rounded-2xl border-slate-200/80 shadow-sm">
                                    <CardHeader className="border-b border-slate-100 px-5 py-4"><CardTitle className="text-base font-semibold text-slate-900">Needs attention</CardTitle><p className="mt-1 text-sm text-slate-500">Items that may need a follow-up</p></CardHeader>
                                    <CardContent className="space-y-3 p-4">
                                        {[
                                            { label: "New leads", count: contacts.filter((c) => !c.leadStatus || c.leadStatus === "new").length, action: "customers", icon: UserRoundSearch },
                                            { label: "Unscheduled jobs", count: bookings.filter((b) => !b.scheduledDate && !b.date && b.status !== "cancelled" && b.status !== "completed").length, action: "operations", icon: CalendarDays },
                                            { label: "Reviews to approve", count: pendingTestimonials.length, action: "messages", icon: MessageSquare },
                                            { label: "Draft quotes", count: quotes.filter((q) => q.status === "draft").length, action: "quotes", icon: FileText },
                                        ].map((item) => <button key={item.label} onClick={() => setActiveTab(item.action)} className="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-slate-300 hover:bg-slate-50"><span className="rounded-lg bg-slate-100 p-2 text-slate-600"><item.icon className="h-4 w-4" /></span><span className="flex-1 text-sm font-medium text-slate-700">{item.label}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{item.count}</span></button>)}
                                    </CardContent>
                                </Card>
                            </section>
                        </div>
                    )}

                    {/* ── OPERATIONS ─────────────────────────────────────────────────── */}
                    {activeTab === "operations" && (
                        <div className="space-y-6">
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Field operations</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Job board</h2><p className="mt-2 text-sm text-slate-500">Schedule bookings, assign a crew member and keep job notes with the booking.</p></div>
                                <div className="flex flex-wrap gap-2">{[["all", "All jobs"], ["unscheduled", "Unscheduled"], ["active", "Active"]].map(([value, label]) => <Button key={value} size="sm" variant={operationFilter === value ? "default" : "outline"} onClick={() => setOperationFilter(value)} className={cn("rounded-lg", operationFilter === value && "bg-slate-900 text-white hover:bg-slate-800")}>{label}</Button>)}</div>
                            </div>
                            <div className="grid gap-4 md:grid-cols-3">
                                {[{ title: "To schedule", value: bookings.filter((b) => !b.scheduledDate && !b.date && !["completed", "cancelled"].includes(b.status)).length, color: "text-amber-700 bg-amber-50" }, { title: "Confirmed", value: bookings.filter((b) => b.status === "confirmed").length, color: "text-blue-700 bg-blue-50" }, { title: "Completed", value: bookings.filter((b) => b.status === "completed").length, color: "text-emerald-700 bg-emerald-50" }].map((item) => <Card key={item.title} className="rounded-2xl border-slate-200/80"><CardContent className="flex items-center justify-between p-4"><p className="text-sm font-medium text-slate-600">{item.title}</p><span className={cn("rounded-full px-3 py-1 text-sm font-semibold", item.color)}>{item.value}</span></CardContent></Card>)}
                            </div>
                            <div className="grid gap-4 xl:grid-cols-2">
                                {bookings.filter((b) => operationFilter === "all" || (operationFilter === "unscheduled" ? !b.scheduledDate && !b.date && !["completed", "cancelled"].includes(b.status) : !["completed", "cancelled"].includes(b.status))).map((booking) => {
                                    const draft = operationDrafts[booking.id] || {}
                                    const address = [booking.address, booking.city, booking.postcode].filter(Boolean).join(", ")
                                    return <Card key={booking.id} className="overflow-hidden rounded-2xl border-slate-200/80 shadow-sm">
                                        <CardHeader className="border-b border-slate-100 bg-white px-5 py-4">
                                            <div className="flex items-start justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-600">{booking.name?.charAt(0) || "?"}</span><div className="min-w-0"><CardTitle className="truncate text-base font-semibold text-slate-900">{booking.name || "Customer booking"}</CardTitle><p className="mt-1 truncate text-xs text-slate-500">{booking.package?.category || booking.service || "Cleaning service"} · {booking.package?.propertyType || booking.propertyType || "Property details pending"}</p></div></div><span className={cn("shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ring-1 ring-inset", statusColor(booking.status || "pending"))}>{booking.status || "pending"}</span></div>
                                        </CardHeader>
                                        <CardContent className="space-y-4 p-5">
                                            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500"><span>{booking.email || "No email"}{booking.phone ? ` · ${booking.phone}` : ""}</span>{address && <a className="inline-flex items-center gap-1 font-medium text-cyan-800 hover:underline" href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer"><MapPin className="h-3.5 w-3.5" />Open map</a>}</div>
                                            {address && <p className="text-xs text-slate-600">{address}</p>}
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <label className="text-xs font-medium text-slate-600">Job date<input type="date" value={String(draft.scheduledDate ?? booking.scheduledDate ?? booking.date ?? "").slice(0, 10)} onChange={(event) => setOperationDrafts((rows) => ({ ...rows, [booking.id]: { ...rows[booking.id], scheduledDate: event.target.value } }))} className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" /></label>
                                                <label className="text-xs font-medium text-slate-600">Arrival time<input type="time" value={draft.scheduledTime ?? booking.scheduledTime ?? booking.time ?? ""} onChange={(event) => setOperationDrafts((rows) => ({ ...rows, [booking.id]: { ...rows[booking.id], scheduledTime: event.target.value } }))} className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" /></label>
                                            </div>
                                            <label className="block text-xs font-medium text-slate-600">Assign crew<select value={draft.assignedTo ?? booking.assignedTo ?? ""} onChange={(event) => setOperationDrafts((rows) => ({ ...rows, [booking.id]: { ...rows[booking.id], assignedTo: event.target.value } }))} className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"><option value="">Unassigned</option>{users.filter((member) => ["worker", "admin"].includes(member.role)).map((member) => <option key={member.id} value={member.name || member.email}>{member.name || member.email} · {member.role}</option>)}</select></label>
                                            <label className="block text-xs font-medium text-slate-600">Internal job notes<textarea rows={2} value={draft.internalNotes ?? booking.internalNotes ?? ""} onChange={(event) => setOperationDrafts((rows) => ({ ...rows, [booking.id]: { ...rows[booking.id], internalNotes: event.target.value } }))} placeholder="Access details, crew instructions…" className="mt-1.5 w-full resize-y rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" /></label>
                                            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4"><div className="flex gap-2"><Button size="sm" variant="outline" onClick={() => setManagingBooking(booking)} className="rounded-lg">Booking status</Button><a href={booking.phone ? `tel:${booking.phone}` : booking.email ? `mailto:${booking.email}` : undefined} className={cn("inline-flex h-9 items-center rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-700", !booking.phone && !booking.email && "pointer-events-none opacity-40")}>Contact customer</a></div><Button size="sm" onClick={() => saveOperation(booking)} className="rounded-lg bg-slate-900 text-white hover:bg-slate-800"><Save className="mr-2 h-3.5 w-3.5" />Save job</Button></div>
                                        </CardContent>
                                    </Card>
                                })}
                                {bookings.length === 0 && <Card className="rounded-2xl border-dashed border-slate-300 xl:col-span-2"><CardContent className="p-12 text-center"><CalendarDays className="mx-auto h-8 w-8 text-slate-400" /><h3 className="mt-3 font-semibold text-slate-800">Your job board is clear</h3><p className="mt-1 text-sm text-slate-500">New bookings will appear here when customers submit a request.</p></CardContent></Card>}
                            </div>
                        </div>
                    )}

                    {/* ── CRM ───────────────────────────────────────────────────────── */}
                    {activeTab === "customers" && (
                        <div className="space-y-6">
                            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Customer relationships</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Leads &amp; customers</h2><p className="mt-2 text-sm text-slate-500">Track enquiries from first contact to booking. Updates are saved on each contact record.</p></div>
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{["new", "contacted", "quoted", "booked", "closed"].map((stage) => <Card key={stage} className="rounded-2xl border-slate-200/80"><CardContent className="p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stage}</p><p className="mt-2 text-2xl font-semibold text-slate-900">{contacts.filter((contact) => (contact.leadStatus || "new") === stage).length}</p></CardContent></Card>)}</div>
                            <Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-sm"><CardContent className="divide-y divide-slate-100 p-0">
                                {contacts.map((contact) => { const draft = leadDrafts[contact.id] || {}; return <div key={contact.id} className="grid gap-4 p-5 lg:grid-cols-[minmax(180px,0.9fr)_minmax(220px,1.2fr)_minmax(230px,1.2fr)_auto] lg:items-start">
                                    <div className="min-w-0"><p className="truncate text-sm font-semibold text-slate-900">{contact.name || "Website enquiry"}</p><a className="mt-1 block truncate text-xs text-cyan-800 hover:underline" href={contact.email ? `mailto:${contact.email}` : undefined}>{contact.email || "No email supplied"}</a>{contact.phone && <a className="mt-1 block text-xs text-slate-500" href={`tel:${contact.phone}`}>{contact.phone}</a>}<p className="mt-2 text-[11px] text-slate-400">Received {fmtDate(contact.createdAt)}</p></div>
                                    <div><p className="line-clamp-3 text-sm leading-6 text-slate-600">{contact.message || contact.subject || "No message provided."}</p>{contact.subject && <p className="mt-1 text-xs font-medium text-slate-500">{contact.subject}</p>}</div>
                                    <div className="space-y-2"><select value={draft.leadStatus ?? contact.leadStatus ?? "new"} onChange={(event) => setLeadDrafts((rows) => ({ ...rows, [contact.id]: { ...rows[contact.id], leadStatus: event.target.value } }))} className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700"><option value="new">New</option><option value="contacted">Contacted</option><option value="quoted">Quoted</option><option value="booked">Booked</option><option value="closed">Closed</option></select><textarea rows={2} value={draft.internalNotes ?? contact.internalNotes ?? ""} onChange={(event) => setLeadDrafts((rows) => ({ ...rows, [contact.id]: { ...rows[contact.id], internalNotes: event.target.value } }))} placeholder="Internal follow-up note" className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-cyan-500" /></div>
                                    <Button size="sm" variant="outline" onClick={() => saveLead(contact)} className="rounded-lg"><Save className="mr-2 h-3.5 w-3.5" />Save</Button>
                                </div>})}
                                {contacts.length === 0 && <div className="p-12 text-center"><MessageSquare className="mx-auto h-8 w-8 text-slate-400" /><p className="mt-3 text-sm font-medium text-slate-800">No enquiries yet</p><p className="mt-1 text-xs text-slate-500">Website contact form submissions will appear here.</p></div>}
                            </CardContent></Card>
                        </div>
                    )}

                    {/* ── QUOTES ─────────────────────────────────────────────────────── */}
                    {activeTab === "quotes" && (
                        <div className="space-y-6">
                            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Sales workflow</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Quote builder</h2><p className="mt-2 text-sm text-slate-500">Create and track written estimates. Saving a quote does not send it to the customer.</p></div>
                            <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
                                <Card className="rounded-2xl border-slate-200/80 shadow-sm"><CardHeader className="border-b border-slate-100 px-5 py-4"><CardTitle className="text-base font-semibold">New estimate</CardTitle><p className="text-sm text-slate-500">Enter the amount you approved for this job.</p></CardHeader><CardContent className="p-5"><form onSubmit={handleCreateQuote} className="space-y-4">
                                    <div className="grid gap-3 sm:grid-cols-2"><label className="text-xs font-medium text-slate-600">Customer name<Input required value={quoteDraft.customerName} onChange={(e) => setQuoteDraft((q) => ({ ...q, customerName: e.target.value }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="text-xs font-medium text-slate-600">Service<Input required value={quoteDraft.service} onChange={(e) => setQuoteDraft((q) => ({ ...q, service: e.target.value }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="text-xs font-medium text-slate-600">Email<Input type="email" value={quoteDraft.customerEmail} onChange={(e) => setQuoteDraft((q) => ({ ...q, customerEmail: e.target.value }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="text-xs font-medium text-slate-600">Phone<Input value={quoteDraft.customerPhone} onChange={(e) => setQuoteDraft((q) => ({ ...q, customerPhone: e.target.value }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="text-xs font-medium text-slate-600">Property / suburb<Input value={quoteDraft.propertySize} onChange={(e) => setQuoteDraft((q) => ({ ...q, propertySize: e.target.value }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="text-xs font-medium text-slate-600">Approved quote amount (AUD)<Input required type="number" min="1" step="0.01" value={quoteDraft.amount} onChange={(e) => setQuoteDraft((q) => ({ ...q, amount: e.target.value }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="text-xs font-medium text-slate-600">Bedrooms<Input type="number" min="0" value={quoteDraft.bedrooms} onChange={(e) => setQuoteDraft((q) => ({ ...q, bedrooms: Number(e.target.value) }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="text-xs font-medium text-slate-600">Bathrooms<Input type="number" min="0" value={quoteDraft.bathrooms} onChange={(e) => setQuoteDraft((q) => ({ ...q, bathrooms: Number(e.target.value) }))} className="mt-1.5 h-10 rounded-lg" /></label></div>
                                    <label className="block text-xs font-medium text-slate-600">Add-ons, separated by commas<Input value={quoteDraft.addOns} onChange={(e) => setQuoteDraft((q) => ({ ...q, addOns: e.target.value }))} placeholder="Carpet steam clean, pest treatment" className="mt-1.5 h-10 rounded-lg" /></label>
                                    <Button type="submit" disabled={quoteSaving} className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800"><PlusCircle className="mr-2 h-4 w-4" />{quoteSaving ? "Saving quote…" : "Save quote draft"}</Button>
                                </form></CardContent></Card>
                                <Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-sm"><CardHeader className="border-b border-slate-100 px-5 py-4"><CardTitle className="text-base font-semibold">Quote pipeline</CardTitle><p className="text-sm text-slate-500">{quotes.length} saved estimates</p></CardHeader><CardContent className="divide-y divide-slate-100 p-0">{quotes.map((quote) => <div key={quote.id} className="space-y-3 p-5"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold text-slate-900">{quote.customerName}</p><p className="mt-1 text-xs text-slate-500">{quote.service}{quote.propertySize ? ` · ${quote.propertySize}` : ""}</p></div><p className="text-sm font-semibold text-slate-900">A${Number(quote.amount || 0).toLocaleString("en-AU")}</p></div><div className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs text-slate-500">{quote.customerEmail || quote.customerPhone || "No contact details"}</span><div className="flex items-center gap-2"><select aria-label={`Status for quote to ${quote.customerName}`} value={quote.status || "draft"} onChange={(event) => changeQuoteStatus(quote, event.target.value)} className="h-8 rounded-lg border border-slate-200 bg-white px-2 text-xs capitalize"><option value="draft">Draft</option><option value="sent">Sent</option><option value="accepted">Accepted</option><option value="declined">Declined</option></select><Button size="sm" variant="outline" disabled={!quote.customerEmail} onClick={() => { setEmailDraft({ to: quote.customerEmail, subject: `Wave Solution quote: ${quote.service}`, body: `Hi ${quote.customerName},\n\nYour quote for ${quote.service}${quote.propertySize ? ` at ${quote.propertySize}` : ""} is A$${Number(quote.amount || 0).toLocaleString("en-AU")}.\n\nPlease reply if you have any questions.\n\nWave Solution` }); setActiveTab("communications") }} className="h-8 rounded-lg">Compose</Button></div></div></div>)}{quotes.length === 0 && <div className="p-10 text-center text-sm text-slate-500">Quote records will appear here after you save a draft.</div>}</CardContent></Card>
                            </div>
                        </div>
                    )}

                    {/* ── INVOICES AND PAYMENT TRACKING ──────────────────────────────── */}
                    {activeTab === "invoices" && (
                        <div className="space-y-6">
                            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Accounts receivable</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Invoices &amp; payments</h2><p className="mt-2 text-sm text-slate-500">Create an invoice from a booking and record payments received. This records payments manually; it does not charge a card.</p></div>
                            <div className="grid gap-4 sm:grid-cols-3">{[
                                { label: "Outstanding", value: invoices.filter((invoice) => invoice.status !== "paid").reduce((sum, invoice) => sum + Math.max(0, Number(invoice.amountDue || 0) - Number(invoice.amountPaid || 0)), 0) },
                                { label: "Paid", value: invoices.filter((invoice) => invoice.status === "paid").reduce((sum, invoice) => sum + Number(invoice.amountPaid || 0), 0) },
                                { label: "Invoices", value: invoices.length },
                            ].map((metric) => <Card key={metric.label} className="rounded-2xl border-slate-200/80"><CardContent className="p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{metric.label}</p><p className="mt-2 text-2xl font-semibold text-slate-900">{typeof metric.value === "number" && metric.label !== "Invoices" ? `A$${metric.value.toLocaleString("en-AU")}` : metric.value}</p></CardContent></Card>)}</div>
                            <Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-sm"><CardHeader className="border-b border-slate-100 px-5 py-4"><CardTitle className="text-base font-semibold">Invoice register</CardTitle><p className="text-sm text-slate-500">Create a single invoice per booking, then record payment details below.</p></CardHeader><CardContent className="divide-y divide-slate-100 p-0">
                                {bookings.map((booking) => {
                                    const invoice = invoices.find((item) => item.bookingId === booking.id || item.id === booking.id)
                                    return <div key={booking.id} className="grid gap-4 p-5 lg:grid-cols-[minmax(180px,1fr)_minmax(200px,1fr)_minmax(260px,1.2fr)_auto] lg:items-center">
                                        <div><p className="text-sm font-semibold text-slate-900">{booking.name || "Customer"}</p><p className="mt-1 text-xs text-slate-500">{booking.package?.category || booking.service || "Cleaning service"}</p></div>
                                        {invoice ? <><div><p className="text-xs font-semibold text-slate-700">{invoice.invoiceNumber}</p><p className="mt-1 text-xs text-slate-500">Due A${Number(invoice.amountDue || 0).toLocaleString("en-AU")} · Paid A${Number(invoice.amountPaid || 0).toLocaleString("en-AU")}</p><span className={cn("mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize", invoice.status === "paid" ? "bg-emerald-50 text-emerald-700" : invoice.status === "partial" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-700")}>{invoice.status}</span></div><div className="grid gap-2 sm:grid-cols-3"><Input type="number" min="0" max={invoice.amountDue} step="0.01" aria-label="Amount received" placeholder="Amount received" value={invoiceDrafts[invoice.id]?.amountPaid ?? invoice.amountPaid ?? ""} onChange={(event) => setInvoiceDrafts((rows) => ({ ...rows, [invoice.id]: { ...rows[invoice.id], amountPaid: event.target.value } }))} className="h-9 rounded-lg text-xs" /><Input aria-label="Payment method" placeholder="Method" value={invoiceDrafts[invoice.id]?.paymentMethod ?? invoice.paymentMethod ?? ""} onChange={(event) => setInvoiceDrafts((rows) => ({ ...rows, [invoice.id]: { ...rows[invoice.id], paymentMethod: event.target.value } }))} className="h-9 rounded-lg text-xs" /><Input aria-label="Payment reference" placeholder="Reference" value={invoiceDrafts[invoice.id]?.paymentReference ?? invoice.paymentReference ?? ""} onChange={(event) => setInvoiceDrafts((rows) => ({ ...rows, [invoice.id]: { ...rows[invoice.id], paymentReference: event.target.value } }))} className="h-9 rounded-lg text-xs" /></div><div className="flex flex-wrap gap-2"><Button size="sm" variant="outline" onClick={() => handleSaveInvoicePayment(invoice)} className="rounded-lg"><Save className="mr-2 h-3.5 w-3.5" />Save payment</Button><Button size="sm" variant="outline" disabled={!invoice.customerEmail} onClick={() => { setEmailDraft({ to: invoice.customerEmail, subject: `Invoice ${invoice.invoiceNumber} from Wave Solution`, body: `Hi ${invoice.customerName},\n\nPlease find the details for invoice ${invoice.invoiceNumber}:\nService: ${invoice.service}\nAmount due: A$${Number(invoice.amountDue || 0).toLocaleString("en-AU")}\n\nPlease contact us if you have any questions.\n\nWave Solution` }); setActiveTab("communications") }} className="rounded-lg">Email invoice</Button></div></> : <><div><p className="text-xs text-slate-500">Booking value</p><p className="mt-1 text-sm font-semibold text-slate-900">A${Number(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString("en-AU")}</p></div><p className="text-xs text-slate-500 lg:col-span-1">Not invoiced</p><Button size="sm" disabled={!Number(booking.package?.totalPrice || booking.package?.price || 0)} onClick={() => handleCreateInvoice(booking)} className="rounded-lg bg-slate-900 text-white hover:bg-slate-800"><PlusCircle className="mr-2 h-3.5 w-3.5" />Create invoice</Button></>}
                                    </div>
                                })}
                                {bookings.length === 0 && <div className="p-12 text-center text-sm text-slate-500">Bookings appear here when available.</div>}
                            </CardContent></Card>
                        </div>
                    )}

                    {/* ── CUSTOMER EMAIL ────────────────────────────────────────────── */}
                    {activeTab === "communications" && (
                        <div className="space-y-6">
                            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Customer care</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Customer email</h2><p className="mt-2 text-sm text-slate-500">Send a message using the configured SMTP account. Sending requires an admin account and a working SMTP connection.</p></div>
                            <div className={cn("flex flex-col justify-between gap-3 rounded-xl border p-4 sm:flex-row sm:items-center", emailConnection?.connected ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50")}><div><p className="text-sm font-semibold text-slate-800">{emailConnection?.connected ? `Email connected${emailConnection.email ? ` · ${emailConnection.email}` : ""}` : "Email is not ready to send"}</p><p className="mt-1 text-xs text-slate-600">{emailConnection?.connected ? "SMTP connection verified. Messages send only when you press Send." : emailConnection?.error || "Checking SMTP configuration…"}</p></div><Button size="sm" variant="outline" onClick={() => void checkEmailConnection()} className="rounded-lg">Check connection</Button></div>
                            <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
                                <Card className="rounded-2xl border-slate-200/80 shadow-sm"><CardHeader className="border-b border-slate-100 px-5 py-4"><CardTitle className="text-base font-semibold">Compose message</CardTitle><p className="text-sm text-slate-500">Email is sent immediately after confirmation by clicking Send.</p></CardHeader><CardContent className="p-5"><form onSubmit={handleSendCustomerEmail} className="space-y-4"><label className="block text-xs font-medium text-slate-600">To<Input required type="email" value={emailDraft.to} onChange={(event) => setEmailDraft((draft) => ({ ...draft, to: event.target.value }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="block text-xs font-medium text-slate-600">Subject<Input required maxLength={180} value={emailDraft.subject} onChange={(event) => setEmailDraft((draft) => ({ ...draft, subject: event.target.value }))} className="mt-1.5 h-10 rounded-lg" /></label><label className="block text-xs font-medium text-slate-600">Message<Textarea required maxLength={12000} rows={9} value={emailDraft.body} onChange={(event) => setEmailDraft((draft) => ({ ...draft, body: event.target.value }))} className="mt-1.5 rounded-lg" /></label><Button type="submit" disabled={emailSending || !emailDraft.to || !emailDraft.subject || !emailDraft.body} className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800"><Send className="mr-2 h-4 w-4" />{emailSending ? "Sending…" : "Send email"}</Button></form></CardContent></Card>
                                <div className="space-y-6"><Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-sm"><CardHeader className="border-b border-slate-100 px-5 py-4"><CardTitle className="text-base font-semibold">Recent email history</CardTitle></CardHeader><CardContent className="divide-y divide-slate-100 p-0">{emailRecords.slice(0, 8).map((record) => <div key={record.id} className="p-4"><p className="truncate text-sm font-medium text-slate-800">{record.subject}</p><p className="mt-1 truncate text-xs text-slate-500">To {record.to}</p><p className="mt-1 text-[11px] text-slate-400">{fmtDate(record.createdAt)} · {record.status}</p></div>)}{emailRecords.length === 0 && <p className="p-8 text-center text-xs text-slate-500">Sent customer messages are listed here.</p>}</CardContent></Card>
                                <Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-sm"><CardHeader className="border-b border-slate-100 px-5 py-4"><CardTitle className="text-base font-semibold">Start from an enquiry</CardTitle></CardHeader><CardContent className="divide-y divide-slate-100 p-0">{contacts.slice(0, 8).map((contact) => <div key={contact.id} className="flex items-center justify-between gap-3 p-4"><div className="min-w-0"><p className="truncate text-sm font-medium text-slate-800">{contact.name || "Enquiry"}</p><p className="truncate text-xs text-slate-500">{contact.email || "No email"}</p></div><Button size="sm" variant="outline" disabled={!contact.email} onClick={() => setEmailDraft({ to: contact.email, subject: `Re: ${contact.subject || "Your Wave Solution enquiry"}`, body: `Hi ${contact.name || "there"},\n\nThanks for getting in touch with Wave Solution.\n\n` })} className="shrink-0 rounded-lg">Compose</Button></div>)}{contacts.length === 0 && <p className="p-8 text-center text-xs text-slate-500">Enquiries will be available here.</p>}</CardContent></Card></div>
                            </div>
                        </div>
                    )}

                    {/* ── ACTIVITY ───────────────────────────────────────────────────── */}
                    {activeTab === "activity" && (
                        <div className="space-y-6"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Governance</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Activity log</h2><p className="mt-2 text-sm text-slate-500">Recent changes recorded by this admin dashboard.</p></div><Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-sm"><CardContent className="divide-y divide-slate-100 p-0">{auditLog.map((entry) => <div key={entry.id} className="grid gap-2 p-5 sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="text-sm font-semibold text-slate-900">{entry.action}</p><p className="mt-1 text-xs text-slate-600">{entry.details}</p><p className="mt-1 text-[11px] text-slate-400">{entry.actor} · {entry.target}</p></div><span className="text-xs text-slate-500">{fmtDate(entry.createdAt)}</span></div>)}{auditLog.length === 0 && <div className="p-12 text-center"><Activity className="mx-auto h-8 w-8 text-slate-400" /><p className="mt-3 text-sm font-medium text-slate-800">No activity has been logged yet</p><p className="mt-1 text-xs text-slate-500">Booking, lead and quote updates from this workspace will be recorded here.</p></div>}</CardContent></Card></div>
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
                                                        <td className="px-6 py-4 font-semibold text-slate-900 text-sm">A${(booking.package?.totalPrice || booking.package?.price || 0).toLocaleString("en-AU")}</td>
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
                                                            <select aria-label={`Role for ${u.name || u.email}`} value={["admin", "dispatcher", "worker", "customer"].includes(u.role) ? u.role : "customer"} disabled={roleUpdating === u.id} onChange={(event) => void handleUpdateUserRole(u.id, event.target.value)} className="h-9 rounded-lg border border-slate-200 bg-white px-2 text-xs font-semibold capitalize text-slate-700 disabled:opacity-60">
                                                                {["customer", "worker", "dispatcher", "admin"].map((role) => <option key={role} value={role}>{role}</option>)}
                                                            </select>
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
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Recorded booking value</th>
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
                                                            <td className="px-6 py-4 text-sm text-slate-600">A${Math.round(data.revenue / data.count).toLocaleString("en-AU")}</td>
                                                            <td className="px-6 py-4 font-semibold text-emerald-700 text-sm">A${data.revenue.toLocaleString("en-AU")}</td>
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
                                            { label: "Recorded booking value", value: "A$" + totalRevenue.toLocaleString("en-AU"), color: "emerald" },
                                    { label: "Total Bookings", value: bookings.length, color: "blue" },
                                    { label: "Average booking value", value: bookings.length > 0 ? "A$" + Math.round(totalRevenue / bookings.length).toLocaleString("en-AU") : "—", color: "indigo" },
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
                            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Publishing studio</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Blog &amp; content</h2><p className="mt-2 text-sm text-slate-500">Draft, edit, preview metadata and publish posts.</p></div><span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">{posts.length} CMS records</span></div>

                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6">
                                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">{editingPost ? <FileText className="h-4 w-4" /> : <Plus className="h-4 w-4" />}{editingPost ? "Edit post" : "New post"}</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-6 p-5 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)] sm:p-6">
                                    <div className="space-y-4">
                                        <label className="block text-xs font-medium text-slate-600">Post title<Input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder="Post title" className="mt-1.5 h-10 rounded-lg" /></label>
                                        <label className="block text-xs font-medium text-slate-600">Excerpt<Textarea value={postExcerpt} onChange={(e) => setPostExcerpt(e.target.value)} placeholder="Short summary for the blog list" className="mt-1.5 min-h-[72px] rounded-lg text-sm" /></label>
                                        <label className="block text-xs font-medium text-slate-600">Article content<Textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="Write the article content..." className="mt-1.5 min-h-[220px] rounded-lg text-sm" /></label>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-semibold text-slate-800">Search preview</p><p className="mt-3 truncate text-sm font-semibold text-blue-800">{postSeoTitle || postTitle || "Your article title"}</p><p className="mt-1 truncate text-[11px] text-emerald-800">wavesolution.com.au/blog/{editingPost?.slug || (postTitle.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "your-article-slug")}</p><p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">{postSeoDescription || postExcerpt || "Your description preview will appear here."}</p></div>
                                        <label className="block text-xs font-medium text-slate-600">Meta title<Input maxLength={70} value={postSeoTitle} onChange={(e) => setPostSeoTitle(e.target.value)} placeholder="Search result title" className="mt-1.5 h-10 rounded-lg" /><span className="mt-1 block text-right text-[11px] text-slate-400">{postSeoTitle.length}/70</span></label>
                                        <label className="block text-xs font-medium text-slate-600">Meta description<Textarea maxLength={160} value={postSeoDescription} onChange={(e) => setPostSeoDescription(e.target.value)} placeholder="Short description for search results" className="mt-1.5 min-h-[82px] rounded-lg text-sm" /><span className="mt-1 block text-right text-[11px] text-slate-400">{postSeoDescription.length}/160</span></label>
                                        <div className="flex gap-2"><Button onClick={handleSavePost} disabled={postSaving} className="h-10 flex-1 rounded-xl bg-slate-900 text-white hover:bg-slate-800"><Save className="mr-2 h-4 w-4" />{postSaving ? "Saving…" : editingPost ? "Save changes" : "Save draft"}</Button>{editingPost && <Button variant="outline" onClick={clearPostEditor} className="h-10 rounded-xl">Cancel</Button>}</div>
                                    </div>
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
                                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{post.excerpt || post.content}</p>
                                                </div>
                                                <div className="flex items-center gap-2 shrink-0">
                                                    <Button variant="outline" size="sm" className="h-8 text-xs rounded-lg border-slate-200" onClick={() => editPost(post)}>Edit</Button>
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
                                <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200">
                                    <Link2 className="h-4 w-4 text-slate-600" />
                                    <span className="text-xs font-semibold text-slate-700">Indexing & Directory Hub</span>
                                </div>
                            </div>

                            {/* SEO Metrics */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                                {[
                                    { label: "CMS records", value: String(posts.length), sub: "Stored blog drafts and posts", subColor: "text-slate-600", icon: <FileText className="h-5 w-5 text-slate-700" />, border: "border-slate-200/80", bg: "bg-slate-100" },
                                    { label: "Published records", value: String(posts.filter((post) => post.published).length), sub: "Published from the CMS", subColor: "text-slate-600", icon: <CheckCircle2 className="h-5 w-5 text-emerald-600" />, border: "border-slate-200/80", bg: "bg-emerald-50" },
                                    { label: "Customer enquiries", value: String(contacts.length), sub: "Contact form records", subColor: "text-slate-600", icon: <Users className="h-5 w-5 text-blue-600" />, border: "border-slate-200/80", bg: "bg-blue-50" },
                                    { label: "Search Console Status", value: "Verified", sub: "Gold Coast Sitemap Active", subColor: "text-emerald-700", icon: <TrendingUp className="h-5 w-5 text-slate-700" />, border: "border-slate-200/80", bg: "bg-slate-100" },
                                ].map((m, i) => (
                                    <div key={i} className={cn("relative overflow-hidden bg-white p-5 rounded-2xl border shadow-xs transition-all hover:border-slate-300", m.border)}>
                                        <div className="flex items-start justify-between">
                                            <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{m.label}</p><h3 className="mt-2 text-2xl font-bold text-slate-900">{m.value}</h3></div>
                                            <div className={cn("p-2.5 rounded-xl", m.bg)}>{m.icon}</div>
                                        </div>
                                        <div className="mt-3 text-xs"><span className={cn("font-medium", m.subColor)}>{m.sub}</span></div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <Card className="border border-slate-200/80 bg-white rounded-2xl shadow-xs overflow-hidden">
                                <CardHeader className="border-b border-slate-100 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-100 rounded-xl"><Link2 className="h-4 w-4 text-slate-700" /></div>
                                        <div>
                                            <CardTitle className="text-base font-bold text-slate-900">Outreach & Directory Shortcuts</CardTitle>
                                            <p className="text-xs text-slate-500 mt-0.5">Quick access to partner acquisition tools and analytics</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-5">
                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                        <Button variant="outline" onClick={() => setActiveTab("ai-agent")} className="h-16 justify-start gap-3 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900 px-4">
                                            <Building2 className="h-5 w-5 text-slate-600 shrink-0" />
                                            <div className="text-left">
                                                <p className="text-xs font-semibold text-slate-900">Real Estate Campaign</p>
                                                <p className="text-[11px] text-slate-500">Target local agencies</p>
                                            </div>
                                        </Button>
                                        <Button variant="outline" onClick={() => setActiveTab("ai-agent")} className="h-16 justify-start gap-3 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900 px-4">
                                            <Briefcase className="h-5 w-5 text-slate-600 shrink-0" />
                                            <div className="text-left">
                                                <p className="text-xs font-semibold text-slate-900">Directory Submissions</p>
                                                <p className="text-[11px] text-slate-500">Local business citations</p>
                                            </div>
                                        </Button>
                                        <Button variant="outline" onClick={() => setActiveTab("communications")} className="h-16 justify-start gap-3 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900 px-4">
                                            <Send className="h-5 w-5 text-slate-600 shrink-0" />
                                            <div className="text-left">
                                                <p className="text-xs font-semibold text-slate-900">Customer Email</p>
                                                <p className="text-[11px] text-slate-500">Direct SMTP compose</p>
                                            </div>
                                        </Button>
                                        <Button variant="outline" onClick={() => setActiveTab("reports")} className="h-16 justify-start gap-3 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900 px-4">
                                            <TrendingUp className="h-5 w-5 text-slate-600 shrink-0" />
                                            <div className="text-left">
                                                <p className="text-xs font-semibold text-slate-900">Analytics & Reports</p>
                                                <p className="text-[11px] text-slate-500">Revenue & conversion</p>
                                            </div>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-2xl border-slate-200/80 bg-white shadow-sm">
                                <CardHeader className="border-b border-slate-100 px-5 py-4"><CardTitle className="text-base font-semibold text-slate-900">Search and backlink integrations</CardTitle><p className="mt-1 text-sm text-slate-500">This workspace does not currently receive Search Console, analytics or backlink provider data.</p></CardHeader>
                                <CardContent className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center"><div><p className="text-sm font-medium text-slate-800">Connect a provider before relying on search or backlink metrics.</p><p className="mt-1 text-xs text-slate-500">Blog records and contact enquiries shown above come from this site. External ranking data is not available here.</p></div><Button variant="outline" className="shrink-0 rounded-lg" onClick={() => setActiveTab("posts")}>Open content studio</Button></CardContent>
                            </Card>

                            {/* Partnership Pipeline */}
                            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-50 p-6 bg-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle className="text-lg font-bold text-slate-900">Enquiry pipeline</CardTitle>
                                            <p className="text-slate-500 text-sm mt-1">Live stages from contact form records</p>
                                        </div>
                                        <Button variant="outline" size="sm" className="text-xs font-medium border-slate-200" onClick={() => setActiveTab("customers")}>Manage leads</Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                                        {[
                                                { stage: "New", count: contacts.filter((item) => !item.leadStatus || item.leadStatus === "new").length, color: "slate" },
                                                { stage: "Contacted", count: contacts.filter((item) => item.leadStatus === "contacted").length, color: "blue" },
                                                { stage: "Quoted", count: contacts.filter((item) => item.leadStatus === "quoted").length, color: "indigo" },
                                                { stage: "Booked", count: contacts.filter((item) => item.leadStatus === "booked").length, color: "green" },
                                                { stage: "Closed", count: contacts.filter((item) => item.leadStatus === "closed").length, color: "emerald" },
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
                                                <p className="font-semibold text-slate-900 text-sm">{contacts.filter((item) => item.leadStatus === "booked").length} enquiries booked</p>
                                                <p className="text-xs text-slate-600">Based on lead stages recorded in the dashboard</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm" className="rounded-lg" onClick={() => setActiveTab("customers")}>Manage enquiries</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ── OUTREACH & PARTNERSHIPS ──────────────────────────────────── */}
                    {activeTab === "ai-agent" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Outreach & Agency Partnerships</h2>
                                    <p className="text-slate-500 font-medium text-base">Generate tailored commercial proposals for Gold Coast real estate agencies, strata managers, and directory citations.</p>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200">
                                    <span className="relative flex h-2 w-2">
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                    </span>
                                    <span className="text-xs font-semibold text-slate-700">Provider Ready · Qwen 2.5 72B</span>
                                </div>
                            </div>

                            <Card className="border border-slate-200/80 bg-white rounded-2xl shadow-xs overflow-hidden">
                                <CardHeader className="border-b border-slate-100 p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 bg-slate-100 rounded-xl"><Building2 className="h-5 w-5 text-slate-800" /></div>
                                            <div>
                                                <CardTitle className="text-base font-bold text-slate-900">Commercial Partner Outreach Engine</CardTitle>
                                                <p className="text-xs text-slate-500 mt-0.5">Automated proposal generation customized for Gold Coast property managers and local businesses.</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200">B2B Standard</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-4 md:grid-cols-3">
                                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                                            <div className="flex items-center gap-2 mb-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /><p className="text-xs font-bold uppercase tracking-wide text-slate-600">Core Value Points</p></div>
                                            <ul className="space-y-1.5 text-xs text-slate-700">
                                                {["72-hour bond back re-clean guarantee", "Compliant flea/tick pest certificates", "Priority end-of-month turnaround", "Dedicated real estate account manager"].map((c, i) => (
                                                    <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{c}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                                            <div className="flex items-center gap-2 mb-2"><TrendingUp className="h-4 w-4 text-blue-600" /><p className="text-xs font-bold uppercase tracking-wide text-slate-600">Outreach Telemetry</p></div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs"><span className="text-slate-600">Proposals generated</span><span className="font-bold text-slate-900">{aiSessionCount}</span></div>
                                                <div className="flex justify-between text-xs"><span className="text-slate-600">Active agency draft records</span><span className="font-bold text-slate-900">{aiGenerations.length}</span></div>
                                                <div className="flex justify-between text-xs"><span className="text-slate-600">Target market</span><span className="font-semibold text-slate-700">Gold Coast QLD</span></div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                                            <div className="flex items-center gap-2 mb-2"><ShieldCheck className="h-4 w-4 text-slate-700" /><p className="text-xs font-bold uppercase tracking-wide text-slate-600">Model Configuration</p></div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs"><span className="text-slate-600">Inference model</span><span className="font-bold text-slate-900">Qwen 2.5 72B</span></div>
                                                <div className="flex justify-between text-xs"><span className="text-slate-600">Context window</span><span className="font-bold text-slate-900">128K tokens</span></div>
                                                <div className="flex justify-between text-xs"><span className="text-slate-600">Execution provider</span><span className="font-semibold text-slate-700">OpenRouter API</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Campaign Generator */}
                                <Card className="border border-slate-200/80 shadow-xs bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="p-5 border-b border-slate-100">
                                        <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><Building2 className="h-4 w-4 text-slate-700" />Agency Campaign Generator</CardTitle>
                                        <p className="text-xs text-slate-500 mt-1">Generate strategic multi-agency outreach campaigns for property management teams.</p>
                                    </CardHeader>
                                    <CardContent className="p-5 space-y-3">
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            <Button
                                                className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium text-xs"
                                                disabled={agentCampaignLoading !== null}
                                                onClick={() => handleAgentCampaign("Real Estate")}
                                            >
                                                <Building2 className="h-4 w-4 mr-2" />
                                                {agentCampaignLoading === "Real Estate" ? "Generating..." : "Real Estate Agency Campaign"}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full h-11 border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl font-medium text-xs"
                                                disabled={agentCampaignLoading !== null}
                                                onClick={() => handleAgentCampaign("Directory")}
                                            >
                                                <Briefcase className="h-4 w-4 mr-2" />
                                                {agentCampaignLoading === "Directory" ? "Generating..." : "Directory Citation Campaign"}
                                            </Button>
                                        </div>
                                        {agentCampaignDraft && (
                                            <div className="mt-4 space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Generated Campaign Proposal</p>
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="h-7 text-xs text-slate-600 hover:text-slate-900"
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(agentCampaignDraft)
                                                            toast.success("Campaign copied to clipboard")
                                                        }}
                                                    >
                                                        <Copy className="h-3.5 w-3.5 mr-1" />
                                                        Copy Text
                                                    </Button>
                                                </div>
                                                <Textarea value={agentCampaignDraft} onChange={(e) => setAgentCampaignDraft(e.target.value)} className="min-h-[140px] rounded-xl text-xs font-mono" />
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Email Generator */}
                                <Card className="border border-slate-200/80 shadow-xs bg-white rounded-2xl overflow-hidden">
                                    <CardHeader className="p-5 border-b border-slate-100">
                                        <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><Send className="h-4 w-4 text-slate-700" />Direct Agency Proposal</CardTitle>
                                        <p className="text-xs text-slate-500 mt-1">Generate a personalized partnership letter for a specific Gold Coast agency.</p>
                                    </CardHeader>
                                    <CardContent className="p-5 space-y-3">
                                        <Input value={agentBizName} onChange={(e) => setAgentBizName(e.target.value)} placeholder="Agency name (e.g. Ray White Southport, McGrath Surfers)" className="h-10 rounded-xl text-xs" />
                                        <Button
                                            className="w-full h-10 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium text-xs"
                                            disabled={agentEmailLoading}
                                            onClick={handleAgentEmail}
                                        >
                                            <Send className="h-3.5 w-3.5 mr-2" />
                                            {agentEmailLoading ? "Drafting..." : "Generate Proposal Draft"}
                                        </Button>
                                        {agentEmailDraft && (
                                            <div className="mt-4 space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Generated Proposal Letter</p>
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="h-7 text-xs text-slate-600 hover:text-slate-900"
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(agentEmailDraft)
                                                            toast.success("Proposal copied to clipboard")
                                                        }}
                                                    >
                                                        <Copy className="h-3.5 w-3.5 mr-1" />
                                                        Copy Text
                                                    </Button>
                                                </div>
                                                <Textarea value={agentEmailDraft} onChange={(e) => setAgentEmailDraft(e.target.value)} className="min-h-[140px] rounded-xl text-xs font-mono" />
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Recent Generations */}
                            <Card className="border border-slate-200/80 shadow-xs bg-white rounded-2xl overflow-hidden">
                                <CardHeader className="border-b border-slate-100 p-5 bg-white">
                                    <CardTitle className="text-base font-bold text-slate-900">Recent Generated Proposals</CardTitle>
                                </CardHeader>
                                <CardContent className="p-5">
                                    {aiGenerations.length === 0 ? (
                                        <div className="text-center text-slate-400 text-xs py-8">No proposals generated in this session. Select an option above to generate a draft.</div>
                                    ) : (
                                        <div className="space-y-3">
                                            {aiGenerations.map((gen, i) => (
                                                <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-white rounded-lg border border-slate-200"><MailCheck className="h-4 w-4 text-slate-700" /></div>
                                                        <div>
                                                            <p className="font-semibold text-xs text-slate-900">{gen.business}</p>
                                                            <p className="text-[11px] text-slate-500">{gen.type} · {gen.time}</p>
                                                        </div>
                                                    </div>
                                                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200">Draft Ready</span>
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
                                    { label: "Recorded booking value", value: "A$" + totalRevenue.toLocaleString("en-AU"), color: "emerald" },
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
                                                        <td className="px-6 py-4 text-sm font-semibold text-emerald-700">{row.revenue > 0 ? "A$" + row.revenue.toLocaleString("en-AU") : "—"}</td>
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
                                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
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
                                                    {t.rating && (
                                                        <div className="flex items-center gap-0.5 mb-1.5">
                                                            {Array.from({ length: 5 }).map((_, starIdx) => (
                                                                <Star
                                                                    key={starIdx}
                                                                    className={cn(
                                                                        "h-3.5 w-3.5",
                                                                        starIdx < t.rating ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-300"
                                                                    )}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
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
                        <div className="min-w-0 space-y-5 animate-in fade-in slide-in-from-right-6 duration-700 sm:space-y-8">
                            <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-[#333365] to-[#454582] p-5 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Audience</p>
                                    <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Newsletter Subscribers</h2>
                                    <p className="mt-2 text-sm text-white/70">Manage your email community in one place.</p>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 sm:min-w-44">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#39BDE4]/20 text-cyan-200"><MailCheck className="h-5 w-5" /></span>
                                    <div><p className="text-2xl font-bold leading-none">{subscriptions.length}</p><p className="mt-1 text-xs text-white/70">Active subscribers</p></div>
                                </div>
                            </div>

                            <Card className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                                <CardHeader className="gap-4 border-b border-slate-100 px-4 py-4 sm:px-6">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <CardTitle className="text-base font-semibold text-slate-900">Subscriber list <span className="ml-1 text-sm font-normal text-slate-400">({filteredSubscriptions.length}{subscriberSearch ? ` of ${subscriptions.length}` : ""})</span></CardTitle>
                                        <div className="flex flex-col gap-2 sm:flex-row">
                                            <label className="relative min-w-0 sm:w-64">
                                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                                <Input value={subscriberSearch} onChange={(event) => setSubscriberSearch(event.target.value)} placeholder="Search email addresses" className="h-10 rounded-xl pl-9 text-sm" />
                                            </label>
                                            <Button type="button" variant="outline" onClick={exportSubscribers} disabled={!filteredSubscriptions.length} className="h-10 rounded-xl">
                                                <Download className="mr-2 h-4 w-4" />Export CSV
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y divide-slate-100 sm:hidden">
                                        {filteredSubscriptions.map((sub, i) => (
                                            <article key={sub.id || sub.email || i} className="flex min-w-0 items-start justify-between gap-3 p-4">
                                                <div className="flex min-w-0 items-start gap-3">
                                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><MailCheck className="h-4 w-4" /></span>
                                                    <div className="min-w-0 pt-0.5">
                                                        <p className="break-all text-sm font-semibold text-slate-800">{sub.email}</p>
                                                        <p className="mt-1 text-xs text-slate-500">Joined {fmtDate(sub.createdAt)}</p>
                                                    </div>
                                                </div>
                                                <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">{sub.status || "Active"}</span>
                                            </article>
                                        ))}
                                        {filteredSubscriptions.length === 0 && <div className="px-4 py-12 text-center text-sm text-slate-500">{subscriptions.length ? "No emails match your search." : "No subscribers yet."}</div>}
                                    </div>
                                    <div className="hidden overflow-x-auto sm:block">
                                        <table className="w-full min-w-[560px] text-left">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subscribed On</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {filteredSubscriptions.map((sub, i) => (
                                                    <tr key={sub.id || sub.email || i} className="transition-colors hover:bg-slate-50/70">
                                                        <td className="max-w-md break-all px-6 py-4 text-sm font-medium text-slate-900">{sub.email}</td>
                                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">{fmtDate(sub.createdAt)}</td>
                                                        <td className="px-6 py-4 text-right">
                                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{sub.status || "Active"}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {filteredSubscriptions.length === 0 && (
                                                    <tr><td colSpan={3} className="px-6 py-12 text-center text-slate-500 text-sm">{subscriptions.length ? "No emails match your search." : "No subscribers yet."}</td></tr>
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
                                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2"><Sliders className="h-4 w-4 text-slate-700" />API Configuration</CardTitle>
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
