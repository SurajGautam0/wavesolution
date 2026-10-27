"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Activity, AlertCircle, CalendarDays, CheckCircle2, Clock3, Loader2, MapPin, Phone, Search, ShieldAlert, UserRound, Users, Wrench } from "lucide-react"
import { StaffShell } from "@/components/staff-shell"
import { useAuth } from "@/lib/auth-context"
import { getWorkerTeam, updateStaffBooking, watchAllBookings } from "@/lib/firebase/db"
import type { Booking, User } from "@/lib/types"
import { toast } from "sonner"

type Draft = { assignedTo: string; scheduledDate: string; scheduledTime: string; status: string; internalNotes: string }

const activeStatuses = new Set(["pending", "confirmed", "scheduled", "en-route", "in-progress"])
const statusStyle: Record<string, string> = {
  pending: "bg-amber-50 text-amber-800 ring-amber-200", confirmed: "bg-blue-50 text-blue-800 ring-blue-200",
  scheduled: "bg-cyan-50 text-cyan-800 ring-cyan-200", "en-route": "bg-violet-50 text-violet-800 ring-violet-200",
  "in-progress": "bg-orange-50 text-orange-800 ring-orange-200", completed: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  cancelled: "bg-slate-100 text-slate-600 ring-slate-200",
}

function dayValue(value: unknown) {
  if (!value) return ""
  if (typeof value === "string") return value.slice(0, 10)
  if (typeof value === "object" && value && "toDate" in value && typeof (value as any).toDate === "function") return (value as any).toDate().toISOString().slice(0, 10)
  return ""
}

function goldCoastToday() {
  const parts = new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Brisbane", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date())
  const part = (type: string) => parts.find((item) => item.type === type)?.value || ""
  return `${part("year")}-${part("month")}-${part("day")}`
}

// TEMP RESPONSIVE PREVIEW — remove after audit
const PREVIEW_OPS_USER = { id: "preview-ops", name: "Alex Morgan", email: "alex.morgan@wavesolution.com.au", role: "admin" }
const PREVIEW_OPS_TEAM = [
  { id: "tm_1", name: "Daniel Roberts", email: "daniel@wavesolution.com.au", role: "worker", status: "active", createdAt: "" },
  { id: "tm_2", name: "Mia Chen", email: "mia@wavesolution.com.au", role: "worker", status: "active", createdAt: "" },
] as unknown as User[]
const PREVIEW_OPS_JOBS = [
  { id: "job_9f2c81", name: "Sarah Whitmore", service: "End of lease cleaning", propertyType: "Apartment", bedrooms: "3", bathrooms: "2", scheduledDate: goldCoastToday(), scheduledTime: "9:00 AM", status: "in-progress", assignedTo: "Daniel Roberts", address: "18 Kurrajong Avenue", city: "Broadbeach", postcode: "4218", phone: "0412 884 302", email: "sarah.whitmore@example.com", internalNotes: "Keys in lockbox 4218." },
  { id: "job_71a0de", name: "Michael Chen", service: "Regular house cleaning", propertyType: "Townhouse", bedrooms: "2", bathrooms: "1", scheduledDate: goldCoastToday(), scheduledTime: "1:30 PM", status: "confirmed", assignedTo: "Mia Chen", address: "7 Cypress Terrace", city: "Robina", postcode: "4226", phone: "0455 210 887", email: "", internalNotes: "" },
  { id: "job_44b7e1", name: "Priya Nair", service: "Carpet steam cleaning", propertyType: "House", bedrooms: "4", bathrooms: "2", scheduledDate: goldCoastToday(), scheduledTime: "3:00 PM", status: "pending", assignedTo: "", address: "12 Seagrass Court", city: "Burleigh Heads", postcode: "4220", phone: "0401 772 930", email: "", internalNotes: "", workerIssue: { category: "Access problem", description: "Gate code did not work on arrival." } },
  { id: "job_55c9ab", name: "James O'Connor", service: "Bond cleaning", propertyType: "Apartment", bedrooms: "2", bathrooms: "1", scheduledDate: goldCoastToday(), scheduledTime: "8:00 AM", status: "completed", assignedTo: "Daniel Roberts", address: "9 Ocean Parade", city: "Surfers Paradise", postcode: "4217", phone: "0433 118 244", email: "", internalNotes: "" },
] as unknown as Booking[]

