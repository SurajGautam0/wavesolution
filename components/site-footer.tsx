"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUp,
  Award,
  CheckCircle2,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  FileText,
  CreditCard,
  Check,
  Copy,
} from "lucide-react"

import { businessInfo, siteLinks } from "@/lib/business-info"
import { NewsletterForm } from "@/components/newsletter-form"
import { ObfuscatedEmail } from "@/components/obfuscated-email"

// Structured Navigation Data
const SERVICE_LINKS = [
  { href: siteLinks.bondCleaning, label: "Bond Cleaning Gold Coast", badge: "Popular" },
  { href: siteLinks.endOfLeaseCleaning, label: "End of Lease Cleaning", badge: "Guarantee" },
  { href: siteLinks.carpetCleaning, label: "Carpet Steam Cleaning" },
  { href: siteLinks.homeCleaning, label: "House & Domestic Cleaning" },
  { href: siteLinks.deepCleaning, label: "Deep Spring Cleaning" },
  { href: siteLinks.officeCleaning, label: "Office & Workplace Cleaning" },
  { href: siteLinks.commercialCleaning, label: "Commercial Cleaning" },
  { href: siteLinks.moveInCleaning, label: "Move-In Handover Clean" },
  { href: siteLinks.pestControl, label: "End of Lease Pest Control" },
  { href: siteLinks.afterBuildersCleaning, label: "After Builders Cleaning" },
]

const KEY_LOCATIONS = [
  { name: "Southport", slug: "southport" },
  { name: "Surfers Paradise", slug: "surfers-paradise" },
  { name: "Broadbeach", slug: "broadbeach" },
  { name: "Burleigh Heads", slug: "burleigh-heads" },
  { name: "Robina", slug: "robina" },
  { name: "Coomera", slug: "coomera" },
  { name: "Palm Beach", slug: "palm-beach" },
  { name: "Helensvale", slug: "helensvale" },
  { name: "Varsity Lakes", slug: "varsity-lakes" },
  { name: "Nerang", slug: "nerang" },
]

const COMPANY_LINKS = [
  { href: siteLinks.about, label: "About Wave Solution" },
  { href: siteLinks.team, label: "Our Team & Leadership" },
  { href: siteLinks.testimonials, label: "Client Reviews (4.9★)" },
  { href: siteLinks.blog, label: "Cleaning & Tenancy Blog" },
  { href: "/blog/end-of-lease-cleaning-requirements-qld", label: "QLD Bond Requirements Guide" },
  { href: "/blog/end-of-lease-cleaning-cost-gold-coast", label: "Gold Coast Price Guide 2026" },
  { href: siteLinks.gallery, label: "Before & After Results" },
  { href: siteLinks.contact, label: "Contact & Support" },
]

const CLIENT_TOOLS = [
  { href: siteLinks.book, label: "Instant Online Booking" },
  { href: siteLinks.contact, label: "Request a Fixed Quote" },
  { href: siteLinks.portal, label: "Customer Portal Login" },
  { href: "/blog/bond-cleaning-checklist", label: "Printable Bond Checklist" },
  { href: siteLinks.locations, label: "All 18+ Suburb Hubs" },
]

const TRUST_METRICS = [
  {
    icon: Star,
    title: "4.9 / 5 Rating",
    subtitle: "87+ Verified Google reviews across Gold Coast",
  },
  {
    icon: ShieldCheck,
    title: "$10M Public Liability",
    subtitle: "Fully insured & police-checked local staff",
  },
  {
    icon: Award,
    title: "100% Bond Guarantee",
    subtitle: "Free 72-hour re-clean if inspection fails",
  },
  {
    icon: Clock,
    title: "< 15 Min Response",
    subtitle: "Fast quoting during business hours",
  },
]

