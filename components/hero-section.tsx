import Image from "next/image"
import Link from "next/link"
import { CheckCircle, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const heroPoints = [
  "House cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning, and commercial cleaning.",
  "Local Gold Coast team with fully insured service and police-checked staff.",
  "Fast quote responses for homes, offices, rental properties, and business spaces.",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-14 sm:py-20 lg:py-24">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <Image
          src="/images/gold-coast-cleaning-service.jpg"
          alt="Professional cleaners servicing homes and offices in Gold Coast"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/65" />
      </div>

      <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="classic-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="text-center text-white lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-secondary" />
              Gold Coast cleaning specialists
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Cleaning Services Gold Coast for Homes, Offices and Rental Properties
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75 lg:mx-0">
              Wave Solution helps Gold Coast households and businesses stay clean, presentable, and easier to manage with professional house cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning, and commercial cleaning.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="h-14 rounded-full bg-secondary px-8 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 shadow-xl shadow-secondary/20 hover:bg-secondary/90">
                <Link href={siteLinks.book}>Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                <Link href={siteLinks.homeCleaning}>Book Local Cleaner</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/20 bg-transparent px-8 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                <Link href={businessInfo.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <div className="rounded-[2rem] border border-white/10 bg-primary/30 p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Why Choose Us</p>
              <ul className="mt-5 space-y-4">
                {heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-7 text-white/80">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/55">Trust Badges</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Fully insured</span>
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Fast quote</span>
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Local cleaners</span>
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">Guaranteed care</span>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/55">Service Areas</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    Southport, Robina, Surfers Paradise, Broadbeach, Burleigh Heads, Palm Beach, and nearby Gold Coast suburbs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
