import type { Metadata } from "next"
import { businessInfo } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Gold Coast Cleaning Blog | Local Guides for Homes, Rentals and Businesses",
  description:
    "Explore Wave Solution's Gold Coast blog for helpful cleaning, rental, commercial, and pest-control advice written for local homes and businesses.",
  keywords: [
    "cleaning blog Gold Coast",
    "cleaning tips Gold Coast",
    "bond cleaning checklist QLD",
    "house cleaning guide",
    "office cleaning best practices",
    "pest control advice Gold Coast",
  ],
  alternates: {
    canonical: `${businessInfo.baseUrl}/blog`,
  },
  openGraph: {
    title: "Gold Coast Cleaning Blog | Local Guides for Homes, Rentals and Businesses",
    description:
      "Explore Wave Solution's Gold Coast blog for helpful cleaning, rental, commercial, and pest-control advice written for local homes and businesses.",
    url: `${businessInfo.baseUrl}/blog`,
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Wave Solution cleaning blog Gold Coast" }],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: businessInfo.baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${businessInfo.baseUrl}/blog` },
  ],
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "WaveSolution Gold Coast Cleaning & Pest Control Guides",
  description:
    "Expert cleaning guides, bond inspection checklists, office hygiene tips, and pest control advice for Gold Coast homes and businesses.",
  url: `${businessInfo.baseUrl}/blog`,
  publisher: {
    "@type": "LocalBusiness",
    name: businessInfo.businessNameWithLocation,
    logo: `${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`,
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  )
}
