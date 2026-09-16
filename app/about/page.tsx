import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Award, MapPin, Clock, Phone, CheckCircle, ArrowRight, Briefcase, Home, Truck, BadgeCheck, Globe, Heart, ClipboardList, Users, Star } from "lucide-react"

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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#333365] via-[#2a2a5a] to-[#1e1e4a]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#39BDE4]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#249FC5]/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#39BDE4]/3 rounded-full blur-[200px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="classic-container relative z-10 py-20 sm:py-28 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#39BDE4] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39BDE4]">
                Gold Coast Owned & Operated
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
              The People Behind
              <br />
              <span className="bg-gradient-to-r from-[#39BDE4] to-[#249FC5] bg-clip-text text-transparent">Wave Solution</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-[#39BDE4] to-[#249FC5] mx-auto mb-8 rounded-full" />

            <p className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
              A dedicated cleaning and pest control team serving Gold Coast homes, offices, and rental properties.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                { icon: Award, value: "100%", label: "Satisfaction" },
                { icon: ShieldCheck, value: "100%", label: "Insured" },
                { icon: MapPin, value: "15+", label: "Suburbs" },
                { icon: CheckCircle, value: "4.9", label: "Google Rating" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 px-6 py-5 min-w-[110px]">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/15">
                    <stat.icon className="h-6 w-6 text-[#39BDE4]" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/50 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white relative">
        <div className="classic-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[#39BDE4]/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[#249FC5]/20 rounded-2xl" />
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about.jpg"
                  alt="Wave Solution cleaning team at work on the Gold Coast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-gradient-to-r from-[#333365] to-[#2a2a5a] text-white px-6 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2">
                <Heart className="h-4 w-4 text-[#39BDE4]" />
                Our team in action
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#39BDE4]/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-[#39BDE4]" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#333365] tracking-tight">How We Started</h2>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#39BDE4] to-[#249FC5] rounded-full mb-8" />
              </div>

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

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Local Gold Coast", value: "Local" },
                  { icon: MapPin, label: "Suburbs we service", value: "15+" },
                  { icon: ShieldCheck, label: "Insured & police-checked", value: "100%" },
                  { icon: Star, label: "Google star rating", value: "4.9" },
                ].map((item) => (
                  <div key={item.value} className="rounded-2xl bg-gradient-to-br from-[#F3F3F3] to-white p-5 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="h-4 w-4 text-[#39BDE4]" />
                      <p className="text-3xl font-black text-[#333365]">{item.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#F3F3F3] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39BDE4]/30 to-transparent" />
        <div className="classic-container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#39BDE4]/10 px-4 py-2 mb-4">
              <BadgeCheck className="h-4 w-4 text-[#39BDE4]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39BDE4]">
                Our Promise
              </span>
            </div>
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
                icon: Phone,
                title: "You Talk to the Business Owner",
                desc: "When you call 0450 833 683, you reach Sushant or Veshraj directly — not a call centre or answering machine. Decisions get made fast.",
                color: "#39BDE4",
              },
              {
                icon: ShieldCheck,
                title: "Police-Checked, Insured Staff",
                desc: "Every team member holds a current national police check and we carry full public liability insurance. You can verify this before we start.",
                color: "#249FC5",
              },
              {
                icon: ClipboardList,
                title: "We Clean to a Checklist",
                desc: "Every job follows a documented checklist specific to the property type — residential, bond, office, or commercial. Nothing gets missed.",
                color: "#39BDE4",
              },
              {
                icon: ShieldCheck,
                title: "Real Insurance, Not Just a Claim",
                desc: "We carry public liability insurance and can provide a certificate of currency on request. Your property is actually protected.",
                color: "#249FC5",
              },
              {
                icon: MapPin,
                title: "Local Gold Coast Coverage",
                desc: "We service Southport, Robina, Broadbeach, Surfers Paradise, Burleigh Heads, Nerang, Helensvale, Coomera, Palm Beach, Varsity Lakes and more.",
                color: "#39BDE4",
              },
              {
                icon: Users,
                title: "Same Team, Consistent Results",
                desc: "We don't send random contractors. You get the same trained team members who know your property and your preferences.",
                color: "#249FC5",
              },
            ].map((item, idx) => (
              <div key={item.title} className="group rounded-2xl bg-white p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#39BDE4]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#39BDE4]/10 group-hover:bg-[#39BDE4]/20 transition-colors">
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <span className="text-[11px] font-bold text-[#39BDE4] uppercase tracking-wider">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#333365] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#333365] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#39BDE4]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#249FC5]/5 rounded-full blur-[100px]" />
        </div>
        <div className="classic-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#39BDE4]/10 px-4 py-2 mb-4">
                <Heart className="h-4 w-4 text-[#39BDE4]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39BDE4]">
                  Founder's Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                Built on Trust,<br />
                <span className="text-[#39BDE4]">Driven by Care</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                With over a decade of experience in the cleaning industry, Wave Solution brings professional standards,
                transparent pricing, and genuine care to every property we touch. Our mission is simple — leave every
                home better than we found it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-[#39BDE4] hover:bg-[#249FC5] text-white font-bold rounded-xl h-14 px-8 text-sm shadow-lg shadow-[#39BDE4]/20">
                    Book a Clean <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold rounded-xl h-14 px-8 text-sm">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, value: "4.9", label: "Google Rating" },
                { icon: MapPin, value: "15+", label: "Suburbs" },
                { icon: ShieldCheck, value: "100%", label: "Insured" },
                { icon: Award, value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center">
                  <stat.icon className="h-8 w-8 text-[#39BDE4] mx-auto mb-3" />
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Contact Info */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white relative">
        <div className="classic-container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#333365] via-[#2a2a5a] to-[#1e1e4a]">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#39BDE4]/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#249FC5]/10 rounded-full blur-[80px]" />

            <div className="relative z-10 classic-container py-16 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 mb-4">
                    <Phone className="h-4 w-4 text-[#39BDE4]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39BDE4]">
                      Contact Us
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-white/50 text-lg mb-8 leading-relaxed">
                    Whether you need a one-off deep clean or regular maintenance, we&apos;re here to help.
                    Call us directly or request a quote online.
                  </p>

                  <div className="space-y-4">
                    <a
                      href={businessInfo.phoneHref}
                      className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-5 hover:bg-[#39BDE4]/20 transition-all"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/15">
                        <Phone className="h-5 w-5 text-[#39BDE4]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 font-medium">Call us directly</p>
                        <p className="text-lg font-bold text-white">{businessInfo.phoneDisplay}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/15">
                        <MapPin className="h-5 w-5 text-[#39BDE4]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 font-medium">Service area</p>
                        <p className="text-lg font-bold text-white">{businessInfo.address.full}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/15">
                        <Clock className="h-5 w-5 text-[#39BDE4]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 font-medium">Hours</p>
                        {businessInfo.businessHoursDisplay.map((h) => (
                          <p key={h} className="text-sm font-bold text-white">{h}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Link href="/book">
                    <Button size="lg" className="bg-[#39BDE4] hover:bg-[#249FC5] text-white font-bold rounded-xl h-14 text-sm shadow-lg shadow-[#39BDE4]/20">
                      Book a Clean <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold rounded-xl h-14 text-sm">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
