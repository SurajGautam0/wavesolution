import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/bond-cleaning-cost-gold-coast`

export const metadata: Metadata = {
  title: "Bond Cleaning Cost Gold Coast 2026 | Price Guide",
  description:
    "Bond cleaning cost on the Gold Coast: what drives the price, what is included, common add-ons, and how to get an accurate quote for your rental.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Bond Cleaning Cost Gold Coast 2026 | Price Guide",
    description:
      "What drives bond cleaning prices on the Gold Coast, what is included, which extras cost more, and how to get an accurate quote.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Bond cleaning cost Gold Coast price guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bond Cleaning Cost Gold Coast 2026 | Price Guide",
    description: "What drives bond cleaning prices on the Gold Coast, what is included, and how to get an accurate quote.",
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
        { "@type": "ListItem", position: 2, name: "Bond Cleaning", item: `${businessInfo.baseUrl}/bond-cleaning-gold-coast` },
        { "@type": "ListItem", position: 3, name: "Bond Cleaning Cost Gold Coast", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      headline: "Bond Cleaning Cost Gold Coast 2026",
      description:
        "A quote-led guide to bond cleaning costs on the Gold Coast: the factors that move the price, what a standard clean includes, and which extras are usually charged separately.",
      author: { "@type": "Organization", name: businessInfo.businessName, url: businessInfo.baseUrl },
      publisher: { "@type": "Organization", name: businessInfo.businessNameWithLocation, logo: { "@type": "ImageObject", url: `${businessInfo.baseUrl}/logo.png` } },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      url: pageUrl,
      image: `${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`,
      inLanguage: "en-AU",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does bond cleaning cost on the Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            // OWNER_PRICES: insert the confirmed AUD range here when the owner supplies one — keep copy quote-led until then
            text: "Bond cleaning is quoted per property rather than sold at a fixed menu price, because the size, condition and extras differ on every job. We will confirm an itemised price for your property size and suburb before you book, in writing.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a bond clean cost more?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main drivers are the size of the property, how long it has been since the last detailed clean, heavy build-up in the oven, bathrooms or floors, extras such as carpet steam cleaning or pest treatment, and timing or access requirements such as after-hours work or lift bookings.",
          },
        },
        {
          "@type": "Question",
          name: "What is usually included in the price of a bond clean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard bond clean covers the kitchen including oven and rangehood filters, bathrooms and tiles, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping. Carpet steam cleaning, pest treatment, exterior windows and heavy stain removal are normally quoted separately.",
          },
        },
        {
          "@type": "Question",
          name: "Is bond cleaning legally required in Queensland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Queensland law does not require tenants to hire a professional cleaner. The property must be left reasonably clean, taking fair wear and tear and the length of the tenancy into account, as explained by the Residential Tenancies Authority. A professional bond clean is a practical way to meet that standard rather than a legal requirement.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a bond clean take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A typical bond clean takes 4 to 8 hours depending on the size of the property and its condition. Larger homes, or properties that have not had a detailed clean for a long time, can take longer.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book bond cleaning, carpet cleaning and pest treatment together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it is usually the simplest option if your agent asks for all three. Sequencing the work in one booking means the carpet can dry and the pest treatment receipt is ready before your final inspection.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get an accurate bond cleaning price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Send us the suburb, the property type and size, the number of bathrooms, your inspection date and any extras your agent has asked for. We confirm the scope and the price before the booking, so there are no surprises on the day.",
          },
        },
      ],
    },
  ],
}

const priceDrivers = [
  {
    title: "Property size",
    body: "Room count and bathroom count set the baseline hours. A one-bedroom unit and a five-bedroom house are never the same job.",
  },
  {
    title: "Current condition",
    body: "Time since the last detailed clean, grease build-up, soap scum and carpet staining all change how long the work takes.",
  },
  {
    title: "Extra services",
    body: "Carpet steam cleaning, pest treatment and exterior windows are usually quoted as add-ons rather than folded into the base price.",
  },
  {
    title: "Timing and access",
    body: "Tight move dates, after-hours work, lift bookings or body corporate access rules can all affect scheduling and cost.",
  },
  {
    title: "Property type",
    body: "Apartments, townhouses and freestanding homes each bring different surfaces, outdoor areas and access requirements.",
  },
  {
    title: "Suburb and travel",
    body: "Where the property sits on the Gold Coast affects scheduling, which is why the suburb is one of the first things we ask for.",
  },
]

const includedList = [
  "Kitchen: oven interior, stovetop, rangehood filters, cupboards inside and out, splashbacks and tapware",
  "Bathrooms: shower screens, tile grout, basins, mirrors, toilets and full sanitising",
  "Living and bedrooms: wardrobe interiors, shelving, doors, handles, light switches and skirting boards",
  "Windows and tracks: internal glass, sills and sliding door tracks",
  "Floors: carpet vacuuming and damp mopping of hard surfaces",
]

const extraList = [
  "Carpet steam cleaning (hot water extraction)",
  "Pest treatment and the treatment receipt your agent may ask for",
  "Exterior windows and screen doors",
  "Garage, balcony or courtyard detailing",
  "Heavy stain removal or specialist surface work",
]

const steps = [
  {
    step: "01",
    title: "Tell us the property",
    body: "Suburb, property type, bedrooms, bathrooms and your inspection date. Photos of the kitchen and bathrooms help if the property needs more attention.",
  },
  {
    step: "02",
    title: "Get the scope and the price",
    body: "We confirm what is included, which extras you need, and the price for the job before anything is booked in.",
  },
  {
    step: "03",
    title: "Walk it through",
    body: "The clean is completed against a room-by-room checklist, and we review the result with you if you are on site.",
  },
]

const faqs = [
  {
    q: "How much does bond cleaning cost on the Gold Coast?",
    a: "Bond cleaning is quoted per property rather than sold at a fixed menu price, because size, condition and extras differ on every job. Ask for a written figure and we will confirm an itemised price for your property size and suburb before you book.",
  },
  {
    q: "What makes a bond clean cost more?",
    a: "Property size, how long it has been since the last detailed clean, heavy build-up in the oven or bathrooms, extras such as carpet or pest treatment, and timing or access requirements.",
  },
  {
    q: "Is bond cleaning legally required in Queensland?",
    a: "No. Queensland law does not require you to hire a professional cleaner. The property must be left reasonably clean, taking fair wear and tear into account, and the Residential Tenancies Authority explains this guidance for tenants and property managers.",
  },
  {
    q: "What is usually included in a bond clean?",
    a: "Kitchen including oven and rangehood filters, bathrooms and tiles, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping. Carpet, pest treatment and exterior glass are normally quoted separately.",
  },
  {
    q: "How long does a bond clean take?",
    a: "A typical bond clean takes 4 to 8 hours depending on property size and condition. Larger homes or properties with heavier build-up can take longer.",
  },
  {
    q: "Can I bundle bond cleaning with carpet and pest treatment?",
    a: "Yes. Booking them together keeps the work sequenced correctly and means the carpet has time to dry and the pest receipt is ready before your final inspection.",
  },
  {
    q: "Do I need to be home for the clean?",
    a: "No. Most tenants arrange key access and are not on site. We agree the access arrangement when the booking is made.",
  },
]

const relatedLinks = [
  {
    href: siteLinks.bondCleaning,
    label: "Bond Cleaning Gold Coast",
    body: "Full service page: what is checked, how the clean is run, and how to book.",
  },
  {
    href: siteLinks.endOfLeaseCleaning,
    label: "End of Lease Cleaning",
    body: "The same handover clean, scoped around your final inspection date.",
  },
  {
    href: "/end-of-lease-cleaning-checklist",
    label: "End of Lease Cleaning Checklist",
    body: "Room-by-room tasks to work through before your inspection.",
  },
  {
    href: siteLinks.carpetCleaning,
    label: "Carpet Cleaning",
    body: "Hot water extraction for rental carpets and high-traffic areas.",
  },
  {
    href: siteLinks.pestControl,
    label: "Pest Control",
    body: "Treatment and receipt if your agreement or agent asks for it.",
  },
  {
    href: "/blog/end-of-lease-cleaning-cost-gold-coast",
    label: "End of Lease Cost Guide",
    body: "Our earlier cost guide with published figures by property size.",
  },
]

export default function BondCleaningCostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="Bond cleaning in progress on the Gold Coast"
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
              <Link href={siteLinks.bondCleaning} className="transition-colors hover:text-white">
                Bond Cleaning
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#39BDE4]">Cost Guide</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Gold Coast price guide
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Bond Cleaning Cost Gold Coast 2026
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              What actually moves the price of an end of lease clean, what is included in the base job, which extras are
              quoted separately, and how to get an accurate figure for your property before your inspection date.
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
              {["Fully insured", "Police-checked", "Quote-led pricing"].map((badge) => (
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
                  Bond cleaning on the Gold Coast is priced for the individual property, not sold from a fixed menu, because
                  size, condition and extras change on every job. We will confirm an itemised price for your property size
                  and suburb in writing before the booking is locked in.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                When tenants search for bond cleaning cost, they are usually trying to do two things at once: work out whether
                they can afford the clean, and work out how soon they need to book it before the keys go back. Both come down
                to the same three inputs — how big the property is, what condition it is in, and which extras your agent has
                asked for.
              </p>
              <p className="text-base leading-8 text-slate-600">
                That is why we quote instead of publishing a single fixed number. A one-bedroom unit that has been cleaned
                regularly is a very different job to a four-bedroom house with a year of grease in the oven and carpets that
                have not been lifted in years. A price that ignores that difference is either too high for the small jobs or
                too low for the big ones, and neither helps you plan a move.
              </p>
              <p className="text-base leading-8 text-slate-600">
                The quickest way to get a real figure is to send the suburb, property type, bedroom and bathroom count, your
                inspection date and any extras your agent has flagged. Most quotes are confirmed the same day, and the scope
                is written down so you know exactly what you are paying for.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Get your figure</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>Tell us the suburb, property size and inspection date.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Tell us which extras you need — carpet, pest, exterior glass.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>Get the scope and the price in writing before you book.</span>
                  </li>
                </ol>
                <Button asChild className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Already have a date?</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Leave a buffer between the clean and your final inspection so anything your agent flags can be corrected
                  before the keys go back.
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
            <span className="eyebrow">Price drivers</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What changes the price of a bond clean</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: the base price is set by size and condition, then adjusted for extras and timing. Nothing else
              moves the figure in a meaningful way.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceDrivers.map((driver) => (
              <article key={driver.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-black text-primary">{driver.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{driver.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Scope</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What is included, and what is usually extra</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: the base bond clean covers the interior of the property room by room. Carpet, pest treatment,
              exterior glass and heavy specialist work are normally quoted as add-ons so you only pay for what your inspection
              actually requires.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Included in the base clean</p>
              <ul className="mt-5 space-y-3">
                {includedList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Usually quoted separately</p>
              <ul className="mt-5 space-y-3">
                {extraList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl bg-[#F3F3F3] p-4 text-sm leading-7 text-slate-600">
                Not sure what your agent expects? Send us the entry condition report and we will tell you which extras are
                worth booking and which you can skip.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Want a price for your property?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send the suburb, size and inspection date and we will come back with a clear, itemised quote — no obligation
                to book.
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
              <span className="eyebrow">How quoting works</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">From enquiry to a confirmed price</h2>
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

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-black tracking-tight text-primary">Related reading</h2>
                <div className="mt-5 space-y-3">
                  {relatedLinks.slice(0, 3).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-[1.25rem] border border-slate-200 bg-[#F3F3F3] p-4 transition-colors hover:border-primary/20 hover:bg-white"
                    >
                      <p className="text-sm font-bold text-primary">{link.label}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{link.body}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-black tracking-tight text-primary">Services that pair with a bond clean</h2>
                <div className="mt-5 space-y-3">
                  {relatedLinks.slice(3).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-[1.25rem] border border-slate-200 bg-[#F3F3F3] p-4 transition-colors hover:border-primary/20 hover:bg-white"
                    >
                      <p className="text-sm font-bold text-primary">{link.label}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{link.body}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">Bond cleaning cost — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Straight answers about pricing, scope and Queensland requirements for Gold Coast rentals.
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
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to price your bond clean?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Tell us where the property is, how big it is and when your inspection is. We will confirm the scope and the
              price before anything is booked — and we cover suburbs across the Gold Coast from Coomera to Palm Beach.
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
