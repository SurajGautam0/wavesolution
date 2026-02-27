import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About WaveSolution | Gold Coast's Trusted Cleaning Company Since 2010",
    description: "Discover WaveSolution — Gold Coast's trusted cleaning company since 2010. Our experienced team serves 2,000+ happy customers across Gold Coast, Southport & Surfers Paradise. Fully insured & police-checked cleaners.",
    keywords: ["about WaveSolution", "cleaning company Gold Coast", "trusted cleaners Gold Coast", "professional cleaning team Gold Coast", "best cleaners Southport", "insured cleaners Gold Coast", "cleaning company Robina"],
    alternates: {
        canonical: "https://www.wavesolution.com.au/about",
    },
    openGraph: {
        title: "About WaveSolution | Gold Coast's Trusted Cleaning Company",
        description: "Trusted by 2,000+ customers since 2010. Fully insured, police-checked cleaning professionals across Gold Coast.",
        url: "https://www.wavesolution.com.au/about",
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
