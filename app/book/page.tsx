import type { Metadata } from "next"
import BookingPageClient from "./BookingPageClient"

export const metadata: Metadata = {
  title: "Book a Cleaner Online | Instant Booking Gold Coast",
  description:
    "Book professional cleaning services in the Gold Coast online in under 2 minutes. Choose from house cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning, or commercial cleaning.",
  keywords: [
    "book cleaner Gold Coast",
    "book cleaning online Gold Coast",
    "instant cleaning booking",
    "house cleaning booking Gold Coast",
    "bond cleaning booking Gold Coast",
    "office cleaner Gold Coast",
    "commercial cleaning quote Gold Coast",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/book",
  },
  openGraph: {
    title: "Book a Cleaner Online in Gold Coast | WaveSolution",
    description:
      "Book in under 2 minutes with free personalised quotes for house, office, bond, end of lease, deep, and commercial cleaning across the Gold Coast.",
    url: "https://www.wavesolution.com.au/book",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Book cleaning online Gold Coast" }],
  },
}

export default function BookingPage() {
  return <BookingPageClient />
}

