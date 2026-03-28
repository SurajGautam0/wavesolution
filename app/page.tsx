import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, ShieldCheck, Sparkles, Star, TimerReset, Users } from "lucide-react"

import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const serviceCards = [
  {
    title: "Cleaning Gold Coast",
    description: "A local landing page for homes, offices, rentals, and businesses that need reliable cleaning across the Gold Coast.",
    icon: "Sparkles",
    price: "Local quote",
    href: siteLinks.cleaningGoldCoast,
  },
  {
    title: "House Cleaning Gold Coast",
    description: "Weekly, fortnightly, and one-off house cleaning for apartments, family homes, and holiday properties.",
    icon: "Home",
    price: "From $120",
    href: siteLinks.homeCleaning,
  },
  {
    title: "Office Cleaning Gold Coast",
    description: "Flexible workplace cleaning for professional suites, shared offices, and staff spaces.",
    icon: "Building2",
    price: "Tailored quote",
    href: siteLinks.officeCleaning,
  },
  {
    title: "Bond Cleaning Gold Coast",
    description: "Detailed move-out cleaning for tenants, landlords, and property managers before inspection and handover.",
    icon: "Truck",
    price: "Inspection-ready",
    href: siteLinks.bondCleaning,
  },
  {
    title: "End of Lease Cleaning Gold Coast",
    description: "Rental exit cleaning for apartments, units, townhouses, and homes across key Gold Coast suburbs.",
    icon: "Repeat",
    price: "Move-out support",
    href: siteLinks.endOfLeaseCleaning,
  },
  {
    title: "Move-In Cleaning Gold Coast",
    description: "Detailed move-in cleaning so homes, rentals, and newly purchased properties feel fresh from day one.",
    icon: "Home",
    price: "Fresh start",
    href: siteLinks.moveInCleaning,
  },
  {
    title: "Commercial Cleaning Gold Coast",
    description: "Cleaning plans for businesses, retail spaces, clinics, and other commercial premises.",
    icon: "Briefcase",
    price: "Custom schedule",
    href: siteLinks.commercialCleaning,
  },
  {
    title: "Deep Cleaning Gold Coast",
    description: "One-off detailed cleaning for properties that need more than a standard maintenance visit.",
    icon: "Sparkles",
    price: "Detailed reset",
    href: siteLinks.deepCleaning,
  },
  {
    title: "Carpet Cleaning Gold Coast",
    description: "Carpet refresh and stain-focused cleaning for homes, rentals, offices, and commercial fit-outs.",
    icon: "Carpet",
    price: "Fresh carpets",
    href: siteLinks.carpetCleaning,
  },
  {
    title: "Pest Control Gold Coast",
    description: "Targeted pest control support for homes, rentals, and businesses dealing with common Gold Coast pests.",
    icon: "Bug",
    price: "Local treatment",
    href: siteLinks.pestControl,
  },
  {
    title: "After Builders Cleaning Gold Coast",
    description: "Post-construction and renovation cleaning for homes, fit-outs, and business spaces that need a full reset.",
    icon: "Sparkles",
    price: "Post-build clean",
    href: siteLinks.afterBuildersCleaning,
  },
]

const whyChooseUs = [
  "Fully insured cleaners who communicate clearly from quote to completion.",
  "Police-checked staff for homes, offices, rental properties, and business spaces.",
  "Eco-friendly cleaning options available for families, pets, and sensitive indoor spaces.",
  "Local Gold Coast team with practical suburb coverage and flexible scheduling.",
  "Fast booking response so you can move quickly on urgent household or rental jobs.",
  "Cleaning plans that match the property type instead of forcing every lead into the same package.",
]

const reviewHighlights = [
  {
    name: "Sarah Johnson",
    suburb: "Southport",
    service: "House cleaning",
    quote:
      "Wave Solution has been cleaning my home regularly and the team is always punctual, friendly, and careful with the bathrooms and kitchen.",
  },
  {
    name: "David Williams",
    suburb: "Robina",
    service: "Office cleaning",
    quote:
      "Our office feels much more consistent and professional since starting a regular clean. Communication has been easy and the quality has stayed strong.",
  },
  {
    name: "Emma Roberts",
    suburb: "Broadbeach",
    service: "Commercial cleaning",
    quote:
      "We needed a cleaner who understood presentation and hygiene for a busy customer-facing site, and Wave Solution has been dependable from the start.",
  },
]

