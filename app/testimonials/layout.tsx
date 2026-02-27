import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Customer Reviews & Testimonials | Rated 4.9★ in Gold Coast",
    description: "Read 250+ genuine reviews from Gold Coast customers. WaveSolution is rated 4.9/5 for professional home & office cleaning. See why thousands trust us across Gold Coast, Southport & QLD.",
    keywords: ["cleaning reviews Gold Coast", "cleaning testimonials", "best rated cleaners Gold Coast", "WaveSolution reviews", "house cleaning reviews Southport"],
    alternates: {
        canonical: "https://www.wavesolution.com.au/testimonials",
    },
    openGraph: {
        title: "WaveSolution Reviews | Rated 4.9★ by Gold Coast Customers",
        description: "250+ five-star reviews. See why Gold Coast trusts WaveSolution for professional cleaning.",
        url: "https://www.wavesolution.com.au/testimonials",
    },
}

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
