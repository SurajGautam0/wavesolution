import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/medical-cleaning-gold-coast`

export const metadata: Metadata = {
  title: "Medical & Dental Practice Cleaning | Gold Coast",
  description:
    "Medical and dental practice cleaning on the Gold Coast: treatment rooms, reception, waiting areas and staff spaces, scheduled around your appointment book.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Medical & Dental Practice Cleaning | Gold Coast",
    description:
      "Cleaning for medical and dental practices — treatment rooms, reception, waiting areas and staff spaces, scheduled outside appointment hours.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Medical and dental practice cleaning on the Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical & Dental Practice Cleaning | Gold Coast",
    description: "Treatment room, reception and waiting area cleaning for medical and dental practices.",
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
        { "@type": "ListItem", position: 3, name: "Medical & Dental Cleaning", item: pageUrl },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Medical and dental practice cleaning",
      provider: { "@type": "Organization", name: businessInfo.businessName, url: businessInfo.baseUrl },
      areaServed: { "@type": "Place", name: "Gold Coast, Queensland" },
      url: pageUrl,
      description:
        "Cleaning for medical and dental practices on the Gold Coast, covering treatment rooms, reception, waiting areas, bathrooms and staff areas, scheduled around appointment hours and worked to the practice's own infection-control requirements.",
      inLanguage: "en-AU",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you clean medical and dental practices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We clean medical and dental practices across the Gold Coast — treatment rooms, reception, waiting areas, bathrooms, staff rooms and corridors — to a checklist agreed with the practice manager before the service starts.",
          },
        },
        {
          "@type": "Question",
          name: "Do you clean around appointments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Visits are scheduled outside appointment hours — early morning, evenings or weekends — so the clinical day is not interrupted, and access is arranged with your nominated contact.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work to our infection-control requirements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The checklist is built around your practice's own infection-control requirements and the protocol your practice manager sets out, including surface types, high-touch points and the order rooms are cleaned in.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle clinical waste?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — clinical and biohazard waste is handled by your contracted waste provider. We manage general waste and recycling in reception, staff and public areas as part of the clean.",
          },
        },
        {
          "@type": "Question",
          name: "Can the same team come every time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Consistency matters in a practice setting — the same team is kept on the site so the checklist is applied the same way every visit and your staff know who is in the building.",
          },
        },
        {
          "@type": "Question",
          name: "How do we get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Send the practice address, number of treatment rooms, preferred hours and any requirements your practice manager needs followed. We confirm scope and price, then schedule the first visit.",
          },
        },
      ],
    },
  ],
}

const practiceParts = [
  {
    title: "Treatment rooms",
    body: "Surfaces, equipment exteriors, cabinetry, floors and high-touch points cleaned in the order your protocol sets out, between patients where scheduled.",
    tag: "Clinical areas",
  },
  {
    title: "Reception & waiting",
    body: "The patient-facing side: front desk, seating, magazines and surfaces, entry glass, floors and common-area bathrooms.",
    tag: "Patient-facing",
  },
  {
    title: "Staff & back of house",
    body: "Staff rooms, kitchens, corridors, storage and general waste kept to the same standard as the clinical side.",
    tag: "Team areas",
  },
]

const whoItsFor = [
  {
    title: "General and specialist practices",
    body: "Medical suites, specialist rooms and multi-practitioner buildings where several rooms need the same treatment between clinics.",
  },
  {
    title: "Dental and allied health",
    body: "Dental, physiotherapy, podiatry and allied health rooms where surfaces and high-touch points are cleaned to the practice's own protocol.",
  },
  {
    title: "Practice managers",
    body: "One contact, a written checklist and a fixed schedule, so cleaning is handled without another thing to chase between clinics.",
  },
  {
    title: "Multi-site providers",
    body: "Several rooms or practices run from one schedule with the same checklist applied across each site.",
  },
]

const notIncluded = [
  "Clinical or biohazard waste disposal — handled by your contracted waste provider",
  "Sterilisation or any clinical reprocessing of instruments",
  "Laundry of clinical linens unless arranged as part of the service",
  "Repairs, maintenance or pest treatment unless separately quoted",
  "Areas outside the agreed checklist — anything extra is scoped before it is done",
]

const steps = [
  {
    step: "01",
    title: "Agree the protocol",
    body: "We walk the practice with your manager, note surface types and room order, and write a checklist around your requirements.",
  },
  {
    step: "02",
    title: "Set the hours",
    body: "Visits are scheduled around your appointment book — early, late or weekend — with access arranged for your nominated contact.",
  },
  {
    step: "03",
    title: "Clean and report",
    body: "The same team runs the checklist every visit and reports anything that needs attention in the practice, not in a review.",
  },
]

const faqs = [
  {
    q: "Do you clean medical and dental practices?",
    a: "Yes. We clean medical and dental practices across the Gold Coast — treatment rooms, reception, waiting areas, bathrooms, staff rooms and corridors — to a checklist agreed with the practice manager before the service starts.",
  },
  {
    q: "Do you clean around appointments?",
    a: "Yes. Visits are scheduled outside appointment hours — early morning, evenings or weekends — so the clinical day is not interrupted, and access is arranged with your nominated contact.",
  },
  {
    q: "Do you work to our infection-control requirements?",
    a: "The checklist is built around your practice's own infection-control requirements and the protocol your practice manager sets out, including surface types, high-touch points and the order rooms are cleaned in.",
  },
  {
    q: "Do you handle clinical waste?",
    a: "No — clinical and biohazard waste is handled by your contracted waste provider. We manage general waste and recycling in reception, staff and public areas as part of the clean.",
  },
  {
    q: "Can the same team come every time?",
    a: "Yes. Consistency matters in a practice setting — the same team is kept on the site so the checklist is applied the same way every visit and your staff know who is in the building.",
  },
  {
    q: "How do we get started?",
    a: "Send the practice address, number of treatment rooms, preferred hours and any requirements your practice manager needs followed. We confirm scope and price, then schedule the first visit.",
  },
]

const relatedLinks = [
  {
    href: siteLinks.officeCleaning,
    label: "Office Cleaning",
    body: "Reception, corridors and staff areas in the same visit.",
  },
  {
    href: siteLinks.commercialCleaning,
    label: "Commercial Cleaning",
    body: "Scheduled cleaning for shared and commercial premises.",
  },
  {
    href: siteLinks.pestControl,
    label: "Pest Control",
    body: "Treatment outside practice hours if activity appears.",
  },
  {
    href: "/deep-cleaning-gold-coast",
    label: "Deep Cleaning",
    body: "A one-off reset for a fit-out, refurbishment or seasonal clean.",
  },
  {
    href: "/cleaning-prices-gold-coast",
    label: "Cleaning Prices Guide",
    body: "How cleaning work is scoped and priced across the Gold Coast.",
  },
  {
    href: siteLinks.contact,
    label: "Contact",
    body: "Talk through your practice requirements with our team.",
  },
]

export default function MedicalCleaningPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="Medical and dental practice cleaning on the Gold Coast"
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
              <span className="text-[#39BDE4]">Medical &amp; Dental</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Scheduled around your appointment book
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Medical &amp; Dental Practice Cleaning
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Treatment rooms, reception, waiting areas and staff spaces cleaned to your practice's own protocol — outside
              appointment hours, by the same team every visit.
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
              {["Checklist built for your protocol", "Same team every visit", "Outside appointment hours"].map((badge) => (
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
                  Yes — medical and dental practices are cleaned outside appointment hours, against a checklist built around
                  your practice's own infection-control requirements. That covers treatment rooms, reception, waiting areas,
                  bathrooms and staff spaces, with the same team kept on the site so the standard stays consistent between
                  visits.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                A practice has two sides that both need attention. The clinical side — treatment rooms, surfaces,
                high-touch points — is held to the protocol your practice manager sets out. The patient-facing side —
                reception, waiting area, entry, bathrooms — is what people judge the practice on before they sit down.
              </p>
              <p className="text-base leading-8 text-slate-600">
                The timing matters as much as the scope. Cleaning cannot run through a clinic day, so visits are scheduled
                early, late or on weekends depending on your hours, with access arranged for a nominated contact rather than
                someone waiting to let a cleaner in. Rooms are done in the order your protocol requires, not the order that
                happens to be quickest.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Consistency is the part practices notice most. The same team every visit means your staff know who is in the
                building, the checklist is applied the same way, and nobody has to re-explain the requirements every month.
                Clinical waste is left to your contracted waste provider — we manage general waste and recycling as part of
                the clean.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">How a visit runs</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>Checklist agreed with your practice manager.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Visit scheduled outside appointment hours.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>Rooms cleaned in protocol order, then reported.</span>
                  </li>
                </ol>
                <Button asChild className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Clinical waste?</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Clinical and biohazard waste stays with your contracted waste provider. We handle general waste and
                  recycling in reception, staff and public areas.
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
            <span className="eyebrow">The service</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What a practice clean covers</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: clinical rooms to your protocol, the patient-facing areas your front desk relies on, and the
              staff spaces behind them — all in one scheduled visit.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {practiceParts.map((part) => (
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
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What the service covers — and what it does not</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: general cleaning of clinical, patient-facing and staff areas. Clinical waste, instrument
              sterilisation and repairs stay with your existing providers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Included every visit</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Treatment room surfaces, cabinetry and equipment exteriors",
                  "High-touch points — handles, switches, taps, armrests",
                  "Reception desk, waiting area, seating and entry glass",
                  "Common-area and staff bathrooms, with consumables where agreed",
                  "Staff rooms, kitchens, corridors and storage",
                  "Floors throughout, and general waste and recycling",
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
                Send the practice address, number of treatment rooms and your preferred hours. We will confirm scope and
                price before anything is scheduled.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Ready to book a first visit?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send the practice address, treatment room count, preferred hours and your manager's requirements — we will
                come back with a written scope.
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
              <h2 className="text-3xl font-black tracking-tight text-primary">Medical &amp; dental cleaning — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Practical answers for practice managers and clinic owners on the Gold Coast.
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
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Practice to keep clean?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Send the address, treatment room count and your preferred hours, and we will write a scope around your
              practice's own requirements — across the Gold Coast, from Coomera to Palm Beach.
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
