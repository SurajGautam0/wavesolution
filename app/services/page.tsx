import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { locationPages } from "@/lib/location-pages"

export const metadata: Metadata = {
  title: "Cleaning & Pest Control Services Gold Coast | Home, Office, Deep Cleaning & Pest Control",
  description: "Full range of professional cleaning and pest control services in Gold Coast: home cleaning from $120, office cleaning from $200, deep cleaning from $250, pest control from $150, carpet cleaning, end of lease cleaning & more. Servicing all Gold Coast suburbs.",
  keywords: ["cleaning services Gold Coast", "pest control Gold Coast", "home cleaning Gold Coast", "office cleaning Gold Coast", "deep cleaning Gold Coast", "carpet cleaning Gold Coast", "window cleaning Gold Coast", "end of lease cleaning Gold Coast", "bond cleaning Gold Coast", "move out cleaning Gold Coast", "commercial cleaning Southport"],
  alternates: {
    canonical: "https://www.wavesolution.com.au/services",
  },
  openGraph: {
    title: "All Cleaning & Pest Control Services Gold Coast | WaveSolution",
    description: "Home, office, deep, carpet cleaning & pest control across Gold Coast. Prices from $120. Book online today.",
    url: "https://www.wavesolution.com.au/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Services Hero */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Cleaning & Pest Control Services in Gold Coast
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of cleaning services across Gold Coast. From residential
              to commercial, we've got you covered with professional and reliable cleaning
              solutions tailored to local homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Home Cleaning"
            description="Regular cleaning services for your home, keeping it spotless and fresh."
            icon="Home"
            price="From $120"
          />
          <ServiceCard
            title="Office Cleaning"
            description="Professional cleaning for offices and commercial spaces."
            icon="Building2"
            price="From $200"
          />
          <ServiceCard
            title="Deep Cleaning"
            description="Thorough cleaning of all areas, including hard-to-reach spots."
            icon="Sparkles"
            price="From $250"
          />
          <ServiceCard
            title="Move In/Out Cleaning"
            description="Comprehensive cleaning for when you're moving in or out of a property."
            icon="Truck"
            price="From $300"
          />
          <ServiceCard
            title="Window Cleaning"
            description="Crystal clear windows for homes and commercial buildings."
            icon="Home"
            price="From $150"
          />
          <ServiceCard
            title="Carpet Cleaning"
            description="Deep cleaning for carpets, removing stains and odors."
            icon="Sparkles"
            price="From $180"
          />
          <ServiceCard
            title="Regular House Cleaning"
            description="Scheduled weekly or fortnightly cleaning to keep your home consistently spotless."
            icon="Repeat"
            price="From $120/visit"
          />
          <ServiceCard
            title="Same Day Service"
            description="Need it cleaned today? We offer fast same-day cleaning with no compromise on quality."
            icon="CalendarClock"
            price="From $120"
          />
          <ServiceCard
            title="Pest Control"
            description="Safe and effective pest control for homes and businesses. Ants, spiders, cockroaches & more."
            icon="Bug"
            price="From $150"
          />
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-primary">Cleaning Services Across Key Gold Coast Suburbs</h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" />
              <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
                Local landing pages help match suburb-specific searches more closely. Explore our cleaning service pages for
                Robina, Southport, Surfers Paradise, and Broadbeach for more targeted local information.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {locationPages.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-transform hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{location.name}</p>
                  <h3 className="mt-3 text-xl font-bold text-primary">{location.heroTitle}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{location.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Experience Our Services?
            </h2>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Book your cleaning service today and experience the WaveSolution difference.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

