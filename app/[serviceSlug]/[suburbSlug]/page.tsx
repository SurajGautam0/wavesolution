import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { locationPages } from "@/lib/location-pages"
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from "@/lib/schema-generator"
import {
  getServiceLocationPage,
  getServiceLocationParams,
  serviceProfiles,
} from "@/lib/service-location-pages"

type ServiceLocationRouteProps = {
  params: Promise<{
    serviceSlug: string
    suburbSlug: string
  }>
}

export const dynamicParams = false

const locationSlugs = new Set(locationPages.map((location) => location.slug))

export function generateStaticParams() {
  return getServiceLocationParams()
}

function resolveNearbyHref(
  serviceSlug: string,
  nearby: { slug: string; label: string }
): string | null {
  if (getServiceLocationPage(serviceSlug, nearby.slug)) {
    return `/${serviceSlug}/${nearby.slug}`
  }

  const profile = Object.values(serviceProfiles).find((candidate) =>
    nearby.label.toLowerCase().startsWith(candidate.label.toLowerCase())
  )

  if (profile && getServiceLocationPage(profile.key, nearby.slug)) {
    return `/${profile.key}/${nearby.slug}`
  }

  if (locationSlugs.has(nearby.slug)) {
    return `/locations/${nearby.slug}`
  }

  return null
}

export async function generateMetadata({ params }: ServiceLocationRouteProps): Promise<Metadata> {
  const { serviceSlug, suburbSlug } = await params
  const page = getServiceLocationPage(serviceSlug, suburbSlug)

  if (!page) {
    return {}
  }

  const url = `${businessInfo.baseUrl}/${serviceSlug}/${suburbSlug}`
  const title = `${page.title} | Wave Solution Cleaning`

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: page.metaDescription,
      url,
      type: "website",
      images: [
        {
          url: "/gold-coast-cleaning-services.jpeg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.metaDescription,
      images: ["/gold-coast-cleaning-services.jpeg"],
    },
  }
}

export default async function ServiceLocationPage({ params }: ServiceLocationRouteProps) {
  const { serviceSlug, suburbSlug } = await params
  const page = getServiceLocationPage(serviceSlug, suburbSlug)

  if (!page) {
    notFound()
  }

  const profile = serviceProfiles[page.serviceSlug]
  const pageUrl = `${businessInfo.baseUrl}/${page.serviceSlug}/${page.suburbSlug}`
  const locationUrl = `${businessInfo.baseUrl}/locations/${page.suburbSlug}`

  const nearbyLinks = page.nearby
    .map((item) => ({ ...item, href: resolveNearbyHref(page.serviceSlug, item) }))
    .filter((item): item is typeof item & { href: string } => item.href !== null)

  const relatedLinks: { href: string; label: string; body: string }[] = [
    {
      href: profile.parentHref,
      label: `${profile.label} Gold Coast`,
      body: "The full service page: what is covered, how the work runs and how to book.",
    },
    {
      href: `/locations/${page.suburbSlug}`,
      label: `Cleaning services in ${page.suburbName}`,
      body: `Everything we do in ${page.suburbName}, with local coverage detail for the suburb.`,
    },
  ]

  if (profile.priceGuideHref) {
    relatedLinks.push({
      href: profile.priceGuideHref,
      label: "Price guide",
      body: "What drives the price, what is included and how quotes are put together.",
    })
  }

  if (profile.extraLink) {
    relatedLinks.push({
      href: profile.extraLink.href,
      label: profile.extraLink.label,
      body: "A common add-on booked alongside this service in the same visit.",
    })
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", url: siteLinks.home },
        { name: profile.label, url: profile.parentHref },
        { name: page.title, url: `/${page.serviceSlug}/${page.suburbSlug}` },
      ]),
      generateFAQSchema(page.faqs),
      generateServiceSchema({
        name: `${profile.label} in ${page.suburbName}`,
        description: page.directAnswer,
        areaServed: [page.suburbName, "Gold Coast"],
        url: `/${page.serviceSlug}/${page.suburbSlug}`,
      }),
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt={`${profile.label} in ${page.suburbName}`}
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="classic-container relative z-10 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60"
            >
              <Link href={siteLinks.home} className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link href={profile.parentHref} className="transition-colors hover:text-white">
                {profile.label}
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#39BDE4]">{page.suburbName}</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Gold Coast · {page.suburbName}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              {profile.label} in {page.suburbName}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Local {profile.label.toLowerCase()} across {page.suburbName}: the scope is written for your
              property, the price is confirmed before the booking, and the work is run against the
              checklist your property manager or premises actually needs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-[#39BDE4] px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 hover:bg-[#249FC5]"
              >
                <Link href={siteLinks.book}>
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/25 bg-white/10 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <Link href={businessInfo.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {businessInfo.phoneDisplay}
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              {["Locally scheduled", "Price confirmed first", "Police-checked team"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-[#39BDE4]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                  Direct Answer
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">{page.directAnswer}</p>
              </div>

              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                  Book in {page.suburbName}
                </p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>
                      Tell us the property, {page.suburbName} address area and the date you need it
                      done.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Get the scope and the price confirmed in writing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>We complete the work against the checklist and review it with you.</span>
                  </li>
                </ol>
                <Button
                  asChild
                  className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"
                >
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                  Prefer to talk?
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Call us with the {page.suburbName} property details and we will tell you straight
                  away what the job involves.
                </p>
                <a
                  href={businessInfo.phoneHref}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary"
                >
                  <Phone className="h-4 w-4" />
                  {businessInfo.phoneDisplay}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Local detail</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">
              What is different about {page.suburbName}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: the property type, access arrangements and how the place is used shape
              the job more than the suburb name does, and we plan around all three.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {page.localNotes.map((note) => (
              <article
                key={note.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-primary">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Scope</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">
              {profile.scopeHeading}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: {profile.scopeIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                Covered in the visit
              </p>
              <ul className="mt-5 space-y-3">
                {profile.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                  >
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                How booking works in {page.suburbName}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Send the property type, size and the date you need it completed. We confirm what is
                included, which extras are worth adding, and the price before anything is booked.
                Access arrangements for {page.suburbName} buildings and estates are sorted at the
                same time rather than on the day.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  className="h-11 rounded-full bg-primary px-5 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-primary/90"
                >
                  <Link href={siteLinks.book}>
                    Get Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-slate-200 bg-white px-5 text-[11px] font-black uppercase tracking-[0.18em] text-primary hover:border-primary/25 hover:text-secondary"
                >
                  <Link href={profile.parentHref}>
                    View the full {profile.label.toLowerCase()} page
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 transition-colors hover:border-primary/20 hover:bg-white"
              >
                <p className="text-sm font-bold text-primary">{link.label}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{link.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Nearby suburbs</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">
              {profile.label} around {page.suburbName}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: we cover {page.suburbName} and the surrounding Gold Coast suburbs, so
              neighbouring areas can be booked on the same schedule.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {nearbyLinks.map((link) => (
              <Link
                key={`${link.slug}-${link.href}`}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-sm transition-colors hover:border-primary/25 hover:text-secondary"
              >
                <MapPin className="h-4 w-4 text-secondary" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">
                {profile.label} in {page.suburbName} — frequently asked questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Straight answers for {page.suburbName} properties before you book.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {page.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-primary">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Need {profile.label.toLowerCase()} in {page.suburbName}?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Tell us about the {page.suburbName} property and the date you need it completed. We
              will confirm the scope and the price before anything is booked.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-black/20 hover:bg-secondary/90"
              >
                <Link href={siteLinks.book}>Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/20 hover:text-white"
              >
                <a href={businessInfo.phoneHref} className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