export default function OperationsDashboardPage() {
  const { user: authUser, loading: authLoading } = useAuth()
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [team, setTeam] = useState<User[]>([])
  const [drafts, setDrafts] = useState<Record<string, Draft>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"today" | "all" | "unassigned">("today")

  // TEMP RESPONSIVE PREVIEW — remove after audit
  const [previewMode, setPreviewMode] = useState(false)
  const user = previewMode ? PREVIEW_OPS_USER : authUser
  useEffect(() => {
    if (typeof window === "undefined") return
    if (new URLSearchParams(window.location.search).has("preview")) setPreviewMode(true)
  }, [])
  useEffect(() => {
    if (!previewMode) return
    setBookings(PREVIEW_OPS_JOBS)
    setTeam(PREVIEW_OPS_TEAM)
    setLoading(false)
  }, [previewMode])

  useEffect(() => {
    if (authLoading) return
    if (!user) router.replace("/login")
    else if (!(["admin", "dispatcher"].includes(user.role))) router.replace(user.role === "worker" ? "/worker" : "/dashboard")
  }, [authLoading, user, router])

  useEffect(() => {
    if (authLoading || previewMode || !user || !["admin", "dispatcher"].includes(user.role)) return
    let firstSnapshot = true
    const unsubscribe = watchAllBookings((jobs) => {
      setBookings(jobs)
      if (firstSnapshot) { firstSnapshot = false; setLoading(false) }
    }, (error) => {
      console.error("Unable to watch dispatch jobs", error)
      toast.error("Live job updates disconnected. Check your connection.")
      setLoading(false)
    })
    getWorkerTeam().then((workers) => {
      setTeam(workers.filter((worker) => worker.status !== "inactive"))
    }).catch((error) => {
      console.error("Unable to load team roster", error)
      toast.error("Could not load the cleaner roster. Confirm dispatcher access is enabled.")
      setLoading(false)
    })
    return unsubscribe
  }, [authLoading, user, previewMode])

  const today = goldCoastToday()
  const counts = useMemo(() => ({
    today: bookings.filter((job) => dayValue(job.scheduledDate || job.date) === today && job.status !== "cancelled").length,
    active: bookings.filter((job) => activeStatuses.has(job.status)).length,
    unassigned: bookings.filter((job) => !job.assignedTo && job.status !== "completed" && job.status !== "cancelled").length,
    completed: bookings.filter((job) => job.status === "completed").length,
    issues: bookings.filter((job) => !!job.workerIssue && !job.workerIssueResolvedAt).length,
  }), [bookings, today])

  const visibleJobs = useMemo(() => bookings.filter((job) => {
    const scheduledDay = dayValue(job.scheduledDate || job.date)
    const filterMatch = filter === "all" || (filter === "today" ? scheduledDay === today : !job.assignedTo && !["completed", "cancelled"].includes(job.status))
    const searchMatch = !search || [job.name, job.email, job.phone, job.address, job.city, job.service, job.assignedTo].some((value) => String(value || "").toLowerCase().includes(search.toLowerCase()))
    return filterMatch && searchMatch && job.status !== "cancelled"
  }).sort((a, b) => `${dayValue(a.scheduledDate || a.date)} ${a.scheduledTime || a.time || ""}`.localeCompare(`${dayValue(b.scheduledDate || b.date)} ${b.scheduledTime || b.time || ""}`)), [bookings, filter, search, today])

  const draftFor = (job: Booking): Draft => drafts[job.id] || ({
    assignedTo: job.assignedTo || "", scheduledDate: dayValue(job.scheduledDate || job.date),
    scheduledTime: job.scheduledTime || job.time || "", status: job.status || "pending", internalNotes: job.internalNotes || "",
  })

  function changeDraft(job: Booking, patch: Partial<Draft>) {
    setDrafts((current) => ({ ...current, [job.id]: { ...draftFor(job), ...patch } }))
  }

  async function saveJob(job: Booking) {
    const draft = draftFor(job)
    const conflict = bookings.find((other) => other.id !== job.id && other.assignedTo === draft.assignedTo && draft.assignedTo && dayValue(other.scheduledDate || other.date) === draft.scheduledDate && (other.scheduledTime || other.time || "") === draft.scheduledTime && activeStatuses.has(other.status))
    if (conflict) {
      toast.error(`Schedule conflict: ${conflict.name || "another job"} is assigned to this team member at that time.`)
      return
    }
    setSaving(job.id)
    try {
      await updateStaffBooking(job.id, { assignedTo: draft.assignedTo, scheduledDate: draft.scheduledDate, scheduledTime: draft.scheduledTime, date: draft.scheduledDate, time: draft.scheduledTime, status: draft.status, internalNotes: draft.internalNotes })
      setBookings((rows) => rows.map((row) => row.id === job.id ? { ...row, ...draft } : row))
      toast.success("Job dispatch details saved")
    } catch (error) {
      console.error(error)
      toast.error("Could not save this job. Check your dispatcher access.")
    } finally { setSaving(null) }
  }

  if (authLoading || loading || !user || !["admin", "dispatcher"].includes(user.role)) return <div className="grid min-h-screen place-items-center bg-[#F6F7F9]"><Loader2 className="h-6 w-6 animate-spin text-slate-500" /></div>

  return <StaffShell kind="operations">
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Operations · {new Date().toLocaleDateString("en-AU", { timeZone: "Australia/Brisbane", weekday: "long", day: "numeric", month: "long" })}</p>
          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Dispatch command centre</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Plan the day, balance team workloads, and keep every booking moving.</p>
        </div>
        <span className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live job board
        </span>
      </div>

      <section className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 xl:grid-cols-4">
        {[{ label: "Jobs today", value: counts.today, icon: CalendarDays }, { label: "Active jobs", value: counts.active, icon: Activity }, { label: "Need assignment", value: counts.unassigned, icon: ShieldAlert }, { label: "Issues to review", value: counts.issues, icon: AlertCircle }].map(({ label, value, icon: Icon }) => <div key={label} className="bg-white p-4 sm:p-5"><div className="flex items-center justify-between gap-2"><span className="text-xs font-medium text-slate-500">{label}</span><Icon className="h-4 w-4 shrink-0 text-slate-400" /></div><p className="mt-3 text-[26px] font-semibold leading-none tracking-tight text-slate-900 tabular-nums">{value}</p></div>)}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="font-bold">Today’s team workload</h2><p className="mt-1 text-xs text-slate-500">Jobs currently allocated per cleaner.</p></div><Users className="h-5 w-5 text-slate-400" /></div><div className="mt-4 grid gap-3 sm:grid-cols-2">{team.map((member) => { const name = member.name || member.email; const assigned = bookings.filter((job) => job.assignedTo === name && dayValue(job.scheduledDate || job.date) === today && job.status !== "cancelled"); const active = assigned.filter((job) => activeStatuses.has(job.status)).length; return <div key={member.id} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3"><div className="flex items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-2"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-cyan-900">{name[0]?.toUpperCase() || "C"}</span><span className="truncate text-sm font-semibold">{name}</span></div><span className="text-xs font-semibold text-slate-500">{active} active</span></div><div className="mt-3 flex gap-1.5">{assigned.length ? assigned.map((job) => <span key={job.id} title={`${job.scheduledTime || job.time || "Time TBC"} · ${job.status}`} className={`h-1.5 flex-1 rounded-full ${job.status === "completed" ? "bg-emerald-500" : job.status === "in-progress" ? "bg-orange-500" : "bg-cyan-500"}`} />) : <span className="text-xs text-slate-400">No jobs scheduled today</span>}</div></div> })}{!team.length && <p className="text-sm text-slate-500">No active cleaners available. Set team roles in the admin dashboard.</p>}</div></div>
        <div className="rounded-2xl border border-rose-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="font-bold">Issue queue</h2><p className="mt-1 text-xs text-slate-500">Open reports attached to bookings.</p></div><AlertCircle className="h-5 w-5 text-rose-600" /></div><div className="mt-4 space-y-2">{bookings.filter((job) => job.workerIssue && !job.workerIssueResolvedAt).slice(0, 4).map((job) => <div key={job.id} className="rounded-xl bg-rose-50 p-3"><div className="flex items-center justify-between gap-3"><span className="text-xs font-bold text-rose-900">{job.workerIssue?.category}</span><span className="text-[11px] text-rose-700">{job.name || "Customer"}</span></div><p className="mt-1 line-clamp-2 text-xs text-rose-900">{job.workerIssue?.description}</p><div className="mt-2 flex items-center justify-between gap-2"><span className="text-[10px] text-rose-600">{job.service || "Job"} · {job.status}</span><button onClick={() => void updateStaffBooking(job.id, { workerIssueResolvedAt: new Date().toISOString() }).then(() => { setBookings((rows) => rows.map((row) => row.id === job.id ? { ...row, workerIssueResolvedAt: new Date().toISOString() } : row)); toast.success("Issue marked reviewed") }).catch(() => toast.error("Could not update issue status"))} className="text-xs font-bold text-rose-900 underline underline-offset-2">Mark reviewed</button></div></div>)}{!counts.issues && <p className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900">All clear — there are no open staff issue reports.</p>}</div></div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-lg font-bold">Dispatch board</h2><p className="mt-1 text-sm text-slate-500">Assign a crew, set a time window, and add private instructions.</p></div><div className="flex flex-col gap-2 sm:flex-row"><label className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search jobs or customers" className="h-10 w-full rounded-xl border border-slate-200 pl-9 pr-3 text-sm outline-none focus:border-cyan-600 sm:w-64" /></label><select value={filter} onChange={(event) => setFilter(event.target.value as typeof filter)} className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium"><option value="today">Today’s jobs</option><option value="unassigned">Needs assignment</option><option value="all">All active jobs</option></select></div></div>
        <div className="grid gap-4 p-4 sm:p-5 xl:grid-cols-2">
          {visibleJobs.map((job) => { const draft = draftFor(job); const address = [job.address, job.city, job.postcode].filter(Boolean).join(", "); return <article key={job.id} className="rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-200 hover:shadow-sm sm:p-5">
            <div className="flex items-start justify-between gap-3"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold capitalize ring-1 ${statusStyle[job.status] || statusStyle.pending}`}>{job.status || "pending"}</span><span className="text-xs font-medium text-slate-400">#{job.id.slice(-6).toUpperCase()}</span></div><h3 className="mt-3 truncate text-base font-bold">{job.name || "Customer booking"}</h3><p className="mt-1 text-sm text-slate-500">{job.service || "Cleaning service"} · {job.propertyType || "Property details pending"}</p></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-600"><Wrench className="h-5 w-5" /></span></div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">{address && <a target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} className="flex items-center gap-2 hover:text-cyan-800"><MapPin className="h-4 w-4 shrink-0" />{address}</a>}<div className="flex flex-wrap gap-x-4 gap-y-1">{job.phone && <a href={`tel:${job.phone}`} className="inline-flex items-center gap-1.5 hover:text-cyan-800"><Phone className="h-3.5 w-3.5" />{job.phone}</a>}<span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{job.bedrooms || "—"} bed · {job.bathrooms || "—"} bath</span></div></div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2"><label className="text-xs font-semibold text-slate-500">Date<input type="date" value={draft.scheduledDate} onChange={(event) => changeDraft(job, { scheduledDate: event.target.value })} className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm font-normal text-slate-800" /></label><label className="text-xs font-semibold text-slate-500">Start time<input type="time" value={draft.scheduledTime} onChange={(event) => changeDraft(job, { scheduledTime: event.target.value })} className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm font-normal text-slate-800" /></label><label className="text-xs font-semibold text-slate-500">Assign team member<select value={draft.assignedTo} onChange={(event) => changeDraft(job, { assignedTo: event.target.value })} className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal text-slate-800"><option value="">Unassigned</option>{team.map((member) => <option key={member.id} value={member.name || member.email}>{member.name || member.email}</option>)}</select></label><label className="text-xs font-semibold text-slate-500">Job status<select value={draft.status} onChange={(event) => changeDraft(job, { status: event.target.value })} className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal capitalize text-slate-800">{["pending", "confirmed", "scheduled", "en-route", "in-progress", "completed"].map((status) => <option key={status} value={status}>{status.replace("-", " ")}</option>)}</select></label></div>
            <label className="mt-3 block text-xs font-semibold text-slate-500">Crew instructions<textarea rows={2} maxLength={1000} value={draft.internalNotes} onChange={(event) => changeDraft(job, { internalNotes: event.target.value })} placeholder="Access, parking, supplies, or customer preferences" className="mt-1.5 w-full resize-y rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-800" /></label>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3"><span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><Users className="h-3.5 w-3.5" />{draft.assignedTo || "No crew assigned"}</span><button disabled={saving === job.id} onClick={() => saveJob(job)} className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#183b62] px-4 text-sm font-semibold text-white hover:bg-[#214d76] disabled:opacity-60">{saving === job.id && <Loader2 className="h-4 w-4 animate-spin" />}Save dispatch</button></div>
          </article> })}
          {!visibleJobs.length && <div className="rounded-xl border border-dashed border-slate-300 py-14 text-center sm:col-span-2"><UserRound className="mx-auto h-8 w-8 text-slate-300" /><p className="mt-3 font-semibold">No jobs match this view</p><p className="mt-1 text-sm text-slate-500">Try another filter or clear your search.</p></div>}
        </div>
      </section>
    </div>
  </StaffShell>
}
