import type { Metadata } from "next"
import { businessInfo } from "@/lib/business-info"

export const metadata: Metadata = {
    title: "Contact Wave Solution Cleaning | Free Gold Coast Quote",
    description: `Contact ${businessInfo.businessName} for a free cleaning quote in Gold Coast. Call ${businessInfo.phoneDisplay}, email ${businessInfo.email}, or fill out our contact form.`,
    keywords: ["contact cleaners Gold Coast", "cleaning quote Gold Coast", "book cleaners Gold Coast", "Southport cleaning contact", "cleaning service near me Gold Coast", "free cleaning quote Gold Coast"],
    alternates: {
        canonical: "https://www.wavesolution.com.au/contact",
    },
    openGraph: {
        title: "Contact Wave Solution Cleaning | Free Gold Coast Quote",
        description: "Get a free cleaning quote for Gold Coast homes and businesses. Call 0450 833 683 or book online.",
        url: "https://www.wavesolution.com.au/contact",
        images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Contact Wave Solution Cleaning Gold Coast" }],
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
