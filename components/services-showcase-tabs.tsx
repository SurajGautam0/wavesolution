"use client"

import * as React from "react"
import Link from "next/link"
import { Home, Building2, Truck, Repeat, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteLinks } from "@/lib/business-info"
import { cn } from "@/lib/utils"

const SERVICES_DATA = [
  {
    id: "house",
    label: "House Cleaning",
    icon: Home,
    badge: "Most Popular",
    title: "House Cleaning Gold Coast",
    subtitle: "Flexible maintenance & routine care for apartments and family residences",
    inclusions: [
      "Bathrooms, showers & mirrors sanitized",
      "Kitchen bench tops, splashbacks & stovetops wiped",
      "Floors vacuumed & mop-sanitized throughout",
      "Cobwebs removed & dusting of accessible surfaces",
    ],
    idealFor: "Apartments & family homes across Southport, Robina, Broadbeach & Burleigh Heads",
    href: siteLinks.homeCleaning,
    paragraphs: [
      "House cleaning remains one of the most searched and most commercially useful services for a Gold Coast cleaning business because the demand is consistent year-round. Busy households need help staying on top of bathrooms, kitchens, floors, dust, and the day-to-day mess that builds up when work, school, and family routines take priority. A strong house-cleaning offer should therefore feel flexible and practical, with weekly, fortnightly, and one-off options that match the way people actually live.",
      "The goal is not just a neater property. It is a home that feels easier to manage and more enjoyable to be in. That is especially important in apartment-heavy and high-lifestyle areas such as Surfers Paradise and Broadbeach, but it matters just as much for family homes in Robina, Southport, Burleigh Heads, and surrounding suburbs. If a visitor wants local house cleaners, the page should help them recognise the service quickly and move straight to a tailored quote.",
    ],
  },
  {
    id: "office",
    label: "Office Cleaning",
    icon: Building2,
    badge: "Workplace Focus",
    title: "Office Cleaning Gold Coast",
    subtitle: "Dependable presentation & hygiene for professional suites & commercial spaces",
    inclusions: [
      "Workstations, desks & high-touch surfaces disinfected",
      "Staff kitchenettes, sinks & appliances wiped down",
      "Restrooms restocked, sanitized & deodorized",
      "Waste bins emptied & recycling sorted",
    ],
    idealFor: "Offices, professional suites, clinics & commercial venues in Southport & Robina",
    href: siteLinks.officeCleaning,
    paragraphs: [
      "Office cleaning needs different messaging from domestic cleaning because the buyer is usually thinking about presentation, hygiene, and consistency rather than lifestyle convenience. Gold Coast businesses want an office cleaner who shows up on time, works around access needs, maintains shared kitchens and bathrooms properly, and helps the workplace feel more professional every day. A page built around office cleaning Gold Coast should speak to that business reality clearly.",
      "Local relevance matters here too. Business precincts in Southport, Robina, Broadbeach, and Surfers Paradise all create demand for recurring workplace cleaning. By separating office cleaning from general household messaging, Wave Solution can rank more strongly for business search terms while giving office managers a page that feels built for their exact problem instead of squeezed into a generic services list.",
    ],
  },
  {
    id: "bond",
    label: "Bond Cleaning",
    icon: Truck,
    badge: "100% Bond Back",
    title: "Bond Cleaning Gold Coast",
    subtitle: "Inspection-grade handover cleaning for tenants, landlords & property managers",
    inclusions: [
      "Full oven, rangehood & stovetop degreasing",
      "Interior cupboards, drawers & shelves wiped clean",
      "Skirting boards, door frames, architraves & light switches",
      "Shower screens descaled & tiles scrubbed",
    ],
    idealFor: "Tenants aiming for 100% bond recovery & real estate agency handover standards",
    href: siteLinks.bondCleaning,
    paragraphs: [
      "Bond cleaning is one of the strongest conversion opportunities for any Gold Coast cleaning business because users searching this term are usually close to booking. They are moving, coordinating inspections, or working toward key-return deadlines. That means the page and the CTA need to reduce uncertainty quickly. Explain what is included, explain how quotes work, and show that the service is designed for move-out pressure, not just normal house maintenance.",
      "This is where a more structured site beats weaker competitors. Instead of forcing the renter to guess which service applies, the site can send them directly to a focused bond-cleaning page with FAQs, related links, and a simple quote path based on suburb, property size, and preferred timing. The easier you make that decision, the more bookings you recover from high-intent traffic.",
    ],
  },
  {
    id: "lease",
    label: "End of Lease",
    icon: Repeat,
    badge: "Handover Ready",
    title: "End of Lease Cleaning Gold Coast",
    subtitle: "Complete rental exit reset tailored to property agency checklists",
    inclusions: [
      "Exhaust fans, ceiling fans & air conditioning vents",
      "Window sills, tracks & interior glass cleaning",
      "Wall spot cleaning & scuff mark removal",
      "Complete property sweep, vacuum & disinfection",
    ],
    idealFor: "Units, townhouses & homes preparing for tenancy transfer or landlord inspection",
    href: siteLinks.endOfLeaseCleaning,
    paragraphs: [
      "End of lease cleaning Gold Coast searches are closely related to bond cleaning, but the user intent is often framed around the rental handover itself rather than just the bond return. This distinction matters because it lets Wave Solution create another strong rental page without duplicating the exact same pitch. The end-of-lease page can speak more directly to handover readiness, inspection timing, and move-out organisation, which helps reduce keyword cannibalisation while still addressing a major local booking category.",
      "For tenants, landlords, and property managers, the most useful site is the one that makes the process feel manageable. That means clear inclusions, local suburb coverage, and related links to bond cleaning, deep cleaning, and contact pathways that actually help the visitor decide what to do next.",
    ],
  },
  {
    id: "deep",
    label: "Deep Cleaning",
    icon: Sparkles,
    badge: "Complete Reset",
    title: "Deep Cleaning Gold Coast",
    subtitle: "One-off detailed revival for neglected areas, kitchens & seasonal spring cleans",
    inclusions: [
      "Grout scrubbing & heavy limescale elimination",
      "Behind & under accessible appliances & heavy furniture",
      "Door frames, skirtings & detailed edge vacuuming",
      "High-touch sterilization throughout the entire property",
    ],
    idealFor: "Properties needing a major hygienic reset before events, guests, or seasons",
    href: siteLinks.deepCleaning,
    paragraphs: [
      "Deep cleaning is important because not every property needs recurring maintenance. Some homes and workplaces simply need a much more detailed one-off reset. Kitchens, bathrooms, buildup zones, edges, touchpoints, and neglected detail areas all benefit from a service that goes beyond the usual routine. A dedicated deep-cleaning page helps Wave Solution capture that one-off high-value demand instead of losing it to competitors with stronger service segmentation.",
      "Deep cleaning is also a smart conversion bridge. Many customers who book a deep clean eventually move to recurring house or office cleaning once the property has been reset properly. By linking these services together clearly, the site supports immediate conversions and longer-term value from the same visitor journey.",
    ],
  },
]

