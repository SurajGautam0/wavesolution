import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/cleaning-prices-gold-coast`

export const metadata: Metadata = {
  title: "Cleaning Prices Gold Coast | Cost & Quote Guides",
  description:
    "Gold Coast cleaning and pest price guides: house cleaning, bond cleaning, pest control and end of lease bundles, with what drives each quote.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Cleaning Prices Gold Coast | Cost & Quote Guides",
    description:
      "Quote-led price guides for house cleaning, bond cleaning, pest control and end of lease bundles across the Gold Coast.",
    url: pageUrl,
    type: "website",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Gold Coast cleaning price guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Prices Gold Coast | Cost & Quote Guides",
    description: "Quote-led price guides for house cleaning, bond cleaning, pest control and end of lease bundles.",
    images: ["/gold-coast-cleaning-services.jpeg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: businessInfo.baseUrl },
        { "@type": "ListItem", position: 2, name: "Cleaning Prices", item: pageUrl },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Gold Coast Cleaning and Pest Price Guides",
      url: pageUrl,
      inLanguage: "en-AU",
      hasPart: [
        {
          "@type": "Article",
          headline: "Bond Cleaning Cost Gold Coast",
          url: `${businessInfo.baseUrl}/bond-cleaning-cost-gold-coast`,
        },
        {
          "@type": "Article",
          headline: "House Cleaning Cost Gold Coast",
          url: `${businessInfo.baseUrl}/house-cleaning-cost-gold-coast`,
        },
        {
          "@type": "Article",
          headline: "Pest Control Cost Gold Coast",
          url: `${businessInfo.baseUrl}/pest-control-cost-gold-coast`,
        },
        {
          "@type": "Article",
          headline: "Bond, Pest, Carpet and End of Lease Cleaning Bundle",
          url: `${businessInfo.baseUrl}/bond-pest-carpet-end-of-lease`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does cleaning cost on the Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wave Solution quotes every job for the individual property rather than selling from a fixed menu, because size, condition and extras change the work involved. Indicative pricing: [OWNER: insert current starting prices or ranges by service, AUD]. Each guide below explains what moves the price for that specific service.",
          },
        },
        {
          "@type": "Question",
          name: "Why is there no fixed price list on the website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A one-bedroom unit cleaned regularly and a four-bedroom house with heavy build-up are completely different jobs. Publishing one fixed number would either overprice the small jobs or underprice the large ones, so the team quotes against the actual scope and confirms it with you in writing before booking.",
          },
        },
        {
          "@type": "Question",
          name: "Which price guide should I read?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you are handing a rental back, start with the bond cleaning cost guide or the combined bond, pest, carpet and end of lease page. If you want regular upkeep at home, read the house cleaning cost guide. If you need treatment for insects, read the pest control cost guide.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get more than one service quoted together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bond cleaning, carpet steam cleaning and pest treatment are commonly booked together for a final inspection, and the combined page explains the correct order of the work so nothing has to be done twice.",
          },
        },
        {
          "@type": "Question",
          name: "Do you charge for quotes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Quotes are free and there is no obligation to book. Send the suburb, property size and the service you need and the team will confirm the scope and price.",
          },
        },
      ],
    },
  ],
}

const guides = [
  {
    href: "/bond-cleaning-cost-gold-coast",
    label: "Bond cleaning cost",
    body: "What moves the price of an end of lease clean, what is included in the base job, and which extras your agent usually asks for separately.",
    tag: "Rentals",
  },
  {
    href: "/house-cleaning-cost-gold-coast",
    label: "House cleaning cost",
    body: "One-off, weekly and fortnightly house cleaning priced by home size, condition and the extras you want added to the visit.",
    tag: "Homes",
  },
  {
    href: "/pest-control-cost-gold-coast",
    label: "Pest control cost",
    body: "What determines a treatment price: property size, pest type, interior and exterior coverage, and whether you want a one-off or ongoing plan.",
    tag: "Pest",
  },
  {
    href: "/bond-pest-carpet-end-of-lease",
    label: "Bond + pest + carpet bundle",
    body: "One booking for the three things agents ask for at the end of a lease, in the order that works — cleaning, then carpet, then treatment.",
    tag: "Bundle",
  },
  {
    href: "/blog/end-of-lease-cleaning-cost-gold-coast",
    label: "End of lease cost by bedroom count",
    body: "Our longer cost article covering pricing by bedroom count, inclusions and the common add-ons that catch tenants out.",
    tag: "Guide",
  },
  {
    href: "/end-of-lease-cleaning-checklist",
    label: "End of lease cleaning checklist",
    body: "Not sure what you are paying for? Work through the room-by-room list Queensland inspectors actually use.",
    tag: "Checklist",
  },
]

const priceFactors = [
  {
    title: "Size of the property",
    body: "Rooms and bathrooms set the baseline hours. This is the first thing we ask for on every quote.",
  },
  {
    title: "Condition and history",
    body: "How long since the last detailed clean, how much build-up is in the oven, bathrooms and floors, and whether pets live in the property.",
  },
  {
    title: "Extras and add-ons",
    body: "Carpet steam cleaning, pest treatment, exterior windows and heavy stain removal are quoted separately so you only pay for what you need.",
  },
  {
    title: "Frequency",
    body: "Regular weekly or fortnightly visits cost less per visit than a one-off clean, because maintenance work is faster than restoration work.",
  },
  {
    title: "Timing and access",
    body: "Tight move dates, after-hours work, lift bookings and body corporate access rules all affect scheduling.",
  },
  {
    title: "Suburb and travel",
    body: "Where the property sits on the Gold Coast shapes the schedule, which is why the suburb is one of the first fields in our booking form.",
  },
]

const steps = [
  {
    step: "01",
    title: "Tell us the job",
    body: "Suburb, property type, size, and which service you need. Photos help if the property needs more attention than usual.",
  },
  {
    step: "02",
    title: "Get the scope and the price",
    body: "We confirm exactly what is included, which extras apply, and the price for the work before anything is booked.",
  },
  {
    step: "03",
    title: "Book it in",
    body: "Pick a time that suits. The booking form takes a few minutes and the team responds quickly with confirmation.",
  },
]

const faqs = [
  {
    q: "How much does cleaning cost on the Gold Coast?",
    a: "Every job is quoted for the property itself, because size, condition and extras change the work involved. Indicative pricing: [OWNER: insert current starting prices or ranges by service, AUD]. Pick the guide for your service below for the factors specific to that job.",
  },
  {
    q: "Why is there no fixed price list?",
    a: "A one-bedroom unit cleaned regularly and a four-bedroom house with heavy build-up are completely different jobs. A single fixed number would either overprice the small jobs or underprice the large ones, so the team quotes against the real scope and confirms it in writing first.",
  },
  {
    q: "Which price guide should I read?",
    a: "Handing a rental back? Start with the bond cleaning cost guide or the combined bond, pest, carpet and end of lease page. Regular upkeep at home? Read the house cleaning cost guide. Insects? Read the pest control cost guide.",
  },
  {
    q: "Can I have more than one service quoted together?",
    a: "Yes. Bond cleaning, carpet steam cleaning and pest treatment are commonly booked together before a final inspection, and the combined page sets out the order the work should happen in.",
  },
  {
    q: "Do you charge for quotes?",
    a: "No. Quotes are free with no obligation to book. Send the suburb, property size and the service you need and we will confirm scope and price.",
  },
  {
    q: "Do you cover my suburb?",
    a: "The team works across the Gold Coast, from Coomera and Helensvale in the north to Palm Beach and Burleigh in the south, including Robina, Southport, Surfers Paradise, Broadbeach, Nerang and Carrara.",
  },
]

const serviceLinks = [
  { href: siteLinks.bondCleaning, label: "Bond Cleaning" },
  { href: siteLinks.endOfLeaseCleaning, label: "End of Lease Cleaning" },
  { href: siteLinks.homeCleaning, label: "House Cleaning" },
  { href: siteLinks.pestControl, label: "Pest Control" },
  { href: siteLinks.carpetCleaning, label: "Carpet Cleaning" },
  { href: siteLinks.officeCleaning, label: "Office Cleaning" },
  { href: siteLinks.deepCleaning, label: "Deep Cleaning" },
  { href: siteLinks.commercialCleaning, label: "Commercial Cleaning" },
]

export default function CleaningPricesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="Cleaning price guides for the Gold Coast"
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
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
              <Link href={siteLinks.home} className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#39BDE4]">Cleaning Prices</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Gold Coast cost guides
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Cleaning Prices on the Gold Coast
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              One guide for each service, so you can see what actually moves the price before you ask for a quote — house
              cleaning, bond cleaning, pest control and end of lease bundles, explained in plain terms.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-[#39BDE4] px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 hover:bg-[#249FC5]">
                <Link href={siteLinks.book}>
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/25 bg-white/10 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:bg-white/20 hover:text-white">
                <Link href={businessInfo.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {businessInfo.phoneDisplay}
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              {["Free quotes", "Quote-led pricing", "No obligation"].map((badge) => (
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
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Direct Answer</p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cleaning on the Gold Coast is quoted per property, not sold from a fixed menu, because size, condition and
                  extras change the work on every job. Indicative pricing is [OWNER: insert current starting prices or
                  ranges by service, AUD]. Choose your service below to see the specific drivers, inclusions and common
                  extras for that job.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                Most people searching for cleaning prices are trying to budget before they commit — a move date, a lease
                end, a guest arriving, or a workplace that needs to look right on Monday. The honest answer is that the
                number depends on a handful of inputs, and those inputs are the same across every service we provide.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Rather than publish a single figure that would be wrong for half the properties on the Gold Coast, we
                publish guides. Each one explains what makes a job bigger or smaller, what is included in the base scope,
                and what is normally quoted as an extra. That way, when you do ask for a quote, you already know what you
                are being quoted for.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Quotes are free and carry no obligation. Send the suburb, the property size and the service, and the team
                confirms the scope and price in writing before anything is booked.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Fastest way to a price</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>Pick your service guide and note what applies to you.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Send suburb, property size and timing through the booking form.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>Get the scope and the price confirmed in writing.</span>
                  </li>
                </ol>
                <Button asChild className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Jump to a service</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Cost guides</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">Pick the guide for your service</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: each guide covers what moves the price, what is included, what is usually extra, and how to
              get an accurate figure for your property.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
              >
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                  {guide.tag}
                </span>
                <h3 className="mt-4 text-xl font-black tracking-tight text-primary">{guide.label}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{guide.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-secondary">
                  Read the guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">How pricing works</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What changes any cleaning quote</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: size and condition set the base figure, then extras, frequency, timing and location adjust it.
              Everything else is detail.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map((factor) => (
              <article key={factor.title} className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6">
                <h3 className="text-lg font-black text-primary">{factor.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{factor.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((item) => (
              <article key={item.step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Step {item.step}</p>
                <h3 className="mt-3 text-xl font-black text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Want a figure for your property?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send the suburb, size and service and we will come back with a clear, itemised quote — no obligation to
                book.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 rounded-full bg-primary px-5 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-primary/90">
                <Link href={siteLinks.book}>
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full border-slate-200 bg-white px-5 text-[11px] font-black uppercase tracking-[0.18em] text-primary hover:border-primary/25 hover:text-secondary">
                <a href={businessInfo.phoneHref} className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {businessInfo.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">Cleaning prices — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Straight answers about how the team prices cleaning and pest work across the Gold Coast.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <article key={faq.q} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready for an accurate price?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Tell us the suburb, the property size and what you need done. We will confirm the scope and the price before
              anything is booked — across the Gold Coast, from Coomera to Palm Beach.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90 shadow-lg shadow-black/20">
                <Link href={siteLinks.book}>Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/20 hover:text-white">
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
