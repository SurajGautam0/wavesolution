import type { Metadata } from "next"
import { businessInfo } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Contact Wave Solution Cleaning | Free Gold Coast Quote",
  description: `Contact ${businessInfo.businessName} for a free cleaning quote in Gold Coast. Call ${businessInfo.phoneDisplay}, email ${businessInfo.email}, or fill out our contact form.`,
  keywords: [
    "contact cleaners Gold Coast",
    "cleaning quote Gold Coast",
    "book cleaners Gold Coast",
    "Southport cleaning contact",
    "cleaning service near me Gold Coast",
    "free cleaning quote Gold Coast",
  ],
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

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Wave Solution Cleaning Gold Coast",
  description:
    "Contact Wave Solution Cleaning for free house, office, bond, and commercial cleaning quotes across the Gold Coast.",
  url: `${businessInfo.baseUrl}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: businessInfo.businessNameWithLocation,
    telephone: businessInfo.phoneInternationalDisplay,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: businessInfo.address.locality,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.latitude,
      longitude: businessInfo.coordinates.longitude,
    },
    openingHoursSpecification: businessInfo.openingHoursSpecification,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  )
}
