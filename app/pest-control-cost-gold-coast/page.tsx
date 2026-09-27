import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/pest-control-cost-gold-coast`

export const metadata: Metadata = {
  title: "Pest Control Cost Gold Coast | Treatment Price Guide",
  description:
    "Pest control cost on the Gold Coast: what sets the price — property size, pest type, internal and external scope, one-off or ongoing treatment.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Pest Control Cost Gold Coast | Treatment Price Guide",
    description:
      "What drives pest treatment prices on the Gold Coast, what a treatment covers, and how to get an accurate quote for your property.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Pest control cost Gold Coast price guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Cost Gold Coast | Treatment Price Guide",
    description: "What drives pest treatment prices on the Gold Coast, what is covered, and how to get a quote.",
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
        { "@type": "ListItem", position: 2, name: "Pest Control", item: `${businessInfo.baseUrl}/pest-control-gold-coast` },
        { "@type": "ListItem", position: 3, name: "Pest Control Cost Gold Coast", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      headline: "Pest Control Cost Gold Coast",
      description:
        "A quote-led guide to pest control costs on the Gold Coast: property size, pest type, treatment scope, and the difference between a one-off treatment and an ongoing program.",
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
          name: "How much does pest control cost on the Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            // OWNER_PRICES: insert the confirmed AUD range here when the owner supplies one — keep copy quote-led until then
            text: "Pest treatment is quoted for the individual property rather than sold at a fixed menu price, because the pest, the extent of the activity and the treatment scope change the job. We will confirm an itemised price for your property before the treatment is booked.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a pest treatment cost more?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main drivers are the size of the property, how many areas need treatment, which pest is involved, whether the job is internal only or internal and external, and whether ongoing monitoring or baiting is required rather than a single treatment.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in a standard pest treatment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard residential treatment covers internal and external areas of the property for common pests such as cockroaches, spiders, ants and silverfish, using registered products with clear advice on preparation, re-entry times and pet safety before the work begins.",
          },
        },
        {
          "@type": "Question",
          name: "Is pest control required at the end of a lease in Queensland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the tenancy agreement rather than a blanket legal rule. Some leases, and some pet clauses, ask for a treatment at the end of the tenancy. Check your lease and entry condition report, and we can arrange the treatment and receipt alongside the clean.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a Gold Coast property be treated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Warm, humid conditions keep pest activity going year-round, so many local properties treat periodically rather than waiting for an infestation. How often depends on the property, its surroundings such as bushland or waterways, and whether there are pets or shared walls in the building.",
          },
        },
        {
          "@type": "Question",
          name: "Are the products safe around pets and children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Registered products are used for the treatment type, and preparation, re-entry times and any precautions are explained before the job starts. Tell us about pets, sensitivities or particular household requirements when booking so the treatment can be planned around them.",
          },
        },
      ],
    },
  ],
}

const priceDrivers = [
  {
    title: "Size of the property",
    body: "House, unit, townhouse or commercial site — the areas that need treatment set the baseline for the job.",
  },
  {
    title: "Which pest is involved",
    body: "Cockroaches, spiders, ants, silverfish, fleas and rodents are treated differently, and the right approach depends on what is actually present.",
  },
  {
    title: "Internal and external scope",
    body: "An internal-only treatment is a smaller job than a full internal and external barrier treatment around the property.",
  },
  {
    title: "Extent of the activity",
    body: "A light presence and a well-established problem are not the same job. Longer-standing activity usually needs more thorough coverage.",
  },
  {
    title: "One-off or ongoing",
    body: "A single treatment is straightforward. Monitoring, baiting or a scheduled program over time is scoped differently and quoted as such.",
  },
  {
    title: "Access and building type",
    body: "Shared walls, body corporate rules, commercial premises and after-hours access all affect how the work is scheduled.",
  },
]

const includedList = [
  "Assessment of the property and the activity before a treatment approach is recommended",
  "Internal treatment for common pests such as cockroaches, spiders, ants and silverfish",
  "External treatment and barrier work where the job calls for it",
  "Rodent baiting and monitoring where required",
  "Flea treatment for homes vacated by pets or with active infestations",
  "Preparation, re-entry times and pet safety guidance before the work begins",
]

const extraList = [
  "Ongoing monitoring or scheduled treatment programs",
  "Treatment documentation for audit or insurance purposes where required",
  "Coordination with an end of lease clean so both jobs run in one booking",
  "Commercial scheduling outside operating hours",
]

const steps = [
  {
    step: "01",
    title: "Tell us the property and the pest",
    body: "Suburb, property type, what you are seeing and where. Photos help, and so does knowing whether pets are on site.",
  },
  {
    step: "02",
    title: "Get the scope and the price",
    body: "We confirm what the treatment covers, how to prepare, and the price before the job is booked.",
  },
  {
    step: "03",
    title: "Treatment and follow-up advice",
    body: "The treatment is carried out, with clear guidance on re-entry times, ventilation and what to expect afterwards.",
  },
]

const faqs = [
  {
    q: "How much does pest control cost on the Gold Coast?",
    a: "Pest treatment is quoted for the individual property, because the pest, the extent of the activity and the treatment scope change the job. Ask for a written figure and we will confirm an itemised price before the treatment is booked.",
  },
  {
    q: "What makes a treatment cost more?",
    a: "Property size, how many areas need treatment, which pest is involved, internal only versus internal and external, and whether ongoing monitoring or baiting is needed rather than a single treatment.",
  },
  {
    q: "What is included in a standard treatment?",
    a: "Internal and external areas of the property for common pests such as cockroaches, spiders, ants and silverfish, using registered products, with preparation, re-entry times and pet safety advice given before the work starts.",
  },
  {
    q: "Is pest control required at the end of a lease?",
    a: "It depends on the tenancy agreement rather than a blanket rule. Some leases, and some pet clauses, ask for treatment at the end of the tenancy. Check your lease and entry condition report — we can arrange treatment and the receipt alongside the clean.",
  },
  {
    q: "How often should a Gold Coast property be treated?",
    a: "Warm, humid conditions keep activity going year-round, so many local properties treat periodically rather than waiting for an infestation. How often depends on the property, its surroundings and whether pets or shared walls are involved.",
  },
  {
    q: "Are the products safe around pets and children?",
    a: "Registered products are used for the treatment type, and preparation, re-entry times and precautions are explained before the job. Tell us about pets or sensitivities when booking so the treatment can be planned around them.",
  },
]

const relatedLinks = [
  {
    href: siteLinks.pestControl,
    label: "Pest Control Gold Coast",
    body: "Full service page: pests covered, treatment approach, and how to book.",
  },
  {
    href: "/cleaning-prices-gold-coast",
    label: "All Cleaning Prices",
    body: "The hub with a guide for every service — bond, house, pest and bundles.",
  },
  {
    href: "/blog/pest-control-guide",
    label: "Gold Coast Pest Prevention Guide",
    body: "Prevention and treatment advice for cockroaches, spiders, fleas and coastal pests.",
  },
  {
    href: "/end-of-lease-pest-control-gold-coast",
    label: "End of Lease Pest Control",
    body: "Treatment for tenants whose lease or agent requires it before the final inspection.",
  },
  {
    href: "/bond-pest-carpet-end-of-lease",
    label: "Bond + Pest + Carpet Bundle",
    body: "Cleaning, carpet and treatment in one booking, in the right order.",
  },
  {
    href: "/locations/helensvale",
    label: "Services in Helensvale",
    body: "Local service page for Helensvale homes and businesses.",
  },
]

export default function PestControlCostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="Pest treatment on the Gold Coast"
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
              <Link href={siteLinks.pestControl} className="transition-colors hover:text-white">
                Pest Control
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#39BDE4]">Cost Guide</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Gold Coast price guide
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Pest Control Cost Gold Coast
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              What sets the price of a treatment — property size, which pest, how much of the site is treated and whether
              you need one visit or an ongoing program — plus what a standard treatment actually covers.
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
              {["Registered products", "Pet safety guidance", "Homes and businesses"].map((badge) => (
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
                  Pest control on the Gold Coast is quoted per property, not sold from a fixed menu, because the pest, the
                  extent of the activity and how much of the site needs treating all change the job. We will confirm an
                  itemised price for your property before the treatment is booked.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                The Gold Coast climate keeps pest activity going all year. Warmth and humidity suit cockroaches, spiders,
                ants and silverfish, while properties near creeks, bushland corridors or older building stock often see
                more pressure than homes on open suburban streets. Units and townhouses with shared wall cavities are a
                different proposition again, because pests move between dwellings.
              </p>
              <p className="text-base leading-8 text-slate-600">
                That is why the quote starts with identification rather than a product. Treating the wrong thing is money
                wasted, so the first step is working out what is actually present and where it is coming from. From there,
                the price is a function of how much area needs covering, whether the job is internal only or internal and
                external, and whether a single visit will do or whether monitoring and baiting make more sense.
              </p>
              <p className="text-base leading-8 text-slate-600">
                If your lease or property manager requires treatment at the end of a tenancy, tell us when booking and we
                can coordinate the treatment with the clean so the receipt is ready before your final inspection. Send the
                suburb, the property type and what you are seeing, and we will come back with scope and price.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Get your figure</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>Send the suburb, property type and what you are seeing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Tell us if pets are on site and whether it is one-off or ongoing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>Get the scope, preparation steps and price confirmed.</span>
                  </li>
                </ol>
                <Button asChild className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Ending a lease?</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  If your agreement asks for treatment, the bundle page shows how cleaning, carpet and pest work are
                  sequenced in one booking.
                </p>
                <Link
                  href="/bond-pest-carpet-end-of-lease"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary"
                >
                  See the bundle
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
            <span className="eyebrow">Price drivers</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What changes the price of a treatment</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: property size and treatment scope set the figure, then the pest itself and whether the job is
              one-off or ongoing adjust it.
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
              Direct answer: a standard treatment covers the common internal and external areas of the property with clear
              preparation advice. Programs, documentation and commercial scheduling are scoped separately.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Included in a standard treatment</p>
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
                Not sure what you are dealing with? Send a photo and the suburb — we will tell you what the likely approach
                is before you commit to anything.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Want a price for your treatment?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send the suburb, property type and what you are seeing — we will confirm scope, preparation and price
                before anything is booked.
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
              <h2 className="text-3xl font-black tracking-tight text-primary">Pest control cost — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Practical answers about pricing, treatment scope and safety for Gold Coast homes and businesses.
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
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to price your treatment?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Tell us where the property is, what you are seeing and whether pets are on site. We will confirm the scope,
              the preparation and the price before anything is booked — across the Gold Coast, from Coomera to Palm Beach.
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
