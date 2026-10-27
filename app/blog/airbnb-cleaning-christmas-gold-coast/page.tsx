import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  BedDouble,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthorBio } from "@/components/author-bio"

export const metadata: Metadata = {
  title: "Airbnb Cleaning for the Christmas Peak | Gold Coast Hosts",
  description:
    "Peak-season turnover checklist for Gold Coast short-stay hosts: back-to-back cleans, linen maths and the review-critical details that get missed in December.",
  keywords: [
    "Airbnb cleaning Gold Coast",
    "holiday rental cleaning Gold Coast",
    "Airbnb turnover checklist",
    "short stay cleaning Christmas",
    "holiday let cleaning Gold Coast",
    "Airbnb cleaning between guests",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/blog/airbnb-cleaning-christmas-gold-coast",
  },
  openGraph: {
    title: "Airbnb Cleaning for the Christmas Peak | Gold Coast Hosts",
    description:
      "How Gold Coast short-stay hosts handle December and January back-to-back turnovers, from linen maths to the details that decide your review score.",
    url: "https://www.wavesolution.com.au/blog/airbnb-cleaning-christmas-gold-coast",
    type: "article",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Airbnb Cleaning at the Christmas Peak",
          item: "https://www.wavesolution.com.au/blog/airbnb-cleaning-christmas-gold-coast",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Airbnb Cleaning for the Christmas Peak: Gold Coast Turnover Guide",
      description:
        "A peak-season turnover guide for Gold Coast short-stay hosts covering back-to-back cleaning, linen planning, restocking and the details guests mark down.",
      author: {
        "@type": "Organization",
        name: "Wave Solution Cleaning & Pest Control",
        url: "https://www.wavesolution.com.au",
      },
      publisher: {
        "@type": "Organization",
        name: "Wave Solution Cleaning Gold Coast",
        url: "https://www.wavesolution.com.au",
        logo: {
          "@type": "ImageObject",
          url: "https://www.wavesolution.com.au/logo.png",
        },
      },
      datePublished: "2026-10-27",
      dateModified: "2026-10-27",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/airbnb-cleaning-christmas-gold-coast",
      mainEntityOfPage: "https://www.wavesolution.com.au/blog/airbnb-cleaning-christmas-gold-coast",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When is peak season for Gold Coast short-stay rentals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Average daily rates on the Gold Coast consistently peak across two windows: the June to July winter school holidays, and December to January for Christmas, New Year and the summer school holidays. The December to January window is the longer and busier of the two for most coastal properties.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an Airbnb turnover clean take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a one or two bedroom apartment, a full changeover of roughly two to three hours is typical once linen, restocking and a proper bathroom clean are included. Larger homes, properties with outdoor areas, or back-to-back bookings on the same day take longer. The cleaning itself is rarely the constraint in peak season, scheduling and linen supply usually are.",
          },
        },
        {
          "@type": "Question",
          name: "What gets marked down most often in short-stay reviews?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The recurring complaints are not usually about deep dirt. They are hair in bathrooms and on bedding, streaky glass and mirrors, a bin that was not emptied, low consumables such as toilet paper or coffee, and lingering smells from cooking or previous guests. These are all quick to fix and easy to miss under time pressure.",
          },
        },
        {
          "@type": "Question",
          name: "Do short-stay properties need pest control in summer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Warmer weather increases activity from cockroaches, ants, spiders and mosquitoes, and guests report visible pests in reviews. A routine treatment ahead of the December peak is more practical than reacting mid-stay, when a treatment visit disrupts a booking.",
          },
        },
        {
          "@type": "Question",
          name: "Should carpets be cleaned before the Christmas peak?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally yes, and before the calendar fills rather than during it. Hot-water extraction needs drying time, which is difficult to fit between same-day checkouts and check-ins. Booking carpet work in November leaves the property dry and ready before the peak arrives.",
          },
        },
      ],
    },
  ],
}

