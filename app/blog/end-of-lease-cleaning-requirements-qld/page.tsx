import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  DollarSign,
  Home,
  Clock,
  Star,
  ShieldCheck,
  FileCheck2,
  HelpCircle,
  Sparkles,
  PhoneCall,
  Scale,
  Calendar,
  AlertTriangle,
  ArrowRight,
  Flame,
  Droplets,
  Layers,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthorBio } from "@/components/author-bio"

export const metadata: Metadata = {
  title: "End of Lease Cleaning Requirements QLD (2026) | 100% Bond Back Guide",
  description:
    "Comprehensive Queensland end of lease cleaning requirements guide. Learn RTA legal rules, fair wear and tear vs cleaning breach, Form 14a exit checklist, and pet clause obligations.",
  alternates: { canonical: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-requirements-qld" },
  openGraph: {
    title: "End of Lease Cleaning Requirements QLD (2026) | 100% Bond Back Guide",
    description:
      "What is legally required for bond cleaning in Queensland? RTA compliance, room-by-room exit checklist, fair wear & tear rules, and tips to guarantee 100% bond return.",
    url: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-requirements-qld",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "End of lease cleaning requirements QLD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "End of Lease Cleaning Requirements QLD (2026) | 100% Bond Back Guide",
    description: "Full guide to Queensland RTA bond cleaning standards, tenancy legislation, and room inspection checklist.",
    images: ["/gold-coast-cleaning-services.jpeg"],
  },
}

const faqs = [
  {
    question: "What are the legal end of lease cleaning requirements in Queensland?",
    answer:
      "Under Section 188 of the Queensland Residential Tenancies and Rooming Accommodation Act 2008 (RTRA Act), tenants are legally required to leave the rental property in substantially the same condition as when they moved in, fair wear and tear excepted. You must complete the Exit Condition Report (Form 14a) comparing the property to the Entry Condition Report (Form 1a).",
  },
  {
    question: "Can a Queensland landlord or real estate agent force me to hire professional cleaners?",
    answer:
      "Generally, no. Under Queensland tenancy legislation, landlords cannot include blanket special terms requiring you to use a specific cleaning company or requiring professional cleaning if you can return the property to the entry condition standard yourself. However, if professional carpet cleaning or pest control was explicitly stipulated for pet approval or proven at entry, you must meet that documented benchmark.",
  },
  {
    question: "What is considered fair wear and tear versus a cleaning breach in QLD?",
    answer:
      "Fair wear and tear refers to the natural, unavoidable deterioration of a property over time through normal, careful use (e.g., slight carpet traffic wear, minor scuffing on high-traffic skirting boards, faded curtains from sunlight). A cleaning breach involves avoidable neglect or grime that can be cleaned away, such as baked-on oven grease, soap scum build-up in shower recesses, grease on rangehood filters, or dirty window tracks.",
  },
  {
    question: "Is professional carpet steam cleaning compulsory when moving out in Queensland?",
    answer:
      "Professional carpet cleaning is compulsory if: (1) your tenancy agreement included an approved special term (such as having pets inside), or (2) the carpets were professionally steam cleaned immediately prior to your tenancy and documented on the Form 1a Entry Condition Report. In these cases, property managers will ask for an itemised professional receipt.",
  },
  {
    question: "Do pet owners need end of lease pest control in Queensland?",
    answer:
      "Yes. Under Queensland RTA rental pet laws, if you received permission to keep a pet on the premises, landlords typically require end-of-lease flea fumigation and carpet pest treatment. You must provide a formal invoice from a licensed Queensland pest control operator upon key handover.",
  },
  {
    question: "What happens if my property manager fails my bond inspection?",
    answer:
      "If the property manager identifies areas that do not meet the exit standard, Queensland best practice gives tenants a reasonable opportunity (typically 24 to 72 hours) to rectify the issues. Professional cleaning services like Wave Solution provide a 72-hour re-clean guarantee, returning free of charge to rectify any items listed on the agent's inspection report.",
  },
]

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
          name: "End of Lease Cleaning Requirements QLD",
          item: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-requirements-qld",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "End of Lease Cleaning Requirements QLD: The Complete 2026 Tenant Guide to 100% Bond Back",
      description:
        "Detailed legal and practical breakdown of Queensland end of lease cleaning requirements under the RTRA Act. Covers Form 14a exit inspections, fair wear and tear, carpet cleaning laws, and room-by-room standards.",
      author: {
        "@type": "Person",
        name: "Suraj Gautam",
        jobTitle: "Operations Director & Quality Assurance Lead",
        worksFor: {
          "@type": "Organization",
          name: "Wave Solution Cleaning & Pest Control",
          url: "https://www.wavesolution.com.au",
        },
        url: "https://www.wavesolution.com.au/team",
      },
      publisher: {
        "@type": "Organization",
        name: "Wave Solution Cleaning Gold Coast",
        logo: { "@type": "ImageObject", url: "https://www.wavesolution.com.au/logo.png" },
        url: "https://www.wavesolution.com.au",
      },
      datePublished: "2026-03-01",
      dateModified: "2026-09-25",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-requirements-qld",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-requirements-qld",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
}