export function ServicesShowcaseTabs() {
  const [activeTab, setActiveTab] = React.useState<string>("house")
  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0]
  const IconComponent = currentService.icon

  return (
    <div className="rounded-[2.5rem] border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-bold text-primary">
           <Sparkles className="h-3.5 w-3.5 text-primary" />
           Service Deep Dive & Coverage
         </div>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-primary sm:text-3xl lg:text-4xl">
          Explore Tailored Cleaning Solutions
        </h3>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Every Gold Coast property has distinct requirements. Switch between our specialized services below to compare inclusions, scopes, and local suburb coverage.
        </p>
      </div>

      {/* Tabs Nav */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-b border-slate-100 pb-6">
        {SERVICES_DATA.map((service) => {
          const TabIcon = service.icon
          const isActive = service.id === activeTab
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveTab(service.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-200",
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/25 ring-2 ring-primary/20"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-primary"
              )}
            >
              <TabIcon className={cn("h-4 w-4", isActive ? "text-secondary" : "text-slate-500")} />
              <span>{service.label}</span>
            </button>
          )
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="mt-8">
        <article className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Column: Rich SEO Content & Details */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
<span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-extrabold text-primary">
                 {currentService.badge}
               </span>
              <span className="text-xs font-medium text-slate-500">
                Gold Coast Region
              </span>
            </div>

            <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              {currentService.title}
            </h3>

            <p className="text-base font-medium text-primary">
              {currentService.subtitle}
            </p>

            {/* Preserving full original SEO text paragraphs for Google & visitors */}
            <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {currentService.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{currentService.idealFor}</span>
            </div>
          </div>

          {/* Right Column: Inclusions Card & Quick Action */}
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white p-6 shadow-md sm:p-8">
            <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-secondary">
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">Included In Service</p>
                <p className="text-sm font-black text-slate-900">Standard Checkpoint Checklist</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {currentService.inclusions.map((inc) => (
                <div key={inc} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  <span className="font-medium">{inc}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
<ShieldCheck className="h-4 w-4 text-secondary" />
                 <span>Wave Solution Guarantee</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                If any area fails your initial inspection, our team returns within 24 hours to rectify it at zero charge.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1 h-11 rounded-full bg-primary text-xs font-bold text-white hover:bg-primary/90">
                <Link href={currentService.href} className="flex items-center justify-center gap-2">
                  <span>Full Service Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full border-slate-300 text-xs font-bold hover:bg-slate-50">
                <Link href="/book">Book This Service</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
