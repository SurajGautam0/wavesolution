"use client"

import { CalendarDays, Home, Settings, MessageSquare, Clock, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface UserNavProps {
    activeTab?: string
    setActiveTab?: (tab: string) => void
}

export function UserNav({ activeTab = "dashboard", setActiveTab = () => { } }: UserNavProps) {
    const routes = [
        {
            id: "dashboard",
            label: "Overview",
            icon: Home,
            active: activeTab === "dashboard",
        },
        {
            id: "bookings",
            label: "My Bookings",
            icon: CalendarDays,
            active: activeTab === "bookings",
        },
        {
            id: "history",
            label: "Service History",
            icon: Clock,
            active: activeTab === "history",
        },
        {
            id: "support",
            label: "Support",
            icon: MessageSquare,
            active: activeTab === "support",
        },
        {
            id: "profile",
            label: "Profile Settings",
            icon: User,
            active: activeTab === "profile",
        },
    ]

    return (
        <nav className="grid items-start gap-1 p-2">
            {routes.map((route) => (
                <Button
                    key={route.id}
                    variant="ghost"
                    className={cn(
                        "w-full justify-start h-10 rounded-lg transition-all duration-200 px-3",
                        route.active
                            ? "bg-blue-50 text-blue-700 font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                    onClick={() => setActiveTab(route.id)}
                >
                    <route.icon className={cn("mr-2.5 h-4 w-4 transition-colors", route.active ? "text-blue-600" : "text-slate-500")} />
                    <span className="text-sm">{route.label}</span>
                </Button>
            ))}
        </nav>
    )
}
