"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { businessInfo, siteLinks } from "@/lib/business-info"
import {
    Menu,
    X,
    Bell,
    LogOut,
    User,
    Settings,
    Home,
    ChevronDown
} from "lucide-react"
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleLogout = async () => {
        await logout()
        router.push("/")
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
            <div className="classic-container flex h-16 items-center justify-between gap-4">
                {/* Logo */}
                <Link href={siteLinks.home} className="flex items-center gap-3 shrink-0">
                    <div className="relative h-9 w-36 lg:h-10 lg:w-40">
                        <img
                            src="/logo.png"
                            alt="Wave Solution"
                            width={160}
                            height={40}
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <span className="hidden sm:inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-primary">
                        Portal
                    </span>
                </Link>

                {/* Desktop Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Quick Book Button */}
                    <Button
                        asChild
                        className="hidden sm:inline-flex h-10 rounded-full bg-[#39BDE4] px-5 text-xs font-black uppercase tracking-widest text-white hover:bg-[#249FC5] transition-colors"
                    >
                        <Link href={siteLinks.book}>Book Now</Link>
                    </Button>

                    {/* Notifications */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative h-10 w-10 rounded-full text-slate-500 hover:text-secondary hover:bg-secondary/5"
                    >
                        <Bell className="h-5 w-5" />
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#39BDE4]" />
                    </Button>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-2 h-10 rounded-full pl-1 pr-3 hover:bg-secondary/5"
                            >
                                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#39BDE4] to-secondary flex items-center justify-center text-white text-sm font-bold">
                                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                                </div>
                                <span className="hidden md:inline text-sm font-semibold text-slate-700 max-w-[120px] truncate">
                                    {user?.name || "Account"}
                                </span>
                                <ChevronDown className="h-4 w-4 text-slate-400" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 rounded-2xl border-slate-200 shadow-xl shadow-slate-900/5">
                            <DropdownMenuLabel className="p-4">
                                <p className="text-sm font-bold text-slate-900">{user?.name || "User"}</p>
                                <p className="text-xs font-medium text-slate-500 mt-0.5">{user?.email || ""}</p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 focus:bg-secondary/5 focus:text-secondary"
                                onClick={() => router.push("/dashboard")}
                            >
                                <Home className="mr-2.5 h-4 w-4" />
                                Dashboard
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 focus:bg-secondary/5 focus:text-secondary"
                                onClick={() => router.push("/dashboard")}
                            >
                                <User className="mr-2.5 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 focus:bg-red-50 focus:text-red-600"
                                onClick={handleLogout}
                            >
                                <LogOut className="mr-2.5 h-4 w-4" />
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