const turnoverZones = [
  {
    zone: "Bathroom",
    items: [
      "Descale shower screen and remove any hair from drains and corners",
      "Toilet including under the rim and the base",
      "Basin, tapware and mirror streak-free",
      "Replace towels with a full matched set per guest",
      "Restock toilet paper, soap, shampoo and conditioner",
    ],
  },
  {
    zone: "Bedrooms",
    items: [
      "Strip and remake all beds with fresh linen, including protectors if soiled",
      "Check under beds and in drawers for left items",
      "Dust bedside tables, lamps and headboards",
      "Wipe mirrors and check wardrobes for hangers and cleanliness",
    ],
  },
  {
    zone: "Kitchen",
    items: [
      "Empty fridge of previous guests' food, wipe shelves and seals",
      "Clean oven and stovetop of grease splatter",
      "Run and empty the dishwasher, clean the filter",
      "Restock tea, coffee, sugar, dishwashing liquid and bin liners",
      "Wipe cupboard fronts and handles, which are the most-touched surfaces",
    ],
  },
  {
    zone: "Living and outdoor",
    items: [
      "Vacuum and mop all floors, including under furniture edges",
      "Wipe TV remotes, light switches, door handles and air-con controllers",
      "Clear balcony of sand and sweep the outdoor setting",
      "Empty bins throughout and replace liners",
      "Check for and remove sand, sunscreen marks and food crumbs in soft furnishings",
    ],
  },
]

