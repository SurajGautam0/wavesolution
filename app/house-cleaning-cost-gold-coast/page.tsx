import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/house-cleaning-cost-gold-coast`

export const metadata: Metadata = {
  title: "House Cleaning Cost Gold Coast | Price Guide",
  description:
    "House cleaning cost on the Gold Coast: how home size, condition, frequency and extras shape a quote, what a visit includes, and how to get a figure.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "House Cleaning Cost Gold Coast | Price Guide",
    description:
      "What drives house cleaning prices on the Gold Coast, what a standard visit includes, and which extras are quoted separately.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "House cleaning cost Gold Coast price guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Cost Gold Coast | Price Guide",
    description: "What drives house cleaning prices on the Gold Coast, what is included, and how to get a quote.",
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
        { "@type": "ListItem", position: 2, name: "House Cleaning", item: `${businessInfo.baseUrl}/house-cleaning-gold-coast` },
        { "@type": "ListItem", position: 3, name: "House Cleaning Cost Gold Coast", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      headline: "House Cleaning Cost Gold Coast",
      description:
        "A quote-led guide to house cleaning costs on the Gold Coast: the factors that move the price, what a standard visit includes, and which extras are charged separately.",
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
          name: "How much does house cleaning cost on the Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            // OWNER_PRICES: insert the confirmed AUD range here when the owner supplies one — keep copy quote-led until then
            text: "House cleaning is quoted per home rather than sold at a fixed menu price, because size, condition and the extras you want all change the work. We will confirm an itemised price for your home and suburb before you book. Regular weekly or fortnightly visits are priced lower per visit than a one-off clean.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a house clean cost more?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main drivers are the size of the home, how long since the last proper clean, pets and hair, heavy build-up in the kitchen or bathrooms, and extras such as an oven detail, internal windows, fridge or balcony. Frequency matters too — a maintained fortnightly home is faster to clean than the same home tackled once a year.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in a standard house clean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting of reachable surfaces, light switches and skirting, mirroring and tidying of living areas, and full vacuuming and mopping. Deep items such as inside the oven, inside the fridge, internal windows and cupboards inside and out are normally added as extras.",
          },
        },
        {
          "@type": "Question",
          name: "Is it cheaper to book weekly or one-off?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular visits cost less per visit because the home stays maintained — there is no restoration work to catch up on. One-off cleans, including end of move and spring cleans, take longer and are quoted as a separate job.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to be home for the clean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Many clients arrange key or access-code entry and are at work. If you would like a walk-through at the end, mention it when booking and the team will time the visit around you.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get an accurate house cleaning price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Send the suburb, the number of bedrooms and bathrooms, whether the home is occupied or empty, how long since the last clean, and any extras you want. We confirm the scope and the price before the booking is locked in.",
          },
        },
      ],
    },
  ],
}

const priceDrivers = [
  {
    title: "Size of the home",
    body: "Bedrooms, bathrooms and living areas set the baseline time. A one-bedroom unit and a five-bedroom family home are never the same job.",
  },
  {
    title: "How long since the last clean",
    body: "A maintained home is quick. A home that has not had a detailed clean for months needs restoration work in the kitchen, bathrooms and floors.",
  },
  {
    title: "Frequency",
    body: "Weekly and fortnightly visits are priced per visit and stay cheaper over time. One-off cleans are quoted as their own job.",
  },
  {
    title: "Pets and occupants",
    body: "Pet hair, litter areas and heavy use add time to floors and soft surfaces. Empty homes are faster than lived-in ones.",
  },
  {
    title: "Extras you choose",
    body: "Inside the oven, inside the fridge, internal windows, cupboards inside and out, balconies and garage floors are normally added to the base visit.",
  },
  {
    title: "Coastal conditions",
    body: "Salt air and humidity on the Gold Coast mean glass, screens and wet-area seals pick up residue faster, which is worth factoring into a regular schedule.",
  },
]

const includedList = [
  "Kitchen: benches, sink, stovetop, splashbacks, cupboard fronts and external appliance faces",
  "Bathrooms: basins, baths, showers, tile surfaces, mirrors and full sanitising",
  "Living and bedrooms: dusting of reachable surfaces, light switches, skirting and handles",
  "Floors: vacuuming throughout and mopping of hard surfaces",
  "Bins emptied, surfaces tidied and general presentation reset",
]

const extraList = [
  "Inside the oven and rangehood filters",
  "Inside the fridge and pantry shelves",
  "Internal windows, tracks and sills",
  "Cupboards and wardrobes inside and out",
  "Balcony, patio or garage floor detailing",
  "Carpet steam cleaning for high-traffic areas",
]

const steps = [
  {
    step: "01",
    title: "Tell us the home",
    body: "Suburb, bedrooms, bathrooms, whether it is occupied, and how long since the last clean. Photos help if it needs more attention.",
  },
  {
    step: "02",
    title: "Confirm scope and price",
    body: "We tell you exactly what the visit covers, which extras apply, and the price before anything is booked.",
  },
  {
    step: "03",
    title: "Set the schedule",
    body: "Weekly, fortnightly, monthly or one-off — pick a rhythm that suits the household and adjust it later if life changes.",
  },
]

const faqs = [
  {
    q: "How much does house cleaning cost on the Gold Coast?",
    a: "House cleaning is quoted per home rather than sold at a fixed menu price, because size, condition and extras change the work. Ask for a written figure and we will confirm an itemised price for your home and suburb before you book. Regular visits are priced lower per visit than a one-off clean.",
  },
  {
    q: "What makes a house clean cost more?",
    a: "The size of the home, how long since the last proper clean, pets and hair, build-up in the kitchen or bathrooms, and extras such as oven, windows, fridge or balcony.",
  },
  {
    q: "What is included in a standard house clean?",
    a: "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting of reachable surfaces, light switches and skirting, and full vacuuming and mopping. Inside the oven, fridge, windows and cupboards are normally added as extras.",
  },
  {
    q: "Is it cheaper to book weekly or one-off?",
    a: "Regular visits cost less per visit because the home stays maintained. One-off cleans, including spring and end of move cleans, take longer and are quoted as a separate job.",
  },
  {
    q: "Do I need to be home for the clean?",
    a: "No. Many clients arrange key or access-code entry. If you want a walk-through at the end, mention it when booking and we will time the visit around you.",
  },
  {
    q: "How do I get an accurate price?",
    a: "Send the suburb, bedrooms and bathrooms, whether the home is occupied, how long since the last clean, and any extras. We confirm scope and price before the booking is locked in.",
  },
]

const relatedLinks = [
  {
    href: siteLinks.homeCleaning,
    label: "House Cleaning Gold Coast",
    body: "Full service page: what a visit covers, how scheduling works, and how to book.",
  },
  {
    href: "/cleaning-prices-gold-coast",
    label: "All Cleaning Prices",
    body: "The hub with a guide for every service — bond, house, pest and bundles.",
  },
  {
    href: "/blog/how-often-house-cleaning",
    label: "How Often Should You Clean?",
    body: "Weekly, fortnightly or monthly — how to choose a rhythm that fits your household.",
  },
  {
    href: siteLinks.deepCleaning,
    label: "Deep Cleaning",
    body: "The top-to-bottom reset when a standard visit is not enough.",
  },
  {
    href: "/locations/robina",
    label: "Cleaning in Robina",
    body: "Local service page for Robina homes, townhouses and apartments.",
  },
  {
    href: "/locations/southport",
    label: "Cleaning in Southport",
    body: "Local service page for Southport homes and units.",
  },
]

export default function HouseCleaningCostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero has-sticky-cta">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="House cleaning on the Gold Coast"
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
              <Link href={siteLinks.homeCleaning} className="transition-colors hover:text-white">
                House Cleaning
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#39BDE4]">Cost Guide</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              Gold Coast price guide
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              House Cleaning Cost Gold Coast
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              What moves the price of a house clean — home size, condition, how often you book, and which extras you add —
              plus what a standard visit actually covers, so you can judge a quote properly.
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
              {["Fully insured", "Police-checked", "Flexible scheduling"].map((badge) => (
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
                  House cleaning on the Gold Coast is quoted per home rather than sold from a fixed menu, because size,
                  condition, frequency and extras all change the work. We will confirm an itemised price for your home and
                  suburb before you book, and regular weekly or fortnightly visits work out cheaper per visit than a
                  one-off clean.
                </p>
              </div>

              <p className="text-base leading-8 text-slate-600">
                When people look up house cleaning costs, they are usually weighing two things: what a clean home is worth
                to them each week, and whether to start with a one-off deep visit or go straight to a regular schedule.
                Both questions come down to the same inputs — how big the home is, what condition it is in, and how much of
                the work is restoration versus maintenance.
              </p>
              <p className="text-base leading-8 text-slate-600">
                That distinction is why a fortnightly clean of a well-kept three-bedroom home costs less per visit than the
                same home cleaned once after several months. Maintenance is fast; catching up is not. If you are starting
                fresh, it is usually worth booking one detailed visit first, then settling into a schedule that keeps the
                home at that standard.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Gold Coast homes also contend with salt air and humidity. Glass, screens, and wet-area seals pick up residue
                faster here than inland, so a regular rhythm does more visible work than the same schedule would elsewhere.
                Send the suburb, bedroom and bathroom count and how long it has been since the last clean, and we will come
                back with a clear scope and price.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Get your figure</p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">1</span>
                    <span>Send the suburb, bedrooms and bathrooms.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">2</span>
                    <span>Tell us whether you want a one-off visit or a regular schedule.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-black text-secondary">3</span>
                    <span>Get the scope and price confirmed before you book.</span>
                  </li>
                </ol>
                <Button asChild className="mt-6 h-11 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Request a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Want the whole picture?</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  The cleaning prices hub has a guide for every service we offer, including bundles for end of lease work.
                </p>
                <Link
                  href="/cleaning-prices-gold-coast"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary"
                >
                  All price guides
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
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">What changes the price of a house clean</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Direct answer: size and condition set the base figure, then frequency and the extras you add adjust it. That
              is the whole formula.
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
              Direct answer: the base visit covers the everyday surfaces of the home. Detail jobs — oven, fridge, windows,
              cupboards — are added on when you want them, so you are not paying for work you do not need.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Included in a standard visit</p>
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
                Not sure where to start? Tell us the last time the oven or windows were done and we will suggest the extras
                that will make the biggest visible difference.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-primary/15 bg-[#F3F3F3] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-black tracking-tight text-primary">Want a price for your home?</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Send the suburb, size and how often you would like us in — we will come back with a clear, itemised quote,
                no obligation to book.
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
              <h2 className="text-3xl font-black tracking-tight text-primary">House cleaning cost — frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Practical answers about pricing, inclusions and scheduling for Gold Coast homes.
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
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to price your house clean?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Tell us where you are, how big the home is and how often you would like us in. We will confirm the scope and
              the price before anything is booked — across the Gold Coast, from Coomera to Palm Beach.
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
