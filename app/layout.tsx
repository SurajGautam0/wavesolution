import type React from "react"
import type { Metadata } from "next"
import { Lora, Open_Sans } from "next/font/google"
import "./globals.css"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { businessInfo } from "@/lib/business-info"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim()

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.baseUrl),
  title: {
    default: "Top Quality Cleaning Services Gold Coast | Home, Office & Pest",
    template: "%s | Wave Solution Cleaning",
  },
  description:
    "Expert cleaning services across the Gold Coast. Specializing in home, office, end of lease cleaning, and pest control in Surfers Paradise, Broadbeach, Southport, Robina & more. Call 0450 833 683 for a flawless clean today.",
  keywords: [
    "cleaning services Gold Coast",
    "home cleaning Gold Coast",
    "office cleaning Gold Coast",
    "deep cleaning Gold Coast",
    "pest control Gold Coast",
    "end of lease cleaning Gold Coast",
    "carpet cleaning Gold Coast",
    "house cleaners Gold Coast",
    "cleaning services Southport",
    "cleaning services Robina",
    "cleaning services Surfers Paradise",
    "cleaning services Broadbeach",
    "commercial cleaning Gold Coast",
    "regular cleaning Gold Coast",
    "bond cleaning Gold Coast",
    "local cleaners Gold Coast",
    "Wave Solution Cleaning",
  ],
  authors: [{ name: businessInfo.businessName, url: businessInfo.baseUrl }],
  creator: businessInfo.businessName,
  publisher: businessInfo.businessName,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: businessInfo.baseUrl,
    languages: {
      "en-AU": businessInfo.baseUrl,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: businessInfo.baseUrl,
    siteName: businessInfo.businessNameWithLocation,
    title: "Top Quality Cleaning Services Gold Coast | Wave Solution Cleaning",
    description:
      "Expert cleaning services across the Gold Coast. Specializing in home, office, end of lease cleaning, and pest control in Surfers Paradise, Broadbeach, Southport, Robina & more. Call 0450 833 683 for a flawless clean today.",
    images: [
      {
        url: "/gold-coast-cleaning-services.jpeg",
        width: 1200,
        height: 630,
        alt: "Wave Solution Cleaning providing cleaning services in Gold Coast",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Services Gold Coast | Wave Solution Cleaning",
    description:
      "Local cleaning services for Gold Coast homes, offices and rental properties. Book online or call 0450 833 683.",
    images: ["/gold-coast-cleaning-services.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
  category: "Cleaning Services",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "CleaningService"],
      "@id": `${businessInfo.baseUrl}/#business`,
      name: businessInfo.businessNameWithLocation,
      alternateName: businessInfo.brandName,
      description:
        "Local home cleaning, office cleaning, deep cleaning, end of lease cleaning and pest control services across Gold Coast and nearby suburbs.",
      image: `${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`,
      logo: `${businessInfo.baseUrl}/logo.png`,
      url: businessInfo.baseUrl,
      telephone: businessInfo.phoneE164,
      email: businessInfo.email,
      priceRange: "$120 - $600",
      currenciesAccepted: "AUD",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: businessInfo.serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: { "@type": "State", name: "Queensland" },
      })),
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "86",
        bestRating: "5",
        worstRating: "1"
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah Johnson" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "WaveSolution has been cleaning my home for over a year now, and I couldn't be happier. Thorough and eco-friendly."
        }
      ],
      openingHoursSpecification: businessInfo.openingHoursSpecification,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Home Cleaning Gold Coast",
              description:
                "Professional house cleaning services for homes across Gold Coast. Regular, weekly or fortnightly cleaning.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "120",
              priceCurrency: "AUD",
              unitText: "per session",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Office Cleaning Gold Coast",
              description:
                "Commercial office cleaning for businesses across Gold Coast. Daily, weekly or monthly cleaning schedules.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "200",
              priceCurrency: "AUD",
              unitText: "per session",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Deep Cleaning Gold Coast",
              description:
                "Thorough deep cleaning for kitchens, bathrooms, floors, high-touch surfaces and hard-to-reach areas.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "250",
              priceCurrency: "AUD",
              unitText: "per session",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "End of Lease Cleaning Gold Coast",
              description:
                "Detailed end of lease cleaning for tenants, landlords and property managers across Gold Coast.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "250",
              priceCurrency: "AUD",
              unitText: "per session",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pest Control Gold Coast",
              description:
                "Safe and effective pest control services for homes and businesses across Gold Coast.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "150",
              priceCurrency: "AUD",
              unitText: "per visit",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${businessInfo.baseUrl}/#website`,
      url: businessInfo.baseUrl,
      name: businessInfo.businessNameWithLocation,
      description: "Professional cleaning services in Gold Coast, Queensland.",
      publisher: { "@id": `${businessInfo.baseUrl}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${businessInfo.baseUrl}/services?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-AU",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${openSans.variable} ${lora.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="wave-solution-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <LayoutWrapper>{children}</LayoutWrapper>
          </div>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
