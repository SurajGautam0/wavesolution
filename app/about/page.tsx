import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Award, MapPin, Clock, Phone, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "About Wave Solution | Gold Coast Cleaning & Pest Control",
  description:
    "Wave Solution is a locally owned Gold Coast cleaning company. Fully insured, police-checked team serving homes, offices, and rentals across Southport, Robina, Broadbeach and surrounding suburbs.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/about`,
  },
  openGraph: {
    title: "About Wave Solution | Gold Coast Cleaning & Pest Control",
    description:
      "Wave Solution is a locally owned Gold Coast cleaning company. Fully insured, police-checked team serving homes, offices, and rentals across the Gold Coast.",
    url: `${businessInfo.baseUrl}/about`,
    type: "website",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Wave Solution cleaning team Gold Coast" }],
  },
}

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: businessInfo.baseUrl },
        { "@type": "ListItem", position: 2, name: "About", item: `${businessInfo.baseUrl}/about` },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${businessInfo.baseUrl}/#business`,
      name: businessInfo.businessNameWithLocation,
      url: businessInfo.baseUrl,
      description:
        "Wave Solution is a trusted local Gold Coast cleaning company providing house cleaning, bond cleaning, office cleaning, and commercial cleaning across the Gold Coast.",
      employee: [
        {
          "@type": "Person",
          name: "Sushant Timalcena",
          jobTitle: "Founder & CEO",
        },
        {
          "@type": "Person",
          name: "Veshraj Gautam",
          jobTitle: "Operations Manager",
        },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#333365]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#39BDE4]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#249FC5]/10 rounded-full blur-[100px]" />
        </div>

        <div className="classic-container relative z-10 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur-sm border border-white/10">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Gold Coast Owned & Operated
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              The People Behind
              <br />
              <span className="text-secondary">Wave Solution</span>
            </h1>

            <div className="w-16 h-1 bg-secondary mt-6 mb-8 rounded-full" />

            <p className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
              A dedicated cleaning and pest control team serving Gold Coast homes, offices, and rental properties.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              { icon: Award, value: "100%", label: "Satisfaction" },
              { icon: ShieldCheck, value: "100%", label: "Insured" },
              { icon: MapPin, value: "15+", label: "Suburbs" },
              { icon: CheckCircle, value: "4.9", label: "Google Rating" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="mt-1 text-xs text-white/50 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Real, specific, no fluff */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="classic-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#333365] tracking-tight mb-6">
                How We Started
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8 rounded-full" />

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Wave Solution was established when Sushant Timalcena recognized an ongoing issue across the Gold Coast:
                  many cleaning providers were either overcharging, cutting corners, or relying on unvetted subcontractors
                  with zero direct accountability. He set out to build a genuine local alternative where the cleaners
                  take personal pride in the standard of their work.
                </p>
                <p>
                  Starting with residential cleaning across Southport, Broadbeach, and surrounding areas, Sushant
                  quoted each job transparently, performed the cleans with meticulous care, and built relationships directly
                  with homeowners and tenants. That direct, accountable approach remains at the heart of our operations today.
                </p>
                <p>
                  As word of mouth grew, Veshraj Gautam joined as Operations Manager to develop systematic quality checklists,
                  equipment maintenance standards, and staff screening procedures. Today, our team handles residential,
                  commercial, bond, and end of lease cleaning across more than 15 Gold Coast suburbs.
                </p>
                <p>
                  We&apos;re not an impersonal franchise or a faceless booking app that outsources to unknown contractors.
                  We&apos;re a local Gold Coast business with a real address, a direct phone number, and a fully insured,
                  police-checked team that arrives on time.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about.jpg"
                  alt="Wave Solution cleaning team at work on the Gold Coast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 bg-[#333365] text-white px-4 py-2 rounded-full text-xs font-bold">
                  Our team in action
                </div>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#F3F3F3] p-5">
                  <p className="text-3xl font-black text-[#333365]">Local</p>
                  <p className="text-sm text-slate-600 mt-1">Gold Coast Owned</p>
                </div>
                <div className="rounded-2xl bg-[#F3F3F3] p-5">
                  <p className="text-3xl font-black text-[#333365]">15+</p>
                  <p className="text-sm text-slate-600 mt-1">Suburbs we service</p>
                </div>
                <div className="rounded-2xl bg-[#F3F3F3] p-5">
                  <p className="text-3xl font-black text-[#333365]">100%</p>
                  <p className="text-sm text-slate-600 mt-1">Insured & police-checked</p>
                </div>
                <div className="rounded-2xl bg-[#F3F3F3] p-5">
                  <p className="text-3xl font-black text-[#333365]">4.9</p>
                  <p className="text-sm text-slate-600 mt-1">Google star rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Specific, not generic */}
      <section className="py-16 sm:py-20 bg-[#F3F3F3]">
        <div className="classic-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#333365] tracking-tight mb-4">
              What We Actually Do Differently
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Not just promises — here&apos;s the practical difference you&apos;ll notice.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "You Talk to the Business Owner",
                desc: "When you call 0450 833 683, you reach Sushant or Veshraj directly — not a call centre or answering machine. Decisions get made fast.",
              },
              {
                title: "Police-Checked, Insured Staff",
                desc: "Every team member holds a current national police check and we carry full public liability insurance. You can verify this before we start.",
              },
              {
                title: "We Clean to a Checklist",
                desc: "Every job follows a documented checklist specific to the property type — residential, bond, office, or commercial. Nothing gets missed.",
              },
              {
                title: "Real Insurance, Not Just a Claim",
                desc: "We carry public liability insurance and can provide a certificate of currency on request. Your property is actually protected.",
              },
              {
                title: "Local Gold Coast Coverage",
                desc: "We service Southport, Robina, Broadbeach, Surfers Paradise, Burleigh Heads, Nerang, Helensvale, Coomera, Palm Beach, Varsity Lakes and more.",
              },
              {
                title: "Same Team, Consistent Results",
                desc: "We don't send random contractors. You get the same trained team members who know your property and your preferences.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#333365] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Contact Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="classic-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#333365] tracking-tight mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Whether you need a one-off deep clean or regular maintenance, we&apos;re here to help.
                Call us directly or request a quote online.
              </p>

              <div className="space-y-4">
                <a
                  href={businessInfo.phoneHref}
                  className="flex items-center gap-4 rounded-2xl bg-[#F3F3F3] p-4 hover:bg-[#39BDE4]/10 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/10">
                    <Phone className="h-5 w-5 text-[#39BDE4]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Call us directly</p>
                    <p className="text-lg font-bold text-[#333365]">{businessInfo.phoneDisplay}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl bg-[#F3F3F3] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/10">
                    <MapPin className="h-5 w-5 text-[#39BDE4]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Service area</p>
                    <p className="text-lg font-bold text-[#333365]">{businessInfo.address.full}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-[#F3F3F3] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/10">
                    <Clock className="h-5 w-5 text-[#39BDE4]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Hours</p>
                    {businessInfo.businessHoursDisplay.map((h) => (
                      <p key={h} className="text-sm font-bold text-[#333365]">{h}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="bg-[#39BDE4] hover:bg-[#249FC5] text-white font-bold rounded-xl h-14 text-sm">
                <Link href="/book">Book a Clean</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-200 text-[#333365] hover:bg-slate-50 font-bold rounded-xl h-14 text-sm">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
