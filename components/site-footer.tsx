"use client"

import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock3,
} from "lucide-react"

import { businessInfo, siteLinks } from "@/lib/business-info"
import { serviceAreaCount, trustBadges } from "@/lib/claims"

const SERVICES = [
  { href: siteLinks.bondCleaning, label: "Bond Cleaning" },
  { href: siteLinks.endOfLeaseCleaning, label: "End of Lease Cleaning" },
  { href: siteLinks.carpetCleaning, label: "Carpet Steam Cleaning" },
  { href: siteLinks.homeCleaning, label: "House & Domestic Cleaning" },
  { href: siteLinks.officeCleaning, label: "Office & Workplace Cleaning" },
  { href: siteLinks.pestControl, label: "End of Lease Pest Control" },
  { href: siteLinks.deepCleaning, label: "Deep Spring Cleaning" },
  { href: "/airbnb-cleaning-gold-coast", label: "Short-Stay Turnover" },
  { href: "/strata-cleaning-gold-coast", label: "Strata & Body Corporate" },
  { href: "/medical-cleaning-gold-coast", label: "Medical & Dental Cleaning" },
]

const LOCATIONS = [
  { name: "Southport", slug: "southport" },
  { name: "Surfers Paradise", slug: "surfers-paradise" },
  { name: "Broadbeach", slug: "broadbeach" },
  { name: "Burleigh Heads", slug: "burleigh-heads" },
  { name: "Robina", slug: "robina" },
  { name: "Nerang", slug: "nerang" },
  { name: "Carrara", slug: "carrara" },
  { name: "Coomera", slug: "coomera" },
]

