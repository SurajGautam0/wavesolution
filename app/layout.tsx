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
    default: "Cleaning Services Gold Coast | Wave Solution",
    template: "%s | Wave Solution Cleaning",
  },
  description:
    "Professional cleaning services across the Gold Coast including house, office, bond, and end of lease cleaning. Fast quote today.",
  keywords: [
    "cleaning services Gold Coast",
    "house cleaning Gold Coast",
    "office cleaning Gold Coast",
    "deep cleaning Gold Coast",
    "end of lease cleaning Gold Coast",
    "bond cleaning Gold Coast",
    "commercial cleaning Gold Coast",
    "move-in cleaning Gold Coast",
    "after builders cleaning Gold Coast",
    "carpet cleaning Gold Coast",
    "pest control Gold Coast",
    "house cleaners Gold Coast",
    "cleaning services Southport",
    "cleaning services Robina",
    "cleaning services Surfers Paradise",
    "cleaning services Broadbeach",
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
    title: "Cleaning Services Gold Coast | House, Office, Bond & Commercial Cleaning",
    description:
      "Professional services across the Gold Coast including house cleaning, office cleaning, bond cleaning, end of lease cleaning, move-in cleaning, after builders cleaning, deep cleaning, commercial cleaning, carpet cleaning, and pest control.",
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
    title: "Cleaning Services Gold Coast | House, Office, Bond & Commercial Cleaning",
    description:
      "Professional services across the Gold Coast including house cleaning, office cleaning, bond cleaning, end of lease cleaning, move-in cleaning, after builders cleaning, deep cleaning, commercial cleaning, carpet cleaning, and pest control.",
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
        "Local house cleaning, office cleaning, bond cleaning, end of lease cleaning, move-in cleaning, after builders cleaning, commercial cleaning, deep cleaning, carpet cleaning, and pest control services across the Gold Coast and nearby suburbs.",
      image: `${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`,
      logo: `${businessInfo.baseUrl}/logo.png`,
      url: businessInfo.baseUrl,
      telephone: businessInfo.phoneE164,
      email: businessInfo.email,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "87",
        bestRating: "5",
        worstRating: "1",
      },
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
      openingHoursSpecification: businessInfo.openingHoursSpecification,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "House Cleaning Gold Coast",
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
              name: "Bond Cleaning Gold Coast",
              description:
                "Detailed bond cleaning for Gold Coast tenants, landlords, and property managers preparing properties for handover.",
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
                "Detailed end of lease cleaning for apartments, units, and rental homes across the Gold Coast.",
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
              name: "Move-In Cleaning Gold Coast",
              description:
                "Move-in cleaning for apartments, homes, and newly purchased properties across the Gold Coast.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "220",
              priceCurrency: "AUD",
              unitText: "per session",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Cleaning Gold Coast",
              description:
                "Tailored commercial cleaning for offices, customer-facing premises, and business spaces across the Gold Coast.",
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
              name: "After Builders Cleaning Gold Coast",
              description:
                "After builders and post-renovation cleaning for homes, fit-outs, and commercial spaces across the Gold Coast.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "300",
              priceCurrency: "AUD",
              unitText: "per service",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Carpet Cleaning Gold Coast",
              description:
                "Carpet cleaning for homes, rentals, offices, and commercial interiors across the Gold Coast.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "150",
              priceCurrency: "AUD",
              unitText: "per service",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pest Control Gold Coast",
              description:
                "Pest control support for homes, rentals, and business premises across the Gold Coast.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "180",
              priceCurrency: "AUD",
              unitText: "per service",
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
