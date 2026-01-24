"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { MainNav } from "@/components/main-nav"
import { AuthProvider } from "@/lib/auth-context"
import { Toaster } from "sonner"

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith("/admin")

  return (
    <AuthProvider>
      <Toaster position="top-right" />
      {!isDashboard && <MainNav />}
      {children}
    </AuthProvider>
  )
} 