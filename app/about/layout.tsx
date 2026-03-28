import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About WaveSolution | Gold Coast Cleaning and Pest Control Since 2010",
  description:
    "Learn about WaveSolution, a Gold Coast cleaning and pest-control business focused on reliable local service, clear communication, and fully insured support since 2010.",
  keywords: [
    "about WaveSolution",
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
    title: "About WaveSolution | Gold Coast Cleaning and Pest Control Since 2010",
    description:
      "Learn how WaveSolution supports Gold Coast homes, rentals, and businesses with local cleaning and pest-control services.",
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
