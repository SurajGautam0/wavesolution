import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  CalendarClock,
  KeyRound,
  ClipboardCheck,
  Truck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthorBio } from "@/components/author-bio"

export const metadata: Metadata = {
  title: "End of Lease Cleaning Before Christmas | Gold Coast Guide",
  description:
    "Moving out of a Gold Coast rental in December? The bond clean timeline, inspection cut-offs and booking dates that protect your bond over the break.",
  keywords: [
    "end of lease cleaning before Christmas Gold Coast",
    "bond cleaning December Gold Coast",
    "moving out before Christmas Queensland",
    "bond clean Christmas shutdown",
    "end of lease cleaning Gold Coast",
    "rental handover December QLD",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-before-christmas-gold-coast",
  },
  openGraph: {
    title: "End of Lease Cleaning Before Christmas | Gold Coast Guide",
    description:
      "The December move-out timeline for Gold Coast renters: when to book the bond clean, what agents require before shutdown, and how to protect your bond.",
    url: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-before-christmas-gold-coast",
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
          name: "End of Lease Cleaning Before Christmas",
          item: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-before-christmas-gold-coast",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "End of Lease Cleaning Before Christmas: Gold Coast Move-Out Timeline",
      description:
        "A practical December move-out timeline for Gold Coast renters, covering bond cleaning booking dates, agency inspection cut-offs and handover sequencing.",
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
      url: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-before-christmas-gold-coast",
      mainEntityOfPage:
        "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-before-christmas-gold-coast",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How far in advance should I book a bond clean before Christmas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Two to three weeks ahead if your lease ends in December. Gold Coast bond cleaning demand climbs through late November and peaks in the first three weeks of December, and the dates closest to agency shutdowns are the first to go. If your inspection is already booked, treat the clean as urgent and confirm the date before you agree to it.",
          },
        },
        {
          "@type": "Question",
          name: "Can a bond clean be done after the final inspection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It should be done before. Most property managers will not re-inspect after the keys are returned without a reason, and some agencies close over the festive period. Cleaning before the inspection gives your agent the chance to identify anything still outstanding while you can still fix it.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if the agency office is closed between Christmas and New Year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If the office closes before your lease end date, the final inspection usually has to happen earlier. Ask your property manager for the exact inspection date and the last working day for their office when you give notice, then schedule the clean to finish at least one working day before the inspection.",
          },
        },
        {
          "@type": "Question",
          name: "Does the bond clean need pest control and carpet cleaning before Christmas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if your lease requires it or the property has had pets. Where it is required, the order matters: cleaning first, carpet steam cleaning second, pest treatment last, because treatment should not be disturbed by further cleaning. A pest receipt can be requested for the handover paperwork.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a bond clean take to book on the Gold Coast in December?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking, not cleaning, is the constraint. The clean itself is usually a single day for a standard home or apartment. Lead times tighten in December, so the practical step is to send your suburb, property type, inspection date and any required extras as early as possible so scope and price can be confirmed in writing.",
          },
        },
      ],
    },
  ],
}

const timeline = [
  {
    when: "Notice given",
    label: "Lock the date",
    detail:
      "When you give notice, ask two questions in writing: the exact date of the final inspection, and the agency office last working day before the break. Those two dates decide everything else.",
  },
  {
    when: "T-minus 3 weeks",
    label: "Book the bond clean",
    detail:
      "Christmas week fills fastest. Confirm scope and price in writing, and leave a buffer day between cleaning and inspection so anything flagged can still be corrected.",
  },
  {
    when: "T-minus 2 weeks",
    label: "Order the extras",
    detail:
      "Carpet steam cleaning, pest treatment or a pest receipt for the handover can take their own lead time. Book them now rather than assuming they can be added later.",
  },
  {
    when: "T-minus 1 week",
    label: "Sort access and keys",
    detail:
      "Confirm how the team gets in: keys, agent pickup, building access rules, parking and lift bookings. Access delays are the single most common reason a December clean slips.",
  },
  {
    when: "T-minus 1 to 2 days",
    label: "Cleaning day",
    detail:
      "The property should be empty, utilities still connected and bins accessible. Empty means cleanable: remaining belongings slow the job down and get missed on the checklist.",
  },
  {
    when: "Day before inspection",
    label: "Walk-through",
    detail:
      "Do a final walk-through against your agent's entry condition report. Note anything the clean may have missed while there is still time to fix it rather than dispute it after handover.",
  },
]

