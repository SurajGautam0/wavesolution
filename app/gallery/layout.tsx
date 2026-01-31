import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Service Gallery | Professional Cleaning Showcase in Nepal",
    description: "View our portfolio of professional high-glass cleaning and deep cleaning projects across Kathmandu, Lalitpur, and Bhaktapur. The highest standards of professional excellence in Nepal.",
}

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
