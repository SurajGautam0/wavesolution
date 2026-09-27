import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/end-of-lease-cleaning-checklist`

export const metadata: Metadata = {
  title: "End of Lease Cleaning Checklist QLD | Inspection-Ready",
  description:
    "QLD end of lease cleaning checklist for Gold Coast rentals: room-by-room tasks, what inspectors focus on, and what the RTA says about reasonably clean.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "End of Lease Cleaning Checklist QLD | Inspection-Ready",
    description:
      "Room-by-room end of lease cleaning checklist for Queensland rentals, with RTA guidance and what property managers check at the final inspection.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "End of lease cleaning checklist Queensland" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "End of Lease Cleaning Checklist QLD | Inspection-Ready",
    description: "Room-by-room end of lease cleaning checklist for Queensland rentals with RTA guidance.",
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
        { "@type": "ListItem", position: 2, name: "End of Lease Cleaning", item: `${businessInfo.baseUrl}/end-of-lease-cleaning-gold-coast` },
        { "@type": "ListItem", position: 3, name: "End of Lease Cleaning Checklist", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      headline: "End of Lease Cleaning Checklist Queensland",
      description:
        "A room-by-room end of lease cleaning checklist for Queensland rentals, with guidance from the Residential Tenancies Authority and the areas property managers focus on at final inspection.",
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
          name: "Is professional end of lease cleaning required by law in Queensland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Queensland law does not require tenants to hire a professional cleaner. The property must be left reasonably clean, taking the length of the tenancy and fair wear and tear into account. The Residential Tenancies Authority explains this for tenants and property managers.",
          },
        },
        {
          "@type": "Question",
          name: "What does a property manager check at a final inspection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oven and rangehood interiors, shower screens and grout, skirting boards and light switches, internal windows and tracks, cupboard interiors, floors, walls and marks, and any fixtures or fittings that were damaged beyond fair wear and tear.",
          },
        },
        {
          "@type": "Question",
          name: "How long before my move-out date should I clean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leave a buffer between the clean and your final inspection so anything your agent flags can be corrected before the keys go back. Booking early also gives you more choice of dates during busy move periods.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need carpet cleaning at the end of a lease?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your agreement and the condition of the carpets. If carpets were professionally cleaned at the start of the tenancy, or the lease specifically requires it, arrange a hot water extraction clean and keep the invoice for your records.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need pest control when I move out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some tenancy agreements and pet clauses ask for a pest treatment at the end of the lease. Check your entry condition report and lease terms first, then book the treatment so the receipt is ready before your final inspection.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do about mould in a Gold Coast rental?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ventilate the property, dry wet surfaces and clean affected areas as part of the exit clean. Mould caused by poor ventilation or condensation is a cleaning issue, but damage beyond fair wear and tear can be a separate matter, so document what you have done with photos.",
          },
        },
        {
          "@type": "Question",
          name: "What if the property manager says something is still not clean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ask for the specific items in writing, then arrange a correction before the bond claim period runs. If you booked through Wave Solution, contact us with the details and we will review the items against the original scope.",
          },
        },
      ],
    },
  ],
}

const orderOfWork = [
  {
    step: "01",
    title: "Declutter and empty",
    body: "Remove your belongings first. Cupboards, wardrobes, oven and fridge spaces cannot be cleaned properly while they are full.",
  },
  {
    step: "02",
    title: "Work top to bottom, rooms in order",
    body: "Ceiling fans, high shelves, surfaces, then floors. Start with the kitchen and bathrooms, where inspections spend the most time.",
  },
  {
    step: "03",
    title: "Walk it with the checklist",
    body: "Photograph every room when you finish, then compare against this list and your entry condition report before your inspection.",
  },
]

const checklistGroups = [
  {
    title: "Kitchen",
    items: [
      "Oven interior, racks, glass and trays",
      "Stovetop, burners and splashbacks",
      "Rangehood filters and exterior",
      "Cupboards and drawers inside and out, including shelves",
      "Benchtops, sink, tapware and seals",
      "Dishwasher interior and door seal",
      "Fridge space (empty and wiped) if the appliance stays",
      "Floor under and around appliances",
    ],
  },
  {
    title: "Bathrooms and laundry",
    items: [
      "Shower screen, glass and door tracks",
      "Tile grout, bath and basin",
      "Toilet bowl, seat, base and behind",
      "Mirrors, extractor fans and vents",
      "Cupboard and vanity interiors",
      "Laundry tub, washing machine space and floor",
    ],
  },
  {
    title: "Living areas and bedrooms",
    items: [
      "Skirting boards, door frames and cornices",
      "Light switches, power points and handles",
      "Wardrobe and cupboard interiors and shelves",
      "Blinds, tracks and sill dust",
      "Walls: marks, scuffs and nail holes filled where needed",
      "Ceiling fans and light fittings",
    ],
  },
  {
    title: "Windows, floors and outdoor",
    items: [
      "Internal window glass and sills",
      "Sliding door tracks and screens",
      "Carpet vacuumed throughout; steam cleaned if required",
      "Hard floors mopped and edges detailed",
      "Balcony, courtyard or garage swept and cleared",
      "Bins cleaned and returned, yard tidied if maintained by you",
    ],
  },
]

const inspectionFocus = [
  {
    title: "The oven and rangehood",
    body: "These two items are checked first in almost every exit inspection because they show the clearest difference between a quick wipe and a proper clean.",
  },
  {
    title: "Bathroom grout and glass",
    body: "Soap scum, mould around seals and dull grout are the most common reasons agents raise a cleaning item after the inspection.",
  },
  {
    title: "Edges and details",
    body: "Skirting boards, window tracks, skirting corners, light switches and wardrobe interiors are where detail work either shows or does not.",
  },
  {
    title: "Walls, floors and fixtures",
    body: "Scuff marks, carpet stains and damage beyond fair wear and tear are assessed against the entry condition report you signed at the start.",
  },
]

const relatedLinks = [
  {
    href: "/bond-cleaning-cost-gold-coast",
    label: "Bond Cleaning Cost Gold Coast",
    body: "What drives the price of a bond clean and how quotes are built.",
  },
  {
    href: siteLinks.bondCleaning,
    label: "Bond Cleaning Gold Coast",
    body: "Book an inspection-ready clean against a room-by-room checklist.",
  },
  {
    href: siteLinks.endOfLeaseCleaning,
    label: "End of Lease Cleaning",
    body: "Rental exit cleaning scheduled around your handover date.",
  },
  {
    href: "/blog/bond-cleaning-checklist",
    label: "Detailed Bond Cleaning Checklist",
    body: "Our longer room-by-room checklist with extra detail for each area.",
  },
  {
    href: "/blog/end-of-lease-cleaning-requirements-qld",
    label: "End of Lease Requirements QLD",
    body: "What Queensland tenancy rules actually ask of tenants at exit.",
  },
  {
    href: siteLinks.pestControl,
    label: "Pest Control",
    body: "Treatment and receipt if your agreement or agent requires one.",
  },
]

const faqs = [
  {
    q: "Is professional end of lease cleaning required by law in Queensland?",
    a: "No. Queensland law does not require you to hire a professional cleaner. The property must be left reasonably clean, taking the length of the tenancy and fair wear and tear into account. The Residential Tenancies Authority (rta.qld.gov.au) explains this guidance for tenants and property managers.",
  },
  {
    q: "What does a property manager check at a final inspection?",
    a: "Oven and rangehood interiors, shower screens and grout, skirting boards and light switches, internal windows and tracks, cupboard interiors, floors, walls and marks, and any fixtures or fittings damaged beyond fair wear and tear.",
  },
  {
    q: "How long before my move-out date should I clean?",
    a: "Leave a buffer between the clean and your final inspection so anything your agent flags can be corrected before the keys go back. Booking early also gives you more choice of dates during busy move periods.",
  },
  {
    q: "Do I need carpet cleaning at the end of a lease?",
    a: "It depends on your agreement and the condition of the carpets. If carpets were professionally cleaned at the start of the tenancy, or the lease specifically requires it, arrange a hot water extraction clean and keep the invoice.",
  },
  {
    q: "Do I need pest control when I move out?",
    a: "Some tenancy agreements and pet clauses ask for a pest treatment when the lease ends. Check your entry condition report and lease terms first, then book the treatment so the receipt is ready before your final inspection.",
  },
  {
    q: "What should I do about mould in a Gold Coast rental?",
    a: "Ventilate the property, dry wet surfaces and clean affected areas as part of the exit clean. Mould caused by condensation or poor ventilation is a cleaning issue, but damage beyond fair wear and tear can be treated separately, so photograph what you have done.",
  },
  {
    q: "What if the property manager says something is still not clean?",
    a: "Ask for the specific items in writing, then arrange a correction before the bond claim period runs. If you booked through Wave Solution, contact us with the details and we will review them against the original scope.",
  },
]

export default function EndOfLeaseCleaningChecklistPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="End of lease cleaning checklist for Queensland rentals"
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
                End of Lease Cleaning
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#39BDE4]">Checklist</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Queensland exit checklist
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              End of Lease Cleaning Checklist for Queensland Rentals
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              A room-by-room list built around what property managers actually check at a final inspection, plus what the
              Residential Tenancies Authority says about leaving a rental reasonably clean.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-[#39BDE4] px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 hover:bg-[#249FC5]">
                <Link href={siteLinks.book}>
                  Book a Bond Clean
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
              {["Fully insured", "Police-checked", "Room-by-room checklist"].map((badge) => (
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
                  Queensland law does not require you to hire a professional end of lease cleaner. What the property must be
                  is reasonably clean, taking into account how long you lived there and fair wear and tear, and that is the
                  standard your final inspection is measured against. This checklist covers the detail areas inspectors check
                  most often on the Gold Coast.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                The Residential Tenancies Authority (RTA) sets out cleaning and bond obligations for Queensland tenancies at{" "}
                <a
                  href="https://www.rta.qld.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-4 hover:text-secondary"
                >
                  rta.qld.gov.au
                </a>
                . In short: the property needs to be left reasonably clean, fair wear and tear is not your responsibility,
                and any cleaning claim from your bond has to be justified against the entry condition report you signed at
                the start of the tenancy.
              </p>
              <p className="text-base leading-8 text-slate-600">
                That report is the single most useful document you have. Keep a copy, compare it room by room against this
                checklist, and photograph each space when you finish. If something was already marked on the entry report,
                it works in your favour — if it was not, you are expected to return it in the same condition.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Coastal properties on the Gold Coast deserve one extra note: humidity and salt air mean glass, balcony tracks
                and wet-area seals pick up residue faster than inland homes. Drying surfaces and ventilating bathrooms during
                the exit clean keeps mould from becoming the item your agent photographs.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Order of work</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  {orderOfWork.map((item) => (
                    <li key={item.step} className="flex gap-3">
                      <span className="font-black text-secondary">{item.step}</span>
                      <span>
                        <span className="block font-bold text-white">{item.title}</span>
                        {item.body}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Prefer it done for you?</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  We clean against this checklist and walk the property with you if you are on site. Carpet and pest
                  treatment can be added in the same booking.
                </p>
                <Button asChild className="mt-4 h-11 w-full rounded-full bg-primary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-primary/90">
                  <Link href={siteLinks.book}>Get a Free Quote</Link>
                </Button>
                <a
                  href={businessInfo.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary"
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
            <span className="eyebrow">The checklist</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">Room by room, in the order that matters</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: kitchens and bathrooms carry the most weight at an inspection, so clean them first while you
              still have time in hand, then work through living areas, windows and floors.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {checklistGroups.map((group) => (
              <article key={group.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-primary">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-white p-7 shadow-sm sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Running out of time before your inspection?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send us your suburb, property size and inspection date and we will confirm what can be done and when.
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

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Final inspection</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What property managers focus on</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: four areas account for most cleaning items raised after an exit inspection. Spend your time
              there first.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {inspectionFocus.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6">
                <h3 className="text-lg font-black text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">Keep reading</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Related guides and services for Gold Coast tenants preparing to hand back keys.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition-transform hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
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
              <h2 className="text-3xl font-black tracking-tight text-primary">End of lease cleaning — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Answers for Queensland tenants working through a final inspection on the Gold Coast.
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
              Book an inspection-ready end of lease clean across the Gold Coast. We work from this checklist, confirm the
              scope with you, and can add carpet cleaning and pest treatment in the same booking.
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