const handoverOrder = [
  {
    step: "1",
    title: "Check the lease first",
    detail:
      "Read what your tenancy agreement actually requires for the exit clean, including any carpet or pest clause. That list, not a generic internet checklist, is the standard you are held to.",
    href: "/blog/end-of-lease-cleaning-requirements-qld",
    linkLabel: "Queensland end of lease requirements",
  },
  {
    step: "2",
    title: "Clean the property",
    detail:
      "Room-by-room interior clean covering kitchen including oven and rangehood, bathrooms and grout, windows and tracks, cupboards, skirtings and floors.",
    href: "/end-of-lease-cleaning-gold-coast",
    linkLabel: "End of lease cleaning Gold Coast",
  },
  {
    step: "3",
    title: "Steam the carpets",
    detail:
      "Carpet hot-water extraction where the lease requires it. Do it after the general clean so it is not disturbed, and allow drying time before the inspection.",
    href: "/carpet-cleaning-gold-coast",
    linkLabel: "Carpet cleaning Gold Coast",
  },
  {
    step: "4",
    title: "Treat for pests last",
    detail:
      "Pest treatment is done after cleaning and carpet work, never before. Ask for a treatment receipt if your agent wants one for the handover file.",
    href: "/bond-pest-carpet-end-of-lease",
    linkLabel: "Bond, pest and carpet bundle",
  },
]

