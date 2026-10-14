"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { AlertCircle, Camera, Check, CheckCircle2, Clock3, Cloud, Loader2, MapPin, Navigation, Phone, RefreshCw, ShieldCheck, Sparkles } from "lucide-react"
import { StaffShell } from "@/components/staff-shell"
import { useAuth } from "@/lib/auth-context"
import { getBookingsByWorker, updateStaffBooking, watchBookingsByWorker } from "@/lib/firebase/db"
import { storage } from "@/lib/firebase"
import type { Booking } from "@/lib/types"
import { toast } from "sonner"

const checklistItems = ["Check access and take arrival condition photos", "Clean kitchen surfaces, sink and appliance exteriors", "Clean bathrooms, showers, toilets and mirrors", "Clean bedrooms and living areas", "Dust reachable surfaces and fittings", "Vacuum and mop all applicable floors", "Complete a final walk-through and secure the property"]

function dateFor(booking: Booking) {
  const value = booking.scheduledDate || booking.date
  if (!value) return "Date to be confirmed"
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? String(value) : parsed.toLocaleDateString("en-AU", { timeZone: "Australia/Brisbane", weekday: "short", day: "numeric", month: "short" })
}

function goldCoastToday() {
  const parts = new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Brisbane", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date())
  const part = (type: string) => parts.find((item) => item.type === type)?.value || ""
  return `${part("year")}-${part("month")}-${part("day")}`
}

function jobStatusClass(status = "") {
  if (status === "completed") return "bg-emerald-50 text-emerald-800"
  if (status === "in-progress") return "bg-orange-50 text-orange-800"
  if (status === "en-route") return "bg-violet-50 text-violet-800"
  return "bg-cyan-50 text-cyan-900"
}

