import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import "./globals.css"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { businessInfo } from "@/lib/business-info"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim()

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.baseUrl),
  title: {
    default: "Cleaning Gold Coast | House & Office Cleaners",
    template: "%s | Wave Solution Cleaning",
  },
description:
    "Professional cleaning services across the Gold Coast including house, office, bond, and end of lease cleaning. Fast quote today.",
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
    title: "Cleaning Gold Coast | House & Office Cleaners",
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
    title: "Cleaning Gold Coast | House & Office Cleaners",
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
      description: "Professional house cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning, commercial cleaning, carpet cleaning, and pest control across the Gold Coast.",
      image: `${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`,
      logo: `${businessInfo.baseUrl}/logo.png`,
      url: businessInfo.baseUrl,
      telephone: businessInfo.phoneE164,
      email: businessInfo.email,
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "430", bestRating: "5", worstRating: "1" },
      priceRange: "$120 - $600",
      currenciesAccepted: "AUD",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: businessInfo.serviceAreas.map((s) => ({ "@type": "City", name: s, containedInPlace: { "@type": "State", name: "Queensland" } })),
      address: { "@type": "PostalAddress", addressLocality: businessInfo.address.locality, addressRegion: businessInfo.address.region, postalCode: businessInfo.address.postalCode, addressCountry: businessInfo.address.countryCode },
      geo: { "@type": "GeoCoordinates", latitude: businessInfo.coordinates.latitude, longitude: businessInfo.coordinates.longitude },
      openingHoursSpecification: businessInfo.openingHoursSpecification,
      sameAs: [businessInfo.googleBusinessProfile, "https://www.facebook.com/wavesolutioncleaning", "https://www.instagram.com/wavesolutioncleaning"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Cleaning Gold Coast" }, priceSpecification: { "@type": "PriceSpecification", price: "120", priceCurrency: "AUD", unitText: "per session" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Cleaning Gold Coast" }, priceSpecification: { "@type": "PriceSpecification", price: "200", priceCurrency: "AUD", unitText: "per session" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning Gold Coast" }, priceSpecification: { "@type": "PriceSpecification", price: "250", priceCurrency: "AUD", unitText: "per session" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bond Cleaning Gold Coast" }, priceSpecification: { "@type": "PriceSpecification", price: "250", priceCurrency: "AUD", unitText: "per session" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "End of Lease Cleaning Gold Coast" }, priceSpecification: { "@type": "PriceSpecification", price: "250", priceCurrency: "AUD", unitText: "per session" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Cleaning Gold Coast" }, priceSpecification: { "@type": "PriceSpecification", price: "200", priceCurrency: "AUD", unitText: "per session" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Cleaning Gold Coast" }, priceSpecification: { "@type": "PriceSpecification", price: "150", priceCurrency: "AUD", unitText: "per service" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pest Control Gold Coast" }, priceSpecification: { "@type": "PriceSpecification", price: "180", priceCurrency: "AUD", unitText: "per service" } },
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
      potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${businessInfo.baseUrl}/services?q={search_term_string}` }, "query-input": "required name=search_term_string" },
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased selection:bg-secondary/20 selection:text-primary`} suppressHydrationWarning>
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
        <script dangerouslySetInnerHTML={{ __html: "!function(){var t=document.createElement('script');t.async=!0;t.src='https://www.googletagmanager.com/gtag/js?id=G-Q2D4JFK9R6';var e=function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-Q2D4JFK9R6',{send_page_view:!1})};'requestIdleCallback'in window?requestIdleCallback(function(){document.head.appendChild(t);e()}):setTimeout(function(){document.head.appendChild(t);e()},3000)}();" }} />
      </body>
    </html>
  )
}
