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
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
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
    "Professional cleaning services across the Gold Coast including house cleaning, office cleaning, bond cleaning, end of lease cleaning, carpet steam cleaning, airbnb turnover, pressure washing, window cleaning, after builders cleaning, deep cleaning, and pest control. Trusted local cleaners serving Southport, Robina, Surfers Paradise, Broadbeach, Burleigh Heads, Nerang, Helensvale, Coomera, Palm Beach and Varsity Lakes.",
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
    "builders cleans Gold Coast",
    "carpet cleaning Gold Coast",
    "carpet steam cleaning Gold Coast",
    "pest control Gold Coast",
    "house cleaners Gold Coast",
    "spring cleaning Gold Coast",
    "spring clean Gold Coast",
    "airbnb cleaning Gold Coast",
    "airbnb turnover cleaning Gold Coast",
    "pressure cleaning Gold Coast",
    "pressure washing Gold Coast",
    "window cleaning Gold Coast",
    "oven cleaning Gold Coast",
    "upholstery cleaning Gold Coast",
    "couch cleaning Gold Coast",
    "mattress cleaning Gold Coast",
    "tile and grout cleaning Gold Coast",
    "mould removal Gold Coast",
    "curtain cleaning Gold Coast",
    "leather cleaning Gold Coast",
    "rangehood cleaning Gold Coast",
    "fridge cleaning Gold Coast",
    "one off cleaning Gold Coast",
    "fortnightly cleaning Gold Coast",
    "weekly cleaning Gold Coast",
    "regular cleaning Gold Coast",
    "move out cleaning Gold Coast",
    "vacate cleaning Gold Coast",
    "exit cleaning Gold Coast",
    "cleaning services Southport",
    "cleaning services Robina",
    "cleaning services Surfers Paradise",
    "cleaning services Broadbeach",
    "cleaning services Burleigh Heads",
    "cleaning services Nerang",
    "cleaning services Helensvale",
    "cleaning services Coomera",
    "cleaning services Palm Beach",
    "cleaning services Varsity Lakes",
    "cleaning services Merrimac",
    "carpet cleaners Southport",
    "carpet cleaners Robina",
    "bond cleaners Gold Coast",
    "end of lease cleaners Gold Coast",
    "home cleaners Gold Coast",
    "local cleaners Gold Coast",
    "professional cleaners Gold Coast",
    "affordable cleaning Gold Coast",
    "best cleaning service Gold Coast",
    "trusted cleaners Gold Coast",
    "eco friendly cleaning Gold Coast",
    "green cleaning Gold Coast",
    "NDIS cleaning Gold Coast",
    "aged care cleaning Gold Coast",
    "medical centre cleaning Gold Coast",
    "restaurant cleaning Gold Coast",
    "gym cleaning Gold Coast",
    "school cleaning Gold Coast",
    "childcare cleaning Gold Coast",
    "warehouse cleaning Gold Coast",
    "strata cleaning Gold Coast",
    "real estate cleaning Gold Coast",
    "post construction cleaning Gold Coast",
    "renovation cleaning Gold Coast",
    "floor polishing Gold Coast",
    "driveway cleaning Gold Coast",
    "gutter cleaning Gold Coast",
    "solar panel cleaning Gold Coast",
    "high pressure cleaning Gold Coast",
    "window washing Gold Coast",
    "cleaning company Gold Coast",
    "cleaning contractor Gold Coast",
    "bond back guarantee cleaning Gold Coast",
    "REIQ cleaning Gold Coast",
    "rental inspection cleaning Gold Coast",
    "final inspection cleaning Gold Coast",
    "move in deep clean Gold Coast",
    "post storm cleaning Gold Coast",
    "flood restoration cleaning Gold Coast",
    "emergency cleaning Gold Coast",
    "same day cleaning Gold Coast",
    "last minute cleaning Gold Coast",
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
      areaServed: [{ "@type": "State", name: "Queensland" }],
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
        <script dangerouslySetInnerHTML={{ __html: "var MutationObserver=window.MutationObserver||window.WebKitMutationObserver;new MutationObserver(function(m){m.forEach(function(r){r.addedNodes.forEach(function(n){if(n.nodeName==='LINK'&&n.getAttribute('rel')==='stylesheet'){n.setAttribute('media','print');n.onload=function(){this.media='all'}})})}).observe(document.head||document.documentElement,{childList:true,subtree:true})" }} />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config','G-Q2D4JFK9R6',{send_page_view:false});
              if('requestIdleCallback' in window){
                requestIdleCallback(function(){
                  var s=document.createElement('script');
                  s.async=true;
                  s.src='https://www.googletagmanager.com/gtag/js?id=G-Q2D4JFK9R6';
                  document.head.appendChild(s);
                });
              } else {
                setTimeout(function(){
                  var s=document.createElement('script');
                  s.async=true;
                  s.src='https://www.googletagmanager.com/gtag/js?id=G-Q2D4JFK9R6';
                  document.head.appendChild(s);
                },2000);
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
