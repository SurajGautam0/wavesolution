import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, BadgeCheck, MapPin, ArrowRight } from "lucide-react"

import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { servicePages } from "@/lib/service-pages"

export const metadata: Metadata = {
  title: "Cleaning Services Directory | Full Range of Commercial & Residential Services",
  description:
    "Explore Wave Solution's full catalogue of cleaning services: house, office, bond, carpet, after-builders, and pest control across Queensland. Book online.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/services`,
  },
  openGraph: {
    title: "Cleaning Services Gold Coast | House, Office, Bond & Carpet Cleaning",
    description:
      "House, office, bond & commercial cleaning across the Gold Coast. Fully insured, police-checked cleaners. Book your free quote today.",
    url: `${businessInfo.baseUrl}/services`,
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Wave Solution cleaning services Gold Coast" }],
  },
}

const trustPoints = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: BadgeCheck, label: "Police-Checked Team" },
  { icon: MapPin, label: "Locally Owned" },
]

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.wavesolution.com.au/services" },
        ],
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="Wave Solution cleaning services across the Gold Coast"
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
            <span className="eyebrow eyebrow-on-dark">Full Service Directory</span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              All Cleaning Services & Capabilities
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Browse our complete catalogue of professional residential, commercial, move-out, and specialist cleaning solutions. Looking specifically for our local Gold Coast coverage overview? Visit our{" "}
              <Link href={siteLinks.cleaningGoldCoast} className="font-bold text-[#39BDE4] underline underline-offset-4 hover:text-white">
                Cleaning Gold Coast hub
              </Link>.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-[#39BDE4] px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 hover:bg-[#249FC5]">
                <Link href={siteLinks.book}>Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/25 bg-white/10 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:bg-white/20 hover:text-white">
                <Link href={businessInfo.phoneHref}>Call {businessInfo.phoneDisplay}</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {trustPoints.map((point) => (
                <span key={point.label} className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  <point.icon className="h-4 w-4 text-[#39BDE4]" />
                  {point.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="eyebrow">All Services</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Choose the Right Clean
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Every service includes our satisfaction guarantee. Select a card to see what is included and request a fast local quote.
            </p>
          </div>
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
                featured={page.slug === "house-cleaning-gold-coast"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Help CTA ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#39BDE4]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#39BDE4]" />
                  Not Sure Which Service?
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  We Will Help You Choose the Right Clean
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
                  Start with the page that best matches your property and timing. If you are still unsure, our broad{" "}
                  <Link href={siteLinks.cleaningGoldCoast} className="font-semibold text-[#39BDE4] underline-offset-4 hover:underline">
                    cleaning Gold Coast
                  </Link>{" "}
                  page gives you the full local overview — or ask us directly and we will point you to the right service.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild className="h-14 rounded-full bg-[#39BDE4] px-8 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 hover:bg-[#249FC5]">
                  <Link href={siteLinks.book} className="inline-flex items-center justify-center gap-2">
                    Get Free Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-14 rounded-full border-white/25 bg-transparent px-8 text-xs font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                  <Link href={siteLinks.contact}>Contact Us</Link>
                </Button>
                <p className="text-center text-xs font-semibold text-white/50">Free quotes • Fast response • Fully insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
