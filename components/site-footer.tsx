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
    <footer role="contentinfo" className="border-t border-slate-800/80 bg-[#0c1017] text-slate-400 antialiased">
      {/* Slim Top Conversion Bar */}
      <div className="border-b border-slate-800/60 bg-slate-900/40">
        <div className="classic-container py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3 text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>
                <strong className="text-white font-semibold">Need a clean on the Gold Coast?</strong> We reply within 15 minutes during business hours.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={businessInfo.phoneHref}
                className="font-medium text-slate-300 hover:text-white transition-colors"
              >
                Call {businessInfo.phoneDisplay}
              </a>
              <span className="text-slate-600">•</span>
              <Link
                href={siteLinks.book}
                className="inline-flex items-center gap-1 font-semibold text-sky-400 hover:text-sky-300 transition-colors"
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
              <div className="relative h-9 w-28">
                <Image
                  src="/logo.png"
                  alt="Wave Solution Cleaning"
                  fill
                  className="object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                  sizes="112px"
                />
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Professional residential, commercial, and bond exit cleaning across all major Gold Coast suburbs. Fully insured and police-checked.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <a
                href={businessInfo.phoneHref}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span className="font-semibold">{businessInfo.phoneDisplay}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <ObfuscatedEmail className="hover:text-white transition-colors cursor-pointer" />
              </div>

              <Link
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span>{businessInfo.address.locality}, QLD {businessInfo.address.postalCode}</span>
              </Link>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                $10M Insured
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                72h Re-Clean Guarantee
              </span>
            </div>
          </div>

          {/* Cleaning Services (Col 2 - 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas (Col 3 - 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {LOCATIONS.map((loc) => (
                <li key={loc.name}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href={siteLinks.locations}
                  className="font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  All 18+ Suburbs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal (Col 4 - 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Company &amp; Resources
            </h4>
            <ul className="space-y-2 text-xs">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href={siteLinks.book}
                className="inline-flex h-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 px-3.5 text-xs font-medium text-white hover:bg-slate-700 hover:border-slate-600 transition-colors"
              >
                Instant Quote Calculator
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Slim Bottom Bar */}
      <div className="border-t border-slate-800/60 py-5">
        <div className="classic-container flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved. Gold Coast, Queensland.
          </p>

          <div className="flex items-center gap-4">
            <Link href={siteLinks.contact} className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">
              Blog
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
            <Link href={siteLinks.portal} className="hover:text-slate-300 transition-colors">
              Portal
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="inline-flex items-center gap-1 rounded px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
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
