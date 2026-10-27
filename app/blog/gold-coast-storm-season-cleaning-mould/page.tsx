import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  CloudLightning,
  Droplets,
  Wind,
  ShieldAlert,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthorBio } from "@/components/author-bio"

export const metadata: Metadata = {
  title: "Gold Coast Storm Season Cleaning & Mould Prevention",
  description:
    "Storm season runs November to March on the Gold Coast. Pre-storm prep, the right post-storm cleanup order, and how to stop mould taking hold in 48 hours.",
  keywords: [
    "Gold Coast storm season",
    "storm damage cleaning Gold Coast",
    "mould after storm Queensland",
    "summer mould prevention Gold Coast",
    "water damage cleanup Gold Coast",
    "wet season home preparation QLD",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/blog/gold-coast-storm-season-cleaning-mould",
  },
  openGraph: {
    title: "Gold Coast Storm Season Cleaning & Mould Prevention",
    description:
      "How to prepare a Gold Coast home before storm season and what to do in the first 48 hours after a storm to stop mould setting in.",
    url: "https://www.wavesolution.com.au/blog/gold-coast-storm-season-cleaning-mould",
    type: "article",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Storm Season Cleaning and Mould Prevention",
          item: "https://www.wavesolution.com.au/blog/gold-coast-storm-season-cleaning-mould",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Gold Coast Storm Season Cleaning and Mould Prevention",
      description:
        "A pre-season preparation and post-storm cleanup guide for Gold Coast homes, focused on the first 48 hours and preventing mould after water ingress.",
      author: {
        "@type": "Organization",
        name: "Wave Solution Cleaning & Pest Control",
        url: "https://www.wavesolution.com.au",
      },
      publisher: {
        "@type": "Organization",
        name: "Wave Solution Cleaning Gold Coast",
        url: "https://www.wavesolution.com.au",
        logo: {
          "@type": "ImageObject",
          url: "https://www.wavesolution.com.au/logo.png",
        },
      },
      datePublished: "2026-10-27",
      dateModified: "2026-10-27",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/gold-coast-storm-season-cleaning-mould",
      mainEntityOfPage:
        "https://www.wavesolution.com.au/blog/gold-coast-storm-season-cleaning-mould",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When is storm season on the Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Severe thunderstorm and heavy rain activity in South East Queensland is most common between November and March. The risk is not only the storm itself but the humid conditions that follow, which are ideal for mould growth in homes that have taken on water or have poor ventilation.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly does mould grow after water damage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mould can begin colonising damp porous materials such as plasterboard, carpet, timber and cardboard within roughly 24 to 48 hours. That is why drying is the priority, not cleaning. Cleaning a surface that is still wet only removes what is visible and leaves the conditions for regrowth intact.",
          },
        },
        {
          "@type": "Question",
          name: "What should be cleaned first after a storm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safety comes before cleaning. Do not re-enter a property with water near electrical outlets, switchboards or appliances until power is isolated. Once it is safe, the order is water extraction, then drying, then removing and disposing of unsalvageable porous materials, then cleaning and sanitising hard surfaces.",
          },
        },
        {
          "@type": "Question",
          name: "Can I clean storm mould myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Surface mould on tiles, glass and hard surfaces can usually be treated with an appropriate product and good ventilation. Mould that has spread into plasterboard, carpet underlay, cabinetry or wall cavities is a different problem, because the growth is behind the surface. Those cases need removal of affected material rather than cleaning over it.",
          },
        },
        {
          "@type": "Question",
          name: "Does insurance cover storm cleanup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Storm and water damage is commonly covered, but mould is often treated as a separate exclusion or a maintenance issue, so the outcome depends on your policy and on how quickly you act. Photograph everything before moving it, keep receipts, log the date and time of the damage and report it to your insurer early.",
          },
        },
      ],
    },
  ],
}

const preSeason = [
  "Clear gutters and downpipes so water cannot back up under roof tiles",
  "Check window and door seals, and re-seal where the sealant has cracked",
  "Clear balcony, courtyard and driveway drains of leaves and debris",
  "Secure or store loose outdoor furniture, pots and trampolines",
  "Trim back tree branches overhanging the roof or powerlines",
  "Check the roof for lifted tiles or flashing, particularly after a dry winter",
  "Test the air-conditioner in dry mode, since dehumidifying is critical after a storm",
  "Photograph each room as a condition baseline for any future claim",
]

