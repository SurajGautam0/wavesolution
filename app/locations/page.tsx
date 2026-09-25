import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { locationPages } from "@/lib/location-pages"

export const metadata: Metadata = {
  title: "Gold Coast Cleaning Service Areas | Robina, Southport & More",
  description:
    "Explore Wave Solution Cleaning service areas across Gold Coast, including Robina, Southport, Surfers Paradise and Broadbeach.",
  alternates: {
    canonical: "https://www.wavesolution.com.au/locations",
  },
  openGraph: {
    title: "Gold Coast Cleaning Service Areas | Wave Solution Cleaning",
    description:
      "Local suburb pages for Wave Solution Cleaning across Gold Coast, including Robina, Southport, Surfers Paradise and Broadbeach.",
    url: "https://www.wavesolution.com.au/locations",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Wave Solution cleaning service areas Gold Coast" }],
  },
}

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
          { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.wavesolution.com.au/locations" },
        ],
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero">
        <div className="absolute inset-0">
          <Image
            src="/pexels-tima-miroshnichenko-6195274.jpg"
            alt="Wave Solution service areas across the Gold Coast"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="classic-container relative z-10 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Gold Coast service areas
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Local Cleaning Services Across Gold Coast Suburbs
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
              We service homes, offices, rental properties, and commercial spaces across key Gold Coast suburbs.
              Browse our suburb pages below for more targeted local information and booking options.
            </p>
          </div>
        </div>
      </section>

       <section className="bg-white py-14 md:py-20">
         <div className="classic-container">
           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
             {locationPages.map((location) => (
               <article
                 key={location.slug}
                 className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
               >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{location.name}</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-primary">{location.heroTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{location.intro}</p>
                <p className="mt-4 text-sm leading-7 text-slate-500">{location.nearbyReference}</p>
                <div className="mt-6">
                  <Button asChild className="h-11 rounded-full bg-primary px-5 text-[11px] font-black uppercase tracking-[0.18em]">
                    <Link href={`/locations/${location.slug}`}>
                      View Local Page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center shadow-xl md:p-12">
            <h2 className="text-3xl font-black tracking-tight text-primary">Need a Quote for Your Suburb?</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Call {businessInfo.phoneDisplay} or book online and we&apos;ll recommend the best service for your
              property, schedule, and suburb.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                <Link href={siteLinks.book}>Book Now</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6 text-[11px] font-black uppercase tracking-[0.18em]">
                <Link href={businessInfo.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
