import type React from "react"
import type { Metadata } from "next"
import { AdminHeader } from "@/components/admin-header"

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-slate-50 min-h-screen">
            <AdminHeader />
            {children}
        </div>
    )
}
