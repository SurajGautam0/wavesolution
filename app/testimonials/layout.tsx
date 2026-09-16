import type { Metadata } from "next"
import { businessInfo } from "@/lib/business-info"

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: businessInfo.businessNameWithLocation,
  url: businessInfo.baseUrl,
  telephone: businessInfo.phoneInternationalDisplay,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: businessInfo.address.locality,
    addressRegion: businessInfo.address.region,
    postalCode: businessInfo.address.postalCode,
    addressCountry: businessInfo.address.countryCode,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "430",
    bestRating: "5",
    worstRating: "1",
  },
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {children}
    </>
  )
}
