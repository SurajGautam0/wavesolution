import type React from "react"
import type { Metadata } from "next"
import { Lora, Open_Sans } from "next/font/google"
import "./globals.css"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"


const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Best Cleaning Services in Kathmandu, Lalitpur & Bhaktapur | CRYSTALFRONT",
    template: "%s | CRYSTALFRONT Cleaning Nepal"
  },
  description: "Ranked #1 for professional cleaning services in Kathmandu Valley. Expert home, office, and high-glass cleaning in Lalitpur, Kathmandu, and Bhaktapur. Book premium cleaning today.",
  keywords: [
    "cleaning services Kathmandu",
    "best cleaners in Lalitpur",
    "professional cleaning Bhaktapur",
    "house cleaning Nepal",
    "office cleaning Kathmandu",
    "glass cleaning Lalitpur",
    "window cleaning Nepal",
    "Bhaisepati cleaning services",
    "deep cleaning Kathmandu",
    "apartment cleaning Lalitpur",
    "commercial cleaning Bhaktapur"
  ],
  authors: [{ name: "CRYSTALFRONT" }],
  creator: "CRYSTALFRONT",
  publisher: "CRYSTALFRONT",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "https://crystalfront.com.np",
    siteName: "CRYSTALFRONT",
    title: "CRYSTALFRONT - Professional Cleaning Services in Kathmandu Valley",
    description: "Expert cleaning services for homes and businesses in Kathmandu, Lalitpur, and Bhaktapur. Book your professional cleaning today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CRYSTALFRONT Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRYSTALFRONT - Professional Cleaning Services",
    description: "Expert residential and commercial cleaning across Kathmandu, Lalitpur, and Bhaktapur.",
    images: ["/og-image.jpg"],
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
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CRYSTALFRONT",
  "image": "https://crystalfront.com.np/og-image.jpg",
  "@id": "https://crystalfront.com.np",
  "url": "https://crystalfront.com.np",
  "telephone": "+977-XXXXXXXXXX", // Replace with real number if known
  "areaServed": [
    {
      "@type": "City",
      "name": "Kathmandu"
    },
    {
      "@type": "City",
      "name": "Lalitpur"
    },
    {
      "@type": "City",
      "name": "Bhaktapur"
    },
    {
      "@type": "Neighborhood",
      "name": "Bhaisepati"
    },
    {
      "@type": "Neighborhood",
      "name": "Sanepa"
    },
    {
      "@type": "Neighborhood",
      "name": "Jhamsikhel"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bhaisepati",
    "addressLocality": "Lalitpur",
    "addressRegion": "Bagmati",
    "postalCode": "44700",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.6533,
    "longitude": 85.3056
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "07:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://facebook.com/crystalfront",
    "https://www.instagram.com/crystalfrontwincare?igsh=eWt5czdydGxuODF1&utm_source=qr",
    "https://www.tiktok.com/@crystalfront2026"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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



import './globals.css'