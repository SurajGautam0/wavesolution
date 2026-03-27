"use client"

import { usePathname } from "next/navigation"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isAdminPage =
        pathname?.startsWith("/admin") ||
        pathname?.startsWith("/login") ||
        pathname?.startsWith("/register") ||
        pathname?.startsWith("/logout") ||
        pathname?.startsWith("/dashboard")

    const Content = () => {
        if (isAdminPage) {
            return <>{children}</>
        }

        return (
            <>
                <MainNav />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </>
        )
    }

    return (
        <>
            <Content />
            <WhatsAppWidget />
        </>
    )
}
