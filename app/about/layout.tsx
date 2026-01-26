import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About CRYSTALFRONT - Best Cleaning Solutions in Lalitpur Since 2026",
    description: "Learn about the mission, values, and expert team behind CRYSTALFRONT. Providing top-tier residential and commercial cleaning services in Bhaisepati and Lalitpur with international precision.",
    keywords: ["about CRYSTALFRONT", "cleaning company Lalitpur", "professional cleaning team Nepal", "best cleaners Bhaisepati"],
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
