"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ObfuscatedEmail } from "@/components/obfuscated-email"
import {
  Briefcase,
  Bug,
  Building2,
  ChevronDown,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  Repeat,
  ShieldCheck,
  Sparkles,
  Truck,
  User,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { businessInfo, siteLinks } from "@/lib/business-info"

interface ServiceItem {
  href: string
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const residentialServices: ServiceItem[] = [
  {
    href: siteLinks.homeCleaning,
    label: "House Cleaning",
    description: "Regular weekly, fortnightly, or one-off home cleaning",
    icon: Home,
  },
  {
    href: siteLinks.deepCleaning,
    label: "Deep Cleaning",
    description: "Detailed spring cleans & thorough domestic resets",
    icon: Sparkles,
  },
  {
    href: siteLinks.carpetCleaning,
    label: "Carpet Cleaning",
    description: "Hot water steam extraction for fresh carpets",
    icon: Sparkles,
  },
  {
    href: siteLinks.pestControl,
    label: "Pest Control",
    description: "Licensed pest treatments for Gold Coast homes",
    icon: Bug,
  },
]

const moveServices: ServiceItem[] = [
  {
    href: siteLinks.bondCleaning,
    label: "Bond Cleaning",
    description: "100% bond-back guarantee inspection cleaning",
    icon: Truck,
  },
  {
    href: siteLinks.endOfLeaseCleaning,
    label: "End of Lease Cleaning",
    description: "Detailed rental handover for tenants & agents",
    icon: Repeat,
  },
  {
    href: siteLinks.moveInCleaning,
    label: "Move-In Cleaning",
    description: "Sanitized fresh start for newly purchased properties",
    icon: Home,
  },
  {
    href: siteLinks.afterBuildersCleaning,
    label: "After Builders Cleaning",
    description: "Post-construction & renovation dust clearance",
    icon: Sparkles,
  },
]

const commercialServices: ServiceItem[] = [
  {
    href: siteLinks.officeCleaning,
    label: "Office Cleaning",
    description: "Professional workplace cleaning for corporate suites",
    icon: Building2,
  },
  {
    href: siteLinks.commercialCleaning,
    label: "Commercial Cleaning",
    description: "Retail, medical, and commercial business venues",
    icon: Briefcase,
  },
  {
    href: siteLinks.cleaningGoldCoast,
    label: "All Services Overview",
    description: "Complete guide to all Gold Coast cleaning options",
    icon: ShieldCheck,
  },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)

  const navLinks = [
    { href: siteLinks.home, label: "Home" },
    { href: siteLinks.services, label: "Services", hasDropdown: true },
    { href: siteLinks.locations, label: "Service Areas" },
    { href: siteLinks.about, label: "About Us" },
    { href: siteLinks.testimonials, label: "Reviews" },
    { href: siteLinks.blog, label: "Blog" },
    { href: siteLinks.contact, label: "Contact" },
  ]

  const isServiceActive =
    pathname === siteLinks.services ||
    pathname.startsWith("/services/") ||
    [...residentialServices, ...moveServices, ...commercialServices].some(
      (s) => pathname === s.href
    )

  return (
    <>
      {/* 1. Top Utility Header Bar */}
      <div className="hidden bg-secondary py-2 text-white md:block">
        <div className="classic-container flex items-center justify-between gap-4 text-xs">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center gap-2 font-semibold text-white/90 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>{businessInfo.phoneDisplay}</span>
            </a>
            <ObfuscatedEmail
              className="hidden items-center gap-2 font-medium text-white/70 transition-colors hover:text-white lg:inline-flex"
            />
            <div className="hidden items-center gap-2 text-white/60 xl:flex">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>Servicing Gold Coast & Surrounds, QLD</span>
            </div>
          </div>

          {/* Right: CTA pills + Client Portal */}
          <div className="flex items-center gap-3">
            <Link
              href={siteLinks.portal}
              className="hidden items-center gap-1.5 font-semibold text-white/70 transition-colors hover:text-white lg:inline-flex"
            >
              <User className="h-3.5 w-3.5" />
              <span>Client Portal</span>
            </Link>
            <Link
              href={siteLinks.book}
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-white shadow-md shadow-black/20 transition-transform hover:scale-105 hover:bg-[#249FC5]"
            >
              Get a Free Quote
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-white shadow-md shadow-black/20 transition-transform hover:scale-105 hover:bg-[#249FC5]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call {businessInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
        <div className="classic-container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={siteLinks.home} className="flex shrink-0 items-center gap-3">
            <div className="relative h-12 w-44 sm:h-14 sm:w-48">
              <Image
                src="/logo.png"
                alt="Wave Solution Cleaning Logo"
                fill
                priority
                className="object-contain"
                sizes="192px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
                        isServiceActive
                          ? "text-primary font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isServicesOpen ? "rotate-180 text-primary" : "text-slate-400"
                        )}
                      />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50 w-[780px]">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                          <div className="grid grid-cols-3 gap-6">
                            {/* Column 1: Residential */}
                            <div>
                              <p className="border-b border-slate-100 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                Residential Cleaning
                              </p>
                              <div className="mt-3 space-y-1">
                                {residentialServices.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="group flex flex-col rounded-lg p-2 transition-colors hover:bg-slate-50"
                                  >
                                    <span className="text-sm font-semibold text-slate-800 group-hover:text-primary">
                                      {item.label}
                                    </span>
                                    <span className="text-xs text-slate-500 leading-snug">
                                      {item.description}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: Move In / Move Out */}
                            <div>
                              <p className="border-b border-slate-100 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                Move & Bond Handover
                              </p>
                              <div className="mt-3 space-y-1">
                                {moveServices.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="group flex flex-col rounded-lg p-2 transition-colors hover:bg-slate-50"
                                  >
                                    <span className="text-sm font-semibold text-slate-800 group-hover:text-primary">
                                      {item.label}
                                    </span>
                                    <span className="text-xs text-slate-500 leading-snug">
                                      {item.description}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: Commercial & Office */}
                            <div>
                              <p className="border-b border-slate-100 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                Commercial & Business
                              </p>
                              <div className="mt-3 space-y-1">
                                {commercialServices.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="group flex flex-col rounded-lg p-2 transition-colors hover:bg-slate-50"
                                  >
                                    <span className="text-sm font-semibold text-slate-800 group-hover:text-primary">
                                      {item.label}
                                    </span>
                                    <span className="text-xs text-slate-500 leading-snug">
                                      {item.description}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Dropdown Bottom Banner */}
                          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                            <span className="text-slate-600 font-medium">
                              Need a tailored cleaning checklist for your property?
                            </span>
                            <Link
                              href={businessInfo.phoneHref}
                              className="font-bold text-primary hover:underline"
                            >
                              Call {businessInfo.phoneDisplay}
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right: Phone & Action Button */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={businessInfo.phoneHref}
              className="flex items-center gap-2.5 text-left transition-opacity hover:opacity-80"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-primary">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Call For Free Quote
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {businessInfo.phoneDisplay}
                </span>
              </div>
            </a>

            <Button
              asChild
              className="h-11 rounded-lg bg-primary px-6 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow"
            >
              <Link href={siteLinks.book}>Book Online</Link>
            </Button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              asChild
              size="sm"
              className="h-9 rounded-lg bg-primary px-3 text-xs font-bold text-white"
            >
              <Link href={siteLinks.book}>Book</Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-lg border-slate-200 text-slate-800"
                  aria-label="Toggle Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] p-0 sm:w-[360px]">
                <div className="flex h-full flex-col justify-between bg-white">
                  {/* Top Branding */}
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 p-5">
                      <div className="relative h-10 w-36">
                        <Image
                          src="/logo.png"
                          alt="Wave Solution Cleaning"
                          fill
                          className="object-contain"
                          sizes="144px"
                        />
                      </div>
                    </div>

                    {/* Navigation Items */}
                    <div className="space-y-1 p-4">
                      <Link
                        href={siteLinks.home}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors",
                          pathname === siteLinks.home
                            ? "bg-slate-100 font-bold text-primary"
                            : "text-slate-700 hover:bg-slate-50"
                        )}
                      >
                        Home
                      </Link>

                      {/* Expandable Services */}
                      <div>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          <span>Services</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              mobileServicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileServicesOpen && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                            {[
                              ...residentialServices,
                              ...moveServices,
                              ...commercialServices,
                            ].map((s) => (
                              <Link
                                key={s.label}
                                href={s.href}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg py-1.5 text-xs font-medium text-slate-600 hover:text-primary"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      <Link
                        href={siteLinks.locations}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Service Areas
                      </Link>
                      <Link
                        href={siteLinks.about}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        About Us
                      </Link>
                      <Link
                        href={siteLinks.testimonials}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Reviews
                      </Link>
                      <Link
                        href={siteLinks.blog}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Blog
                      </Link>
                      <Link
                        href={siteLinks.contact}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Contact
                      </Link>
                      <Link
                        href={siteLinks.portal}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Client Portal
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Mobile Action Buttons & Phone */}
                  <div className="border-t border-slate-100 bg-slate-50 p-5 space-y-3">
                    <a
                      href={businessInfo.phoneHref}
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-bold text-slate-800 shadow-sm"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>Call {businessInfo.phoneDisplay}</span>
                    </a>
                    <Button
                      asChild
                      className="w-full h-11 rounded-lg bg-primary text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                    >
                      <Link href={siteLinks.book} onClick={() => setIsOpen(false)}>
                        Book Online Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
