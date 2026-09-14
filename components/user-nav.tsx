"use client"

import { CalendarDays, Home, Clock, MessageSquare, User, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface UserNavProps {
    activeTab?: string
    setActiveTab?: (tab: string) => void
}

export function UserNav({ activeTab = "dashboard", setActiveTab = () => { } }: UserNavProps) {
    const { logout } = useAuth()
    const router = useRouter()

    const routes = [
        {
            id: "dashboard",
            label: "Overview",
            icon: Home,
        },
        {
            id: "bookings",
            label: "My Bookings",
            icon: CalendarDays,
        },
        {
            id: "history",
            label: "Service History",
            icon: Clock,
        },
        {
            id: "support",
            label: "Support",
            icon: MessageSquare,
        },
        {
            id: "profile",
            label: "Profile Settings",
            icon: User,
        },
    ]

    const handleLogout = async () => {
        await logout()
        router.push("/")
    }

    return (
        <nav className="flex flex-col gap-1 p-2">
            {routes.map((route) => {
                const isActive = activeTab === route.id
                return (
                    <button
                        key={route.id}
                        onClick={() => setActiveTab(route.id)}
                        className={cn(
                            "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                            isActive
                                ? "bg-[#39BDE4]/10 text-secondary shadow-sm"
                                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                        )}
                    >
                        <route.icon
                            className={cn(
                                "h-5 w-5 shrink-0 transition-colors",
                                isActive ? "text-[#39BDE4]" : "text-slate-400"
                            )}
                        />
                        <span>{route.label}</span>
                        {isActive && (
                            <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#39BDE4]" />
                        )}
                    </button>
                )
            })}

            <div className="my-3 border-t border-slate-200" />

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
            >
                <LogOut className="h-5 w-5 shrink-0" />
                <span>Sign Out</span>
            </button>
        </nav>
    )
}
