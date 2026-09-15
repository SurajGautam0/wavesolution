import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

import { businessInfo, siteLinks } from "@/lib/business-info"
import { NewsletterForm } from "@/components/newsletter-form"

const serviceLinks = [
  { href: siteLinks.homeCleaning, label: "House Cleaning" },
  { href: siteLinks.officeCleaning, label: "Office Cleaning" },
  { href: siteLinks.bondCleaning, label: "Bond Cleaning" },
  { href: siteLinks.endOfLeaseCleaning, label: "End of Lease Cleaning" },
  { href: siteLinks.moveInCleaning, label: "Move-In Cleaning" },
  { href: siteLinks.commercialCleaning, label: "Commercial Cleaning" },
  { href: siteLinks.deepCleaning, label: "Deep Cleaning" },
  { href: siteLinks.carpetCleaning, label: "Carpet Cleaning" },
  { href: siteLinks.pestControl, label: "Pest Control" },
]

const companyLinks = [
  { href: siteLinks.about, label: "About Us" },
  { href: siteLinks.team, label: "Our Team" },
  { href: siteLinks.testimonials, label: "Reviews" },
  { href: siteLinks.blog, label: "Blog" },
  { href: siteLinks.locations, label: "Service Areas" },
  { href: siteLinks.contact, label: "Contact" },
  { href: siteLinks.book, label: "Book Online" },
  { href: siteLinks.portal, label: "Client Portal" },
]

const socialLinks = [
  { href: businessInfo.googleBusinessProfile, label: "Google Maps", Icon: MapPin },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://twitter.com", label: "X (Twitter)", Icon: Twitter },
]

export function SiteFooter() {
  return (
    <>
      {/* Pre-footer CTA band */}
      <section className="bg-white py-12 md:py-16">
        <div className="classic-container">
          <div className="stat-band rounded-[2.5rem] p-8 text-center shadow-xl sm:p-12">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#39BDE4]">
              Fast Response · No Hidden Fees
            </p>
            <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              Need a Cleaner Today?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Request a free quote online or call us now — our Gold Coast team replies within
              15 minutes during business hours.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={siteLinks.book}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#39BDE4] px-8 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-[#249FC5]"
              >
                Get a Free Quote
              </Link>
              <a
                href={businessInfo.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#39BDE4] px-8 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-[#249FC5]"
              >
                <Phone className="h-4 w-4" />
                Call {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="classic-footer">
        <div className="classic-container py-12 md:py-16">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_0.9fr_1.1fr]">
            {/* Brand */}
            <div className="space-y-5">
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
                Professional cleaning, carpet cleaning, and pest control services for homes,
                offices, rental properties, and local businesses across the Gold Coast.
              </p>

              <div className="space-y-2.5 text-sm">
                <Link
                  href={businessInfo.phoneHref}
                  className="flex items-center gap-3 font-bold text-white transition-colors hover:text-[#39BDE4]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4 text-[#39BDE4]" />
                  </span>
                  {businessInfo.phoneDisplay}
                </Link>
                <Link
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 text-white/75 transition-colors hover:text-[#39BDE4]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4 text-[#39BDE4]" />
                  </span>
                  <span className="break-all">{businessInfo.email}</span>
                </Link>
                <Link
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/75 transition-colors hover:text-[#39BDE4]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4 w-4 text-[#39BDE4]" />
                  </span>
                  {businessInfo.address.full}
                </Link>
              </div>

              <div className="flex gap-3 pt-1">
                {socialLinks.map(({ href, label, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#39BDE4]"
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Services</h3>
              <div className="mb-5 mt-3 h-1 w-12 rounded-full bg-[#39BDE4]" />
              <ul className="grid gap-3 text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/75 transition-colors hover:text-[#39BDE4]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Company</h3>
              <div className="mb-5 mt-3 h-1 w-12 rounded-full bg-[#39BDE4]" />
              <ul className="grid gap-3 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/75 transition-colors hover:text-[#39BDE4]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Stay Updated</h3>
              <div className="mb-5 mt-3 h-1 w-12 rounded-full bg-[#39BDE4]" />
              <p className="mb-4 text-sm leading-7 text-white/75">
                Cleaning tips, seasonal offers and priority service updates. No spam.
              </p>
              <NewsletterForm />
              <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Gold Coast</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Since 2010</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Fully Insured</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <Link href={siteLinks.book} className="transition-colors hover:text-[#39BDE4]">
                Book Now
              </Link>
              <Link href={siteLinks.contact} className="transition-colors hover:text-[#39BDE4]">
                Contact
              </Link>
              <Link href={siteLinks.portal} className="transition-colors hover:text-[#39BDE4]">
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
