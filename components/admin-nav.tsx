"use client"

import { BarChart3, CalendarDays, DollarSign, FileText, Home, Percent, Search, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface AdminNavProps {
  activeTab?: string
  setActiveTab?: (tab: string) => void
}

export function AdminNav({ activeTab = "dashboard", setActiveTab = () => { } }: AdminNavProps) {
  const routes = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      active: activeTab === "dashboard",
    },
    {
      id: "bookings",
      label: "Bookings",
      icon: CalendarDays,
      active: activeTab === "bookings",
    },
    {
      id: "users",
      label: "Users",
      icon: Users,
      active: activeTab === "users",
    },
    {
      id: "coupons",
      label: "Coupons",
      icon: Percent,
      active: activeTab === "coupons",
    },
    {
      id: "pricing",
      label: "Pricing",
      icon: DollarSign,
      active: activeTab === "pricing",
    },
    {
      id: "posts",
      label: "Content",
      icon: FileText,
      active: activeTab === "posts",
    },
    {
      id: "seo",
      label: "SEO",
      icon: Search,
      active: activeTab === "seo",
    },
    {
      id: "reports",
      label: "Reports",
      icon: BarChart3,
      active: activeTab === "reports",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      active: activeTab === "settings",
    },
  ]

  return (
    <nav className="grid items-start gap-1">
      {routes.map((route) => (
        <Button
          key={route.id}
          variant="ghost"
          className={cn(
            "w-full justify-start h-12 rounded-2xl transition-all duration-300 px-4",
            route.active
              ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90"
              : "text-blue-900/60 hover:bg-blue-50 hover:text-primary"
          )}
          onClick={() => setActiveTab(route.id)}
        >
          <route.icon className={cn("mr-3 h-4 w-4 transition-transform", route.active ? "scale-110" : "group-hover:scale-110")} />
          <span className="text-xs font-black uppercase tracking-widest">{route.label}</span>
        </Button>
      ))}
    </nav>
  )
}

