import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Phone, ShieldCheck, Star } from "lucide-react"

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
    <section className="page-hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gold-coast-cleaning-service.jpg"
          alt="Professional cleaners servicing homes and offices in Gold Coast"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
        <div className="page-hero-overlay" />
      </div>

      <div className="classic-container relative z-10 flex min-h-[82vh] flex-col items-center justify-center py-20 text-center sm:py-24">
        {/* Rating pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
          <span className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-[#39BDE4] text-[#39BDE4]" />
            ))}
          </span>
          <span className="font-extrabold">4.9 / 5</span>
          <span className="font-medium text-white/70">· 430+ Google Reviews</span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          The Best Cleaning Services in Gold Coast for{" "}
          <span className="text-[#39BDE4]">Homes, Offices & Rentals</span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          House cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning
          and commercial cleaning — done by a local, fully insured Gold Coast team.
        </p>

        {/* Dual CTAs */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 min-w-60 rounded-full bg-[#39BDE4] px-8 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-all duration-300 hover:scale-105 hover:bg-[#249FC5]"
          >
            <Link href={siteLinks.book} className="flex items-center gap-2">
              <span>Get a Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-14 min-w-60 rounded-full bg-[#39BDE4] px-8 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-all duration-300 hover:scale-105 hover:bg-[#249FC5]"
          >
            <Link href={businessInfo.phoneHref} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{businessInfo.phoneDisplay}</span>
            </Link>
          </Button>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
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

        {/* Satisfaction strip */}
        <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-white/70">
          <ShieldCheck className="h-4 w-4 text-[#39BDE4]" />
          <span>100% Satisfaction Guarantee · No hidden fees · Fast 15-minute quote response</span>
        </div>
      </div>
    </section>
  )
}
