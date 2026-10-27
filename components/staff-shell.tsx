"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { CalendarDays, ClipboardCheck, ClipboardList, LogOut, MapPinned } from "lucide-react"

export function StaffShell({ children, kind }: { children: React.ReactNode; kind: "operations" | "worker" }) {
  const { user } = useAuth()
  const pathname = usePathname()
  const router = useRouter()
  const isOperations = kind === "operations"
  const links = isOperations
    ? [{ href: "/operations", label: "Dispatch board", icon: MapPinned }]
    : [{ href: "/worker", label: "My shift", icon: CalendarDays }, { href: "/worker/jobs", label: "Job checklists", icon: ClipboardCheck }]

  const initial = user?.name?.charAt(0)?.toUpperCase() || "W"

  async function logout() {
    router.replace("/logout")
  }

  return (
    <div
      className="min-h-screen bg-[#F6F7F9] text-slate-900 antialiased"
      style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
    >
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href={isOperations ? "/operations" : "/worker"} className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Wave Solution"
              width={160}
              height={40}
              className="h-8 w-auto object-contain sm:h-9"
            />
            <span className="hidden h-4 w-px bg-slate-200 sm:block" />
            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              {isOperations ? "Operations" : "Team portal"}
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium leading-tight text-slate-900">{user?.name || "Team member"}</p>
              <p className="text-[11px] capitalize leading-tight text-slate-500">{user?.role || kind}</p>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#333365] text-xs font-semibold text-white">
              {initial}
            </span>
            <button
              type="button"
              onClick={logout}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid min-w-0 max-w-[1440px] items-start gap-4 px-3 py-4 sm:gap-6 sm:px-6 sm:py-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-8">
        <aside className="lg:sticky lg:top-24">
          <nav
            aria-label="Team dashboard"
            className="flex max-w-full flex-nowrap gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:overflow-visible"
          >
            {links.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`group flex min-h-10 shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:w-full ${
                    active ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${active ? "text-[#333365]" : "text-slate-400"}`} />
                  <span>{label}</span>
                  {active && <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-[#333365] lg:block" />}
                </Link>
              )
            })}
            {isOperations && (
              <Link
                href="/admin"
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 lg:w-full"
              >
                <ClipboardList className="h-4 w-4 shrink-0 text-slate-400" />
                Admin workspace
              </Link>
            )}
          </nav>

          <div className="mt-4 hidden rounded-xl border border-slate-200 bg-white p-5 lg:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Signed in as</p>
            <p className="mt-2 truncate text-sm font-medium text-slate-900">{user?.email || "Loading account..."}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Access is limited to your assigned team role.</p>
          </div>
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  )
}
