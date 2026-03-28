import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ShieldCheck, Sparkles, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const teamProfiles = [
  {
    name: "Sushant Timalcena",
    role: "Founder and Director",
    bio: "Leads Wave Solution's service standards, quoting approach, and local Gold Coast operating direction.",
  },
  {
    name: "Veshraj Gautam",
    role: "Operations Manager",
    bio: "Coordinates scheduling, service quality, and communication between residential and commercial jobs.",
  },
  {
    name: "Customer Support Team",
    role: "Quotes and Client Care",
    bio: "Helps customers choose the right cleaning or pest-control service and keeps booking details clear from first enquiry to job completion.",
  },
  {
    name: "Field Team",
    role: "Cleaning and Pest Service Crew",
    bio: "Supports homes, rentals, and business premises across the Gold Coast with practical, detail-focused service delivery.",
  },
]

const trustPoints = [
  "Fully insured cleaners and service staff.",
  "Police-checked team members for homes, rentals, and workplace access.",
  "Eco-friendly product options available when suitable for the job.",
  "Local Gold Coast scheduling and suburb coverage.",
]

const processSteps = [
  "Tell us the service type, suburb, property size, and preferred timing.",
  "We confirm the right scope and explain what affects the quote.",
  "Our local team arrives with the agreed plan and keeps communication clear.",
  "If follow-up is needed, we help quickly and practically.",
]

export const metadata: Metadata = {
  title: "Meet the Wave Solution Team | Gold Coast Cleaning and Pest Control Experts",
  description:
    "Meet the Wave Solution team behind our Gold Coast cleaning and pest-control services. Learn how we work, what standards we follow, and why local customers trust us.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/team`,
  },
  openGraph: {
    title: "Meet the Wave Solution Team | Gold Coast Cleaning and Pest Control Experts",
    description:
      "Meet the Wave Solution team behind our Gold Coast cleaning and pest-control services. Learn how we work, what standards we follow, and why local customers trust us.",
    url: `${businessInfo.baseUrl}/team`,
  },
}

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="classic-container">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary">Local Team, Clear Standards</p>
              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Meet the Team Behind Wave Solution
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                Wave Solution supports Gold Coast homes, rentals, offices, and business premises with a local team focused on clear communication, reliable service, and practical results.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90">
                  <Link href={siteLinks.book}>Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                  <Link href={businessInfo.phoneHref}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="relative h-[360px]">
                <Image
                  src="/gold-coast-cleaning-team.png"
                  alt="Wave Solution team in Gold Coast"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Trust Indicators</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {trustPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm leading-7 text-white/80">
                        <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary">How Our Team Works</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Strong local SEO is supported by strong real-world operations. Customers trust businesses that explain their process clearly and make service expectations easy to understand.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Step {index + 1}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary">Team Profiles</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              These profiles help customers understand who is behind the service and why Wave Solution feels accountable, local, and easier to trust.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamProfiles.map((profile) => (
              <article key={profile.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-secondary">{profile.role}</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-primary">{profile.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{profile.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <ShieldCheck className="h-8 w-8 text-secondary" />
              <h2 className="mt-4 text-2xl font-black tracking-tight text-primary">Insurance and Service Standards</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Wave Solution positions trust clearly: fully insured service, police-checked staff, clear communication, and practical support before and after the job. This matters for homes, rental properties, offices, and customer-facing businesses.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <Sparkles className="h-8 w-8 text-secondary" />
              <h2 className="mt-4 text-2xl font-black tracking-tight text-primary">Gold Coast Local Knowledge</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Local experience matters because property types and cleaning needs vary across suburbs like Southport, Robina, Broadbeach, Surfers Paradise, Burleigh Heads, Palm Beach, Helensvale, and Coomera. The team and the site should both reflect that local understanding.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Need the Right Local Service?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/75">
              Explore our service pages or speak with the team directly and we will help match the right cleaning or pest-control scope to your property, suburb, and timing.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90">
                <Link href={siteLinks.services}>View Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                <Link href={siteLinks.contact}>Contact the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
