"use client"

import Link from "next/link"
import Image from "next/image"
import { Bell, Menu, User, ExternalLink, ShieldCheck, LogOut, Settings as SettingsIcon } from "lucide-react"

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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand & Badges */}
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-9 w-9 text-slate-600 hover:bg-slate-100"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 overflow-y-auto">
              <SheetHeader className="border-b border-slate-100 p-4 text-left">
                <SheetTitle className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Navigation
                </SheetTitle>
                <div className="pt-2">
                  <div className="relative w-36 h-9">
                    <Image
                      src="/logo.png"
                      alt="Wave Solution"
                      fill
                      className="object-contain"
                      sizes="144px"
                    />
                  </div>
                </div>
              </SheetHeader>
              <div className="p-3">
                <AdminNav mobileStacked />
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/admin" className="flex items-center gap-3">
            <div className="relative w-32 h-9 sm:w-36 sm:h-10">
              <Image
                src="/logo.png"
                alt="WaveSolution"
                fill
                className="object-contain"
                priority
                sizes="144px"
              />
            </div>
            <span className="hidden sm:inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-700 border border-slate-200/80">
              Operations Hub
            </span>
          </Link>
        </div>

        {/* Center: System Status Indicator */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>System Operational</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 text-[11px]">Gold Coast Service Hub</span>
        </div>

        {/* Right: Quick Actions & Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full p-1 pl-2 hover:bg-slate-100 transition-colors focus:outline-none"
              >
                <div className="hidden text-right sm:block">
                  <p className="text-xs font-semibold text-slate-800 leading-none">
                    {user?.name || "Admin"}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-none">
                    {user?.role || "Administrator"}
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white shadow-xs">
                  {userInitials}
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-1.5">
              <DropdownMenuLabel className="font-normal p-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-xs font-semibold text-slate-900">
                    {user?.name || "Administrator"}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {user?.email || "admin@wavesolution.com.au"}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/admin?tab=settings"
                  className="flex items-center gap-2 text-xs cursor-pointer py-2"
                >
                  <SettingsIcon className="h-4 w-4 text-slate-500" />
                  <span>Workspace Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/admin?tab=activity"
                  className="flex items-center gap-2 text-xs cursor-pointer py-2"
                >
                  <ShieldCheck className="h-4 w-4 text-slate-500" />
                  <span>Activity Audit Log</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/logout"
                  className="flex items-center gap-2 text-xs text-red-600 focus:text-red-600 cursor-pointer py-2"
                >
                  <LogOut className="h-4 w-4 text-red-500" />
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
