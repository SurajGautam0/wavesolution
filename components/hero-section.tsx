import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Clock, MapPin, Phone, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { serviceAreaCount, trustBadgesShort } from "@/lib/claims"

const heroTrustItems = trustBadgesShort

export function HeroSection() {
  return (
    <section className="page-hero has-sticky-cta">
      <div className="absolute inset-0">
        <Image
          src="/hero-cleaning.jpg"
          alt="Sunlit clean home interior with cleaning supplies"
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="page-hero-overlay" />

      <div className="classic-container relative z-10 flex min-h-[100svh] flex-col justify-center gap-8 py-20 lg:grid lg:min-h-0 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:py-24">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#39BDE4]" />
            <span className="font-medium text-white/90">Local cleaning for Gold Coast homes &amp; businesses</span>
          </div>

          <h1 className="mt-6 font-black leading-[1.08] tracking-tight text-white">
            Cleaning and Pest Control on the Gold Coast
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0">
            Bond cleans, house cleaning, carpet cleaning and pest control from one local, insured team. Get a clear price in minutes.
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

        {/* Quote card */}
        <div className="relative">
          <div className="rounded-3xl border border-white/15 bg-white/95 p-7 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#39BDE4]" />
              <p className="text-xs font-black uppercase tracking-[0.16em] text-secondary">
                Fast local quote
              </p>
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-secondary">
              Book a local Gold Coast cleaner in minutes
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Tell us the suburb, service type, and timing. We reply fast with a clear price — no hidden extras.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                { icon: Clock, label: "Quick, no-obligation quote" },
                { icon: ShieldCheck, label: "Fully insured & police-checked" },
                { icon: MapPin, label: `Coverage across ${serviceAreaCount} Gold Coast suburbs` },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#39BDE4]" />
                  <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                </li>
              ))}
            </ul>

            <Link
              href={siteLinks.book}
              className="mt-6 flex h-12 items-center justify-center rounded-full bg-white text-xs font-black uppercase tracking-[0.16em] text-secondary transition-colors hover:bg-[#39BDE4] hover:text-white"
            >
              Start booking
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
