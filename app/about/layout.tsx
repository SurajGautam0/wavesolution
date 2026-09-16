import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Wave Solution | Gold Coast Cleaning & Pest Control",
  description:
    "Learn about Wave Solution, a Gold Coast cleaning and pest-control business focused on dependable local service, clear communication, police-checked cleaners, and fully insured support.",
  keywords: [
    "about Wave Solution",
    "cleaning company Gold Coast",
    "pest control Gold Coast",
    "trusted cleaners Gold Coast",
    "professional cleaning team Gold Coast",
    "insured cleaners Gold Coast",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/about",
  },
  openGraph: {
    title: "About Wave Solution | Gold Coast Cleaning and Pest Control",
    description:
      "Learn how Wave Solution supports Gold Coast homes, rentals, and businesses with professional local cleaning and pest-control services.",
    url: "https://www.wavesolution.com.au/about",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "About Wave Solution cleaning Gold Coast" }],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
