import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { getLocationPage, locationPages } from "@/lib/location-pages"

type LocationPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationPage(slug)

  if (!location) {
    return {}
  }

  const url = `${businessInfo.baseUrl}/locations/${location.slug}`

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: [
      `cleaning services ${location.name}`,
      `house cleaning ${location.name}`,
      `office cleaning ${location.name}`,
      `cleaners ${location.name} Gold Coast`,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url,
      type: "website",
      images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: location.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: ["/gold-coast-cleaning-services.jpeg"],
    },
  }
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = getLocationPage(slug)

  if (!location) {
    notFound()
  }

  const pageUrl = `${businessInfo.baseUrl}/locations/${location.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: businessInfo.baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: `${businessInfo.baseUrl}/locations`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: location.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: location.metaTitle,
        serviceType: location.heroTitle,
        description: location.metaDescription,
        areaServed: {
          "@type": "City",
          name: location.name,
          containedInPlace: {
            "@type": "State",
            name: "Queensland",
          },
        },
        provider: {
          "@id": `${businessInfo.baseUrl}/#business`,
        },
        url: pageUrl,
        telephone: businessInfo.phoneE164,
      },
      {
        "@type": "FAQPage",
        mainEntity: location.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em]">
              <MapPin className="h-4 w-4 text-secondary" />
              {location.name} cleaning services
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">{location.heroTitle}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">{location.intro}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90 shadow-lg shadow-black/20">
                <Link href={siteLinks.book} className="inline-flex items-center gap-2">
                  <span>Get a Free Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                <a href={businessInfo.phoneHref} className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-primary">Local Cleaning Support in {location.name}</h2>
                <div className="mt-4 h-1 w-20 rounded-full bg-secondary" />
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  {location.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-black tracking-tight text-primary">Services We Provide in {location.name}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {location.serviceBullets.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-sm leading-7 text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-200/80 pt-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-secondary">Explore Dedicated Service Pages</p>
                  <p className="mt-2 text-sm text-slate-600">Need specific details, scope checklists, or pricing for your property?</p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {[
                      { href: siteLinks.homeCleaning, label: "House Cleaning" },
                      { href: siteLinks.bondCleaning, label: "Bond Cleaning" },
                      { href: siteLinks.endOfLeaseCleaning, label: "End of Lease Cleaning" },
                      { href: siteLinks.officeCleaning, label: "Office Cleaning" },
                      { href: siteLinks.commercialCleaning, label: "Commercial Cleaning" },
                      { href: siteLinks.deepCleaning, label: "Deep Cleaning" },
                      { href: siteLinks.carpetCleaning, label: "Carpet Cleaning" },
                      { href: siteLinks.pestControl, label: "Pest Control" },
                    ].map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:border-secondary hover:bg-secondary/5 hover:text-secondary"
                      >
                        {service.label} {location.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Local Landmarks & Coverage</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{location.nearbyReference}</p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Gold Coast Service Office</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <p className="font-semibold text-primary">{businessInfo.businessNameWithLocation}</p>
                  <p>{businessInfo.address.full}</p>
                  <a href={businessInfo.phoneHref} className="block font-bold text-primary hover:text-secondary">
                    {businessInfo.phoneDisplay}
                  </a>
                  <p>{businessInfo.email}</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <h2 className="text-2xl font-black tracking-tight">Need {location.name} Cleaning?</h2>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Speak with our Gold Coast team for a fast, free local quote tailored to your {location.name} property.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild className="h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90 shadow-md">
                    <Link href={siteLinks.book}>Get a Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 rounded-full border-white/20 bg-white/5 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/20 hover:text-white">
                    <a href={businessInfo.phoneHref} className="flex items-center justify-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-secondary" />
                      <span>Call {businessInfo.phoneDisplay}</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Nearby Service Areas</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {locationPages
                    .filter((l) => l.slug !== location.slug)
                    .map((other) => (
                      <Link
                        key={other.slug}
                        href={`/locations/${other.slug}`}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-secondary hover:text-secondary"
                      >
                        {other.name}
                      </Link>
                    ))}
                  <Link
                    href={siteLinks.locations}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold text-primary hover:bg-primary hover:text-white"
                  >
                    All Suburbs →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">Frequently Asked Questions About {location.name}</h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" />
            </div>

            <div className="mt-10 space-y-4">
              {location.faq.map((item) => (
                <article key={item.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