const comparisonData = [
  {
    category: "Walls & Skirting",
    fairWear: "Faint rub marks near furniture, minor paint fading from natural sunlight",
    cleaningBreach: "Food splatters, crayon/marker marks, heavy hand grease around light switches, cobwebs",
  },
  {
    category: "Kitchen & Oven",
    fairWear: "Slight discolouration of stovetop burner rings after years of normal cooking",
    cleaningBreach: "Burnt carbon crust inside oven, greasy rangehood mesh, food residue in kitchen cupboards",
  },
  {
    category: "Bathrooms",
    fairWear: "Gradual dulling of chrome tapware finish, minor hairline tile grout wear",
    cleaningBreach: "Heavy soap scum on glass shower screens, black mould in silicone joints, lime scale in toilet bowl",
  },
  {
    category: "Carpets & Floors",
    fairWear: "Natural flattening in high-traffic hallway paths, minor aging of fibers",
    cleaningBreach: "Pet urine stains, cordial/wine spills, embedded dirt from footwear, un-mopped sticky residue",
  },
  {
    category: "Windows & Blinds",
    fairWear: "Minor dusting from coastal breeze, slight weathering on external frames",
    cleaningBreach: "Dead insects and grime in sliding tracks, fingerprints on glass, grease on Venetian slats",
  },
]

