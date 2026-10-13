import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight, BadgeCheck, Heart, ClipboardList, Users, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"
import { serviceAreaCount } from "@/lib/claims"

export const metadata: Metadata = {
  title: "About Wave Solution | Gold Coast Cleaning & Pest Control",
  description:
    "Wave Solution is a locally owned Gold Coast cleaning company. Fully insured, police-checked team serving homes, offices and rentals across the Gold Coast.",
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

/** What customers get on every single job — shown in the hero. */
const heroStats = [
  { emoji: "🛡️", value: "Insured", label: "Public liability" },
  { emoji: "👮", value: "Vetted", label: "Police-checked" },
  { emoji: "⏱️", value: "15 min", label: "Quote response" },
  { emoji: "✅", value: "Free", label: "Re-clean guarantee" },
]

/** Credentials — deliberately different from the hero stats above. */
const credentials = [
  { emoji: "🇦🇺", label: "Locally owned", value: "Gold Coast" },
  { emoji: "📍", label: "Suburbs serviced", value: String(serviceAreaCount) },
  { emoji: "🛡️", label: "Insured & police-checked", value: "Fully" },
  { emoji: "🔁", label: "Re-clean guarantee", value: "Free" },
]

const differentiators = [
  {
    emoji: "📞",
    title: "You Talk to the Business Owner",
    desc: "When you call 0450 833 683, you reach Sushant or Veshraj directly — not a call centre or answering machine. Decisions get made fast.",
  },
  {
    emoji: "👮",
    title: "Police-Checked, Insured Staff",
    desc: "Every team member holds a current national police check and we carry full public liability insurance. You can verify this before we start.",
  },
  {
    emoji: "📋",
    title: "We Clean to a Checklist",
    desc: "Every job follows a documented checklist specific to the property type — residential, bond, office, or commercial. Nothing gets missed.",
  },
  {
    emoji: "📄",
    title: "Real Insurance, Not Just a Claim",
    desc: "We carry public liability insurance and can provide a certificate of currency on request. Your property is actually protected.",
  },
  {
    emoji: "🗺️",
    title: "Local Gold Coast Coverage",
    desc: "We service Southport, Robina, Broadbeach, Surfers Paradise, Burleigh Heads, Nerang, Helensvale, Coomera, Palm Beach, Varsity Lakes and more.",
  },
  {
    emoji: "🤝",
    title: "Same Team, Consistent Results",
    desc: "We don't send random contractors. You get the same trained team members who know your property and your preferences.",
  },
]

/** Simple, honest three-step explanation of how a job runs. */
const process = [
  { emoji: "💬", step: "01", title: "Tell us the job", desc: "Call, WhatsApp, or send the online form. We ask the handful of questions that actually change the price." },
  { emoji: "📝", step: "02", title: "Get a clear quote", desc: "A fixed price with the scope written down — what's included, what costs extra, and how long it takes." },
  { emoji: "✨", step: "03", title: "We clean it", desc: "The agreed team arrives on time and works to the checklist. If something isn't right, we come back and fix it." },
]

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

        {/* Decorative emoji — hidden from assistive tech */}
        <div className="pointer-events-none absolute inset-0 hidden select-none md:block" aria-hidden="true">
          <span className="absolute left-[6%] top-[26%] text-4xl opacity-15">🫧</span>
          <span className="absolute right-[8%] top-[20%] text-3xl opacity-20">✨</span>
          <span className="absolute left-[13%] bottom-[18%] text-3xl opacity-15">🧽</span>
          <span className="absolute right-[12%] bottom-[24%] text-4xl opacity-10">🧴</span>
        </div>

        <div className="classic-container relative z-10 py-20 sm:py-28 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#39BDE4] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39BDE4]">
                Gold Coast Owned &amp; Operated
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
              <span className="mr-3 inline-block" aria-hidden="true">🌊</span>
              The People Behind
              <br />
              <span className="bg-gradient-to-r from-[#39BDE4] to-[#249FC5] bg-clip-text text-transparent">Wave Solution</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-[#39BDE4] to-[#249FC5] mx-auto mb-8 rounded-full" />

            <p className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
              A dedicated cleaning and pest control team serving Gold Coast homes, offices, and rental properties.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 px-6 py-5 min-w-[118px]">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/15 text-2xl leading-none">
                    <span aria-hidden="true">{stat.emoji}</span>
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/pexels-helenalopes-27176670.jpg"
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
                  <div className="w-11 h-11 rounded-xl bg-[#39BDE4]/10 flex items-center justify-center text-xl leading-none">
                    <span aria-hidden="true">📖</span>
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
                  commercial, bond, and end of lease cleaning across {serviceAreaCount} Gold Coast suburbs.
                </p>
                <p>
                  We&apos;re not an impersonal franchise or a faceless booking app that outsources to unknown contractors.
                  We&apos;re a local Gold Coast business with a real address, a direct phone number, and a fully insured,
                  police-checked team that arrives on time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {credentials.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-gradient-to-br from-[#F3F3F3] to-white p-5 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg leading-none" aria-hidden="true">{item.emoji}</span>
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
            {differentiators.map((item) => (
              <div key={item.title} className="group rounded-2xl bg-white p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#39BDE4]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/10 text-2xl leading-none group-hover:bg-[#39BDE4]/20 transition-colors">
                    <span aria-hidden="true">{item.emoji}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#333365] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="classic-container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#39BDE4]/10 px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 text-[#39BDE4]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39BDE4]">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#333365] tracking-tight mb-4">
              Three Steps, No Surprises
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From first message to finished clean, here is exactly what happens.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-gray-100 bg-gradient-to-br from-[#F3F3F3] to-white p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-3xl leading-none" aria-hidden="true">{item.emoji}</span>
                  <span className="text-[11px] font-black tracking-[0.2em] text-[#39BDE4]">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-[#333365] mb-2">{item.title}</h3>
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
        <div className="pointer-events-none absolute inset-0 hidden select-none lg:block" aria-hidden="true">
          <span className="absolute left-[5%] top-[20%] text-3xl opacity-10">🤝</span>
          <span className="absolute right-[6%] bottom-[22%] text-3xl opacity-10">💙</span>
        </div>
        <div className="classic-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#39BDE4]/10 px-4 py-2 mb-4">
                <Heart className="h-4 w-4 text-[#39BDE4]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39BDE4]">
                  Founder&apos;s Story
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
                    <span className="mr-2" aria-hidden="true">🧹</span>
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: Users, title: "Sushant Timalcena", role: "Founder & CEO", desc: "Sets the standard on every quote and stays reachable on the phone." },
                { icon: ClipboardList, title: "Veshraj Gautam", role: "Operations Manager", desc: "Runs the checklists, staff screening and equipment standards." },
              ].map((person) => (
                <div key={person.title} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#39BDE4]/15 mb-4">
                    <person.icon className="h-5 w-5 text-[#39BDE4]" />
                  </div>
                  <p className="text-lg font-bold text-white">{person.title}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#39BDE4] mt-1">{person.role}</p>
                  <p className="text-sm text-white/50 mt-3 leading-relaxed">{person.desc}</p>
                </div>
              ))}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:col-span-2">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <span aria-hidden="true">🛡️</span> Public liability insured
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <span aria-hidden="true">👮</span> National police checks
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <span aria-hidden="true">🔁</span> Free re-clean guarantee
                  </span>
                </div>
              </div>
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/15 text-xl leading-none">
                        <span aria-hidden="true">📞</span>
                      </div>
                      <div>
                        <p className="text-sm text-white/50 font-medium">Call us directly</p>
                        <p className="text-lg font-bold text-white">{businessInfo.phoneDisplay}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/15 text-xl leading-none">
                        <span aria-hidden="true">📍</span>
                      </div>
                      <div>
                        <p className="text-sm text-white/50 font-medium">Service area</p>
                        <p className="text-lg font-bold text-white">{businessInfo.address.full}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/15 text-xl leading-none">
                        <span aria-hidden="true">🕒</span>
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
                    <Button size="lg" className="w-full bg-[#39BDE4] hover:bg-[#249FC5] text-white font-bold rounded-xl h-14 text-sm shadow-lg shadow-[#39BDE4]/20">
                      <span className="mr-2" aria-hidden="true">📨</span>
                      Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 font-bold rounded-xl h-14 text-sm">
                      View All Services
                    </Button>
                  </Link>
                  <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-white/60">
                      <span className="inline-flex items-center gap-1.5">
                        <span aria-hidden="true">🛡️</span> Fully insured
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span aria-hidden="true">👮</span> Police-checked
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span aria-hidden="true">💳</span> No payment now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
