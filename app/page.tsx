import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, ShieldCheck, Sparkles, Star, TimerReset, Users, MapPin, Clock, Quote } from "lucide-react"

import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { InteractivePricingCalculator } from "@/components/interactive-pricing-calculator"
import { ServicesShowcaseTabs } from "@/components/services-showcase-tabs"
import { FaqAccordion } from "@/components/faq-accordion"
import { NewsletterForm } from "@/components/newsletter-form"
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
  title: "Gold Coast Cleaning & Pest Control | House, Bond & Office",
  description:
    "Professional house, bond, and office cleaning plus licensed pest control across the Gold Coast. 100% bond-back guarantee. Get your free quote today!",
  alternates: {
    canonical: businessInfo.baseUrl,
  },
  openGraph: {
    title: "Gold Coast Cleaning & Pest Control | House, Bond & Office",
    description:
      "Professional house, bond, and office cleaning plus licensed pest control across the Gold Coast. 100% bond-back guarantee. Get your free quote today!",
    url: businessInfo.baseUrl,
    type: "website",
    images: [{ url: `${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`, width: 1200, height: 630, alt: "Wave Solution Cleaning & Pest Control Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Coast Cleaning & Pest Control | House, Bond & Office",
    description:
      "Professional house, bond, and office cleaning plus licensed pest control across the Gold Coast. 100% bond-back guarantee. Get your free quote today!",
    images: [`${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`],
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

      <section className="relative z-10 -mt-6 bg-white pb-4">
        <div className="classic-container">
          <div className="grid grid-cols-2 gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-slate-100 md:p-6">
            {[
              { icon: Clock, label: "Years Experience", value: "10+" },
              { icon: CheckCircle, label: "Jobs Completed", value: "1,500+" },
              { icon: Star, label: "Google Rating", value: "4.9 / 5" },
              { icon: MapPin, label: "Suburbs Covered", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 px-2 py-2 md:justify-center md:px-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-black tracking-tight text-secondary">{stat.value}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">What We Clean</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-secondary sm:text-4xl">Our Cleaning Services</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Professional cleaning across the Gold Coast — from regular house maintenance to deep commercial resets. Fully insured, police-checked, and locally owned.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service, index) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                href={service.href}
                ctaLabel="Learn More"
                featured={index < 3}
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
             <span className="eyebrow">Simple process</span>
             <h2 className="mt-4 text-3xl font-black tracking-tight text-secondary sm:text-4xl">How It Works</h2>
             <p className="mx-auto mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
               Book in minutes, get a fast quote, and enjoy a spotless space — no surprises, no hassle.
             </p>
           </div>
           <div className="relative mt-12 grid gap-8 md:grid-cols-3">
             <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block" />
             {[
               { step: "1", title: "Tell Us What You Need", desc: "Choose your service, property type, and preferred date. Our quick booking form takes under 60 seconds." },
               { step: "2", title: "We Send a Fast Quote", desc: "Get a clear, upfront price with no hidden fees. Review and confirm when you're ready." },
               { step: "3", title: "We Do the Rest", desc: "Our trained team arrives on time, cleans to your standards, and leaves your space sparkling." },
             ].map((item) => (
               <div key={item.step} className="relative rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-xl">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-lg font-black text-white shadow-lg shadow-primary/20">
                   {item.step}
                 </div>
                 <h3 className="mt-5 text-lg font-black tracking-tight text-slate-900">{item.title}</h3>
                 <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>

       <section className="bg-[#F3F3F3] py-14 md:py-20">
         <div className="classic-container">
           <InteractivePricingCalculator />
         </div>
       </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8">
            <span className="eyebrow">Why Wave Solution</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-secondary">Why Choose Us</h2>
            <div className="mt-6 space-y-3">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col rounded-[2rem] bg-secondary p-8 text-white shadow-xl">
            <h2 className="text-3xl font-black tracking-tight">Gold Coast Trust Signals</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              A local Gold Coast team that is easy to contact, easy to book, and clear about what is included — fully insured cleaners, police-checked staff, and fast quotes for home, office, rental, and commercial jobs.
            </p>
            <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Users className="h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Local team</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Homes, rental properties, offices, and businesses across the Gold Coast.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <TimerReset className="h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Fast response</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Clear quotes and straightforward next steps so enquiries do not stall.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <CheckCircle className="h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70">Flexible schedule</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Weekly, fortnightly, one-off, and move-out scheduling depending on the job.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
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
                <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/15" />
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
                        {review.suburb}, QLD • <span className="font-semibold text-primary">{review.service}</span>
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-black text-white">
                      {review.name.split(" ").map((part) => part.charAt(0)).join("")}
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
          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 sm:p-10">
            <h2 className="text-3xl font-black tracking-tight text-secondary">Helpful Internal Links</h2>
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

            <div className="mt-8 flex flex-wrap gap-3">
              {serviceCards.map((service) => (
                <Link
                  key={`link-${service.href}`}
                  href={service.href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
                >
                  {service.title}
                </Link>
              ))}
              <Link
                href="/weekly-cleaning-gold-coast"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
              >
                Weekly Cleaning Gold Coast
              </Link>
              <Link
                href="/apartment-cleaning-gold-coast"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
              >
                Apartment Cleaning Gold Coast
              </Link>
              <Link
                href="/end-of-lease-pest-control-gold-coast"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
              >
                End of Lease Pest Control Gold Coast
              </Link>
              <Link
                href="/cleaning-carrara"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
              >
                Cleaning Services Carrara
              </Link>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Top Gold Coast Suburbs</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                  {[
                    ["/locations/southport", "Southport"],
                    ["/locations/robina", "Robina"],
                    ["/locations/surfers-paradise", "Surfers Paradise"],
                    ["/locations/broadbeach", "Broadbeach"],
                    ["/locations/nerang", "Nerang"],
                    ["/locations/burleigh-heads", "Burleigh Heads"],
                    ["/locations/helensvale", "Helensvale"],
                    ["/locations/coomera", "Coomera"],
                    ["/locations/carrara", "Carrara"],
                    ["/locations/varsity-lakes", "Varsity Lakes"],
                  ].map(([href, label]) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-full border border-slate-200 px-4 py-2 text-primary transition-colors hover:border-primary/20 hover:bg-primary/5 hover:text-secondary"
                    >
                      {label}
                    </Link>
                  ))}
                  <Link href={siteLinks.locations} className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-white">
                    View all service areas
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Helpful Resources</p>
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

       <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20 text-white">
         <div className="classic-container max-w-2xl text-center">
           <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Stay Clean, Stay Updated</h2>
           <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
             Get cleaning tips, exclusive offers, and seasonal deals delivered to your inbox.
           </p>
           <div className="mt-8">
             <NewsletterForm variant="hero" />
           </div>
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
