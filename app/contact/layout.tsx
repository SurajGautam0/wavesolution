import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Get a Free Cleaning Quote in Gold Coast",
    description: "Contact WaveSolution for a free cleaning quote in Gold Coast. Call 0450 833 683, email us or fill out our quick form. We serve all Gold Coast suburbs including Southport, Surfers Paradise, Broadbeach & Robina.",
    keywords: ["contact cleaners Gold Coast", "cleaning quote Gold Coast", "book cleaners Gold Coast", "Southport cleaning contact", "cleaning service near me Gold Coast", "free cleaning quote Gold Coast"],
    alternates: {
        canonical: "https://www.wavesolution.com.au/contact",
    },
    openGraph: {
        title: "Contact WaveSolution | Free Cleaning Quote Gold Coast",
        description: "Get a free cleaning quote. Call 0450 833 683 or book online. Serving all Gold Coast & QLD suburbs.",
        url: "https://www.wavesolution.com.au/contact",
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