const roomChecklists = [
  {
    zone: "1. Kitchen (Highest Failure Rate)",
    items: [
      "Oven cavity, wire racks, baking trays, glass door (inside and between double panes), and rubber seals",
      "Stovetop burner rings, knobs, trivets, and stainless steel splashback degreased",
      "Rangehood filter mesh soaked and degreased; rangehood canopy wiped clean",
      "Inside, outside, top, and hinges of all cupboards and drawers",
      "Dishwasher interior, filter basket, door edges, and spray arms cleaned",
      "Benchtops, sink basin, plugholes, and chrome mixer tap descaled and polished",
    ],
  },
  {
    zone: "2. Bathrooms, Ensuites & Toilets",
    items: [
      "Shower screens descaled to remove all stubborn calcium and cloudy soap scum",
      "Wall tiles, floor tiles, and grout scrubbed free of body oils, mildew, and mould",
      "Toilet bowl descaled, seat removed/cleaned under hinge anchors, cistern wiped",
      "Vanity mirror polished streak-free; basin and vanity drawers wiped inside and out",
      "Exhaust fan covers unclipped, washed of lint, and reinstalled",
      "Floor drains cleared of accumulated hair and residue",
    ],
  },
  {
    zone: "3. Bedrooms & General Living Areas",
    items: [
      "Built-in wardrobe shelves, hanging rails, mirrored sliding door tracks, and frames",
      "Ceiling fan blades washed on top and bottom; light fixture covers dusted",
      "Air conditioning unit front covers wiped; dust filters removed, washed, and dried",
      "All skirting boards, architraves, window sills, and door jambs wiped free of dust",
      "Power points, light switches, and door handles sanitised without liquid seeping in",
      "Spider webs brushed away from cornices, ceiling corners, and behind curtains",
    ],
  },
  {
    zone: "4. Windows, Doors & Tracks",
    items: [
      "Sliding window tracks vacuumed and detailed with a track brush to remove trapped dirt and insects",
      "Interior window panes cleaned streak-free (and accessible exterior balcony glass)",
      "Flyscreens brushed or gently washed down to clear salt residue and dust",
      "Window sills, latches, and sliding door handles wiped clean",
      "Blinds dusted slat-by-slat (Venetians) or spot-cleaned (roller blinds)",
    ],
  },
  {
    zone: "5. Laundry & Utilities",
    items: [
      "Laundry tub basin, plughole, and tapware cleaned and free of lint/rust",
      "Under-tub cabinet emptied, vacuumed, and wiped out",
      "Dryer lint filter emptied and dryer drum cleaned if included in tenancy",
      "Washing machine taps and waste pipe connections wiped down",
    ],
  },
  {
    zone: "6. Balconies, Patios & Garages",
    items: [
      "Balcony/patio tiled or concrete surfaces swept and mopped; railing wiped",
      "Garage floor thoroughly swept; oil leaks and automotive stains treated with degreaser",
      "Wheelie bins washed out and left clean and dry inside property boundary",
      "External cobwebs removed from eaves, entry doors, and security screen mesh",
    ],
  },
]

const rtaTimeline = [
  {
    time: "2 Weeks Out",
    title: "Review Form 1a & Book Services",
    desc: "Pull out your original Entry Condition Report (Form 1a) and photos. Note pre-existing defects. Book your professional bond clean, carpet steam clean, and pest control early to lock in your vacancy date.",
  },
  {
    time: "3-5 Days Out",
    title: "Pack, Declutter & Empty the Premises",
    desc: "Remove all personal belongings, furniture, and rubbish. Cleaning an entirely empty property ensures no spots are missed behind heavy furniture and avoids extra hourly fees.",
  },
  {
    time: "1-2 Days Out",
    title: "Perform the End of Lease Clean",
    desc: "Have the professional team execute the full exit clean, followed immediately by carpet steam extraction (carpets need 4-8 hours drying time) and pest spray.",
  },
  {
    time: "Handover Day",
    title: "Complete Form 14a & Submit to Agent",
    desc: "Walk through the home with your own Form 14a Exit Condition Report. Take 50-100 high-resolution timestamped photos. Hand over keys along with professional cleaning & pest receipts.",
  },
  {
    time: "Post-Inspection",
    title: "Claim Your Bond via RTA Web Services",
    desc: "Log into Queensland RTA Web Services to lodge your Refund of Rental Bond. If the agent requests rectifications, activate your cleaner's 72-hour re-clean guarantee immediately.",
  },
]

export default function EndOfLeaseCleaningRequirementsQldPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-40 -mb-40" />

        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>End of Lease Cleaning Requirements QLD</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 border border-secondary/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary mb-4">
              <Scale className="h-3.5 w-3.5" />
              Queensland Tenancy & RTA Compliance (2026)
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              End of Lease Cleaning Requirements QLD: The Complete Tenant&apos;s Guide to 100% Bond Return
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
              Moving out of a Queensland rental property? Here is everything you need to know about RTRA Act standards, the difference between fair wear and tear versus tenant cleaning breaches, the Form 14a exit inspection checklist, and how to guarantee your full bond refund.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-secondary" /> March 2026 Guide</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-secondary" /> 11 min read</span>
              <span>•</span>
              <span className="font-semibold text-white">Written by Suraj Gautam</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                <ShieldCheck className="h-3.5 w-3.5" /> RTA Compliance Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary Highlights Banner */}
      <div className="bg-secondary text-white py-4 shadow-md">
        <div className="classic-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-semibold">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5">
              <Scale className="h-4 w-4 opacity-80" />
              <span>Section 188 RTRA Act Standards</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5">
              <FileCheck2 className="h-4 w-4 opacity-80" />
              <span>Form 14a Exit Report Ready</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5">
              <Droplets className="h-4 w-4 opacity-80" />
              <span>Carpet Steam &amp; Pet Flea Rules</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5">
              <ShieldCheck className="h-4 w-4 opacity-80" />
              <span>72-Hour Re-Clean Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="bg-white py-12 md:py-20">
        <div className="classic-container">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">

            {/* Main Article Body */}
            <article className="space-y-12 text-slate-700 leading-relaxed">

              {/* Introduction */}
              <div className="space-y-5 text-base sm:text-lg leading-8 text-slate-600">
                <p>
                  In Queensland, the average rental bond equals four full weeks of rent — representing anywhere from <strong className="text-slate-900">$2,400 to over $4,500</strong> for Gold Coast apartments and family homes. With rental vacancy rates tight and property managers under pressure from landlords to protect asset values, final exit inspections are more rigorous than ever.
                </p>
                <p>
                  According to dispute statistics from the <strong>Residential Tenancies Authority (RTA)</strong>, over <strong className="text-slate-900">45% of all bond disputes</strong> originate from disagreements over cleanliness, carpet stains, and flea treatment receipts.
                </p>
                <p>
                  Whether you are planning to tackle the vacate clean yourself or hiring professional cleaners, knowing your exact legal obligations under Queensland tenancy legislation is the single most important step to securing your bond back without delays or tribunal disputes.
                </p>
              </div>

              {/* Section 1: The Legal Framework */}
              <section className="space-y-6 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">
                    1
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary">
                    The Legal Benchmark: Queensland RTRA Act 2008
                  </h2>
                </div>

                <p className="text-slate-600 leading-7">
                  Tenancy cleaning in Queensland is governed by the <strong>Residential Tenancies and Rooming Accommodation Act 2008 (RTRA Act)</strong>. Specifically, <strong>Section 188(4)</strong> sets the foundational legal rule:
                </p>

                <div className="rounded-2xl border-l-4 border-l-secondary border border-slate-200 bg-slate-50 p-6 italic text-slate-800 font-medium">
                  &ldquo;At the end of the tenancy, the tenant must leave the premises, as far as possible, in the same condition they were in at the start of the tenancy, fair wear and tear excepted.&rdquo;
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-base">
                    <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                    Crucial Legal Fact: You Match the Entry Standard, Not Perfection
                  </div>
                  <p className="text-sm leading-6 text-amber-900/90">
                    A landlord or property manager cannot legally demand that a property be returned in a &ldquo;brand new&rdquo; condition if it was already visibly worn or dirty when you moved in. Your legal baseline is strictly documented in your <strong>Form 1a Entry Condition Report</strong>.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-6">Can an Agent Force You to Use Their Cleaner?</h3>
                <p className="text-slate-600 leading-7">
                  <strong>No.</strong> Queensland tenancy law strictly prohibits agents from forcing tenants to hire a specific cleaning company or requiring professional cleaning receipts — <em>with one key exception</em>: if you agreed to a special condition (such as pet fumigation or professional carpet steam cleaning) that was lawful at the signing of your tenancy agreement.
                </p>
                <p className="text-slate-600 leading-7">
                  However, while DIY is legally permissible, real estate property managers apply professional-grade standards when completing the <strong>Form 14a Exit Condition Report</strong>. If any item is substandard, you risk having re-cleaning costs deducted from your bond.
                </p>
              </section>

              {/* Section 2: Fair Wear and Tear vs Cleaning Breach */}
              <section className="space-y-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">
                    2
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary">
                    Fair Wear &amp; Tear vs. Cleaning Breach (The Dispute Zone)
                  </h2>
                </div>

                <p className="text-slate-600 leading-7">
                  The boundary between what is &ldquo;fair wear and tear&rdquo; and what is considered an actionable &ldquo;cleaning failure&rdquo; is where almost every rental bond conflict happens. Under Queensland common law precedents at the Queensland Civil and Administrative Tribunal (QCAT):
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4" /> Fair Wear and Tear (Landlord Cost)
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      Deterioration that occurs through ordinary, reasonable day-to-day living and the natural action of the environment (e.g. coastal sun, humidity). Tenants cannot be charged for this.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                      <AlertCircle className="h-4 w-4" /> Cleaning Breach (Tenant Must Fix)
                    </span>
                    <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                      Damage, grime, grease, or dirt resulting from neglect, lack of maintenance, poor cleaning habits, or careless accidents that can be removed with proper cleaning methods.
                    </p>
                  </div>
                </div>

                {/* Practical Comparison Table */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                  <div className="bg-slate-100 px-5 py-3 font-bold text-xs uppercase tracking-wider text-slate-700">
                    Real-World Queensland Inspection Comparisons
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase border-b border-slate-200">
                        <tr>
                          <th className="px-5 py-3.5">Zone / Item</th>
                          <th className="px-5 py-3.5 text-emerald-700">Allowed (Fair Wear &amp; Tear)</th>
                          <th className="px-5 py-3.5 text-rose-700">Breach (Bond Deduction Risk)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {comparisonData.map((row, idx) => (
                          <tr key={row.category} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-4 font-bold text-slate-900">{row.category}</td>
                            <td className="px-5 py-4 text-slate-600">{row.fairWear}</td>
                            <td className="px-5 py-4 text-rose-900 font-medium">{row.cleaningBreach}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 3: Room-by-Room Requirements */}
              <section className="space-y-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">
                    3
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary">
                    The Official 6-Zone End of Lease Cleaning Checklist
                  </h2>
                </div>

                <p className="text-slate-600 leading-7">
                  Gold Coast property managers utilize an exhaustive 100+ point checklist during the exit inspection. Below are the mandatory items categorized by zone that must be completely clean before handing back your keys:
                </p>

                <div className="space-y-6">
                  {roomChecklists.map((group) => (
                    <div key={group.zone} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-secondary/40 transition-colors">
                      <h3 className="text-lg font-black text-primary mb-4 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-secondary" />
                        {group.zone}
                      </h3>
                      <ul className="grid sm:grid-cols-1 gap-2.5">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Special Queensland Conditions */}
              <section className="space-y-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">
                    4
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary">
                    Special Queensland Climate &amp; Pet Requirements
                  </h2>
                </div>

                <p className="text-slate-600 leading-7">
                  Queensland&apos;s humid subtropical climate and unique residential tenancy regulations introduce several specialized requirements that differ from southern states like NSW or Victoria:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Droplets className="h-5 w-5 text-secondary" />
                      Subtropical Mould in Wet Areas
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-6">
                      With high humidity in Gold Coast coastal suburbs (Broadbeach, Surfers Paradise, Burleigh), silicone joints and ceiling corners readily harbour mildew. Agents test grout and bathroom fans for active mould spores.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Flame className="h-5 w-5 text-secondary" />
                      Air Con Filters &amp; Ceiling Fans
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-6">
                      Every split system and ducted air conditioner filter must be unclipped, washed of grey lint, dried, and refitted. Ceiling fan blades collect sticky static dust on top edges that agents always run a finger across.
                    </p>
                  </div>
                </div>

                {/* Pet Clauses & Flea Treatments */}
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-950 font-bold text-lg">
                    <ShieldCheck className="h-5 w-5 text-indigo-600" />
                    Queensland Pet Approval Laws &amp; Flea Fumigation
                  </div>
                  <p className="text-sm leading-6 text-indigo-900">
                    Under Queensland rental reforms, landlords can approve pets subject to reasonable conditions. Almost all approved pet addendums mandate two things upon vacating:
                  </p>
                  <ol className="list-decimal pl-5 text-sm space-y-1.5 text-indigo-950 font-medium">
                    <li>
                      <strong>Professional carpet steam extraction:</strong> Deep hot-water extraction to eliminate animal dander, hair, and urine enzymes.
                    </li>
                    <li>
                      <strong>Licensed end-of-lease flea treatment:</strong> A formal pest spray inside and on external turf/patios. The managing agent will require an official invoice from an insured, licensed pest management technician.
                    </li>
                  </ol>
                  <p className="text-xs text-indigo-800 pt-1">
                    Tip: Booking our combined <Link href="/pest-control-gold-coast" className="underline font-bold hover:text-indigo-950">end of lease pest control</Link> and <Link href="/bond-cleaning-gold-coast" className="underline font-bold hover:text-indigo-950">bond cleaning package</Link> saves up to $80 compared to separate contractors.
                  </p>
                </div>
              </section>

              {/* Section 5: The Move-Out Timeline */}
              <section className="space-y-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">
                    5
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary">
                    The 5-Step Move-Out Timeline for 100% Bond Return
                  </h2>
                </div>

                <p className="text-slate-600 leading-7">
                  Timing is critical when coordinating end of lease cleaning, carpet drying, and key handovers. Follow this battle-tested schedule:
                </p>

                <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
                  {rtaTimeline.map((step) => (
                    <div key={step.time} className="relative group">
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-white group-hover:bg-secondary transition-colors" />
                      <div className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-xs font-black uppercase tracking-wider text-primary mb-1">
                        {step.time}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-6 mt-1">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: How the 72-Hour Re-Clean Guarantee Works */}
              <section className="space-y-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">
                    6
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary">
                    The 72-Hour Re-Clean Guarantee: Why It Matters
                  </h2>
                </div>

                <div className="space-y-4 text-base leading-7 text-slate-600">
                  <p>
                    No matter how thorough a clean is, different property managers have individual pet peeves — one might focus intensely on rangehood clips, while another checks the top ridge of bathroom mirrors.
                  </p>
                  <p>
                    This is why hiring a professional cleaning service with a genuine <strong>bond return guarantee</strong> is vital. At Wave Solution, our standard bond cleaning service includes:
                  </p>
                </div>

                <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-secondary shrink-0" />
                    <h3 className="text-lg font-black text-primary">Wave Solution 100% Bond Back Assurance</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span><strong>Free 72-Hour Rectification:</strong> If your real estate agent flags any item from our standard scope on the exit report, our team returns within 72 hours to re-clean it at zero additional cost.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span><strong>Direct Agent Liaison:</strong> Send us the agent&apos;s exit checklist or photos and we coordinate access to resolve it seamlessly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span><strong>Itemised Tax Invoices:</strong> Official receipts ready to provide to your agency for proof of service.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="space-y-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-7 w-7 text-secondary" />
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                        <span className="text-secondary font-black">Q:</span>
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-6 text-slate-600 pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Author Bio Component */}
              <AuthorBio />

            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">

              {/* Fast Booking CTA Card */}
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/15 rounded-full blur-2xl -mr-24 -mt-24 pointer-events-none" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary">
                  Fixed-Price Bond Clean
                </span>
                <h3 className="mt-2 text-2xl font-black">Starting from $249</h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-white/75">
                  100% Bond Back Guarantee included. All Gold Coast suburbs covered. Same-day &amp; weekend availability.
                </p>

                <div className="mt-6 space-y-3">
                  <Button asChild className="w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90 shadow-md">
                    <Link href="/end-of-lease-cleaning-gold-coast">
                      Get a Free Fixed Quote <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full h-11 rounded-full border-white/20 bg-white/5 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
                    <a href="tel:+61450833683" className="flex items-center justify-center gap-2">
                      <PhoneCall className="h-3.5 w-3.5 text-secondary" />
                      Call 0450 833 683
                    </a>
                  </Button>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <span>✓ 72-Hour Free Re-Clean</span>
                  <span>✓ Licensed &amp; Insured</span>
                </div>
              </div>

              {/* Pricing breakdown widget */}
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-secondary" />
                  Estimated Bond Clean Costs
                </h4>
                <div className="divide-y divide-slate-100 text-xs text-slate-600">
                  <div className="py-2 flex justify-between font-medium">
                    <span>1 Bed, 1 Bath Unit</span>
                    <strong className="text-slate-900">$249 – $329</strong>
                  </div>
                  <div className="py-2 flex justify-between font-medium">
                    <span>2 Bed, 1 Bath Unit</span>
                    <strong className="text-slate-900">$329 – $399</strong>
                  </div>
                  <div className="py-2 flex justify-between font-medium">
                    <span>3 Bed, 2 Bath House</span>
                    <strong className="text-slate-900">$449 – $549</strong>
                  </div>
                  <div className="py-2 flex justify-between font-medium">
                    <span>4 Bed, 2 Bath House</span>
                    <strong className="text-slate-900">$549 – $649</strong>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link href="/blog/end-of-lease-cleaning-cost-gold-coast" className="text-xs font-bold text-secondary hover:underline flex items-center gap-1">
                    See Full 2026 Price Breakdown <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Related High-Intent Guides */}
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">
                  Essential Exit Guides
                </p>
                <ul className="space-y-3">
                  <li>
                    <Link href="/blog/end-of-lease-cleaning-cost-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>End of Lease Cleaning Cost Gold Coast (2025/2026)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/bond-cleaning-checklist" className="text-sm font-semibold text-primary hover:text-secondary flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>Queensland Bond Cleaning Printable Checklist</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/move-out-cleaning-mistakes" className="text-sm font-semibold text-primary hover:text-secondary flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>7 Move-Out Cleaning Mistakes That Lose Your Deposit</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/mould-prevention-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>How to Treat Grout &amp; Ceiling Mould for Inspection</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Quick Links */}
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">
                  Move-Out Cleaning Services
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bond-cleaning-gold-coast" className="rounded-full bg-slate-100 hover:bg-secondary hover:text-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors">
                    Bond Cleaning
                  </Link>
                  <Link href="/end-of-lease-cleaning-gold-coast" className="rounded-full bg-slate-100 hover:bg-secondary hover:text-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors">
                    End of Lease Clean
                  </Link>
                  <Link href="/carpet-cleaning-gold-coast" className="rounded-full bg-slate-100 hover:bg-secondary hover:text-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors">
                    Carpet Steam Extraction
                  </Link>
                  <Link href="/pest-control-gold-coast" className="rounded-full bg-slate-100 hover:bg-secondary hover:text-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors">
                    End of Lease Pest Control
                  </Link>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="bg-primary py-16 text-white relative overflow-hidden">
        <div className="classic-container text-center relative z-10">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary">
            Protect Your Rental Bond
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
            Book Your Queensland Bond Clean with 100% Peace of Mind
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-8 text-white/75 max-w-2xl mx-auto">
            Don&apos;t spend 15 exhausting hours scrubbing oven racks or scrubbing shower glass. Let our police-checked, insured team deliver an inspection-standard clean backed by our 72-hour re-clean guarantee.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-8 text-xs font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90 shadow-lg">
              <Link href="/end-of-lease-cleaning-gold-coast">
                Book End of Lease Clean
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-xs font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
              <Link href="/contact">
                Request a Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
