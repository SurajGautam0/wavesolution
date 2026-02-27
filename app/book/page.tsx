import type { Metadata } from "next"
import BookingPageClient from "./BookingPageClient"

export const metadata: Metadata = {
  title: "Book a Cleaner Online | Instant Booking Gold Coast",
  description: "Book professional cleaning services in Gold Coast online in under 2 minutes. Choose from home cleaning, office cleaning or deep cleaning. Get a personalised quote. Servicing all Gold Coast suburbs.",
  keywords: ["book cleaner Gold Coast", "book cleaning online Gold Coast", "instant cleaning booking", "house cleaning booking Southport", "book office cleaner Gold Coast"],
  alternates: {
    canonical: "https://www.wavesolution.com.au/book",
  },
  openGraph: {
    title: "Book a Cleaner Online in Gold Coast | WaveSolution",
    description: "Book in under 2 minutes. Free personalised quotes. All Gold Coast suburbs.",
    url: "https://www.wavesolution.com.au/book",
  },
}

export default function BookingPage() {
  return <BookingPageClient />
}

