import type { Metadata } from "next"
import BookingPageClient from "./BookingPageClient"

export const metadata: Metadata = {
  title: "Book a Cleaning | CRYSTALFRONT",
  description: "Book your professional cleaning service with CRYSTALFRONT",
}

export default function BookingPage() {
  return <BookingPageClient />
}