const postStorm = [
  {
    step: "1",
    title: "Make it safe before anything else",
    detail:
      "Do not enter standing water near power points, the switchboard or appliances. Turn off electricity to affected areas at the board if it is safe to reach. Treat any structural movement, sagging ceiling or cracked wall as a reason to stay out.",
  },
  {
    step: "2",
    title: "Document before you move anything",
    detail:
      "Photograph and video every affected area, item and surface before cleanup starts. Note the date and time. Insurers assess based on evidence, and moving a damaged item before photographing it is the most common way claims get complicated.",
  },
  {
    step: "3",
    title: "Extract standing water",
    detail:
      "Remove water first. Wet vacuum or pump it out, then move furniture and rugs off wet floor coverings so air can reach them. Carpet and underlay that have been saturated are usually not salvageable and holding onto them delays drying everywhere else.",
  },
  {
    step: "4",
    title: "Dry aggressively — this is the whole game",
    detail:
      "Open windows and doors once the weather clears, use fans and the air-conditioner on dry mode, and get air moving across and under wet surfaces. The first 24 to 48 hours determine whether mould colonises. Drying is more urgent than cleaning.",
  },
  {
    step: "5",
    title: "Remove what cannot be dried",
    detail:
      "Plasterboard, cardboard, saturated underlay and swollen MDF stop being recoverable once soaked. Removing affected material is faster and safer than trying to dry it in place, particularly in wall cavities where no airflow reaches.",
  },
  {
    step: "6",
    title: "Clean and sanitise hard surfaces",
    detail:
      "Once dry, clean and sanitise hard surfaces, hard floors, skirting, cabinetry exteriors and appliance exteriors. Pay attention to silt and grit, which scratches surfaces if wiped while still wet and abrasive.",
  },
  {
    step: "7",
    title: "Address smell and air quality",
    detail:
      "After drying, treat the air and soft surfaces. Damp odour that persists after a room is visibly dry usually points to moisture still trapped somewhere, so find the source rather than masking it with fragrance.",
  },
]

