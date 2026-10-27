"use client"

import { CalendarDays, Clock3, Home, LifeBuoy, LogOut, UserRound } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { cn } from "@/lib/utils"

interface UserNavProps {
    activeTab?: string
    setActiveTab?: (tab: string) => void
}

const routes = [
    {
        id: "dashboard",
        label: "Overview",
        icon: Home,
    },
    {
        id: "bookings",
        label: "Bookings",
        icon: CalendarDays,
    },
    {
        id: "history",
        label: "History",
        icon: Clock3,
    },
    {
        id: "support",
        label: "Support",
        icon: LifeBuoy,
    },
    {
        id: "profile",
        label: "Profile",
        icon: UserRound,
    },
]

export function UserNav({ activeTab = "dashboard", setActiveTab = () => { } }: UserNavProps) {
    const { logout } = useAuth()
    const router = useRouter()

    const handleLogout = async () => {
        await logout()
        router.push("/")
    }

    return (
        <nav
            aria-label="Client portal"
            className="-mx-1 flex flex-wrap gap-1 px-1 pb-1 lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-0 lg:pb-0"
        >
            {routes.map((route) => {
                const isActive = activeTab === route.id
                return (
                    <button
                        key={route.id}
                        type="button"
                        onClick={() => setActiveTab(route.id)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:w-full",
                            isActive
                                ? "bg-slate-100 text-slate-900"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                    >
                        <route.icon
                            className={cn(
                                "h-4 w-4 shrink-0",
                                isActive ? "text-[#333365]" : "text-slate-400"
                            )}
                        />
                        <span className="whitespace-nowrap">{route.label}</span>
                        {isActive && (
                            <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-[#333365] lg:block" />
                        )}
                    </button>
                )
            })}

            <div className="hidden lg:my-2 lg:block lg:border-t lg:border-slate-200" />

            <button
                type="button"
                onClick={handleLogout}
                className="hidden items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-rose-50 hover:text-rose-700 lg:flex lg:w-full"
            >
                <LogOut className="h-4 w-4 shrink-0" />
                <span>Sign out</span>
            </button>
        </nav>
    )
}
