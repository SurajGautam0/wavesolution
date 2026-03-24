import type { Metadata } from "next"
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
  },
}

export default function LocationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em]">
              <MapPin className="h-4 w-4 text-secondary" />
              Gold Coast service areas
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Local Cleaning Services Across Gold Coast Suburbs
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
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
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl"
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

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center shadow-xl md:p-12">
            <h2 className="text-3xl font-black tracking-tight text-primary">Need a Quote for Your Suburb?</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Call {businessInfo.phoneDisplay} or book online and we&apos;ll recommend the best service for your
              property, schedule, and suburb.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90">
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
