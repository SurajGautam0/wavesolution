import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Clock, MapPin, Phone, ShieldCheck, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const heroTrustItems = [
  "Fully insured",
  "Police-checked staff",
  "1,500+ local cleans",
  "Eco-friendly options",
]

export function HeroSection() {
  return (
    <section className="page-hero has-sticky-cta">
      <div className="absolute inset-0">
        <Image
          src="/hero-cleaning.jpg"
          alt="Professional cleaners servicing homes and offices in Gold Coast"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="page-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c3a]/80 via-transparent to-black/20" />
      </div>

      <div className="classic-container relative z-10 flex min-h-[100svh] flex-col justify-center gap-8 py-20 lg:grid lg:min-h-0 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:py-24">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#39BDE4] text-[#39BDE4]" />
              ))}
            </span>
            <span className="font-extrabold">4.9 / 5</span>
            <span className="font-medium text-white/70">· 430+ Google Reviews</span>
          </div>

          <h1 className="mt-6 font-black leading-[1.08] tracking-tight text-white">
            Professional Cleaning Services in Gold Coast for{" "}
            <span className="text-[#39BDE4]">Homes, Offices &amp; Rentals</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0">
            House cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning
            and commercial cleaning — done by a local, fully insured Gold Coast team.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-14 w-full rounded-full bg-[#39BDE4] px-8 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-all duration-300 hover:scale-[1.03] hover:bg-[#249FC5] sm:w-auto sm:min-w-56"
            >
              <Link href={siteLinks.book} className="flex items-center justify-center gap-2">
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-white/30 bg-white/10 px-8 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md hover:bg-white hover:text-secondary sm:w-auto sm:min-w-56"
            >
              <Link href={businessInfo.phoneHref} className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{businessInfo.phoneDisplay}</span>
              </Link>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            {heroTrustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-[#39BDE4]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Booking card — hidden on very small screens, shown from sm upwards */}
        <aside className="mx-auto hidden w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl sm:block lg:mx-0">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#39BDE4]">Same-day quote</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">Book a local Gold Coast cleaner in minutes</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">
            Tell us the suburb, service type, and timing. We reply fast with a clear price — no hidden extras.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              { icon: Clock, label: "Quote response in about 15 minutes" },
              { icon: ShieldCheck, label: "100% satisfaction guarantee" },
              { icon: MapPin, label: "Coverage across 50+ Gold Coast suburbs" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#39BDE4]" />
                <span className="text-sm font-semibold text-white/90">{item.label}</span>
              </li>
            ))}
          </ul>

          <Link
            href={siteLinks.book}
            className="mt-6 flex h-12 items-center justify-center rounded-full bg-white text-xs font-black uppercase tracking-[0.16em] text-secondary transition-colors hover:bg-[#39BDE4] hover:text-white"
          >
            Start booking
          </Link>
        </aside>
      </div>
    </section>
  )
}