export default function EndOfLeaseBeforeChristmasPage() {
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
            <span>December Move-Out</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">
              Bond &amp; Move-Out — Gold Coast
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              End of Lease Cleaning Before Christmas: The Gold Coast Move-Out Timeline
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              December is the busiest handover month on the Gold Coast and the shortest one on the calendar. Here is the order to do things in so your bond clean lands before the agency closes.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75">
              <span>Updated October 2026</span>
              <span>•</span>
              <span>9 min read</span>
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
                    <CalendarClock className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm leading-7 text-sky-800">
                        Book the bond clean two to three weeks before your December handover, and schedule it to finish at least one working day before the final inspection. The constraint in December is not cleaning time, it is availability and agency closure dates. Confirm the inspection date and the office&apos;s last working day first, then work backwards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Why December catches renters out
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Three things collide at once. Lease cycles cluster toward the end of the year, so demand for bond cleaning across the Gold Coast climbs through late November and peaks in the first three weeks of December. The Queensland state school year typically finishes in mid-December, which pushes family moves into the same narrow window. And many agencies run reduced hours or close entirely between Christmas and New Year.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  None of that changes what a bond clean involves. What it changes is the sequencing. A clean that would be routine in March becomes a scheduling problem in December, because a missed slot can push your inspection past the day the office shuts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  The December time approach
                </h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Work backwards from the inspection date, not forwards from today.
                </p>
                <div className="space-y-3">
                  {timeline.map((row) => (
                    <div key={row.when} className="rounded-[1rem] border border-slate-200 bg-slate-50 p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-secondary">
                          {row.when}
                        </span>
                        <p className="font-bold text-slate-800 text-sm">{row.label}</p>
                      </div>
                      <p className="text-sm text-slate-600 leading-6">{row.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-amber-800">The fixed date nobody warns you about</p>
                    <p className="mt-2 text-sm leading-7 text-amber-700">
                      Your lease end date is not the same as your agency&apos;s final inspection date. If the office closes before your lease ends, the inspection gets pulled forward. Ask for both dates in writing on the day you give notice, because discovering the gap two weeks out leaves very little room to move.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  The order that gets it approved
                </h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Where carpet or pest work is required, the sequence matters. Cleaning first, carpet second, pest last. Pest treatment applied before a clean gets disturbed by it.
                </p>
                <div className="space-y-3">
                  {handoverOrder.map((item) => (
                    <div key={item.step} className="flex items-start gap-4 rounded-[1rem] border border-slate-100 bg-slate-50 p-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-xs font-black">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                        <p className="text-sm text-slate-500 leading-6 mt-0.5">{item.detail}</p>
                        <Link
                          href={item.href}
                          className="mt-1.5 inline-block text-xs font-bold text-secondary hover:text-primary underline underline-offset-4"
                        >
                          {item.linkLabel} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  What the clean has to actually cover
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  A bond clean is judged against the entry condition report, not against how the property looks on a quick walk-through. The areas that most often come back as incomplete are the ones that are hard to see until you look closely: oven interiors and rangehood filters, shower screen tracks and grout, wardrobe interiors, window tracks, and skirting boards behind furniture.
                </p>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  If your property has been tenanted for years, expect the kitchen and bathroom to take the most time. Grease and soap scum build up in layers, and they need dwell time with the right product rather than more scrubbing.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  For the full room-by-room list, work from our{" "}
                  <Link href="/blog/bond-cleaning-checklist" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    Queensland bond cleaning checklist
                  </Link>
                  . For what a clean typically costs by bedroom count, see the{" "}
                  <Link href="/bond-cleaning-cost-gold-coast" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    Gold Coast bond cleaning cost guide
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <KeyRound className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-primary">Access is the hidden December risk</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      High-rise buildings and gated estates need lift bookings, visitor parking or gate codes, and those are harder to arrange when building managers are themselves on leave. Sort access a week out, not on the morning of the clean.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Five mistakes that cost bonds in December
                </h2>
                <ul className="space-y-3">
                  {[
                    "Booking the clean after the inspection is already locked in, leaving no room to fix anything the agent flags.",
                    "Assuming the agency will re-inspect in the first week of January. Many will, but the timeline is not in your control.",
                    "Ordering pest treatment before the clean instead of after, so the treatment gets partly removed.",
                    "Leaving items in cupboards and wardrobes, which slows the clean and means interiors get skipped.",
                    "Not asking for the inspection date and office closure date in writing when giving notice.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <AlertCircle className="h-4 w-4 text-amber-600 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <ClipboardCheck className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-primary">
                    Pre-inspection walk-through
                  </h2>
                </div>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Run this the day before, with the entry condition report in hand.
                </p>
                <ul className="space-y-3">
                  {[
                    "Oven interior, racks, door glass and rangehood filters",
                    "Shower screens, tile grout, exhaust fan covers",
                    "Inside all cupboards, drawers and wardrobes",
                    "Window glass, sills and sliding tracks",
                    "Skirting boards, light switches and door handles",
                    "Ceiling fans, light fittings and cornices",
                    "Balcony, courtyard or garage swept and clear",
                    "Bins emptied, and anything left behind removed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-6">
                  Frequently asked questions
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      q: "How far in advance should I book a bond clean before Christmas?",
                      a: "Two to three weeks ahead if your lease ends in December. Demand on the Gold Coast peaks in the first three weeks of December and the dates closest to agency shutdowns go first. If your inspection is already booked, treat the clean as urgent and confirm the date before agreeing to it.",
                    },
                    {
                      q: "Can the bond clean be done after the final inspection?",
                      a: "It should be done before. Most property managers will not re-inspect without a reason, and some offices close over the festive period. Cleaning first gives your agent a chance to flag anything while you can still resolve it.",
                    },
                    {
                      q: "What if the agency office closes between Christmas and New Year?",
                      a: "Then the inspection usually moves earlier. Ask for the inspection date and the office last working day when you give notice, and schedule the clean to finish at least one working day before the inspection.",
                    },
                    {
                      q: "Do I need carpet cleaning and pest control as well?",
                      a: "Only where your lease requires it or the property has had pets. If required, the order is cleaning, then carpet steam cleaning, then pest treatment. A pest receipt can be requested for the handover file.",
                    },
                    {
                      q: "Is a professional clean actually required by law in Queensland?",
                      a: "The standard is that the property is returned in a similar condition to the entry condition report, allowing for fair wear and tear. Whether that means a professional clean depends on your agreement and the condition difference. Our guide to Queensland end of lease requirements covers how that is assessed.",
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
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">December Books Out Fast</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Send your suburb, property type and inspection date and we will confirm the scope and price in writing before the booking is locked in.
                </p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/book">Get a Quote</Link>
                </Button>
                <p className="mt-3 text-center text-[11px] text-white/50">
                  Or call 0450 833 683
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Guides</p>
                <ul className="space-y-3">
                  <li><Link href="/blog/bond-cleaning-checklist" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Checklist Queensland →</Link></li>
                  <li><Link href="/blog/end-of-lease-cleaning-requirements-qld" className="text-sm font-semibold text-primary hover:text-secondary">QLD End of Lease Requirements →</Link></li>
                  <li><Link href="/blog/end-of-lease-cleaning-cost-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">What a Bond Clean Costs →</Link></li>
                  <li><Link href="/blog/airbnb-cleaning-christmas-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Holiday Rental Turnover at Christmas →</Link></li>
                  <li><Link href="/blog/gold-coast-storm-season-cleaning-mould" className="text-sm font-semibold text-primary hover:text-secondary">Storm Season Cleaning &amp; Mould →</Link></li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Services</p>
                <ul className="space-y-3">
                  <li><Link href="/bond-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Gold Coast →</Link></li>
                  <li><Link href="/end-of-lease-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Cleaning Gold Coast →</Link></li>
                  <li><Link href="/bond-pest-carpet-end-of-lease" className="text-sm font-semibold text-primary hover:text-secondary">Bond + Pest + Carpet Bundle →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Moving Out Before Christmas?</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Tell us the property, the suburb and your inspection date. We will confirm the scope and price in writing so you can lock the date before December fills up.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/book">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
              <Link href="/bond-cleaning-gold-coast">Bond Cleaning Gold Coast</Link>
            </Button>
          </div>
          <p className="mt-5 text-xs font-semibold text-white/50">
            <Truck className="inline h-3.5 w-3.5 mr-1" />
            Fully insured · Police-checked · Free re-clean guarantee
          </p>
        </div>
      </section>
    </div>
  )
}
