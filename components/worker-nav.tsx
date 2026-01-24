"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarDays, ClipboardList, Clock, Home, LogOut, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function WorkerNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/worker",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/worker",
    },
    {
      href: "/worker/jobs",
      label: "My Jobs",
      icon: ClipboardList,
      active: pathname === "/worker/jobs",
    },
    {
      href: "/worker/schedule",
      label: "Schedule",
      icon: CalendarDays,
      active: pathname === "/worker/schedule",
    },
    {
      href: "/worker/timesheet",
      label: "Timesheet",
      icon: Clock,
      active: pathname === "/worker/timesheet",
    },
    {
      href: "/worker/profile",
      label: "Profile",
      icon: User,
      active: pathname === "/worker/profile",
    },
    {
      href: "/worker/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/worker/settings",
    },
  ]

  return (
    <nav className="grid items-start gap-2">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant={route.active ? "secondary" : "ghost"}
            className={cn("w-full justify-start", route.active ? "bg-primary/10 font-medium text-primary" : "")}
          >
            <route.icon className="mr-2 h-4 w-4" />
            {route.label}
          </Button>
        </Link>
      ))}
      <Link href="/logout">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </Link>
    </nav>
  )
}

