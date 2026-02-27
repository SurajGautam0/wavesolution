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
  metadataBase: new URL("https://www.wavesolution.com.au"),
  title: {
    default: "Professional Cleaning Services Gold Coast | #1 Cleaners in Gold Coast QLD | WaveSolution",
    template: "%s | WaveSolution Gold Coast"
  },
  description: "WaveSolution is Gold Coast's #1 trusted cleaning & pest control company. Professional home cleaning, office cleaning, deep cleaning, carpet cleaning, pest control & end of lease cleaning in Gold Coast, Southport, Surfers Paradise & all QLD suburbs. Call 0450 833 683 for a free quote.",
  keywords: [
    "pest control Gold Coast",
    "cleaning services Gold Coast",
    "house cleaning Gold Coast",
    "home cleaning Gold Coast",
    "office cleaning Gold Coast",
    "commercial cleaning Gold Coast",
    "deep cleaning Gold Coast",
    "end of lease cleaning Gold Coast",
    "bond cleaning Gold Coast",
    "carpet cleaning Gold Coast",
    "window cleaning Gold Coast",
    "move in cleaning Gold Coast",
    "move out cleaning Gold Coast",
    "spring cleaning Gold Coast",
    "professional cleaners Gold Coast",
    "best cleaners Gold Coast",
    "affordable cleaning Gold Coast",
    "cleaning services Southport",
    "cleaners Surfers Paradise",
    "cleaning services QLD",
    "house cleaners near me Gold Coast",
    "commercial cleaners Robina",
    "strata cleaning Gold Coast",
    "regular cleaning Gold Coast",
    "one off cleaning Gold Coast",
    "cleaning company Gold Coast",
    "WaveSolution cleaning",
    "residential cleaning Gold Coast",
    "cleaning services Australia"
  ],
  authors: [{ name: "WaveSolution", url: "https://www.wavesolution.com.au" }],
  creator: "WaveSolution",
  publisher: "WaveSolution",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.wavesolution.com.au",
    languages: {
      "en-AU": "https://www.wavesolution.com.au",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.wavesolution.com.au",
    siteName: "WaveSolution",
    title: "WaveSolution - #1 Professional Cleaning Services in Gold Coast, Australia",
    description: "Gold Coast's most trusted cleaning & pest control company. Professional home, office & commercial cleaning plus pest control across Gold Coast, Southport & all QLD. Free quotes. Call 0450 833 683.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WaveSolution Professional Cleaning Services Gold Coast",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WaveSolution - Professional Cleaning Services Gold Coast",
    description: "Gold Coast's #1 trusted cleaning company. Home, office & commercial cleaning across Gold Coast & QLD. Book online or call 0450 833 683.",
    images: ["/og-image.jpg"],
    creator: "@wavesolution",
    site: "@wavesolution",
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "Cleaning Services",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "CleaningService"],
      "@id": "https://www.wavesolution.com.au/#business",
      "name": "WaveSolution",
      "alternateName": "WaveSolution Cleaning Services Gold Coast",
      "description": "Gold Coast's #1 professional cleaning company providing home cleaning, office cleaning, deep cleaning, carpet cleaning & end of lease cleaning across Gold Coast, Southport and all QLD suburbs.",
      "image": "https://www.wavesolution.com.au/og-image.jpg",
      "logo": "https://www.wavesolution.com.au/images/wavesolution-logo.png",
      "url": "https://www.wavesolution.com.au",
      "telephone": "+61450833683",
      "email": "susanttimalcena@gmail.com",
      "priceRange": "$120 - $600",
      "currenciesAccepted": "AUD",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": [
        {
          "@type": "City",
          "name": "Gold Coast",
          "containedInPlace": { "@type": "State", "name": "Queensland" }
        },
        {
          "@type": "City",
          "name": "Southport",
          "containedInPlace": { "@type": "State", "name": "Queensland" }
        },
        {
          "@type": "City",
          "name": "Surfers Paradise",
          "containedInPlace": { "@type": "State", "name": "Queensland" }
        },
        {
          "@type": "City",
          "name": "Broadbeach",
          "containedInPlace": { "@type": "State", "name": "Queensland" }
        },
        {
          "@type": "City",
          "name": "Robina",
          "containedInPlace": { "@type": "State", "name": "Queensland" }
        },
        {
          "@type": "City",
          "name": "Nerang"
        },
        {
          "@type": "City",
          "name": "Burleigh Heads"
        },
        {
          "@type": "City",
          "name": "Palm Beach"
        },
        {
          "@type": "City",
          "name": "Helensvale"
        },
        {
          "@type": "City",
          "name": "Coomera"
        },
        {
          "@type": "State",
          "name": "Queensland"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gold Coast",
        "addressRegion": "QLD",
        "postalCode": "4215",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -28.1038,
        "longitude": 153.4339
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/wavesolution",
        "https://www.instagram.com/wavesolution",
       ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home Cleaning Gold Coast",
              "description": "Professional house cleaning services for homes across Gold Coast and QLD. Regular, weekly or fortnightly cleaning."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "120",
              "priceCurrency": "AUD",
              "unitText": "per session"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Cleaning Gold Coast",
              "description": "Commercial office cleaning for businesses across Gold Coast. Daily, weekly or monthly cleaning schedules."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "200",
              "priceCurrency": "AUD",
              "unitText": "per session"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Deep Cleaning Gold Coast",
              "description": "Thorough deep cleaning of every surface. Includes oven, fridge, inside cabinets and hard-to-reach areas."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "250",
              "priceCurrency": "AUD",
              "unitText": "per session"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "End of Lease Cleaning Gold Coast",
              "description": "Bond-back guarantee end of lease cleaning. Comprehensive cleaning to get your full bond back."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "250",
              "priceCurrency": "AUD",
              "unitText": "per session"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Carpet Cleaning Gold Coast",
              "description": "Professional carpet steam cleaning and stain removal across Gold Coast suburbs."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "150",
              "priceCurrency": "AUD",
              "unitText": "per room"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.wavesolution.com.au/#website",
      "url": "https://www.wavesolution.com.au",
      "name": "WaveSolution",
      "description": "Professional Cleaning Services in Gold Coast, Australia",
      "publisher": { "@id": "https://www.wavesolution.com.au/#business" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.wavesolution.com.au/services?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-AU"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.wavesolution.com.au/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does house cleaning cost in Gold Coast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our house cleaning services in Gold Coast start from $120 for a 1-2 bedroom home. Standard 3-bedroom homes start at $180, and larger 4+ bedroom homes from $250. We offer weekly, fortnightly and monthly plans with discounted rates."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer end of lease cleaning in Gold Coast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, WaveSolution provides professional end of lease cleaning (bond cleaning) across Gold Coast. Our end of lease clean meets real estate agent standards and comes with a bond-back guarantee. Prices start from $250."
          }
        },
        {
          "@type": "Question",
          "name": "What areas in Gold Coast do you service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We service all Gold Coast suburbs including Southport, Surfers Paradise, Broadbeach, Robina, Nerang, Burleigh Heads, Palm Beach, Helensvale, Coomera, and the entire Gold Coast region. We also serve the wider QLD area."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book a cleaner in Gold Coast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book online through our website, call us at 0450 833 683, or send us a WhatsApp message. We offer same-day and next-day bookings subject to availability."
          }
        },
        {
          "@type": "Question",
          "name": "Are your cleaning products eco-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, WaveSolution uses eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. We can also use your preferred products on request."
          }
        }
      ]
    }
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