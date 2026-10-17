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
  type ServiceLocationFaq,
} from "@/lib/service-location-pages"

type ServiceLocationRouteProps = {
  params: Promise<{
    serviceSlug: string
    suburbSlug: string
  }>
}

export const dynamicParams = false

const locationSlugs = new Set(locationPages.map((location) => location.slug))
const pestTargetSlugs = [
  "palm-beach", "southport", "surfers-paradise", "robina", "burleigh-heads",
  "broadbeach", "helensvale", "carrara", "coomera",
]

const additionalPestFaqs: Record<string, ServiceLocationFaq[]> = {
  "palm-beach": [
    { question: "What pest details should I share for a unit?", answer: "Tell us which rooms or areas are affected, when you first noticed activity and whether there are shared walls or common areas. We can use that information to scope the visit and confirm the price before booking." },
    { question: "Can I arrange pest control for a beachside home before guests arrive?", answer: "Contact us with your preferred date and the property details. We’ll check availability and explain any preparation or re-entry guidance for the treatment proposed." },
  ],
  southport: [
    { question: "Can pest control be arranged around apartment access?", answer: "Yes, tell us about building access, parking, lifts and any strata requirements when you request a quote. We’ll confirm the practical arrangements and appointment time with you." },
    { question: "What should a local business include in a pest control enquiry?", answer: "Share the site type, affected areas, operating hours and any access rules. We can then discuss a suitable visit time and confirm the treatment scope and price." },
  ],
  "surfers-paradise": [
    { question: "Can you plan pest control around a holiday rental changeover?", answer: "Send the changeover dates, access details and the areas of concern. We’ll check availability and explain any treatment preparation and re-entry timing before you confirm." },
    { question: "What should I do if I suspect bed bugs in an apartment?", answer: "Avoid moving bedding or furniture between rooms and contact us with what you’ve noticed. Treatment availability and the recommended approach need to be confirmed after we understand the property and issue." },
  ],
  robina: [
    { question: "What should I tell you about garden pest activity?", answer: "Describe where you see activity, when it occurs and whether it is inside, outside or both. Photos can help us understand the enquiry, but the treatment scope and price are confirmed before booking." },
  ],
  "burleigh-heads": [
    { question: "What information helps quote pest control for a coastal home?", answer: "Let us know the property type, which areas are affected and whether you have pets or children at home. We’ll confirm the proposed scope, preparation advice and price before the visit." },
    { question: "Can you arrange treatment before a rental handover?", answer: "Send the handover date and any treatment requirements in your lease or property manager’s instructions. We’ll check availability and confirm the service details before you book." },
  ],
  broadbeach: [
    { question: "Can apartment pest control be scheduled around strata access?", answer: "Share the building access rules, parking details and any required appointment windows. We’ll confirm the arrangements and treatment scope before setting a time." },
    { question: "Can pest control be booked outside hospitality trading hours?", answer: "Tell us your trading hours and the areas that need attention. We’ll check scheduling options and confirm whether an after-hours visit is available for your site." },
  ],
  helensvale: [
    { question: "What pest details should I share for a family home?", answer: "Tell us where you have noticed activity, whether it is indoors or near garden or bushland edges, and if children or pets are present. We’ll explain any preparation steps before treatment." },
    { question: "Can you help with a pest concern in a rental?", answer: "Yes, you can request a quote for a rental property. Include the property manager’s requirements, access details and preferred date so we can confirm the scope." },
  ],
  carrara: [
    { question: "Can you quote pest control for different property types?", answer: "Yes. Tell us whether the site is a house, townhouse or business and which areas are affected. We’ll confirm the recommended scope and price before you decide." },
  ],
  coomera: [
    { question: "Can you check pest concerns in a new home?", answer: "Share the handover or build stage, the areas of concern and any access restrictions. We’ll confirm the service scope and whether an inspection is available before booking." },
    { question: "What should I mention about a nearby building site?", answer: "Tell us where you have noticed pest activity and how close the property is to construction or open ground. This helps us understand the enquiry and explain the next steps." },
  ],
}

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
  const isTargetPestPage = page.serviceSlug === "pest-control-gold-coast" && pestTargetSlugs.includes(page.suburbSlug)
  const seoTitle = isTargetPestPage ? `${page.suburbName} Pest Control | Wave Solution` : page.title
  const seoDescription = isTargetPestPage
    ? `Pest control in ${page.suburbName} for homes, rentals and businesses. Fully insured, police-checked team. Call 0450 833 683 for a quote.`
    : page.metaDescription
  const title = seoTitle

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: seoDescription,
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
      description: seoDescription,
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
  const isTargetPestPage = page.serviceSlug === "pest-control-gold-coast" && pestTargetSlugs.includes(page.suburbSlug)
  const pageFaqs = isTargetPestPage
    ? [...page.faqs, ...additionalPestFaqs[page.suburbSlug]].filter((faq) => !faq.question.toLowerCase().includes("termite inspection"))
    : page.faqs
  const localCopySuburb = page.suburbName
  const pageUrl = `${businessInfo.baseUrl}/${page.serviceSlug}/${page.suburbSlug}`
  const locationUrl = `${businessInfo.baseUrl}/locations/${page.suburbSlug}`

  const nearbyLinks = page.nearby
    .map((item) => ({ ...item, href: resolveNearbyHref(page.serviceSlug, item) }))
    .filter((item): item is typeof item & { href: string } => item.href !== null)

  const relatedLinks: { href: string; label: string; body: string }[] = isTargetPestPage ? [
    { href: "/carpet-cleaning-gold-coast", label: "Carpet cleaning", body: "Ask about carpet cleaning for your home or rental." },
    { href: "/bond-cleaning-gold-coast", label: "Bond cleaning", body: "Plan a property clean before your handover." },
    { href: "/end-of-lease-pest-control-gold-coast", label: "End of lease pest control", body: "Review pest treatment for rental handovers." },
    { href: `/${page.serviceSlug}/${page.nearby.find((item) => getServiceLocationPage(page.serviceSlug, item.slug))?.slug ?? "southport"}`, label: "Nearby pest control", body: "View pest control service details for a nearby suburb." },
  ] : [
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

  if (!isTargetPestPage && profile.priceGuideHref) {
    relatedLinks.push({
      href: profile.priceGuideHref,
      label: "Price guide",
      body: "What drives the price, what is included and how quotes are put together.",
    })
  }

  if (!isTargetPestPage && profile.extraLink) {
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
      generateFAQSchema(pageFaqs),
      generateServiceSchema({
        name: `${profile.label} in ${page.suburbName}`,
        description: page.directAnswer,
        areaServed: [page.suburbName, "Gold Coast"],
        url: `/${page.serviceSlug}/${page.suburbSlug}`,
      }),
      ...(isTargetPestPage ? [{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${businessInfo.baseUrl}/#business`,
        name: businessInfo.businessNameWithLocation,
        url: businessInfo.baseUrl,
        telephone: businessInfo.phoneE164,
        areaServed: { "@type": "City", name: page.suburbName, containedInPlace: { "@type": "State", name: "Queensland" } },
      }] : []),
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt={isTargetPestPage ? "Gold Coast pest control service" : `${profile.label} in ${page.suburbName}`}
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
              <span className="text-[#39BDE4]">{isTargetPestPage ? "Gold Coast" : page.suburbName}</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              {isTargetPestPage ? "Gold Coast local service" : `Gold Coast · ${page.suburbName}`}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              {profile.label} in {page.suburbName}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Local {profile.label.toLowerCase()} across {localCopySuburb}: the scope is written for your
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

      {isTargetPestPage && (
        <section className="bg-white py-6">
          <div className="classic-container">
            <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <p><strong>Fully insured</strong><br />Cover for your peace of mind</p>
              <p><strong>Police-checked team</strong><br />Local service staff</p>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 p-5">
              <h2 className="font-bold text-primary">Pest control with bond or end of lease cleaning</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700">If your rental handover needs both services, we can discuss the cleaning and pest treatment in one booking. Check your lease or agent instructions and share your handover date so we can confirm the requested scope.</p>
              <Link className="mt-3 inline-block text-sm font-bold text-primary underline" href="/bond-pest-carpet-end-of-lease">See the bond, pest and carpet bundle</Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="space-y-6">
              {!isTargetPestPage && <div className="rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-6">
                <p className="text-base leading-8 text-slate-700">{page.directAnswer}</p>
              </div>}

              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="space-y-6">
              {!isTargetPestPage && <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
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
              </div>}

              {!isTargetPestPage && <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
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
              </div>}
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Local detail</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">
              {isTargetPestPage ? "Local property details" : `What is different about ${page.suburbName}`}
            </h2>
            {!isTargetPestPage && <p className="mt-4 text-base leading-8 text-slate-600">
              The property type, access arrangements and how the place is used shape
              the job more than the suburb name does, and we plan around all three.
            </p>}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {(isTargetPestPage ? page.localNotes.slice(0, 2) : page.localNotes).map((note) => (
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
              {profile.scopeIntro}
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
                How booking works in {localCopySuburb}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Send the property type, size and the date you need it completed. We confirm what is
                included, which extras are worth adding, and the price before anything is booked.
                Access arrangements are sorted at the same time rather than on the day.
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

      {!isTargetPestPage && <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Nearby suburbs</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">
              {profile.label} around {page.suburbName}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We cover {page.suburbName} and the surrounding Gold Coast suburbs, so
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
      </section>}

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">
                {profile.label} in {localCopySuburb} — frequently asked questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Straight answers for {page.suburbName} properties before you book.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {pageFaqs.map((faq) => (
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
              Need {profile.label.toLowerCase()} in {localCopySuburb}?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Tell us about your property and the date you need it completed. We
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
