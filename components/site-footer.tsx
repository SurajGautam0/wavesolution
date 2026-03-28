import Image from "next/image"
import Link from "next/link"
import { Clock3, Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

import { businessInfo, siteLinks } from "@/lib/business-info"

const primaryLinks = [
  { href: siteLinks.services, label: "Services" },
  { href: siteLinks.blog, label: "Blog" },
  { href: siteLinks.cleaningGoldCoast, label: "Cleaning Gold Coast" },
  { href: siteLinks.homeCleaning, label: "House Cleaning" },
  { href: siteLinks.officeCleaning, label: "Office Cleaning" },
  { href: siteLinks.locations, label: "Locations" },
  { href: siteLinks.bondCleaning, label: "Bond Cleaning" },
  { href: siteLinks.moveInCleaning, label: "Move-In Cleaning" },
  { href: siteLinks.commercialCleaning, label: "Commercial Cleaning" },
  { href: siteLinks.afterBuildersCleaning, label: "After Builders" },
  { href: siteLinks.carpetCleaning, label: "Carpet Cleaning" },
  { href: siteLinks.pestControl, label: "Pest Control" },
  { href: siteLinks.team, label: "Team" },
  { href: siteLinks.contact, label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="classic-footer border-t border-white/10">
      <div className="classic-container py-10 md:py-12">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.2fr_0.85fr_1fr]">
          <div className="space-y-4">
            <Link href={siteLinks.home} className="inline-flex">
              <div className="relative h-14 w-36 sm:h-16 sm:w-40">
                <Image
                  src="/logo.png"
                  alt="Wave Solution Cleaning"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>

            <p className="max-w-md text-sm leading-7 text-white/75">
              Professional cleaning, carpet cleaning, and pest control services for homes, offices, rental properties, and local businesses across the Gold Coast.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Gold Coast</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Since 2010</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Fully Insured</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Quick Links</h3>
            <div className="mb-4 mt-3 h-1 w-12 rounded-full bg-secondary" />
            <ul className="grid gap-3 text-sm">
              {primaryLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/75 transition-colors hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Contact</h3>
            <div className="mb-4 mt-3 h-1 w-12 rounded-full bg-secondary" />
            <div className="space-y-3 text-sm text-white/75">
              <Link href={businessInfo.phoneHref} className="flex items-start gap-3 transition-colors hover:text-secondary">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{businessInfo.phoneDisplay}</span>
              </Link>
              <Link href={`mailto:${businessInfo.email}`} className="flex items-start gap-3 transition-colors hover:text-secondary">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span className="break-all">{businessInfo.email}</span>
              </Link>
              <Link href={businessInfo.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-colors hover:text-secondary">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{businessInfo.address.full}</span>
              </Link>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <div className="space-y-1">
                  {businessInfo.businessHoursDisplay.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-white/60 hover:text-white transition-colors" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-white/60 hover:text-white transition-colors" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white/60 hover:text-white transition-colors" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-white/60 hover:text-white transition-colors" />
            </Link>
            <Link href="https://twitter.com" aria-label="X (Twitter)">
              <Twitter className="h-5 w-5 text-white/60 hover:text-white transition-colors" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={siteLinks.book} className="transition-colors hover:text-secondary">
              Book Now
            </Link>
            <Link href={siteLinks.contact} className="transition-colors hover:text-secondary">
              Contact
            </Link>
            <Link href={siteLinks.portal} className="transition-colors hover:text-secondary">
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
