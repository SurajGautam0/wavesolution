import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Testimonials | CRYSTALFRONT",
    description: "Read what our customers have to say about our cleaning services.",
}

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
