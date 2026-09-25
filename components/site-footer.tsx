"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

import { businessInfo, siteLinks } from "@/lib/business-info"
import { ObfuscatedEmail } from "@/components/obfuscated-email"

const SERVICES = [
  { href: siteLinks.bondCleaning, label: "Bond Cleaning" },
  { href: siteLinks.endOfLeaseCleaning, label: "End of Lease Cleaning" },
  { href: siteLinks.carpetCleaning, label: "Carpet Steam Cleaning" },
  { href: siteLinks.homeCleaning, label: "House & Domestic Cleaning" },
  { href: siteLinks.officeCleaning, label: "Office & Workplace Cleaning" },
  { href: siteLinks.pestControl, label: "End of Lease Pest Control" },
  { href: siteLinks.deepCleaning, label: "Deep Spring Cleaning" },
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
  { href: siteLinks.testimonials, label: "Client Reviews" },
  { href: siteLinks.blog, label: "Cleaning & RTA Guides" },
  { href: "/blog/end-of-lease-cleaning-requirements-qld", label: "QLD Bond Requirements" },
  { href: siteLinks.contact, label: "Contact & Support" },
  { href: siteLinks.portal, label: "Client Portal" },
]

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer role="contentinfo" className="border-t border-white/10 bg-[#1c1c38] text-white/75 antialiased">
      {/* Slim Top Conversion Bar - Matching Site Navy & Teal */}
      <div className="border-b border-white/10 bg-[#15152c]">
        <div className="classic-container py-3.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-white/90">
              <span className="flex h-2 w-2 rounded-full bg-[#39BDE4]" />
              <span>
                <strong className="text-white font-semibold">Need a clean on the Gold Coast?</strong> We reply within 15 minutes during business hours.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={businessInfo.phoneHref}
                className="font-medium text-white/80 hover:text-[#39BDE4] transition-colors"
              >
                Call {businessInfo.phoneDisplay}
              </a>
              <span className="text-white/20">•</span>
              <Link
                href={siteLinks.book}
                className="inline-flex items-center gap-1 font-semibold text-[#39BDE4] hover:text-[#64d0f2] transition-colors"
              >
                <span>Book Online</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Compact Content Grid */}
      <div className="classic-container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand & Direct Contact (Col 1 - 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href={siteLinks.home} className="inline-block">
              <div className="relative h-10 w-32">
                <Image
                  src="/logo.png"
                  alt="Wave Solution Cleaning"
                  fill
                  className="object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
                  sizes="128px"
                />
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-white/70 max-w-sm">
              Professional residential, commercial, and bond exit cleaning across all major Gold Coast suburbs. Fully insured and police-checked.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <a
                href={businessInfo.phoneHref}
                className="flex items-center gap-2.5 text-white/90 hover:text-[#39BDE4] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#39BDE4] shrink-0" />
                <span className="font-semibold text-white">{businessInfo.phoneDisplay}</span>
              </a>

              <div className="flex items-center gap-2.5 text-white/80">
                <Mail className="h-3.5 w-3.5 text-[#39BDE4] shrink-0" />
                <ObfuscatedEmail className="hover:text-[#39BDE4] transition-colors cursor-pointer" />
              </div>

              <Link
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/70 hover:text-[#39BDE4] transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-[#39BDE4] shrink-0" />
                <span>{businessInfo.address.locality}, QLD {businessInfo.address.postalCode}</span>
              </Link>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="flex items-center gap-3 pt-2 text-[11px] text-white/50">
              <span className="flex items-center gap-1.5 text-white/70">
                <ShieldCheck className="h-3.5 w-3.5 text-[#39BDE4]" />
                $10M Insured
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-white/70">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#39BDE4]" />
                72h Re-Clean Guarantee
              </span>
            </div>
          </div>

          {/* Cleaning Services (Col 2 - 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <div className="h-0.5 w-8 rounded-full bg-[#39BDE4]" />
            <ul className="space-y-2 text-xs">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#39BDE4] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas (Col 3 - 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Areas
            </h4>
            <div className="h-0.5 w-8 rounded-full bg-[#39BDE4]" />
            <ul className="space-y-2 text-xs">
              {LOCATIONS.map((loc) => (
                <li key={loc.name}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-white/70 hover:text-[#39BDE4] transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href={siteLinks.locations}
                  className="font-semibold text-[#39BDE4] hover:text-[#64d0f2] transition-colors"
                >
                  All 18+ Suburbs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources (Col 4 - 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company &amp; Resources
            </h4>
            <div className="h-0.5 w-8 rounded-full bg-[#39BDE4]" />
            <ul className="space-y-2 text-xs">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#39BDE4] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href={siteLinks.book}
                className="inline-flex h-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-3.5 text-xs font-semibold text-white hover:bg-[#39BDE4] hover:border-[#39BDE4] transition-colors"
              >
                Instant Quote Calculator
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Slim Bottom Bar */}
      <div className="border-t border-white/10 bg-[#15152c] py-4">
        <div className="classic-container flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved. Gold Coast, Queensland.
          </p>

          <div className="flex items-center gap-4">
            <Link href={siteLinks.contact} className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href={siteLinks.portal} className="hover:text-[#39BDE4] transition-colors font-medium">
              Portal
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="inline-flex items-center gap-1 rounded border border-white/15 bg-white/5 px-2 py-1 text-white/70 hover:text-white hover:bg-[#39BDE4] hover:border-[#39BDE4] transition-colors ml-1"
            >
              <span>Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
