import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Cleaning Gallery | Before & After Results Gold Coast",
    description: "View our gallery of professional cleaning transformations across Gold Coast. Before & after photos from home, office, and bond cleaning projects.",
    keywords: ["cleaning before after Gold Coast", "cleaning results gallery", "professional cleaning photos", "house cleaning gallery Gold Coast"],
    alternates: {
        canonical: "https://www.wavesolution.com.au/gallery",
    },
    openGraph: {
        title: "WaveSolution Cleaning Gallery | See Our Results in Gold Coast",
        description: "Before & after cleaning transformations from Gold Coast homes & offices.",
        url: "https://www.wavesolution.com.au/gallery",
    },
}

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
