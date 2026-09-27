import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/bond-pest-carpet-end-of-lease`

export const metadata: Metadata = {
  title: "Bond, Pest & Carpet End of Lease Cleaning | Gold Coast",
  description:
    "One booking for bond cleaning, carpet steam cleaning and pest treatment at the end of a lease on the Gold Coast, in the order that works before inspection.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Bond, Pest & Carpet End of Lease Cleaning | Gold Coast",
    description:
      "Bundle bond cleaning, carpet steam cleaning and pest treatment into one end of lease booking, sequenced correctly before your final inspection.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Bond cleaning, pest and carpet bundle Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bond, Pest & Carpet End of Lease Cleaning | Gold Coast",
    description: "Bundle bond cleaning, carpet cleaning and pest treatment into one end of lease booking.",
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
        { "@type": "ListItem", position: 2, name: "End of Lease", item: `${businessInfo.baseUrl}/end-of-lease-cleaning-gold-coast` },
        { "@type": "ListItem", position: 3, name: "Bond, Pest & Carpet Bundle", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      headline: "Bond, Pest, Carpet and End of Lease Cleaning Bundle — Gold Coast",
      description:
        "How to combine bond cleaning, carpet steam cleaning and pest treatment into one end of lease booking on the Gold Coast, including the order of the work and what is included.",
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
          name: "Can I book bond cleaning, carpet cleaning and pest control together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it is usually the simplest option when your agent asks for all three. The work is sequenced so the property is cleaned first, carpets are steam cleaned while there is time to dry, and the pest treatment is done last so the receipt is current for your final inspection.",
          },
        },
        {
          "@type": "Question",
          name: "What order should the work be done in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cleaning first, because dust and residue from the clean would otherwise settle on freshly cleaned carpets. Carpet steam cleaning next, so it has time to dry. Pest treatment last, so the property is not walked over after treatment and the treatment date sits close to the inspection.",
          },
        },
        {
          "@type": "Question",
          name: "Does bundling the services reduce the price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Combining the work means one scheduling visit instead of three separate ones, which is more efficient for everyone. The total still depends on the property and the scope of each part, and the full figure is confirmed with you in writing before the booking is locked in.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the bundle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A room-by-room bond clean covering the kitchen, bathrooms, windows, skirting, cupboards and floors; hot water extraction steam cleaning for the carpets; and an internal and external pest treatment for common local pests, with preparation and re-entry guidance provided before each part.",
          },
        },
        {
          "@type": "Question",
          name: "Do you arrange everything around my inspection date?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tell us the inspection date when you enquire and we will work backwards from it, leaving a buffer so anything your agent flags during the inspection can still be corrected before the keys go back.",
          },
        },
        {
          "@type": "Question",
          name: "Is pest control required at the end of a lease in Queensland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your tenancy agreement rather than a blanket rule. Some leases, and some pet clauses, ask for a treatment at the end of the tenancy. Check your lease and entry condition report — the Residential Tenancies Authority explains tenancy obligations at rta.qld.gov.au.",
          },
        },
      ],
    },
  ],
}

const bundleParts = [
  {
    title: "Bond clean",
    body: "The room-by-room interior clean agents expect: kitchen including oven, bathrooms, internal windows and tracks, skirting, cupboard interiors, light switches and full floors.",
    tag: "Step 1",
  },
  {
    title: "Carpet steam cleaning",
    body: "Hot water extraction through the traffic areas and bedrooms so the carpets are lifted and drying before the inspection.",
    tag: "Step 2",
  },
  {
    title: "Pest treatment",
    body: "Internal and external treatment for common local pests, with preparation and re-entry guidance, completed last so the receipt is current.",
    tag: "Step 3",
  },
]

const whoItsFor = [
  {
    title: "Agents asking for all three",
    body: "Many exit condition reports and lease clauses ask for a professional clean, steam cleaned carpets and a pest treatment. Booking them together keeps the paperwork in one place.",
  },
  {
    title: "Pet clauses",
    body: "If the lease required a pet treatment when you moved in, most agents will ask for one when you move out. Scheduling it with the clean avoids a second appointment.",
  },
  {
    title: "Tight move timelines",
    body: "One coordinated booking is easier to schedule around keys, movers and an inspection date than three separate suppliers.",
  },
  {
    title: "Properties that have been lived in",
    body: "After a few years of family life, carpets and surfaces need more than a quick tidy. The bundle is built for a full reset rather than a touch-up.",
  },
]

const notIncluded = [
  "Exterior window cleaning on multi-storey access equipment",
  "Removal of permanent carpet stains that require specialist restoration",
  "Repairs, painting or work beyond fair wear and tear",
  "Furniture removal or storage",
  "End of lease requirements that your specific lease does not ask for — check your agreement first",
]

const steps = [
  {
    step: "01",
    title: "Send the details",
    body: "Suburb, property size, inspection date and a copy of anything your agent has asked for. We confirm what is needed and what is not.",
  },
  {
    step: "02",
    title: "Get one scope, one price",
    body: "Cleaning, carpet and pest are quoted together so you can see exactly what each part covers before you commit.",
  },
  {
    step: "03",
    title: "One booking, correct order",
    body: "The team works through the property in sequence and we leave a buffer before your inspection for anything that needs a second look.",
  },
]

const faqs = [
  {
    q: "Can I book bond cleaning, carpet cleaning and pest control together?",
    a: "Yes, and it is usually the simplest option when your agent asks for all three. The work is sequenced so the property is cleaned first, carpets are steam cleaned while there is time to dry, and the pest treatment is done last so the receipt is current for your final inspection.",
  },
  {
    q: "What order should the work be done in?",
    a: "Cleaning first, because dust and residue would otherwise settle on freshly cleaned carpets. Carpet steam cleaning next so it can dry. Pest treatment last, so the property is not walked over after treatment and the date sits close to the inspection.",
  },
  {
    q: "Does bundling reduce the price?",
    a: "Combining the work means one scheduling visit instead of three, which is more efficient. The total still depends on the property and the scope of each part, and the figure is confirmed in writing before the booking is locked in.",
  },
  {
    q: "What is included in the bundle?",
    a: "A room-by-room bond clean covering kitchen, bathrooms, windows, skirting, cupboards and floors; hot water extraction for the carpets; and an internal and external pest treatment with preparation and re-entry guidance.",
  },
  {
    q: "Do you work around my inspection date?",
    a: "Yes. Tell us the date when you enquire and we will work backwards from it, leaving a buffer so anything your agent flags can be corrected before the keys go back.",
  },
  {
    q: "Is pest control required at the end of a lease in Queensland?",
    a: "It depends on your tenancy agreement rather than a blanket rule. Some leases, and some pet clauses, ask for treatment at the end of the tenancy. Check your lease and entry condition report — the Residential Tenancies Authority explains obligations at rta.qld.gov.au.",
  },
]

const relatedLinks = [
  {
    href: siteLinks.bondCleaning,
    label: "Bond Cleaning Gold Coast",
    body: "The cleaning part of the bundle in full, with the checklist agents work from.",
  },
  {
    href: siteLinks.carpetCleaning,
    label: "Carpet Cleaning",
    body: "Hot water extraction for rental carpets and high-traffic areas.",
  },
  {
    href: siteLinks.pestControl,
    label: "Pest Control",
    body: "Treatment for common local pests, with preparation and re-entry guidance.",
  },
  {
    href: "/bond-cleaning-cost-gold-coast",
    label: "Bond Cleaning Cost Guide",
    body: "What drives the price of the clean and which extras are quoted separately.",
  },
  {
    href: "/pest-control-cost-gold-coast",
    label: "Pest Control Cost Guide",
    body: "What determines a treatment price for your property.",
  },
  {
    href: "/end-of-lease-cleaning-checklist",
    label: "End of Lease Checklist",
    body: "The room-by-room list to work through before your final inspection.",
  },
]

export default function BondPestCarpetBundlePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="End of lease cleaning, carpet and pest treatment on the Gold Coast"
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
              <Link href={siteLinks.endOfLeaseCleaning} className="transition-colors hover:text-white">
                End of Lease
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#39BDE4]">Bond + Pest + Carpet</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              One booking, three services
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Bond, Pest &amp; Carpet End of Lease Cleaning
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              When your agent asks for a professional clean, steam cleaned carpets and a pest treatment, book them together
              — in the right order, on one schedule, around your final inspection date.
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
              {["One scope, one price", "Sequenced correctly", "Receipts ready for inspection"].map((badge) => (
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
                  Yes — bond cleaning, carpet steam cleaning and pest treatment can be booked together, and it is the
                  simplest option when your agent asks for all three. The work runs in order: clean first, carpets second so
                  they can dry, pest treatment last so the receipt is current. One scope, one price, confirmed with you
                  before anything is booked.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                Ending a lease usually means juggling three separate requirements at once: the property has to be
                reasonably clean, the carpets often have to be steam cleaned, and some agreements — particularly those with
                a pet clause — ask for a pest treatment before the keys go back. Coordinating three suppliers around one
                inspection date is where moves go wrong.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Order matters as much as timing. Cleaning should happen first, because dust and residue from the clean
                would otherwise settle onto freshly cleaned carpets. Steam cleaning follows so the carpets have time to dry
                before anyone walks on them. Pest treatment goes last, so the property is not disturbed afterwards and the
                treatment date sits close to the inspection rather than weeks before it.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Booking the three together also means one conversation about price and scope. You see what each part
                covers, what is not included, and the total figure — instead of three quotes that may or may not line up on
                what has actually been done.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">The order of work</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>Full bond clean, room by room.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Carpet steam cleaning, left to dry.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>Pest treatment last, receipt ready for inspection.</span>
                  </li>
                </ol>
                <Button asChild className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Check what you actually need</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Not every lease asks for all three. Our checklist shows what Queensland inspectors focus on so you do not
                  pay for work you do not need.
                </p>
                <Link
                  href="/end-of-lease-cleaning-checklist"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary"
                >
                  Open the checklist
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The bundle</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">Three services, one sequence</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: cleaning, then carpet, then pest treatment. Done in that order the property is ready for
              inspection without anything having to be repeated.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {bundleParts.map((part) => (
              <article key={part.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{part.tag}</p>
                <h3 className="mt-3 text-xl font-black text-primary">{part.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{part.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-black text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Scope</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What the bundle covers — and what it does not</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: the three services cover the interior of the property, the carpets and a general pest
              treatment. Specialist restoration, repairs and exterior access work sit outside the scope.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Included in the booking</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Room-by-room bond clean: kitchen, bathrooms, windows, skirting, cupboards and floors",
                  "Hot water extraction steam cleaning through the carpets",
                  "Internal and external pest treatment for common local pests",
                  "Preparation and re-entry guidance before each part",
                  "One schedule coordinated around your inspection date",
                  "A walkthrough of the result if you are on site",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Not included</p>
              <ul className="mt-5 space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl bg-[#F3F3F3] p-4 text-sm leading-7 text-slate-600">
                Send us the entry condition report and anything your agent has flagged. We will tell you which parts of the
                bundle you actually need.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Want one price for all three?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send the suburb, property size, inspection date and what your agent asked for — we will come back with a
                single, itemised quote.
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
              <span className="eyebrow">How it works</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">From enquiry to inspection day</h2>
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

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                  <p className="text-sm font-bold text-primary">{link.label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{link.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">Bond, pest and carpet — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Practical answers for Gold Coast tenants preparing a rental for final inspection.
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
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Handing back keys soon?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Send the inspection date and what your agent asked for, and we will confirm the scope and price for cleaning,
              carpet and pest treatment in one booking — across the Gold Coast, from Coomera to Palm Beach.
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
