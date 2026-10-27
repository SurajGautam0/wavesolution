"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import {
  AlertCircle,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  Clock3,
  Loader2,
  MapPin,
  Navigation,
  Phone,
  RefreshCw,
  ShieldCheck,
} from "lucide-react"

import { StaffShell } from "@/components/staff-shell"
import { useAuth } from "@/lib/auth-context"
import { getBookingsByWorker, updateStaffBooking, watchBookingsByWorker } from "@/lib/firebase/db"
import { storage } from "@/lib/firebase"
import type { Booking } from "@/lib/types"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const checklistItems = [
  "Check access and take arrival condition photos",
  "Clean kitchen surfaces, sink and appliance exteriors",
  "Clean bathrooms, showers, toilets and mirrors",
  "Clean bedrooms and living areas",
  "Dust reachable surfaces and fittings",
  "Vacuum and mop all applicable floors",
  "Complete a final walk-through and secure the property",
]

function dateFor(booking: Booking) {
  const value = booking.scheduledDate || booking.date
  if (!value) return "Date to be confirmed"
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime())
    ? String(value)
    : parsed.toLocaleDateString("en-AU", { timeZone: "Australia/Brisbane", weekday: "short", day: "numeric", month: "short" })
}

function goldCoastToday() {
  const parts = new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Brisbane", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date())
  const part = (type: string) => parts.find((item) => item.type === type)?.value || ""
  return `${part("year")}-${part("month")}-${part("day")}`
}