export function SiteFooter() {
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("0450833683")
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative border-t border-slate-200/80 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      {/* =========================================================================
          PRE-FOOTER CONVERSION COMMAND CENTER
          Engineered dual-action card with real trust proof points
         ========================================================================= */}
      <section className="classic-container -mb-10 relative z-20 pt-12 md:pt-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#181830] via-[#23234d] to-[#121226] p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-white/10">
          {/* Subtle ambient lighting glows */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#39BDE4]/15 blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            {/* Left Copy */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#39BDE4]/40 bg-[#39BDE4]/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#39BDE4]">
                <Sparkles className="h-3.5 w-3.5" />
                Gold Coast Cleaning &amp; Pest Handover Specialists
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Ready for an immaculate home or 100% bond return?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Book in under 2 minutes with upfront fixed pricing. Every vacate clean is covered by our genuine 72-hour re-clean guarantee matching Queensland RTA inspection standards.
              </p>
            </div>

            {/* Right Action Block */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center lg:items-end">
              <Link
                href={siteLinks.book}
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#39BDE4] px-8 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-[#39BDE4]/20 transition-all hover:bg-[#28a9cf] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Instant Fixed Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center gap-2">
                <a
                  href={businessInfo.phoneHref}
                  className="inline-flex h-14 flex-1 sm:flex-initial items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <Phone className="h-3.5 w-3.5 text-[#39BDE4]" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  aria-label="Copy phone number"
                  className="hidden sm:inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Micro Trust Bar inside Card */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            {TRUST_METRICS.map((metric) => {
              const Icon = metric.icon
              return (
                <div key={metric.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#39BDE4]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">{metric.title}</p>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{metric.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN FOOTER COMPONENT
          Deep midnight backdrop (#0C1019) with engineered responsive layout
         ========================================================================= */}
      <footer role="contentinfo" className="bg-[#0C1019] text-slate-300 pt-24 pb-12 antialiased">
        <div className="classic-container">
          {/* Main 5-Column Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 pb-14 border-b border-white/[0.08]">
            
            {/* Col 1: Brand & Contact Hub (Span 4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <Link href={siteLinks.home} className="inline-block group">
                <div className="relative h-12 w-36">
                  <Image
                    src="/logo.png"
                    alt="Wave Solution Cleaning"
                    fill
                    className="object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
                    sizes="144px"
                  />
                </div>
              </Link>

              <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                Gold Coast&apos;s trusted residential, commercial, and bond exit cleaning specialists. Fully insured, police-checked, and committed to high standards on every job.
              </p>

              {/* Operating Status Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 text-xs text-emerald-300 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open Mon–Sat: 8:00 AM – 6:00 PM AEST</span>
              </div>

              {/* Verified Contact Details */}
              <address className="not-italic space-y-3 pt-2 text-sm">
                <a
                  href={businessInfo.phoneHref}
                  className="flex items-center gap-3 text-slate-300 hover:text-[#39BDE4] transition-colors group"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#39BDE4] group-hover:bg-[#39BDE4] group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider block text-slate-500 font-bold">Direct Phone</span>
                    <span className="font-bold text-white">{businessInfo.phoneDisplay}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-slate-300 hover:text-[#39BDE4] transition-colors group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#39BDE4] group-hover:bg-[#39BDE4] group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider block text-slate-500 font-bold">Email Support</span>
                    <ObfuscatedEmail className="font-medium text-white hover:text-[#39BDE4] transition-colors cursor-pointer" />
                  </div>
                </div>

                <Link
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-[#39BDE4] transition-colors group"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#39BDE4] group-hover:bg-[#39BDE4] group-hover:text-white transition-colors">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider block text-slate-500 font-bold">Headquarters</span>
                    <span className="text-white text-xs">{businessInfo.address.full}</span>
                  </div>
                </Link>
              </address>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-2">
                <Link
                  href={businessInfo.socialProfiles.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile & Reviews"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:bg-[#39BDE4] hover:text-white hover:border-[#39BDE4] transition-all"
                >
                  <Star className="h-4 w-4" />
                </Link>
                <Link
                  href={businessInfo.socialProfiles.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Page"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:bg-[#39BDE4] hover:text-white hover:border-[#39BDE4] transition-all"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href={businessInfo.socialProfiles.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:bg-[#39BDE4] hover:text-white hover:border-[#39BDE4] transition-all"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Col 2: Cleaning Services (Span 3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#39BDE4]" />
                Cleaning Services
              </h3>
              <nav aria-label="Services Navigation">
                <ul className="space-y-2 text-sm">
                  {SERVICE_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between py-1 text-slate-400 hover:text-white transition-colors"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                        {link.badge && (
                          <span className="rounded-md bg-white/[0.07] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#39BDE4] border border-white/10">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Col 3: Key Suburbs & Local Hubs (Span 2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#39BDE4]" />
                Service Areas
              </h3>
              <nav aria-label="Service Areas Navigation">
                <ul className="space-y-2 text-sm">
                  {KEY_LOCATIONS.map((loc) => (
                    <li key={loc.name}>
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="group flex items-center text-slate-400 hover:text-white transition-colors py-0.5"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">{loc.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href={siteLinks.locations}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#39BDE4] hover:underline"
                    >
                      <span>All 18+ Suburbs</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Col 4: Company & Newsletter (Span 3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#39BDE4]" />
                  Company &amp; Tools
                </h3>
                <nav aria-label="Company Navigation">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm">
                    {COMPANY_LINKS.slice(0, 5).map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block py-0.5"
                      >
                        {link.label}
                      </Link>
                    ))}
                    {CLIENT_TOOLS.slice(0, 3).map((tool) => (
                      <Link
                        key={tool.label}
                        href={tool.href}
                        className="text-slate-400 hover:text-[#39BDE4] transition-colors py-0.5 font-medium"
                      >
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>

              {/* Newsletter Box */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 sm:p-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Monthly Cleaning &amp; Tenancy Tips
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Join 1,200+ Gold Coast tenants &amp; homeowners receiving seasonal checklists and private promo codes.
                </p>
                <NewsletterForm />
                <p className="text-[10px] text-slate-500">
                  Zero spam. We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>

          </div>

          {/* =========================================================================
              SECURITY, ACCREDITATION & PAYMENT METHODS BANNER
             ========================================================================= */}
          <div className="py-8 border-b border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="h-4 w-4 text-[#39BDE4]" />
                $10,000,000 Insured
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                QPS Police-Checked Cleaners
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="h-4 w-4 text-amber-400" />
                RTA Form 14a Aligned
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <FileText className="h-4 w-4 text-[#39BDE4]" />
                Registered Australian Business
              </span>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mr-1">Accepted:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {["Visa", "Mastercard", "AMEX", "Apple Pay", "EFT / Bank Transfer", "Stripe"].map((pm) => (
                  <span
                    key={pm}
                    className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[10px] font-semibold text-slate-300"
                  >
                    {pm}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================================
              BOTTOM BAR: COPYRIGHT, LEGAL LINKS & BACK TO TOP
             ========================================================================= */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="text-center sm:text-left space-y-1">
              <p>
                &copy; {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved.
              </p>
              <p className="text-[11px] text-slate-600">
                Serving the Gold Coast, Queensland region from Coolangatta to Coomera.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-slate-400">
              <Link href={siteLinks.book} className="hover:text-white transition-colors">
                Book a Clean
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href={siteLinks.contact} className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link href={siteLinks.portal} className="hover:text-[#39BDE4] transition-colors font-medium">
                Client Portal
              </Link>

              {/* Back to top smooth button */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1.5 text-[11px] text-slate-300 hover:bg-[#39BDE4] hover:text-white hover:border-[#39BDE4] transition-all ml-2"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-3 w-3" />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