export default function WorkerDashboardPage() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [jobs, setJobs] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({})
  const [issueDrafts, setIssueDrafts] = useState<Record<string, { category: string; description: string }>>({})
  const [uploadingId, setUploadingId] = useState<string | null>(null)
  const [online, setOnline] = useState(true)
  const jobsPage = pathname === "/worker/jobs"

  const refreshJobs = useCallback(async () => {
    if (!user?.name || user.role !== "worker") return
    setLoading(true)
    try {
      const data = await getBookingsByWorker(user.name)
      setJobs(data.sort((a, b) => `${a.scheduledDate || a.date || ""} ${a.scheduledTime || a.time || ""}`.localeCompare(`${b.scheduledDate || b.date || ""} ${b.scheduledTime || b.time || ""}`)))
    } catch (error) {
      console.error("Unable to load assigned jobs", error)
      toast.error("Could not load your jobs. Check your connection and try again.")
    } finally { setLoading(false) }
  }, [user])

  useEffect(() => {
    if (authLoading) return
    if (!user) router.replace("/login")
    else if (user.role !== "worker") router.replace(user.role === "admin" || user.role === "dispatcher" ? "/operations" : "/dashboard")
  }, [authLoading, user, router])

  useEffect(() => {
    if (authLoading || !user || user.role !== "worker" || !user.name) return
    let firstSnapshot = true
    const unsubscribe = watchBookingsByWorker(user.name, (data) => {
      setJobs(data.sort((a, b) => `${a.scheduledDate || a.date || ""} ${a.scheduledTime || a.time || ""}`.localeCompare(`${b.scheduledDate || b.date || ""} ${b.scheduledTime || b.time || ""}`)))
      if (firstSnapshot) { firstSnapshot = false; setLoading(false) }
    }, (error) => {
      console.error("Unable to watch assigned jobs", error)
      toast.error("Live job updates disconnected. Check your connection.")
      setLoading(false)
    })
    return unsubscribe
  }, [authLoading, user])
  useEffect(() => {
    const updateOnline = () => setOnline(navigator.onLine)
    updateOnline()
    window.addEventListener("online", updateOnline)
    window.addEventListener("offline", updateOnline)
    return () => { window.removeEventListener("online", updateOnline); window.removeEventListener("offline", updateOnline) }
  }, [])

  const today = goldCoastToday()
  const todaysJobs = useMemo(() => jobs.filter((job) => (job.scheduledDate || job.date || "").slice(0, 10) === today && job.status !== "cancelled"), [jobs, today])
  const currentJob = todaysJobs.find((job) => job.status === "in-progress") || todaysJobs.find((job) => job.status !== "completed") || jobs.find((job) => job.status !== "completed" && job.status !== "cancelled")
  const completeCount = todaysJobs.filter((job) => job.status === "completed").length

  async function updateJob(job: Booking, patch: Partial<Booking>, success?: string) {
    setSavingId(job.id)
    try {
      await updateStaffBooking(job.id, patch)
      setJobs((rows) => rows.map((row) => row.id === job.id ? { ...row, ...patch } : row))
      if (success) toast.success(success)
      return true
    } catch (error) {
      console.error(error)
      toast.error("Could not save this update. Check your connection and try again.")
      return false
    } finally { setSavingId(null) }
  }

  async function advanceJob(job: Booking) {
    if (job.status === "pending" || job.status === "confirmed" || job.status === "scheduled") {
      await updateJob(job, { status: "en-route", workerCheckInAt: new Date().toISOString() }, "Dispatcher notified: you’re on the way")
    } else if (job.status === "en-route") {
      const now = new Date().toISOString()
      await updateJob(job, { status: "in-progress", workerStartedAt: job.workerStartedAt || now, workerCheckInAt: now }, "Job started")
    } else if (job.status === "in-progress") {
      const checklist = job.workerChecklist || {}
      const remaining = checklistItems.filter((_, index) => !checklist[`task${index}`]).length
      if (remaining) { toast.error(`Complete the remaining ${remaining} checklist task${remaining === 1 ? "" : "s"} before finishing.`); return }
      await updateJob(job, { status: "completed", workerCompletedAt: new Date().toISOString() }, "Job completed and sent for review")
    }
  }

  async function toggleChecklist(job: Booking, index: number, checked: boolean) {
    const checklist = { ...(job.workerChecklist || {}), [`task${index}`]: checked }
    await updateJob(job, { workerChecklist: checklist })
  }

  async function saveNotes(job: Booking) {
    const workerNotes = noteDrafts[job.id] ?? job.workerNotes ?? ""
    if (await updateJob(job, { workerNotes }, "Job notes saved")) setNoteDrafts((current) => { const next = { ...current }; delete next[job.id]; return next })
  }

  async function reportIssue(job: Booking) {
    const issue = issueDrafts[job.id]
    if (!issue?.description.trim()) { toast.error("Add a short description of the issue."); return }
    if (await updateJob(job, { workerIssue: { ...issue, description: issue.description.trim(), reportedAt: new Date().toISOString() }, workerIssueResolvedAt: "" }, "Issue recorded for dispatch")) {
      setIssueDrafts((current) => ({ ...current, [job.id]: { category: "Access problem", description: "" } }))
    }
  }

  async function uploadEvidence(job: Booking, file?: File) {
    if (!file || !user) return
    if (!file.type.match(/^image\/(jpeg|png|webp)$/)) { toast.error("Choose a JPG, PNG, or WebP image."); return }
    if (file.size > 8 * 1024 * 1024) { toast.error("Images must be smaller than 8 MB."); return }
    const existing = job.workerPhotoUrls || []
    if (existing.length >= 8) { toast.error("This job has reached its 8 photo limit."); return }
    setUploadingId(job.id)
    try {
      const path = `job-evidence/${job.id}/${user.id}-${crypto.randomUUID()}`
      const fileRef = ref(storage, path)
      await uploadBytes(fileRef, file, { contentType: file.type })
      const url = await getDownloadURL(fileRef)
      await updateJob(job, { workerPhotoUrls: [...existing, url] }, "Photo uploaded to the job record")
    } catch (error) {
      console.error("Evidence upload failed", error)
      toast.error("Photo upload failed. Check your connection and storage rules.")
    } finally { setUploadingId(null) }
  }

  if (authLoading || loading || !user || user.role !== "worker") return <div className="grid min-h-screen place-items-center"><Loader2 className="h-7 w-7 animate-spin text-cyan-700" /></div>

  return <StaffShell kind="worker">
    <div className="space-y-5">
      <section className="rounded-3xl bg-gradient-to-br from-[#183b62] via-[#205a7e] to-[#08a1a8] p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-100">Team workspace · {new Date().toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" })}</p><h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Good {new Date().getHours() < 12 ? "morning" : "afternoon"}, {user.name.split(" ")[0]}</h1><p className="mt-2 text-sm text-white/75">Your shift, job briefings and completion workflow in one place.</p></div><div className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${online ? "border-emerald-200/30 bg-emerald-300/15 text-emerald-50" : "border-amber-200/30 bg-amber-200/15 text-amber-50"}`}><Cloud className="h-4 w-4" />{online ? "Connected" : "Offline · reconnect to save"}</div></div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3"><Metric label="Jobs on today" value={todaysJobs.length} icon={<CalendarDaysIcon />} /><Metric label="Completed" value={`${completeCount}/${todaysJobs.length}`} icon={<CheckCircle2 className="h-5 w-5" />} /><Metric label="Next job" value={currentJob?.scheduledTime || currentJob?.time || "—"} icon={<Clock3 className="h-5 w-5" />} /></section>

      <div className="flex items-center justify-between gap-3"><div><h2 className="text-xl font-bold">{jobsPage ? "Assigned job checklists" : "Your shift"}</h2><p className="mt-1 text-sm text-slate-500">Only jobs assigned to your account are shown.</p></div><button onClick={() => void refreshJobs()} className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"><RefreshCw className="h-4 w-4" />Refresh</button></div>

      {jobs.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center"><Sparkles className="mx-auto h-9 w-9 text-cyan-700" /><h3 className="mt-4 text-lg font-bold">No jobs assigned yet</h3><p className="mx-auto mt-2 max-w-md text-sm text-slate-500">When the dispatcher assigns your next job, you’ll find its schedule, access notes, and checklist here.</p></div>}

      {(jobsPage ? jobs.filter((job) => job.status !== "cancelled") : (todaysJobs.length ? todaysJobs : jobs.filter((job) => job.status !== "cancelled").slice(0, 1))).map((job) => {
        const checklist = job.workerChecklist || {}
        const finished = checklistItems.filter((_, index) => checklist[`task${index}`]).length
        const progress = Math.round(finished / checklistItems.length * 100)
        const address = [job.address, job.city, job.postcode].filter(Boolean).join(", ")
        const isBusy = savingId === job.id
        const issueDraft = issueDrafts[job.id] || { category: "Access problem", description: "" }
        return <article key={job.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-white to-cyan-50/50 p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${jobStatusClass(job.status)}`}>{(job.status || "pending").replace("-", " ")}</span><span className="text-xs font-semibold text-slate-400">Job #{job.id.slice(-6).toUpperCase()}</span></div><h3 className="mt-3 text-xl font-bold">{job.service || "Cleaning service"}</h3><p className="mt-1 text-sm text-slate-500">{job.propertyType || "Property details pending"} · {job.bedrooms || "—"} bedrooms · {job.bathrooms || "—"} bathrooms</p></div><div className="rounded-2xl border border-white bg-white/80 px-4 py-3 text-right shadow-sm"><p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Arrival</p><p className="mt-1 text-lg font-bold">{job.scheduledTime || job.time || "Time TBC"}</p><p className="text-xs text-slate-500">{dateFor(job)}</p></div></div>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">{address && <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-700 hover:border-cyan-300"><MapPin className="h-4 w-4 shrink-0 text-cyan-700" /><span className="truncate">{address}</span><Navigation className="ml-auto h-4 w-4 shrink-0 text-cyan-700" /></a>}{job.phone && <a href={`tel:${job.phone}`} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-700"><Phone className="h-4 w-4 text-cyan-700" />Customer · {job.phone}</a>}</div>
            {(job.internalNotes || job.notes) && <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950"><p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-amber-800">Dispatcher instructions</p>{job.internalNotes || job.notes}</div>}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-2 text-xs text-slate-500"><ShieldCheck className="h-4 w-4 text-emerald-700" />Customer details are visible only for your assigned job.</div><button disabled={isBusy || job.status === "completed"} onClick={() => void advanceJob(job)} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#183b62] px-5 text-sm font-bold text-white hover:bg-[#214d76] disabled:cursor-not-allowed disabled:opacity-55 sm:w-auto">{isBusy && <Loader2 className="h-4 w-4 animate-spin" />}{job.status === "completed" ? <><CheckCircle2 className="h-4 w-4" />Completed</> : job.status === "in-progress" ? <><Check className="h-4 w-4" />Finish job</> : job.status === "en-route" ? <><Clock3 className="h-4 w-4" />Start job</> : <><Navigation className="h-4 w-4" />Mark en route</>}</button></div>
          </div>

          {job.status !== "completed" && <div className="grid gap-5 p-5 sm:p-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)]"><section><div className="flex items-end justify-between gap-3"><div><h4 className="font-bold">Job checklist</h4><p className="mt-1 text-xs text-slate-500">Complete every task before you finish the job.</p></div><span className="text-sm font-bold text-cyan-800">{finished}/{checklistItems.length}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-cyan-600 transition-all" style={{ width: `${progress}%` }} /></div><div className="mt-3 space-y-2">{checklistItems.map((item, index) => <label key={item} className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 text-sm transition ${checklist[`task${index}`] ? "border-emerald-200 bg-emerald-50/70 text-emerald-950" : "border-slate-200 hover:border-cyan-200"}`}><input type="checkbox" checked={!!checklist[`task${index}`]} disabled={isBusy} onChange={(event) => void toggleChecklist(job, index, event.target.checked)} className="h-4 w-4 accent-cyan-700" /><span className={checklist[`task${index}`] ? "line-through decoration-emerald-700/40" : ""}>{item}</span></label>)}</div>
              <label className="mt-4 block text-xs font-bold uppercase tracking-wide text-slate-500">Job completion notes<textarea rows={3} maxLength={1500} value={noteDrafts[job.id] ?? job.workerNotes ?? ""} onChange={(event) => setNoteDrafts((current) => ({ ...current, [job.id]: event.target.value }))} placeholder="Work completed, customer requests, follow-up needed…" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm font-normal normal-case tracking-normal text-slate-800 outline-none focus:border-cyan-600" /></label><button onClick={() => void saveNotes(job)} disabled={isBusy} className="mt-2 h-9 rounded-lg border border-slate-200 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Save job notes</button>
            </section>
            <section className="space-y-4"><div className="rounded-2xl border border-slate-200 p-4"><div className="flex items-center justify-between gap-3"><div><h4 className="font-bold">Job evidence</h4><p className="mt-1 text-xs text-slate-500">Upload up to 8 JPG, PNG or WebP photos.</p></div><label className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-xl bg-cyan-700 px-3 text-sm font-bold text-white hover:bg-cyan-800">{uploadingId === job.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}Add photo<input type="file" accept="image/jpeg,image/png,image/webp" capture="environment" className="sr-only" disabled={uploadingId === job.id || !online} onChange={(event) => { void uploadEvidence(job, event.target.files?.[0]); event.currentTarget.value = "" }} /></label></div>{(job.workerPhotoUrls || []).length > 0 && <div className="mt-3 grid grid-cols-4 gap-2">{job.workerPhotoUrls?.map((url, index) => <a key={url} href={url} target="_blank" rel="noreferrer" className="aspect-square overflow-hidden rounded-lg bg-slate-100"><img src={url} alt={`Job evidence ${index + 1}`} className="h-full w-full object-cover" /></a>)}</div>}</div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4"><div className="flex items-start gap-2"><AlertCircle className="mt-0.5 h-4 w-4 text-rose-700" /><div><h4 className="text-sm font-bold text-rose-950">Report an issue</h4><p className="mt-1 text-xs text-rose-800">Send an access, safety, supply or scope issue to dispatch.</p></div></div><select value={issueDraft.category} onChange={(event) => setIssueDrafts((current) => ({ ...current, [job.id]: { ...issueDraft, category: event.target.value } }))} className="mt-3 h-10 w-full rounded-lg border border-rose-200 bg-white px-3 text-sm"><option>Access problem</option><option>Safety concern</option><option>Missing supplies</option><option>Customer request</option><option>Scope or damage</option><option>Running late</option></select><textarea rows={2} value={issueDraft.description} onChange={(event) => setIssueDrafts((current) => ({ ...current, [job.id]: { ...issueDraft, description: event.target.value } }))} placeholder="Briefly describe what happened" className="mt-2 w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm" /><button onClick={() => void reportIssue(job)} disabled={isBusy} className="mt-2 h-9 rounded-lg bg-rose-700 px-3 text-sm font-semibold text-white hover:bg-rose-800">Record issue for dispatch</button>{job.workerIssue && <p className="mt-2 text-xs text-rose-900">Latest: {job.workerIssue.category} · {job.workerIssue.description}</p>}</div>
            </section></div>}
          {job.status === "completed" && <div className="flex flex-wrap items-center justify-between gap-3 bg-emerald-50 px-5 py-4 text-sm text-emerald-950 sm:px-6"><span className="inline-flex items-center gap-2 font-semibold"><CheckCircle2 className="h-4 w-4" />Job complete · checklist {finished}/{checklistItems.length}</span>{job.workerCompletedAt && <span className="text-xs">Finished {new Date(job.workerCompletedAt).toLocaleString("en-AU")}</span>}</div>}
        </article>
      })}
    </div>
  </StaffShell>
}

function Metric({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-500">{label}</span><span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-50 text-cyan-800">{icon}</span></div><p className="mt-3 text-2xl font-bold tracking-tight">{value}</p></div>
}

function CalendarDaysIcon() { return <Clock3 className="h-5 w-5" /> }