function jobStatusClass(status = "") {
  if (status === "completed") return "border-emerald-200 bg-emerald-50 text-emerald-800"
  if (status === "in-progress") return "border-orange-200 bg-orange-50 text-orange-800"
  if (status === "en-route") return "border-violet-200 bg-violet-50 text-violet-800"
  return "border-blue-200 bg-blue-50 text-blue-800"
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
    } finally {
      setLoading(false)
    }
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
      if (firstSnapshot) {
        firstSnapshot = false
        setLoading(false)
      }
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
    return () => {
      window.removeEventListener("online", updateOnline)
      window.removeEventListener("offline", updateOnline)
    }
  }, [])

  const today = goldCoastToday()
  const todaysJobs = useMemo(
    () => jobs.filter((job) => (job.scheduledDate || job.date || "").slice(0, 10) === today && job.status !== "cancelled"),
    [jobs, today],
  )
  const currentJob = todaysJobs.find((job) => job.status === "in-progress")
    || todaysJobs.find((job) => job.status !== "completed")
    || jobs.find((job) => job.status !== "completed" && job.status !== "cancelled")
  const completeCount = todaysJobs.filter((job) => job.status === "completed").length

  async function updateJob(job: Booking, patch: Partial<Booking>, success?: string) {
    setSavingId(job.id)
    try {
      await updateStaffBooking(job.id, patch)
      setJobs((rows) => rows.map((row) => (row.id === job.id ? { ...row, ...patch } : row)))
      if (success) toast.success(success)
      return true
    } catch (error) {
      console.error(error)
      toast.error("Could not save this update. Check your connection and try again.")
      return false
    } finally {
      setSavingId(null)
    }
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
      if (remaining) {
        toast.error(`Complete the remaining ${remaining} checklist task${remaining === 1 ? "" : "s"} before finishing.`)
        return
      }
      await updateJob(job, { status: "completed", workerCompletedAt: new Date().toISOString() }, "Job completed and sent for review")
    }
  }

  async function toggleChecklist(job: Booking, index: number, checked: boolean) {
    const checklist = { ...(job.workerChecklist || {}), [`task${index}`]: checked }
    await updateJob(job, { workerChecklist: checklist })
  }

  async function saveNotes(job: Booking) {
    const workerNotes = noteDrafts[job.id] ?? job.workerNotes ?? ""
    if (await updateJob(job, { workerNotes }, "Job notes saved")) {
      setNoteDrafts((current) => {
        const next = { ...current }
        delete next[job.id]
        return next
      })
    }
  }

  async function reportIssue(job: Booking) {
    const issue = issueDrafts[job.id]
    if (!issue?.description.trim()) {
      toast.error("Add a short description of the issue.")
      return
    }
    if (await updateJob(job, { workerIssue: { ...issue, description: issue.description.trim(), reportedAt: new Date().toISOString() }, workerIssueResolvedAt: "" }, "Issue recorded for dispatch")) {
      setIssueDrafts((current) => ({ ...current, [job.id]: { category: "Access problem", description: "" } }))
    }
  }

  async function uploadEvidence(job: Booking, file?: File) {
    if (!file || !user) return
    if (!file.type.match(/^image\/(jpeg|png|webp)$/)) {
      toast.error("Choose a JPG, PNG, or WebP image.")
      return
    }
    if (file.size > 8 * 1024 * 1024) {
      toast.error("Images must be smaller than 8 MB.")
      return
    }
    const existing = job.workerPhotoUrls || []
    if (existing.length >= 8) {
      toast.error("This job has reached its 8 photo limit.")
      return
    }
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
    } finally {
      setUploadingId(null)
    }
  }

  if (authLoading || loading || !user || user.role !== "worker") {
    return (
      <div
        className="grid min-h-screen place-items-center bg-[#F6F7F9]"
        style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
      >
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-6 w-6 animate-spin text-slate-500" />
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Loading your shift</p>
        </div>
      </div>
    )
  }

  const firstName = user.name?.trim().split(/\s+/)[0] || ""
  const dateLabel = new Date().toLocaleDateString("en-AU", { timeZone: "Australia/Brisbane", weekday: "long", day: "numeric", month: "long" })
  const visibleJobs = jobsPage
    ? jobs.filter((job) => job.status !== "cancelled")
    : (todaysJobs.length ? todaysJobs : jobs.filter((job) => job.status !== "cancelled").slice(0, 1))

  const metrics = [
    { label: "Jobs today", value: todaysJobs.length, icon: CalendarDays },
    { label: "Completed today", value: `${completeCount}/${todaysJobs.length}`, icon: CheckCircle2 },
    { label: "Next arrival", value: currentJob ? (currentJob.scheduledTime || currentJob.time || "TBC") : "—", icon: Clock3 },
  ]

  return (
    <StaffShell kind="worker">
      <div className="space-y-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Team workspace · {dateLabel}</p>
            <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Your shift{firstName ? `, ${firstName}` : ""}
            </h1>
            <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-500">
              Job briefings, checklists and completion notes for the work assigned to you.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <span className={cn(
              "inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-xs font-medium",
              online ? "border-slate-200 bg-white text-slate-600" : "border-amber-200 bg-amber-50 text-amber-800",
            )}>
              <span className={cn("h-1.5 w-1.5 rounded-full", online ? "bg-emerald-500" : "bg-amber-500")} />
              {online ? "Connected" : "Offline"}
            </span>
            <button
              type="button"
              onClick={() => void refreshJobs()}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
          </div>
        </header>

        <section aria-label="Shift summary" className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {metrics.map(({ label, value, icon: Icon }, index) => (
            <div key={label} className={cn("bg-white p-4 sm:p-5", index === 2 && "col-span-2 sm:col-span-1")}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-slate-500">{label}</p>
                <Icon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              </div>
              <p className="mt-3 truncate text-[26px] font-semibold leading-none tracking-tight text-slate-900 tabular-nums">{value}</p>
            </div>
          ))}
        </section>

        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">{jobsPage ? "Assigned job checklists" : "Today’s jobs"}</h2>
            <p className="mt-0.5 text-xs text-slate-500">
              {jobsPage ? "Every job assigned to your account." : "Only jobs assigned to your account are shown."}
            </p>
          </div>
          <span className="shrink-0 text-xs text-slate-500 tabular-nums">
            {visibleJobs.length} job{visibleJobs.length === 1 ? "" : "s"}
          </span>
        </div>

        {visibleJobs.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-14 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
              <CalendarDays className="h-5 w-5 text-slate-400" />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">No jobs assigned yet</h3>
            <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-slate-500">
              When dispatch assigns your next job, its schedule, access notes and checklist will appear here.
            </p>
          </div>
        ) : (
          visibleJobs.map((job) => {
            const checklist = job.workerChecklist || {}
            const finished = checklistItems.filter((_, index) => checklist[`task${index}`]).length
            const progress = Math.round((finished / checklistItems.length) * 100)
            const address = [job.address, job.city, job.postcode].filter(Boolean).join(", ")
            const isBusy = savingId === job.id
            const issueDraft = issueDrafts[job.id] || { category: "Access problem", description: "" }
            const instructions = job.internalNotes || job.notes

            return (
              <article key={job.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium capitalize",
                          jobStatusClass(job.status),
                        )}>
                          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                          {(job.status || "pending").replace("-", " ")}
                        </span>
                        <span className="text-xs text-slate-500 tabular-nums">Job #{job.id.slice(-6).toUpperCase()}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">{job.service || "Cleaning service"}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {job.propertyType || "Property details pending"} · {job.bedrooms || "—"} bed · {job.bathrooms || "—"} bath
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left sm:text-right">
                      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Arrival</p>
                      <p className="mt-1 text-base font-semibold tabular-nums text-slate-900">{job.scheduledTime || job.time || "Time TBC"}</p>
                      <p className="text-xs text-slate-500">{dateFor(job)}</p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {address && (
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-w-0 items-center gap-2.5 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                        <span className="min-w-0 flex-1 break-words">{address}</span>
                        <Navigation className="ml-auto h-4 w-4 shrink-0 text-slate-400" />
                      </a>
                    )}
                    {job.phone && (
                      <a
                        href={`tel:${job.phone}`}
                        className="flex min-w-0 items-center gap-2.5 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-slate-400" />
                        <span className="truncate">Customer · {job.phone}</span>
                      </a>
                    )}
                  </div>

                  {instructions && (
                    <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-amber-800">Dispatcher instructions</p>
                      <p className="mt-1">{instructions}</p>
                    </div>
                  )}

                  <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-1.5 text-xs text-slate-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                      Customer details are visible only for your assigned job.
                    </p>
                    <button
                      type="button"
                      disabled={isBusy || job.status === "completed"}
                      onClick={() => void advanceJob(job)}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#333365] px-4 text-sm font-medium text-white transition-colors hover:bg-[#3d3d78] disabled:cursor-not-allowed disabled:opacity-55"
                    >
                      {isBusy && <Loader2 className="h-4 w-4 animate-spin" />}
                      {job.status === "completed" ? (
                        <><CheckCircle2 className="h-4 w-4" /> Completed</>
                      ) : job.status === "in-progress" ? (
                        <><Check className="h-4 w-4" /> Finish job</>
                      ) : job.status === "en-route" ? (
                        <><Clock3 className="h-4 w-4" /> Start job</>
                      ) : (
                        <><Navigation className="h-4 w-4" /> Mark en route</>
                      )}
                    </button>
                  </div>
                </div>

                {job.status !== "completed" && (
                  <div className="grid border-t border-slate-200 xl:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]">
                    <section className="p-5 sm:p-6">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">Job checklist</h4>
                          <p className="mt-0.5 text-xs text-slate-500">Complete every task before finishing the job.</p>
                        </div>
                        <span className="text-xs font-medium text-slate-600 tabular-nums">{finished}/{checklistItems.length}</span>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-[#333365] transition-all" style={{ width: `${progress}%` }} />
                      </div>
                      <div className="mt-3 space-y-2">
                        {checklistItems.map((item, index) => {
                          const checked = !!checklist[`task${index}`]
                          return (
                            <label
                              key={item}
                              className={cn(
                                "flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-colors",
                                checked
                                  ? "border-emerald-200 bg-emerald-50/70 text-emerald-950"
                                  : "border-slate-200 text-slate-700 hover:bg-slate-50",
                              )}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                disabled={isBusy}
                                onChange={(event) => void toggleChecklist(job, index, event.target.checked)}
                                className="h-4 w-4 accent-[#333365]"
                              />
                              <span className={checked ? "line-through decoration-emerald-700/40" : ""}>{item}</span>
                            </label>
                          )
                        })}
                      </div>

                      <label className="mt-5 block text-xs font-medium text-slate-600">
                        Job completion notes
                        <textarea
                          rows={3}
                          maxLength={1500}
                          value={noteDrafts[job.id] ?? job.workerNotes ?? ""}
                          onChange={(event) => setNoteDrafts((current) => ({ ...current, [job.id]: event.target.value }))}
                          placeholder="Work completed, customer requests, follow-up needed..."
                          className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-normal text-slate-800 outline-none focus:border-[#333365] focus:ring-2 focus:ring-[#333365]/10"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => void saveNotes(job)}
                        disabled={isBusy}
                        className="mt-2 inline-flex h-9 items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-60"
                      >
                        Save job notes
                      </button>
                    </section>

                    <section className="space-y-4 border-t border-slate-200 p-5 sm:p-6 xl:border-l xl:border-t-0">
                      <div className="rounded-lg border border-slate-200 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900">Job evidence</h4>
                            <p className="mt-0.5 text-xs text-slate-500">Up to 8 JPG, PNG or WebP photos.</p>
                          </div>
                          <label className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg bg-[#333365] px-3 text-sm font-medium text-white transition-colors hover:bg-[#3d3d78]">
                            {uploadingId === job.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}
                            Add photo
                            <input
                              type="file"
                              accept="image/jpeg,image/png,image/webp"
                              capture="environment"
                              className="sr-only"
                              disabled={uploadingId === job.id || !online}
                              onChange={(event) => {
                                void uploadEvidence(job, event.target.files?.[0])
                                event.currentTarget.value = ""
                              }}
                            />
                          </label>
                        </div>
                        {(job.workerPhotoUrls || []).length > 0 && (
                          <div className="mt-3 grid grid-cols-4 gap-2">
                            {(job.workerPhotoUrls || []).map((url, index) => (
                              <a key={url} href={url} target="_blank" rel="noreferrer" className="aspect-square overflow-hidden rounded-lg bg-slate-100">
                                <img src={url} alt={`Job evidence ${index + 1}`} className="h-full w-full object-cover" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="rounded-lg border border-rose-200 bg-rose-50/60 p-4">
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-700" />
                          <div>
                            <h4 className="text-sm font-semibold text-rose-950">Report an issue</h4>
                            <p className="mt-0.5 text-xs leading-5 text-rose-800">Send an access, safety, supply or scope issue to dispatch.</p>
                          </div>
                        </div>
                        <select
                          value={issueDraft.category}
                          onChange={(event) => setIssueDrafts((current) => ({ ...current, [job.id]: { ...issueDraft, category: event.target.value } }))}
                          className="mt-3 h-9 w-full rounded-lg border border-rose-200 bg-white px-3 text-sm text-slate-800"
                        >
                          <option>Access problem</option>
                          <option>Safety concern</option>
                          <option>Missing supplies</option>
                          <option>Customer request</option>
                          <option>Scope or damage</option>
                          <option>Running late</option>
                        </select>
                        <textarea
                          rows={2}
                          value={issueDraft.description}
                          onChange={(event) => setIssueDrafts((current) => ({ ...current, [job.id]: { ...issueDraft, description: event.target.value } }))}
                          placeholder="Briefly describe what happened"
                          className="mt-2 w-full resize-y rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm text-slate-800"
                        />
                        <button
                          type="button"
                          onClick={() => void reportIssue(job)}
                          disabled={isBusy}
                          className="mt-2 inline-flex h-9 items-center rounded-lg bg-rose-700 px-3 text-sm font-medium text-white transition-colors hover:bg-rose-800 disabled:opacity-60"
                        >
                          Record issue for dispatch
                        </button>
                        {job.workerIssue && (
                          <p className="mt-2 text-xs leading-5 text-rose-900">
                            Latest: {job.workerIssue.category} · {job.workerIssue.description}
                          </p>
                        )}
                      </div>
                    </section>
                  </div>
                )}

                {job.status === "completed" && (
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-950 sm:px-6">
                    <span className="inline-flex items-center gap-2 font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      Job complete · checklist {finished}/{checklistItems.length}
                    </span>
                    {job.workerCompletedAt && (
                      <span className="text-xs text-emerald-800">
                        Finished {new Date(job.workerCompletedAt).toLocaleString("en-AU", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}
                      </span>
                    )}
                  </div>
                )}
              </article>
            )
          })
        )}
      </div>
    </StaffShell>
  )
}
