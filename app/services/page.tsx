import type { Metadata } from "next"
import Link from "next/link"

import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { servicePages } from "@/lib/service-pages"

export const metadata: Metadata = {
  title: "Cleaning Services Gold Coast | House, Office, Carpet & Pest Control",
  description:
    "Explore Wave Solution services in the Gold Coast including house cleaning, office cleaning, bond cleaning, end of lease cleaning, move-in cleaning, after builders cleaning, commercial cleaning, deep cleaning, carpet cleaning, and pest control.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/services`,
  },
  openGraph: {
    title: "Cleaning Services Gold Coast | House, Office, Carpet & Pest Control",
    description:
      "Explore Wave Solution services in the Gold Coast including house cleaning, office cleaning, bond cleaning, end of lease cleaning, move-in cleaning, after builders cleaning, commercial cleaning, deep cleaning, carpet cleaning, and pest control.",
    url: `${businessInfo.baseUrl}/services`,
  },
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">Cleaning Services Gold Coast</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Choose the right Wave Solution service for your Gold Coast home, office, rental property, or business. Each service page is built to answer the most common local questions and make quoting easier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicePages.map((page) => (
              <ServiceCard
                key={page.slug}
                title={page.shortLabel}
                description={page.metaDescription}
                icon={
                  page.slug === "house-cleaning-gold-coast"
                    ? "Home"
                    : page.slug === "office-cleaning-gold-coast"
                      ? "Building2"
                      : page.slug === "move-in-cleaning-gold-coast"
                        ? "Home"
                      : page.slug === "carpet-cleaning-gold-coast"
                        ? "Carpet"
                        : page.slug === "pest-control-gold-coast"
                          ? "Bug"
                      : page.slug === "bond-cleaning-gold-coast"
                        ? "Truck"
                        : page.slug === "end-of-lease-cleaning-gold-coast"
                          ? "Repeat"
                          : page.slug === "commercial-cleaning-gold-coast"
                            ? "Briefcase"
                            : "Sparkles"
                }
                price="Learn more"
                href={`/${page.slug}`}
                ctaLabel="View Service Page"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-black tracking-tight text-primary">Need Help Choosing the Right Service?</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Start with the page that best matches your property and timing. If you are still unsure, our broad{" "}
              <Link href={siteLinks.cleaningGoldCoast} className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                cleaning Gold Coast
              </Link>{" "}
              page gives you the full local overview, while our booking and contact pages let you request help directly from{" "}
              <Link href={siteLinks.contact} className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                professional cleaners Gold Coast
              </Link>{" "}
              homes and businesses can speak with quickly.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90">
                <Link href={siteLinks.book}>Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-slate-200 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-primary hover:bg-slate-100">
                <Link href={siteLinks.contact}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
