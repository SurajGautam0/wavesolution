import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/airbnb-cleaning-gold-coast`

export const metadata: Metadata = {
  title: "Airbnb & Short-Stay Turnover Cleaning | Gold Coast",
  description:
    "Airbnb and short-stay turnover cleaning on the Gold Coast: back-to-back changeovers, a fixed checklist, restocking and presentation ready for the next guest.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Airbnb & Short-Stay Turnover Cleaning | Gold Coast",
    description:
      "Back-to-back short-stay changeovers cleaned on a fixed checklist, with restocking and presentation ready for the next guest arrival.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Short-stay turnover cleaning on the Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb & Short-Stay Turnover Cleaning | Gold Coast",
    description: "Short-stay turnover cleaning with back-to-back changeovers and a fixed checklist.",
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
        { "@type": "ListItem", position: 3, name: "Short-Stay Turnover Cleaning", item: pageUrl },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Airbnb and short-stay turnover cleaning",
      provider: { "@type": "Organization", name: businessInfo.businessName, url: businessInfo.baseUrl },
      areaServed: { "@type": "Place", name: "Gold Coast, Queensland" },
      url: pageUrl,
      description:
        "Turnover cleaning for Airbnb and short-stay accommodation on the Gold Coast, covering a fixed room-by-room checklist, restocking, presentation and back-to-back changeovers.",
      inLanguage: "en-AU",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly can you turn a short-stay property around?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Changeovers are scheduled against the departure and arrival times you give us. Back-to-back days are planned when the booking is made rather than fitted in afterwards, and if the gap is tight we tell you straight away what is achievable.",
          },
        },
        {
          "@type": "Question",
          name: "Do you restock consumables?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We work from a consumables list agreed when the service starts — toilet paper, soap, coffee, tea, bins and anything else your listing promises — check the levels each visit and tell you what needs topping up before the next guest arrives.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle linen and beds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beds are stripped and remade with the linen you leave on site. If linen needs laundering or replacing between stays, tell us how you run the property and we will work it into the turnover checklist.",
          },
        },
        {
          "@type": "Question",
          name: "Can you clean while guests are still in the property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — mid-stay cleans can be scheduled during a longer booking so the property is maintained rather than waiting for departure. We agree access and timing with you first.",
          },
        },
        {
          "@type": "Question",
          name: "Do you look after multiple properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Owners and property managers running several listings get one schedule and one point of contact, with the same checklist used across every property so standards do not drift between them.",
          },
        },
        {
          "@type": "Question",
          name: "Do you report maintenance issues?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During the turnover we note anything that looks wrong — a broken fitting, a stain that needs treatment, something a guest has damaged — and send it through so it can be fixed before the next arrival rather than being discovered mid-stay.",
          },
        },
      ],
    },
  ],
}

const turnoverParts = [
  {
    title: "Full turnover",
    body: "Departure to arrival: clean throughout, beds remade, floors done, bathrooms reset and the property checked against the listing promise.",
    tag: "Between stays",
  },
  {
    title: "Mid-stay clean",
    body: "A maintenance visit during a longer booking so the property stays presented instead of waiting until the guests leave.",
    tag: "During stays",
  },
  {
    title: "Restock and reset",
    body: "Consumables checked and topped up against your list, bins emptied, and anything running low flagged before the next arrival.",
    tag: "Every visit",
  },
]

const whoItsFor = [
  {
    title: "Back-to-back bookings",
    body: "Same-day departures and arrivals are the pressure point in short stays. The window is planned when the booking is made rather than left to the morning.",
  },
  {
    title: "Owners who live elsewhere",
    body: "If you are not local, the turnover is your eyes on the property. Issues are reported as they appear instead of surfacing in a review.",
  },
  {
    title: "Property managers",
    body: "Several listings run from one schedule with one checklist, so the standard does not change depending on which team member turns up.",
  },
  {
    title: "Listings that are judged on photos",
    body: "Presentation has to match the listing photos. Kitchens, bathrooms and beds are reset so the property looks the way it was advertised.",
  },
]

const notIncluded = [
  "Linen laundering unless it has been arranged as part of the service",
  "Repairs, maintenance or replacement of damaged items",
  "Pool, spa or garden care",
  "Resident rubbish that is not part of the property's turnover",
  "Anything your listing promises but the scope does not include — tell us up front so it can be quoted",
]

const steps = [
  {
    step: "01",
    title: "Set up the property",
    body: "Address, access method, consumables list and your turnover rules are agreed once, then applied to every booking.",
  },
  {
    step: "02",
    title: "Share your calendar",
    body: "Departure and arrival times drive the schedule. Back-to-back days are planned in advance rather than fitted around them.",
  },
  {
    step: "03",
    title: "Clean, reset, report",
    body: "The checklist runs, the property is presented, and anything that needs attention is sent through before the next guest arrives.",
  },
]

const faqs = [
  {
    q: "How quickly can you turn a short-stay property around?",
    a: "Changeovers are scheduled against the departure and arrival times you give us. Back-to-back days are planned when the booking is made, and if the gap is tight we tell you straight away what is achievable.",
  },
  {
    q: "Do you restock consumables?",
    a: "Yes. We work from a consumables list agreed when the service starts — toilet paper, soap, coffee, tea and anything else your listing promises — check levels each visit and tell you what needs topping up before the next arrival.",
  },
  {
    q: "Do you handle linen and beds?",
    a: "Beds are stripped and remade with the linen you leave on site. If linen needs laundering or replacing between stays, tell us how you run the property and we will work it into the turnover checklist.",
  },
  {
    q: "Can you clean mid-stay?",
    a: "Yes. Longer bookings can include a maintenance visit so the property stays presented rather than waiting until departure. We agree access and timing with you first.",
  },
  {
    q: "Do you look after multiple properties?",
    a: "Yes. Owners and property managers running several listings get one schedule and one point of contact, with the same checklist across every property so standards do not drift.",
  },
  {
    q: "Do you report maintenance issues?",
    a: "Yes. Anything that looks wrong during the turnover — a broken fitting, a stain needing treatment, guest damage — is reported before the next arrival rather than surfacing in a review.",
  },
]

const relatedLinks = [
  {
    href: siteLinks.homeCleaning,
    label: "House Cleaning",
    body: "The residential clean the turnover checklist is built from.",
  },
  {
    href: "/apartment-cleaning-gold-coast",
    label: "Apartment Cleaning",
    body: "For apartments and units used as short stays.",
  },
  {
    href: siteLinks.pestControl,
    label: "Pest Control",
    body: "Treatment between stays if activity turns up in a listing.",
  },
  {
    href: "/deep-cleaning-gold-coast",
    label: "Deep Cleaning",
    body: "A full reset when a property needs more than a turnover.",
  },
  {
    href: "/cleaning-prices-gold-coast",
    label: "Cleaning Prices Guide",
    body: "How cleaning work is priced across the Gold Coast.",
  },
  {
    href: siteLinks.officeCleaning,
    label: "Office Cleaning",
    body: "Scheduled cleaning for the commercial side of a portfolio.",
  },
]

export default function AirbnbCleaningPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="Short-stay and Airbnb turnover cleaning on the Gold Coast"
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
              <span className="text-[#39BDE4]">Short-Stay Turnover</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Airbnb &amp; short-stay changeovers
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Airbnb &amp; Short-Stay Turnover Cleaning
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Between a 10am departure and a 3pm arrival there is one window. We clean short-stay properties across the
              Gold Coast against a fixed checklist — presented, restocked and ready for the next guest.
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
              {["Back-to-back changeovers", "Fixed checklist every stay", "Issues reported before arrival"].map((badge) => (
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
                  Yes — short-stay turnover cleaning is scheduled around your departure and arrival times, run against a
                  fixed room-by-room checklist, and includes restocking against the list your listing promises. Back-to-back
                  changeovers are planned when the booking is made, and anything that needs attention is reported before the
                  next guest walks in.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                Short-stay cleaning is different from regular house cleaning because of the clock. A guest leaves in the
                morning, the next one arrives that afternoon, and the property has to look exactly like the listing photos
                in between. The work has to be repeatable — the same rooms, the same order, the same finish — because guests
                notice the one thing that was skipped.
              </p>
              <p className="text-base leading-8 text-slate-600">
                That is why the checklist is fixed rather than improvised. Kitchens are cleared, cleaned and reset. Bathrooms
                are scrubbed and restocked. Beds are stripped and remade. Floors are done throughout, bins are emptied, and
                the property is walked through against the listing's promises — the amenities, the consumables, the details
                guests write reviews about.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Owners and managers who run several properties get the biggest benefit: one schedule, one checklist and one
                point of contact, so the standard does not change depending on which changeover it is. Anything unusual — a
                broken fitting, a stain, something a guest has damaged — is reported as it is found rather than waiting for
                a review to mention it.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">The turnover order</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>Check-out inspection — note anything the guest left behind or damaged.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Clean and reset every room against the fixed checklist.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>Restock, remake beds, present — then report anything that needs fixing.</span>
                  </li>
                </ol>
                <Button asChild className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Running more than one?</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Owners and managers with several listings work from one schedule so every property is held to the same
                  standard and nothing slips between changeovers.
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
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What a turnover covers</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: the full property reset between guests, restocking against your list, and a report on anything
              that needs attention before the next arrival.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {turnoverParts.map((part) => (
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
              Direct answer: cleaning, presentation, beds and restocking are included. Linen laundering, repairs and
              property services such as pools or gardens sit outside the turnover.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Included every turnover</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Kitchen cleared, cleaned and reset for the next guest",
                  "Bathrooms scrubbed, towels replaced and amenities restocked",
                  "Beds stripped and remade, living areas tidied and dusted",
                  "Floors vacuumed and mopped throughout, including entry and balconies where used",
                  "Bins emptied and consumables checked against your list",
                  "A walk-through of the property with anything unusual reported to you",
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
                Tell us what your listing promises — linen, consumables, the details guests expect — and we will build the
                checklist around it so nothing is assumed.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Have a changeover window to fill?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send the address, your usual departure and arrival times and how many properties you run — we will confirm
                what is possible around your calendar.
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
              <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">From setup to every changeover</h2>
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
              <h2 className="text-3xl font-black tracking-tight text-primary">Short-stay turnover — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Practical answers for Gold Coast hosts and property managers running Airbnb and short-stay listings.
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
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">A changeover coming up?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Send the property address, your departure and arrival times and what your listing promises — we will confirm
              the turnover schedule and scope across the Gold Coast, from Coomera to Palm Beach.
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
