import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Testimonials | Gold Coast Cleaning",
  description:
    "Read customer feedback for WaveSolution's Gold Coast cleaning and pest-control services, including homes, rentals, offices, and commercial spaces.",
  keywords: [
    "cleaning reviews Gold Coast",
    "cleaning testimonials Gold Coast",
    "pest control reviews Gold Coast",
    "WaveSolution testimonials",
    "house cleaning feedback Gold Coast",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/testimonials",
  },
  openGraph: {
    title: "Customer Testimonials | Gold Coast Cleaning and Pest Control Feedback",
    description:
      "Read customer feedback for WaveSolution's Gold Coast cleaning and pest-control services across homes, rentals, and commercial spaces.",
    url: "https://www.wavesolution.com.au/testimonials",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Wave Solution customer testimonials" }],
  },
}

/**
 * NOTE: this layout previously emitted a second, @id-less LocalBusiness node
 * carrying its own aggregateRating (reviewCount "430"). That competed with the
 * primary /#business entity declared in app/layout.tsx, and contradicted the
 * "87" published there. The duplicate node and both aggregate ratings have been
 * removed — the business entity is now declared exactly once, sitewide.
 */
export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