export default function AirbnbChristmasPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Holiday Rental Turnover</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">
              Short-Stay Cleaning — Gold Coast
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Airbnb Cleaning for the Christmas Peak: A Gold Coast Turnover Guide
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              December and January are when Gold Coast short-stay rates run highest and when there is least time between guests. Here is how to build a turnover that survives back-to-back bookings without losing reviews.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75">
              <span>Updated October 2026</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span className="font-semibold text-white">By the Wave Solution team</span>
              <span>•</span>
              <span className="text-secondary font-bold">Gold Coast Local Expertise</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Direct answer
                </h2>
                <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50 p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm leading-7 text-sky-800">
                        In peak season the cleaning is rarely the hard part — the scheduling is. A same-day changeover needs the property reset in the gap between checkout and check-in, with linen and consumables ready before you start. Build the turnover around one rule: nothing should depend on a purchase or a delivery that day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Why the Christmas peak is different
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Gold Coast short-stay demand is seasonal in a predictable way. According to{" "}
                  <a
                    href="https://www.hometime.io/blog/market-report-short-term-rentals-gold-coast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-secondary underline underline-offset-4 hover:text-primary"
                  >
                    Hometime&apos;s Gold Coast short-term rental market report
                  </a>
                  , average occupancy sits around 88% and average daily rates peak in two windows: June to July for the winter school holidays, and December to January for Christmas, New Year and the summer holidays. The festive window is the longer of the two.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  High occupancy is the catch. Peak season means more nights sold and fewer empty days between them, so the same property that gets a relaxed Saturday changeover in May becomes a same-day turnover in late December. Everything that can be prepared in advance should be.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, label: "Peak window", value: "Dec – Jan", note: "ADR peak for coastal short stays" },
                  { icon: Clock, label: "Typical changeover", value: "2 – 3 hrs", note: "1–2 bedroom apartment, full reset" },
                  { icon: BedDouble, label: "Linen sets", value: "3 per bed", note: "one in use, one clean, one in wash" },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-center">
                      <div className="h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xl font-black text-primary">{stat.value}</p>
                      <p className="text-xs font-bold text-slate-700 mt-1">{stat.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{stat.note}</p>
                    </div>
                  )
                })}
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  The linen maths nobody does until it fails
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  The most common peak-season failure is not a dirty bathroom. It is running out of linen on a back-to-back day. If a checkout is at 10am and the next check-in is at 2pm, wet linen from the morning cannot be laundered, dried and back on the bed in time. The only practical answer is rotation.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  Work on roughly three sets per bed: one on the bed, one clean and ready, one in the wash. Add at least one spare set of towels per bathroom and a spare set of bath mats. The same logic applies to consumables — running out of toilet paper at 9pm on a peak Saturday is a review you never recover from.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Turnover checklist by zone
                </h2>
                <p className="text-sm leading-7 text-slate-600 mb-5">
                  Work in a fixed order every time: strip beds and gather linen first, then bathroom and kitchen, then living areas, then floors, then restock. Cleaning floors before beds means doing them twice.
                </p>
                <div className="space-y-4">
                  {turnoverZones.map((group) => (
                    <div key={group.zone} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-3">
                        {group.zone}
                      </p>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-amber-800">The details guests actually mark down</p>
                    <p className="mt-2 text-sm leading-7 text-amber-700">
                      Reviews rarely penalise for deep grime in a short stay — they penalise the visible, immediate things: hair in the shower or on bedding, streaky mirrors and glass, an unemptied bin, thin toilet paper, and stale cooking smells. All of those are quick to fix and the first things skipped when a turnover runs late.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Coastal and summer-specific issues
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Gold Coast properties have three recurring summer problems. Sand travels further than hosts expect and ends up in shower drains and under rugs. Sunscreen and zinc leave marks on upholstery, headboards and car seats that set if not treated promptly. And the combination of humidity and closed-up rooms between guests encourages mould in bathrooms, wardrobes and air-conditioner filters.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  Two habits deal with most of it: leave the air-conditioner on a dry cycle or a window cracked between guests where the building allows it, and check air-conditioner filters monthly through summer rather than once a season. For the broader picture, our{" "}
                  <Link href="/blog/mould-prevention-gold-coast" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    mould prevention guide
                  </Link>{" "}
                  covers humidity management in detail.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  What to book in November, before the calendar fills
                </h2>
                <ul className="space-y-3">
                  {[
                    "Carpet hot-water extraction — it needs drying time that December does not have",
                    "A routine pest treatment, so guests are not reporting pests mid-stay",
                    "A deep clean of oven, rangehood and shower grout, as a reset before turnover cleaning takes over",
                    "Air-conditioner filter clean, and a coil service if it has not been done in a year",
                    "An audit of your linen count against your maximum guest capacity",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <Sparkles className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Read more about{" "}
                  <Link href="/airbnb-cleaning-gold-coast" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    short-stay turnover cleaning on the Gold Coast
                  </Link>
                  , or see{" "}
                  <Link href="/carpet-cleaning-gold-coast" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    carpet cleaning
                  </Link>{" "}
                  for drying times and methods.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-6">
                  Frequently asked questions
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      q: "When is peak season for Gold Coast short-stay rentals?",
                      a: "Rates peak in two windows: June to July for the winter school holidays, and December to January for Christmas, New Year and the summer holidays. The summer window is longer and, for most coastal properties, busier.",
                    },
                    {
                      q: "How long does an Airbnb turnover clean take?",
                      a: "Two to three hours is typical for a one or two bedroom apartment once linen, restocking and a proper bathroom clean are included. Larger homes and properties with outdoor areas take longer. In peak season scheduling and linen supply are usually the real constraints, not cleaning time.",
                    },
                    {
                      q: "What gets marked down most in reviews?",
                      a: "Hair in bathrooms and on bedding, streaky glass and mirrors, unemptied bins, low consumables and lingering cooking smells. These are visible immediately and easy to skip when a turnover is rushed.",
                    },
                    {
                      q: "Do short-stay properties need pest control in summer?",
                      a: "Warmer weather raises activity from cockroaches, ants, spiders and mosquitoes, and guests do report visible pests. A routine treatment ahead of the December peak is far easier than arranging one mid-stay.",
                    },
                    {
                      q: "Should carpets be cleaned before the peak?",
                      a: "Yes, and before the calendar fills. Hot-water extraction needs drying time, which is hard to fit between same-day checkouts and check-ins. Doing it in November means the property is dry and ready before December.",
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-bold text-slate-800 mb-2 text-sm">{faq.q}</p>
                      <p className="text-sm leading-7 text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <AuthorBio />
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Peak Season Turnovers</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Wave Solution handles short-stay changeovers across the Gold Coast, including linen change, restocking and same-day back-to-back bookings.
                </p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/airbnb-cleaning-gold-coast">Book a Turnover</Link>
                </Button>
                <p className="mt-3 text-center text-[11px] text-white/50">
                  Or call 0450 833 683
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Guides</p>
                <ul className="space-y-3">
                  <li><Link href="/blog/end-of-lease-cleaning-before-christmas-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Cleaning Before Christmas →</Link></li>
                  <li><Link href="/blog/gold-coast-storm-season-cleaning-mould" className="text-sm font-semibold text-primary hover:text-secondary">Storm Season Cleaning &amp; Mould →</Link></li>
                  <li><Link href="/blog/mould-prevention-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Mould Prevention in Coastal Homes →</Link></li>
                  <li><Link href="/blog/carpet-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Guide →</Link></li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Services</p>
                <ul className="space-y-3">
                  <li><Link href="/airbnb-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Airbnb &amp; Short-Stay Cleaning →</Link></li>
                  <li><Link href="/carpet-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Gold Coast →</Link></li>
                  <li><Link href="/pest-control-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Pest Control Gold Coast →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Get Your Turnovers Locked In Before December</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Send us your property, the number of guests it sleeps and your peak-season booking dates. We will confirm a schedule and price in writing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/airbnb-cleaning-gold-coast">Short-Stay Cleaning</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
              <Link href="/book">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
