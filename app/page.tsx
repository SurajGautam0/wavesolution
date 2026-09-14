import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, ShieldCheck, Sparkles, Star, TimerReset, Users, MapPin, Phone, Clock } from "lucide-react"

import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { InteractivePricingCalculator } from "@/components/interactive-pricing-calculator"
import { ServicesShowcaseTabs } from "@/components/services-showcase-tabs"
import { FaqAccordion } from "@/components/faq-accordion"
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
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Wave Solution Cleaning services Gold Coast" }],
  },
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />

      {/* Stats Bar */}
      <section className="bg-white border-y border-slate-200 py-6">
        <div className="classic-container grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: "Years Experience", value: "10+" },
            { icon: CheckCircle, label: "Jobs Completed", value: "1,500+" },
            { icon: Star, label: "Google Rating", value: "4.9 / 5" },
            { icon: MapPin, label: "Suburbs Covered", value: "50+" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-black tracking-tight text-primary">{stat.value}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-5">
        <div className="classic-container flex flex-wrap items-center justify-center gap-3 text-center text-[11px] font-black uppercase tracking-[0.16em] text-white">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Fully insured</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Satisfaction guarantee</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Local cleaners</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Fast quote</span>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">What We Clean</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-primary sm:text-4xl">Our Cleaning Services</h2>
             <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
               Professional cleaning across the Gold Coast — from regular house maintenance to deep commercial resets. Fully insured, police-checked, and locally owned.
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

       <section className="bg-[#F3F3F3] py-14 md:py-20">
         <div className="classic-container">
           <ServicesShowcaseTabs />
         </div>
       </section>

       {/* How It Works */}
       <section className="bg-white py-14 md:py-20">
         <div className="classic-container">
           <div className="mx-auto max-w-2xl text-center">
             <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">How It Works</h2>
             <p className="mx-auto mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
               Book in minutes, get a fast quote, and enjoy a spotless space — no surprises, no hassle.
             </p>
           </div>
           <div className="mt-12 grid gap-8 md:grid-cols-3">
             {[
               { step: "1", title: "Tell Us What You Need", desc: "Choose your service, property type, and preferred date. Our quick booking form takes under 60 seconds." },
               { step: "2", title: "We Send a Fast Quote", desc: "Get a clear, upfront price with no hidden fees. Review and confirm when you're ready." },
               { step: "3", title: "We Do the Rest", desc: "Our trained team arrives on time, cleans to your standards, and leaves your space sparkling." },
             ].map((item) => (
               <div key={item.step} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-lg font-black">
                   {item.step}
                 </div>
                 <h3 className="mt-4 text-lg font-black tracking-tight text-slate-900">{item.title}</h3>
                 <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>

       <section className="bg-white py-14 md:py-20">
         <div className="classic-container">
           <InteractivePricingCalculator />
         </div>
       </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2.5rem] border border-slate-200 bg-[#F3F3F3] p-8 shadow-sm">
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

          <div className="rounded-[2.5rem] border border-white/10 bg-secondary p-8 text-white shadow-xl">
            <h2 className="text-3xl font-black tracking-tight">Gold Coast Trust Signals</h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Trust matters before any booking happens. Visitors want to know they are dealing with a local Gold Coast business that is easy to contact, easy to book, and clear about what is included. That is why the strongest conversion messaging sits close to the primary CTAs: fully insured cleaners, police-checked staff, flexible scheduling, and fast response times for home, office, rental, and commercial enquiries.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <Users className="h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Local team</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Homes, rental properties, offices, and businesses across the Gold Coast.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <TimerReset className="h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Fast response</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Clear quotes and straightforward next steps so enquiries do not stall.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <CheckCircle className="h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Flexible schedule</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Weekly, fortnightly, one-off, and move-out scheduling depending on the job.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <Sparkles className="h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Service clarity</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Dedicated pages for the main cleaning services Gold Coast clients actually search for.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="bg-[#F3F3F3] py-16 md:py-24">
         <div className="classic-container">
           <div className="mx-auto max-w-4xl text-center">
             <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3.5 py-1 text-xs font-bold text-primary">
               <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
               Verified Gold Coast Reviews
             </div>
             <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-4xl">Recent Gold Coast Client Feedback</h2>
             <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
               Trust grows faster when visitors can see how local homes and businesses describe the service in their own words. Real reviews from Southport, Robina, and Broadbeach.
             </p>
             <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
               <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
               <span>4.9 / 5</span>
               <span className="text-slate-400">based on 430+ reviews</span>
             </div>
           </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviewHighlights.map((review) => (
              <article
                key={`${review.name}-${review.suburb}`}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-secondary">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                        Verified Client
                      </span>
                  </div>
                  <p className="mt-4 text-base italic leading-relaxed text-slate-700">
                    "{review.quote}"
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-extrabold text-[#212429]">{review.name}</p>
                      <p className="text-xs font-medium text-slate-500">
                        {review.suburb}, QLD • <span className="text-primary font-semibold">{review.service}</span>
                      </p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-black text-slate-600">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-slate-200 bg-[#F3F3F3] p-8 shadow-sm sm:p-10">
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
                  <Link href="/locations/nerang" className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    Nerang
                  </Link>
                  <Link href="/locations/burleigh-heads" className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    Burleigh Heads
                  </Link>
                  <Link href="/locations/helensvale" className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    Helensvale
                  </Link>
                  <Link href="/locations/coomera" className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:text-secondary">
                    Coomera
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

       {/* Newsletter */}
       <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20 text-white">
         <div className="classic-container text-center">
           <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Stay Clean, Stay Updated</h2>
           <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
             Get cleaning tips, exclusive offers, and seasonal deals delivered to your inbox.
           </p>
           <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-lg sm:mx-auto">
             <input
               type="email"
               placeholder="Your email address"
               className="flex-1 rounded-full px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
             />
             <Button className="h-12 rounded-full bg-slate-950 px-6 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg hover:bg-slate-900">
               Subscribe
             </Button>
           </div>
           <p className="mt-3 text-[11px] text-white/60">No spam. Unsubscribe anytime.</p>
         </div>
       </section>

       <section className="bg-[#F3F3F3] py-16 md:py-24">
         <div className="classic-container">
           <div className="mx-auto max-w-3xl text-center">
             <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3.5 py-1 text-xs font-bold text-primary">
               <Sparkles className="h-3.5 w-3.5 text-primary" />
               Everything You Need To Know
             </div>
             <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-4xl">Frequently Asked Questions</h2>
             <p className="mx-auto mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
               Got questions about our cleaning service, pricing, or Gold Coast suburb coverage? Find instant answers below.
             </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion faqs={homepageFaqs} />
          </div>
        </div>
      </section>

<section className="relative overflow-hidden bg-secondary py-16 text-white md:py-24">
         <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
         <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

         <div className="classic-container relative z-10">
           <div className="mx-auto max-w-3xl text-center">
             <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-white">
               <ShieldCheck className="h-4 w-4 text-[#39BDE4]" />
               100% Satisfaction Guaranteed
             </span>
             <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
               Ready to Book Your Local Cleaner?
             </h2>
             <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
               Tell us which Gold Coast service you need, where the property is located, and when you want the clean. We will help you choose the right service and send back a fast local quote.
             </p>
             <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
               <Button asChild className="h-14 rounded-full bg-[#39BDE4] px-8 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 hover:bg-[#249FC5]">
                 <Link href={siteLinks.book}>Get Free Quote</Link>
               </Button>
               <Button asChild variant="outline" className="h-14 rounded-full border-white/25 bg-transparent px-8 text-xs font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                 <Link href={siteLinks.homeCleaning}>Browse Services</Link>
               </Button>
               <Button asChild variant="outline" className="h-14 rounded-full border-white/25 bg-transparent px-6 text-xs font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                 <Link href={businessInfo.phoneHref}>Call {businessInfo.phoneDisplay}</Link>
               </Button>
             </div>
             <p className="mt-5 text-xs font-semibold text-white/50">Free quotes • Fast response • Fully insured</p>
           </div>
         </div>
       </section>
    </div>
  )
}
