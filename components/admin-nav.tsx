"use client"

import { BarChart3, CalendarDays, DollarSign, FileText, Home, Percent, Search, Settings, Users, MessageSquare, Mail } from "lucide-react"

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
      id: "services",
      label: "Services",
      icon: FileText,
      active: activeTab === "services",
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageSquare,
      active: activeTab === "messages",
    },
    {
      id: "subscribers",
      label: "Subscribers",
      icon: Mail,
      active: activeTab === "subscribers",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      active: activeTab === "settings",
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

