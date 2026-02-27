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

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50/50">
            <AdminHeader />
            <main className="flex-1">{children}</main>
        </div>
    )
}
