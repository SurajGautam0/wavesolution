"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ExternalLink, LogOut, Menu, Settings as SettingsIcon, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AdminNav } from "@/components/admin-nav"
import { useAuth } from "@/lib/auth-context"

export function AdminHeader() {
  const { user } = useAuth()
  const userInitials = user?.name
    ? user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()
    : "AD"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 overflow-y-auto p-0">
              <SheetHeader className="border-b border-slate-200 p-4 text-left">
                <SheetTitle className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Workspace navigation
                </SheetTitle>
                <Image
                  src="/logo.png"
                  alt="Wave Solution"
                  width={160}
                  height={40}
                  className="mt-2 h-9 w-auto object-contain"
                />
              </SheetHeader>
              <div className="p-3">
                <AdminNav mobileStacked />
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/admin" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Wave Solution"
              width={160}
              height={40}
              priority
              className="h-8 w-auto object-contain sm:h-9"
            />
            <span className="hidden h-4 w-px bg-slate-200 sm:block" />
            <span className="hidden text-xs font-medium text-slate-500 sm:block">Operations hub</span>
          </Link>
        </div>

        <div className="hidden items-center gap-2 text-xs text-slate-500 md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="font-medium text-slate-600">Systems operational</span>
          <span className="text-slate-300">/</span>
          <span>Gold Coast service hub</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 sm:inline-flex"
          >
            <span>Live site</span>
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg p-1 pl-2 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333365]/20"
              >
                <span className="hidden text-right sm:block">
                  <span className="block text-sm font-medium leading-tight text-slate-900">{user?.name || "Administrator"}</span>
                  <span className="block text-[11px] capitalize leading-tight text-slate-500">{user?.role || "Admin"}</span>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#333365] text-xs font-semibold text-white">
                  {userInitials}
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60 rounded-xl border-slate-200 p-1.5">
              <DropdownMenuLabel className="p-2.5 font-normal">
                <p className="text-sm font-semibold text-slate-900">{user?.name || "Administrator"}</p>
                <p className="mt-0.5 truncate text-xs text-slate-500">{user?.email || "admin@wavesolution.com.au"}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/admin?tab=settings" className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-slate-600 focus:bg-slate-100 focus:text-slate-900">
                  <SettingsIcon className="h-4 w-4 text-slate-400" />
                  <span>Workspace settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin?tab=activity" className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-slate-600 focus:bg-slate-100 focus:text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-slate-400" />
                  <span>Activity audit log</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/logout" className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-rose-600 focus:bg-rose-50 focus:text-rose-700">
                  <LogOut className="h-4 w-4" />
                  <span>Sign out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
