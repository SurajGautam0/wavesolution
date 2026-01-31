import { AdminHeader } from "@/components/admin-header"

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
