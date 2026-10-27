"use client"

import { usePathname } from "next/navigation"
import { MainNav } from "@/components/main-nav"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { AuthProvider } from "@/lib/auth-context"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isAdminPage =
        pathname?.startsWith("/admin") ||
        pathname?.startsWith("/login") ||
        pathname?.startsWith("/register") ||
        pathname?.startsWith("/logout") ||
        pathname?.startsWith("/dashboard")
        || pathname?.startsWith("/operations")
        || pathname?.startsWith("/worker")

    if (isAdminPage) {
        return (
            <>
                {children}
                <WhatsAppWidget />
            </>
        )
    }

    return (
        <>
            <AuthProvider>
                <MainNav />
            </AuthProvider>
            <main className="flex-1 pb-20 md:pb-0">{children}</main>
            <SiteFooter />
            <MobileStickyCta />
            <WhatsAppWidget />
        </>
    )
}