const COMPANY = [
  { href: siteLinks.about, label: "About Us" },
  { href: siteLinks.gallery, label: "Cleaning Gallery" },
  { href: siteLinks.testimonials, label: "Client Reviews" },
  { href: "/property-managers", label: "For Property Managers" },
  { href: siteLinks.blog, label: "Cleaning & RTA Guides" },
  { href: "/cleaning-prices-gold-coast", label: "Cost & Price Guides" },
  { href: "/blog/end-of-lease-cleaning-requirements-qld", label: "QLD Bond Requirements" },
  { href: siteLinks.contact, label: "Contact & Support" },
  { href: siteLinks.portal, label: "Client Portal" },
]

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer role="contentinfo" className="relative overflow-hidden bg-[#11162f] text-white antialiased">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#39BDE4]/10 blur-3xl" />

      <div className="border-y border-white/10 bg-[#0b1025]">
        <div className="classic-container flex flex-col items-start justify-between gap-4 py-4 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#39BDE4] shadow-[0_0_18px_#39BDE4]" />
            <div>
              <p className="text-sm font-semibold text-white">Need a clean on the Gold Coast?</p>
              <p className="mt-0.5 text-sm text-slate-300">Ask our local team about availability and a clear quote.</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <a href={businessInfo.phoneHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              <Phone className="h-4 w-4 text-[#39BDE4]" />Call {businessInfo.phoneDisplay}
            </a>
            <Link href={siteLinks.book} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#39BDE4] px-5 text-sm font-bold text-[#10162f] transition-colors hover:bg-[#64d0f2]">
              Get a free quote<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="classic-container relative py-10 sm:py-14">
        <section aria-labelledby="footer-trust-title" className="grid overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-900 shadow-2xl shadow-black/20 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-56 md:min-h-72">
            <Image
              src="/pexels-tima-miroshnichenko-6195274.jpg"
              alt="Professional cleaners caring for a home"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11162f]/80 via-[#11162f]/15 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#11162f]/10" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-xl border border-white/20 bg-[#11162f]/75 px-3 py-2.5 text-xs font-semibold text-white backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-auto sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#54c9eb]" />
              A local team you can feel confident booking
            </div>
          </div>

          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#268eae]">The Wave Solution difference</p>
            <h2 id="footer-trust-title" className="mt-2 text-2xl font-bold tracking-tight text-[#20264a] sm:text-3xl">A cleaner home starts with a team you can trust.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Local service, clear communication, and careful work across homes and businesses on the Gold Coast.</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1598bc]" />{badge}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={siteLinks.book} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#333365] px-5 text-sm font-bold text-white transition-colors hover:bg-[#42427e]">Get a free quote<ArrowRight className="h-4 w-4" /></Link>
              <Link href={siteLinks.testimonials} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">Read client reviews</Link>
            </div>
          </div>
        </section>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8 lg:mt-16 lg:grid-cols-12">
          <div className="col-span-2 space-y-5 sm:col-span-4 lg:col-span-4">
            <Link href={siteLinks.home} className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BDE4]">
              <span className="relative block h-12 w-40">
                <Image src="/logo.png" alt="Wave Solution Cleaning" fill className="object-contain object-left brightness-0 invert" sizes="160px" />
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-slate-300">Residential, commercial and bond cleaning across Gold Coast suburbs, with pest treatments available.</p>
            <div className="space-y-3 text-sm">
              <a href={businessInfo.phoneHref} className="flex items-center gap-3 text-slate-200 transition-colors hover:text-[#64d0f2]"><Phone className="h-4 w-4 shrink-0 text-[#39BDE4]" /><span className="font-semibold">{businessInfo.phoneDisplay}</span></a>
              <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-3 break-all text-slate-300 transition-colors hover:text-[#64d0f2]"><Mail className="h-4 w-4 shrink-0 text-[#39BDE4]" /><span>{businessInfo.email}</span></a>
              <Link href={businessInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 transition-colors hover:text-[#64d0f2]"><MapPin className="h-4 w-4 shrink-0 text-[#39BDE4]" /><span>{businessInfo.address.locality}, QLD {businessInfo.address.postalCode}</span></Link>
              <p className="flex items-center gap-3 text-sm text-slate-400"><Clock3 className="h-4 w-4 shrink-0 text-[#39BDE4]" /><span>Mon–Fri 8am–6pm · Sat 9am–4pm</span></p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <a href={businessInfo.socialProfiles.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-lg border border-white/15 px-3 text-xs font-semibold text-slate-200 transition-colors hover:border-[#39BDE4] hover:text-white">Facebook</a>
              <a href={businessInfo.socialProfiles.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-lg border border-white/15 px-3 text-xs font-semibold text-slate-200 transition-colors hover:border-[#39BDE4] hover:text-white">Instagram</a>
              <a href={businessInfo.socialProfiles.google} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-lg border border-white/15 px-3 text-xs font-semibold text-slate-200 transition-colors hover:border-[#39BDE4] hover:text-white">Google Business</a>
            </div>
          </div>

          <FooterLinkColumn title="Cleaning Services" items={SERVICES.map((item) => ({ href: item.href, label: item.label }))} className="col-span-1 lg:col-span-3" />

          <div className="col-span-1 space-y-4 lg:col-span-2">
            <FooterHeading>Service Areas</FooterHeading>
            <ul className="space-y-3 text-sm">
              {LOCATIONS.map((loc) => <li key={loc.name}><Link href={`/locations/${loc.slug}`} className="text-slate-300 transition-colors hover:text-[#64d0f2]">{loc.name}</Link></li>)}
              <li className="pt-1"><Link href={siteLinks.locations} className="font-semibold text-[#64d0f2] hover:text-white">All {serviceAreaCount} suburbs<ArrowRight className="ml-1 inline h-3.5 w-3.5" /></Link></li>
            </ul>
          </div>

          <FooterLinkColumn title="Company & Resources" items={COMPANY.map((item) => ({ href: item.href, label: item.label }))} className="col-span-2 sm:col-span-4 lg:col-span-3" />
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0b1025]">
        <div className="classic-container flex flex-col gap-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved. Gold Coast, Queensland.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-end">
            <Link href={siteLinks.contact} className="transition-colors hover:text-white">Contact</Link>
            <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-white">Sitemap</Link>
            <Link href={siteLinks.portal} className="font-semibold text-slate-300 transition-colors hover:text-[#64d0f2]">Client portal</Link>
            <button type="button" onClick={scrollToTop} aria-label="Scroll to top" className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 text-slate-200 transition-colors hover:border-[#39BDE4] hover:bg-[#39BDE4] hover:text-[#10162f]">
              Top<ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <h3 className="text-sm font-bold text-white">{children}</h3>
      <div className="h-0.5 w-9 rounded-full bg-[#39BDE4]" />
    </>
  )
}

function FooterLinkColumn({ title, items, className }: { title: string; items: Array<{ href: string; label: string }>; className: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <FooterHeading>{title}</FooterHeading>
      <ul className="space-y-3 text-sm">
        {items.map((item) => <li key={item.label}><Link href={item.href} className="text-slate-300 transition-colors hover:text-[#64d0f2]">{item.label}</Link></li>)}
      </ul>
      {title === "Company & Resources" && <Link href={siteLinks.book} className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3.5 text-xs font-semibold text-white transition-colors hover:border-[#39BDE4] hover:bg-[#39BDE4] hover:text-[#10162f]">Instant quote calculator</Link>}
    </div>
  )
}
