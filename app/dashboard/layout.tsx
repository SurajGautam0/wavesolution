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
            <div className="min-h-screen bg-[#F3F3F3]">
                {children}
            </div>
        </AuthProvider>
    )
}
