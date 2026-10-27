"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { CalendarPlus, ChevronDown, LogOut, Phone, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
    const { user, logout } = useAuth()
    const router = useRouter()

    const handleLogout = async () => {
        await logout()
        router.push("/")
    }

    const initial = user?.name?.charAt(0)?.toUpperCase() || "U"

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="classic-container flex h-16 items-center justify-between gap-4">
                <Link href={siteLinks.home} className="flex shrink-0 items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Wave Solution"
                        width={160}
                        height={40}
                        className="h-10 w-auto object-contain sm:h-11"
                    />
                    <span className="hidden h-4 w-px bg-slate-200 sm:block" />
                    <span className="hidden text-xs font-medium text-slate-500 sm:block">Client portal</span>
                </Link>

                <div className="flex items-center gap-1.5 sm:gap-2">
                    <Button
                        asChild
                        variant="outline"
                        className="hidden h-9 rounded-lg border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 shadow-none hover:bg-slate-50 hover:text-slate-900 sm:inline-flex"
                    >
                        <Link href={siteLinks.book}>
                            <CalendarPlus className="mr-1.5 h-4 w-4" />
                            Book a service
                        </Link>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="h-9 rounded-lg pl-1 pr-2 hover:bg-slate-100"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#333365] text-xs font-semibold text-white">
                                    {initial}
                                </span>
                                <span className="hidden max-w-[140px] truncate text-sm font-medium text-slate-700 md:inline">
                                    {user?.name || "Account"}
                                </span>
                                <ChevronDown className="h-4 w-4 text-slate-400" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-60 rounded-xl border-slate-200 shadow-lg shadow-slate-900/5">
                            <DropdownMenuLabel className="p-4">
                                <p className="truncate text-sm font-semibold text-slate-900">{user?.name || "Guest"}</p>
                                <p className="mt-0.5 truncate text-xs font-normal text-slate-500">{user?.email || businessInfo.email}</p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-600 focus:bg-slate-100 focus:text-slate-900"
                                onClick={() => router.push("/dashboard")}
                            >
                                <UserRound className="mr-2.5 h-4 w-4" />
                                Account overview
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-600 focus:bg-slate-100 focus:text-slate-900"
                                onClick={() => router.push("/contact")}
                            >
                                <Phone className="mr-2.5 h-4 w-4" />
                                Contact support
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-rose-600 focus:bg-rose-50 focus:text-rose-700"
                                onClick={handleLogout}
                            >
                                <LogOut className="mr-2.5 h-4 w-4" />
                                Sign out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
