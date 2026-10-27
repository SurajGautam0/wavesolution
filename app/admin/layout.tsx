import type React from "react"
import type { Metadata } from "next"
import { AdminHeader } from "@/components/admin-header"
import { AuthProvider } from "@/lib/auth-context"

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
        <AuthProvider>
            <div
                className="flex min-h-screen flex-col bg-[#F6F7F9] antialiased"
                style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
            >
                <AdminHeader />
                <main className="flex-1">{children}</main>
            </div>
        </AuthProvider>
    )
}
