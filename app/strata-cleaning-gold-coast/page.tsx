import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/strata-cleaning-gold-coast`

export const metadata: Metadata = {
  title: "Strata & Body Corporate Cleaning | Gold Coast",
  description:
    "Strata and body corporate cleaning on the Gold Coast: common areas, lobbies, stairwells, bins rooms and shared facilities on a fixed schedule with clear reporting.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Strata & Body Corporate Cleaning | Gold Coast",
    description:
      "Common-area cleaning for strata and body corporate buildings — lobbies, lifts, stairwells, waste areas and shared facilities on a fixed schedule.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Strata and body corporate cleaning on the Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strata & Body Corporate Cleaning | Gold Coast",
    description: "Common-area cleaning for strata and body corporate buildings on a fixed schedule.",
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
        { "@type": "ListItem", position: 2, name: "Services", item: `${businessInfo.baseUrl}/services` },
        { "@type": "ListItem", position: 3, name: "Strata Cleaning", item: pageUrl },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Strata and body corporate cleaning",
      provider: { "@type": "Organization", name: businessInfo.businessName, url: businessInfo.baseUrl },
      areaServed: { "@type": "Place", name: "Gold Coast, Queensland" },
      url: pageUrl,
      description:
        "Cleaning of common areas in strata and body corporate buildings on the Gold Coast, including lobbies, lifts, stairwells, corridors, waste areas and shared facilities on an agreed schedule.",
      inLanguage: "en-AU",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What areas do you clean in a strata building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common areas: entrance and lobby, lifts, stairwells, corridors, bin and waste rooms, basement and shared car parks, and shared facilities such as gyms, pools, barbecue areas and laundry rooms — with the exact list agreed for each building.",
          },
        },
        {
          "@type": "Question",
          name: "How often should common areas be cleaned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the building. A single-level walk-up needs less than a tower with a busy lobby and shared gym. The schedule is set against traffic and usage, written into the scope, and reviewed when the building changes.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work with our caretaker or building manager?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most strata work runs through the caretaker, building manager or strata managing agent. We take direction from the contact you nominate, keep one point of contact and report issues through them.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide a report to the body corporate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Issues found during a visit — graffiti, damaged fittings, a leak, maintenance needed in a common area — are reported to your nominated contact so it can be raised with the committee rather than waiting for an annual inspection.",
          },
        },
        {
          "@type": "Question",
          name: "Do you clean outside business hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lobbies, corridors and shared facilities are usually serviced outside peak resident hours, and access arrangements — keys, fobs, alarm codes — are agreed with your building manager when the contract starts.",
          },
        },
        {
          "@type": "Question",
          name: "Do you supply consumables?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Soap, paper products and other amenities for common-area bathrooms can be included in the scope, or left with your existing supplier. We confirm which arrangement applies when the schedule is set up.",
          },
        },
      ],
    },
  ],
}

const strataParts = [
  {
    title: "Entrances & lobbies",
    body: "Glass, doors, reception furniture, mats and floors — the first thing residents and visitors see, and the area that collects the most traffic.",
    tag: "High traffic",
  },
  {
    title: "Corridors & stairwells",
    body: "Walls, handrails, landings, floors and lighting areas through the common circulation routes of the building.",
    tag: "Every level",
  },
  {
    title: "Waste & shared facilities",
    body: "Bin rooms, chutes, basement car parks, gyms, pools, barbecue and laundry areas kept to the standard the building expects.",
    tag: "Shared areas",
  },
]

const whoItsFor = [
  {
    title: "Body corporate committees",
    body: "A defined scope, a fixed schedule and one contact, so the committee can see what the building is paying for and what is actually being done.",
  },
  {
    title: "Caretakers and building managers",
    body: "Direction is taken from your nominated contact, issues are reported through them, and the same team is kept on the site.",
  },
  {
    title: "Strata managing agents",
    body: "One contract that can cover a building or a portfolio, with scope written clearly enough to sit in a management agreement.",
  },
  {
    title: "Owners corporations and developers",
    body: "New buildings set up with a checklist and frequency that match the facilities on site, ready before residents move in.",
  },
]

const notIncluded = [
  "Private apartments and individually owned lots",
  "Repairs, painting, gardening or maintenance work",
  "Pressure cleaning of driveways or facades unless specifically quoted",
  "Removal of graffiti or contamination beyond the agreed clean",
  "Waste removal beyond the building's own waste arrangements",
]

const steps = [
  {
    step: "01",
    title: "Walk the building",
    body: "We walk the common areas with your caretaker or manager and write down exactly what is in scope, level by level.",
  },
  {
    step: "02",
    title: "Agree the schedule",
    body: "Frequency is set against how the building is actually used, then documented so there is no argument later about what was promised.",
  },
  {
    step: "03",
    title: "Clean and report",
    body: "The team works to the checklist, access is handled through your nominated contact, and anything needing attention is reported.",
  },
]

const faqs = [
  {
    q: "What areas do you clean in a strata building?",
    a: "Common areas: entrance and lobby, lifts, stairwells, corridors, bin and waste rooms, basement and shared car parks, and shared facilities such as gyms, pools, barbecue areas and laundry rooms — with the exact list agreed for each building.",
  },
  {
    q: "How often should common areas be cleaned?",
    a: "It depends on the building. A single-level walk-up needs less than a tower with a busy lobby and shared gym. The schedule is set against traffic and usage, written into the scope, and reviewed when the building changes.",
  },
  {
    q: "Can you work with our caretaker or building manager?",
    a: "Yes. Most strata work runs through the caretaker, building manager or strata managing agent. We take direction from the contact you nominate, keep one point of contact and report issues through them.",
  },
  {
    q: "Do you provide a report to the body corporate?",
    a: "Issues found during a visit — graffiti, damaged fittings, a leak, maintenance needed in a common area — are reported to your nominated contact so it can be raised with the committee rather than waiting for an annual inspection.",
  },
  {
    q: "Do you clean outside business hours?",
    a: "Yes. Lobbies, corridors and shared facilities are usually serviced outside peak resident hours, and access arrangements — keys, fobs, alarm codes — are agreed with your building manager when the contract starts.",
  },
  {
    q: "Do you supply consumables?",
    a: "Soap, paper products and other amenities for common-area bathrooms can be included in the scope, or left with your existing supplier. We confirm which arrangement applies when the schedule is set up.",
  },
]

const relatedLinks = [
  {
    href: siteLinks.commercialCleaning,
    label: "Commercial Cleaning",
    body: "Scheduled cleaning for shared and commercial premises.",
  },
  {
    href: siteLinks.officeCleaning,
    label: "Office Cleaning",
    body: "Common in buildings with ground-floor offices or tenancies.",
  },
  {
    href: siteLinks.deepCleaning,
    label: "Deep Cleaning",
    body: "A one-off reset for lobbies and common areas before handover.",
  },
  {
    href: siteLinks.pestControl,
    label: "Pest Control",
    body: "Treatment for bin rooms, subfloor and shared spaces if needed.",
  },
  {
    href: "/cleaning-prices-gold-coast",
    label: "Cleaning Prices Guide",
    body: "How cleaning work is scoped and priced across the Gold Coast.",
  },
  {
    href: siteLinks.contact,
    label: "Contact",
    body: "Talk through your building with our team before the scope is written.",
  },
]

export default function StrataCleaningPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="Strata and body corporate common area cleaning on the Gold Coast"
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
              <Link href={siteLinks.services} className="transition-colors hover:text-white">
                Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#39BDE4]">Strata &amp; Body Corporate</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Common areas on a fixed schedule
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Strata &amp; Body Corporate Cleaning
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Lobbies, lifts, stairwells, corridors, bin rooms and shared facilities — cleaned on an agreed schedule, run
              through your nominated contact, with anything needing attention reported as it is found.
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
              {["Scope level by level", "One nominated contact", "Issues reported, not left"].map((badge) => (
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
                  Strata cleaning covers the common areas of a body corporate building — entrance and lobby, lifts,
                  stairwells, corridors, waste rooms, basement car parks and shared facilities such as gyms and pools. The
                  scope is written level by level, the frequency is set against how busy the building is, and the work runs
                  through your caretaker, building manager or strata agent.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                Common areas are shared by definition, which makes them the hardest part of a building to keep consistent.
                One resident's complaint about the lobby, a committee that wants to know what the levy covers, a caretaker
                juggling maintenance calls — the cleaning has to be predictable enough that nobody has to think about it.
              </p>
              <p className="text-base leading-8 text-slate-600">
                That starts with a written scope. We walk the building with your nominated contact and list every area in
                scope — entrance, lifts, stairs, corridors, bins, basement, shared facilities — then set a frequency that
                matches how the building is actually used rather than a generic package. A walk-up with four units and a
                tower with a gym do not need the same schedule, and pretending they do is how disputes start.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Reporting is the other half. Graffiti in the stairwell, a leaking tap in the bin room, a damaged mat at the
                entrance — problems found during a visit go to your nominated contact so they can be raised with the
                committee, instead of sitting there until the next annual inspection.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">How a contract starts</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>Walk the common areas and write the scope level by level.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Set the frequency against traffic and shared facilities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>Agree access, then run the checklist and report issues.</span>
                  </li>
                </ol>
                <Button asChild className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Writing the scope?</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Send the building address, number of levels, shared facilities and your preferred frequency — we will come
                  back with a clear, itemised scope.
                </p>
                <Link
                  href="/cleaning-prices-gold-coast"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary"
                >
                  See how cleaning is priced
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
            <span className="eyebrow">The contract</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What a strata clean covers</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: the shared parts of the building — entrance, circulation routes, waste areas and facilities —
              cleaned on a schedule written for that building.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {strataParts.map((part) => (
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
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What the contract covers — and what it does not</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: common areas only. Private lots, repairs, landscaping and specialist treatments sit outside a
              strata cleaning contract unless separately quoted.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Included in the scope</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Entrance, lobby, glass doors and reception furniture",
                  "Lift interiors, stairwells, handrails and landings",
                  "Corridors and circulation routes on every level",
                  "Bin and waste rooms, chutes and basement car parks",
                  "Shared facilities — gym, pool, barbecue and laundry areas",
                  "Common-area bathrooms, with consumables where agreed",
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
                Send the building address, level count and shared facilities. We will write a scope the committee can read
                without a translation.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Need a scope for a building?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send the address, number of levels, shared facilities and preferred frequency — we will come back with an
                itemised scope and schedule.
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
              <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">From walk-through to every scheduled visit</h2>
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
              <h2 className="text-3xl font-black tracking-tight text-primary">Strata cleaning — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Practical answers for body corporate committees, caretakers and strata managers on the Gold Coast.
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
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Building to clean?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Send the address, levels and shared facilities, and we will write a scope and schedule the committee, caretaker
              and manager can all work from — across the Gold Coast, from Coomera to Palm Beach.
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