const homepageFaqs = [
  {
    question: "Do you provide house cleaning across the Gold Coast?",
    answer:
      "Yes. We provide house cleaning across key Gold Coast suburbs including Southport, Robina, Surfers Paradise, Broadbeach, Burleigh Heads, Palm Beach, Helensvale, Coomera, and nearby areas.",
  },
  {
    question: "Can I book office or commercial cleaning?",
    answer:
      "Yes. We provide office cleaning and broader commercial cleaning for workplaces, customer-facing spaces, and business premises that need recurring or one-off support.",
  },
  {
    question: "Do you offer bond cleaning and end of lease cleaning?",
    answer:
      "Yes. We provide detailed move-out and rental handover cleaning for tenants, landlords, and property managers across the Gold Coast.",
  },
  {
    question: "How do I get a cleaning quote?",
    answer:
      "Use the booking page, call 0450 833 683, or contact us online. We can quote based on your suburb, service type, property size, timing, and any extra detail required.",
  },
]

export const metadata: Metadata = {
  title: "House Cleaning Gold Coast | Office, Bond & End of Lease Cleaning",
  description:
    "Wave Solution provides house cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning and commercial cleaning across the Gold Coast.",
  keywords: [
    "house cleaning Gold Coast",
    "office cleaning Gold Coast",
    "bond cleaning Gold Coast",
    "end of lease cleaning Gold Coast",
    "commercial cleaning Gold Coast",
    "deep cleaning Gold Coast",
    "cleaning Gold Coast",
  ],
  alternates: {
    canonical: businessInfo.baseUrl,
  },
  openGraph: {
    title: "House Cleaning Gold Coast | Office, Bond & End of Lease Cleaning",
    description:
      "Wave Solution provides house cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning and commercial cleaning across the Gold Coast.",
    url: businessInfo.baseUrl,
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <HeroSection />

      <section className="border-y border-slate-200 bg-white py-5">
        <div className="classic-container flex flex-wrap items-center justify-center gap-3 text-center text-[11px] font-black uppercase tracking-[0.16em] text-slate-600">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">Fully insured</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">Satisfaction guarantee</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">Local cleaners</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">Fast quote</span>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">Cleaning Services Gold Coast</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Wave Solution is focused on cleaning first. We help Gold Coast households, tenants, landlords, office teams, and business owners book the right service quickly, compare the right level of detail, and move from search to quote without bouncing between thin pages or generic booking prompts.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This homepage now acts as the main local service hub. It supports broad queries such as cleaning Gold Coast while also sending visitors directly to dedicated pages for house cleaning Gold Coast, office cleaning Gold Coast, bond cleaning Gold Coast, end of lease cleaning Gold Coast, commercial cleaning Gold Coast, and deep cleaning Gold Coast. That structure is better for Google, better for internal links, and much better for real users comparing local cleaners.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                href={service.href}
                ctaLabel="Learn More"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container grid gap-8">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-primary">House Cleaning Gold Coast</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              House cleaning remains one of the most searched and most commercially useful services for a Gold Coast cleaning business because the demand is consistent year-round. Busy households need help staying on top of bathrooms, kitchens, floors, dust, and the day-to-day mess that builds up when work, school, and family routines take priority. A strong house-cleaning offer should therefore feel flexible and practical, with weekly, fortnightly, and one-off options that match the way people actually live.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The goal is not just a neater property. It is a home that feels easier to manage and more enjoyable to be in. That is especially important in apartment-heavy and high-lifestyle areas such as Surfers Paradise and Broadbeach, but it matters just as much for family homes in Robina, Southport, Burleigh Heads, and surrounding suburbs. If a visitor wants local house cleaners, the page should help them recognise the service quickly and move straight to a tailored quote.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-primary">Office Cleaning Gold Coast</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Office cleaning needs different messaging from domestic cleaning because the buyer is usually thinking about presentation, hygiene, and consistency rather than lifestyle convenience. Gold Coast businesses want an office cleaner who shows up on time, works around access needs, maintains shared kitchens and bathrooms properly, and helps the workplace feel more professional every day. A page built around office cleaning Gold Coast should speak to that business reality clearly.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Local relevance matters here too. Business precincts in Southport, Robina, Broadbeach, and Surfers Paradise all create demand for recurring workplace cleaning. By separating office cleaning from general household messaging, Wave Solution can rank more strongly for business search terms while giving office managers a page that feels built for their exact problem instead of squeezed into a generic services list.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-primary">Bond Cleaning Gold Coast</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Bond cleaning is one of the strongest conversion opportunities for any Gold Coast cleaning business because users searching this term are usually close to booking. They are moving, coordinating inspections, or working toward key-return deadlines. That means the page and the CTA need to reduce uncertainty quickly. Explain what is included, explain how quotes work, and show that the service is designed for move-out pressure, not just normal house maintenance.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              This is where a more structured site beats weaker competitors. Instead of forcing the renter to guess which service applies, the site can send them directly to a focused bond-cleaning page with FAQs, related links, and a simple quote path based on suburb, property size, and preferred timing. The easier you make that decision, the more bookings you recover from high-intent traffic.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-primary">End of Lease Cleaning Gold Coast</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              End of lease cleaning Gold Coast searches are closely related to bond cleaning, but the user intent is often framed around the rental handover itself rather than just the bond return. This distinction matters because it lets Wave Solution create another strong rental page without duplicating the exact same pitch. The end-of-lease page can speak more directly to handover readiness, inspection timing, and move-out organisation, which helps reduce keyword cannibalisation while still addressing a major local booking category.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              For tenants, landlords, and property managers, the most useful site is the one that makes the process feel manageable. That means clear inclusions, local suburb coverage, and related links to bond cleaning, deep cleaning, and contact pathways that actually help the visitor decide what to do next.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-primary">Deep Cleaning Gold Coast</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Deep cleaning is important because not every property needs recurring maintenance. Some homes and workplaces simply need a much more detailed one-off reset. Kitchens, bathrooms, buildup zones, edges, touchpoints, and neglected detail areas all benefit from a service that goes beyond the usual routine. A dedicated deep-cleaning page helps Wave Solution capture that one-off high-value demand instead of losing it to competitors with stronger service segmentation.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Deep cleaning is also a smart conversion bridge. Many customers who book a deep clean eventually move to recurring house or office cleaning once the property has been reset properly. By linking these services together clearly, the site supports immediate conversions and longer-term value from the same visitor journey.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-black tracking-tight text-primary">Why Choose Us</h2>
            <div className="mt-6 space-y-4">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1.5rem] bg-white p-4 shadow-sm">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-primary p-8 text-white shadow-xl">
            <h2 className="text-3xl font-black tracking-tight">Gold Coast Trust Signals</h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Trust matters before any booking happens. Visitors want to know they are dealing with a local Gold Coast business that is easy to contact, easy to book, and clear about what is included. That is why the strongest conversion messaging sits close to the primary CTAs: fully insured cleaners, police-checked staff, flexible scheduling, and fast response times for home, office, rental, and commercial enquiries.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <Users className="h-6 w-6 text-secondary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Local team</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Homes, rental properties, offices, and businesses across the Gold Coast.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <TimerReset className="h-6 w-6 text-secondary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Fast response</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Clear quotes and straightforward next steps so enquiries do not stall.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Flexible schedule</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Weekly, fortnightly, one-off, and move-out scheduling depending on the job.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <Sparkles className="h-6 w-6 text-secondary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Service clarity</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Dedicated pages for the main cleaning services Gold Coast clients actually search for.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">Recent Gold Coast Client Feedback</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Trust grows faster when visitors can see how local homes and businesses describe the service in their own words. These review highlights keep the focus on the Gold Coast suburbs and service types that matter most to new enquiries.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviewHighlights.map((review) => (
              <article key={`${review.name}-${review.suburb}`} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 text-secondary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mt-5 text-base italic leading-8 text-slate-600">"{review.quote}"</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-sm text-slate-500">
                    {review.suburb}, QLD - {review.service}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-black tracking-tight text-primary">Helpful Internal Links</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
              If you are still comparing{" "}
              <Link href={siteLinks.cleaningGoldCoast} className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                cleaning Gold Coast
              </Link>{" "}
              providers, want to speak with{" "}
              <Link href={siteLinks.contact} className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                professional cleaners Gold Coast
              </Link>{" "}
              homes and businesses can contact directly, or are looking for{" "}
              <Link href={siteLinks.homeCleaning} className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                local house cleaners
              </Link>
              , the pages below make it easier to move to the service, suburb, or article cluster that matches your property and timing.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((service) => (
                <Link
                  key={`link-${service.href}`}
                  href={service.href}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition-transform hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{service.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Top Gold Coast Suburbs</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                  <Link href="/locations/southport" className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    Southport
                  </Link>
                  <Link href="/locations/robina" className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    Robina
                  </Link>
                  <Link href="/locations/surfers-paradise" className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    Surfers Paradise
                  </Link>
                  <Link href="/locations/broadbeach" className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    Broadbeach
                  </Link>
                  <Link href={siteLinks.locations} className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    View all service areas
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Helpful Resources</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Visit our{" "}
                  <Link href={siteLinks.blog} className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                    blog hub
                  </Link>{" "}
                  for cleaning guides, eco-friendly advice, and commercial cleaning insights written for Gold Coast homes and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">Frequently Asked Questions</h2>
            </div>

            <div className="mt-10 space-y-4">
              {homepageFaqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to Book a Local Cleaner?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/75">
              Tell us which Gold Coast service you need, where the property is located, and when you want the clean. We will help you choose the right service and send back a fast local quote.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90">
                <Link href={siteLinks.book}>Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                <Link href={siteLinks.homeCleaning}>Book Local Cleaner</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                <Link href={businessInfo.phoneHref}>Call Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
