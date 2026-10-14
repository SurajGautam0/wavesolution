"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import { useAuth } from "@/lib/auth-context"
import { auth } from "@/lib/firebase"
import { Activity, CalendarDays, ClipboardCheck, ClipboardList, LogOut, MapPinned } from "lucide-react"

export function StaffShell({ children, kind }: { children: React.ReactNode; kind: "operations" | "worker" }) {
  const { user } = useAuth()
  const pathname = usePathname()
  const router = useRouter()
  const isOperations = kind === "operations"
  const links = isOperations
    ? [{ href: "/operations", label: "Dispatch board", icon: MapPinned }]
    : [{ href: "/worker", label: "My shift", icon: CalendarDays }, { href: "/worker/jobs", label: "Job checklist", icon: ClipboardCheck }]

  async function logout() {
    router.replace("/logout")
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={isOperations ? "/operations" : "/worker"} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#183b62] text-white"><Activity className="h-5 w-5" /></span>
            <span><span className="block text-sm font-bold tracking-tight">Wave Solution</span><span className="block text-[11px] text-slate-500">{isOperations ? "Operations centre" : "Team workspace"}</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block"><p className="text-sm font-semibold">{user?.name || "Team member"}</p><p className="text-xs capitalize text-slate-500">{user?.role || kind}</p></div>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-900">{user?.name?.[0]?.toUpperCase() || "W"}</span>
            <button onClick={logout} className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50"><LogOut className="h-4 w-4" /><span className="hidden sm:inline">Sign out</span></button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1500px] gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-8 lg:py-8">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <nav className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 lg:flex-col">
            {links.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return <Link key={href} href={href} className={`inline-flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active ? "bg-[#183b62] text-white" : "text-slate-600 hover:bg-slate-100"}`}><Icon className="h-4 w-4" />{label}</Link>
            })}
            {isOperations && <Link href="/admin" className="inline-flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100"><ClipboardList className="h-4 w-4" />Admin dashboard</Link>}
          </nav>
          <div className="mt-4 hidden rounded-2xl border border-slate-200 bg-white p-4 lg:block"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Signed in as</p><p className="mt-2 truncate text-sm font-semibold">{user?.email || "Loading account…"}</p><p className="mt-1 text-xs text-slate-500">Access is limited to your team role.</p></div>
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  )
}
