import type React from "react"
import type { Metadata } from "next"
import { AuthProvider } from "@/lib/auth-context"

export const metadata: Metadata = {
    title: "Dashboard | Wave Solution Cleaning",
    description: "Manage your cleaning bookings, profile, and support requests.",
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
        <AuthProvider>
            <div
                className="min-h-screen bg-[#F6F7F9] antialiased"
                style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
            >
                {children}
            </div>
        </AuthProvider>
    )
}