export default function StormSeasonMouldPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Storm Season</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">
              Seasonal Preparation — Gold Coast
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Gold Coast Storm Season: Cleaning, Water Damage and Mould Prevention
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              South East Queensland storm season runs from November to March. Most of the lasting damage is not from the storm itself, but from what happens to a wet home in the 48 hours afterwards.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75">
              <span>Updated October 2026</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span className="font-semibold text-white">By the Wave Solution team</span>
              <span>•</span>
              <span className="text-secondary font-bold">Gold Coast Local Expertise</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Direct answer
                </h2>
                <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50 p-6">
                  <div className="flex items-start gap-3">
                    <CloudLightning className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm leading-7 text-sky-800">
                        Dry the property first, clean second. Mould can start colonising wet plasterboard, carpet and timber within about 24 to 48 hours, so water extraction and airflow matter more than scrubbing. Clean and sanitise only once surfaces are dry, and remove saturated porous materials rather than trying to dry them in place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Why Gold Coast homes are exposed
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Severe thunderstorm and heavy rain activity in South East Queensland is most concentrated between November and March. That overlaps with the most humid part of the year, which is what turns a relatively minor water ingress into a mould problem.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  The construction mix matters too. Apartments and townhouses with shared walls and limited cross-ventilation dry more slowly than a freestanding house. Older low-rise stock often has tired window seals. And coastal properties deal with salt-laden air that leaves a film on glass and screens, which holds moisture against frames.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: CloudLightning, label: "Storm season", value: "Nov – Mar", note: "peak severe weather window in SE QLD" },
                  { icon: Droplets, label: "Mould onset", value: "24 – 48 hrs", note: "on damp porous materials" },
                  { icon: Wind, label: "Priority", value: "Dry first", note: "airflow before cleaning" },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-center">
                      <div className="h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xl font-black text-primary">{stat.value}</p>
                      <p className="text-xs font-bold text-slate-700 mt-1">{stat.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{stat.note}</p>
                    </div>
                  )
                })}
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Before the season: the preparation checklist
                </h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  An hour of preparation in October prevents most of the cleanup in January. Work through this before the first big system arrives.
                </p>
                <ul className="space-y-3">
                  {preSeason.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  After the storm: the order that matters
                </h2>
                <p className="text-sm leading-7 text-slate-600 mb-5">
                  Doing these in the wrong order is how a recoverable situation becomes a remediation job.
                </p>
                <ol className="space-y-3">
                  {postStorm.map((item) => (
                    <li key={item.step} className="flex items-start gap-4 rounded-[1rem] border border-slate-100 bg-slate-50 p-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-xs font-black">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                        <p className="text-sm text-slate-500 leading-6 mt-0.5">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[1.5rem] border border-red-200 bg-red-50 p-6">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-red-800">Safety notes that should not be skipped</p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-7 text-red-700">
                      <li>Do not enter standing water where power points, leads or appliances are submerged.</li>
                      <li>Treat a sagging ceiling or bulging wall as structural — keep clear and get it assessed.</li>
                      <li>Assume floodwater is contaminated. Wear gloves, boots and a mask, and wash hands after contact.</li>
                      <li>Do not run electrical equipment in a damp room, including fans, until the supply has been checked.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  DIY mould treatment versus professional remediation
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  The dividing line is simple: surface or behind-the-surface. Mould growing on tiles, glass, hard floors, painted doors or bench tops is surface growth. It can usually be treated with an appropriate product, adequate dwell time and good ventilation, then dried thoroughly.
                </p>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Mould in plasterboard, carpet underlay, cabinetry, wall cavities or ceiling space is a different problem entirely. Cleaning the visible face does not remove the growth behind it, and it returns as soon as humidity rises. Those cases need the affected material removed, the cavity dried, and the area treated before it is closed up again.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  For prevention through the humid months, our{" "}
                  <Link href="/blog/mould-prevention-gold-coast" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    Gold Coast mould prevention guide
                  </Link>{" "}
                  covers ventilation, wardrobe and bathroom management, and humidity control in more detail.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  When to bring in a cleaning team
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Storm cleanup is a job where equipment matters more than effort. Commercial dehumidifiers, air movers, wet vacuums and HEPA filtration do work that domestic fans and towels cannot, particularly in a carpeted apartment where moisture is trapped under the pile.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  A professional clean also helps with the paperwork. Documented cleaning, drying and treatment records support an insurance claim and give a landlord or property manager confidence the property was handled properly. If the property is a rental and you are preparing it for handover, see our{" "}
                  <Link href="/end-of-lease-cleaning-gold-coast" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    end of lease cleaning
                  </Link>{" "}
                  page for the inspection standard.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  For post-renovation or post-damage debris and fine dust, see{" "}
                  <Link href="/after-builders-cleaning-gold-coast" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    after builders cleaning
                  </Link>
                  , and for a full interior reset after water damage,{" "}
                  <Link href="/deep-cleaning-gold-coast" className="font-semibold text-secondary underline underline-offset-4 hover:text-primary">
                    deep cleaning
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-6">
                  Frequently asked questions
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      q: "When is storm season on the Gold Coast?",
                      a: "Severe thunderstorm and heavy rain activity is most common between November and March. The risk extends beyond the storm itself, because the humid conditions that follow are ideal for mould growth in homes that have taken on water or have poor ventilation.",
                    },
                    {
                      q: "How quickly does mould grow after water damage?",
                      a: "Mould can begin colonising damp porous materials such as plasterboard, carpet, timber and cardboard within roughly 24 to 48 hours. That is why drying is the priority rather than cleaning — cleaning a wet surface leaves the conditions for regrowth intact.",
                    },
                    {
                      q: "What should be cleaned first after a storm?",
                      a: "Safety first: isolate power before entering water-damaged areas. Then the order is water extraction, drying, removal of unsalvageable porous materials, and finally cleaning and sanitising hard surfaces.",
                    },
                    {
                      q: "Can I clean storm mould myself?",
                      a: "Surface mould on tiles, glass and hard surfaces can usually be treated with an appropriate product and good ventilation. Mould in plasterboard, carpet underlay, cabinetry or wall cavities needs removal of the affected material, not cleaning over the top.",
                    },
                    {
                      q: "Does insurance cover storm cleanup?",
                      a: "Storm and water damage is commonly covered but mould is often treated as a separate exclusion, so it depends on your policy and how quickly you act. Photograph everything before moving it, keep receipts, log dates and times, and report early.",
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-bold text-slate-800 mb-2 text-sm">{faq.q}</p>
                      <p className="text-sm leading-7 text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <AuthorBio />
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Storm Damage Cleanup</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Water extraction, drying, mould treatment and full interior cleaning across the Gold Coast.
                </p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/book">Get Help Now</Link>
                </Button>
                <p className="mt-3 text-center text-[11px] text-white/50">
                  Or call 0450 833 683
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Guides</p>
                <ul className="space-y-3">
                  <li><Link href="/blog/mould-prevention-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Mould Prevention in Coastal Homes →</Link></li>
                  <li><Link href="/blog/spring-cleaning-guide-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Spring Cleaning Guide →</Link></li>
                  <li><Link href="/blog/airbnb-cleaning-christmas-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Holiday Rental Turnover at Christmas →</Link></li>
                  <li><Link href="/blog/end-of-lease-cleaning-before-christmas-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Cleaning Before Christmas →</Link></li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Services</p>
                <ul className="space-y-3">
                  <li><Link href="/deep-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Deep Cleaning Gold Coast →</Link></li>
                  <li><Link href="/after-builders-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">After Builders Cleaning →</Link></li>
                  <li><Link href="/carpet-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Gold Coast →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Storm Damage or Mould Problem?</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Tell us the suburb, what happened and when. We will confirm what the cleanup involves and the price in writing before we start.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/book">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
              <Link href="/deep-cleaning-gold-coast">Deep Cleaning</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
