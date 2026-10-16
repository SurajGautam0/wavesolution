import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Home, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const pageUrl = "https://www.wavesolution.com.au/blog/house-cleaning-checklist"
const title = "House Cleaning Checklist for Gold Coast Homes"
const description =
  "A practical house cleaning checklist for Gold Coast homes, with weekly, monthly and seasonal tasks for kitchens, bathrooms, bedrooms and living areas."

export const metadata: Metadata = {
  title: "House Cleaning Checklist Gold Coast: Weekly & Monthly",
  description,
  keywords: [
    "house cleaning checklist",
    "house cleaning checklist Gold Coast",
    "weekly house cleaning checklist",
    "monthly cleaning checklist",
    "house cleaning tasks",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "House Cleaning Checklist Gold Coast: Weekly & Monthly | Wave Solution",
    description,
    url: pageUrl,
    type: "article",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: title }],
  },
}

const weeklyTasks = [
  "Wipe kitchen benches, stovetop and frequently touched cupboard handles.",
  "Clean the sink and tap; empty the kitchen bin before it starts to smell.",
  "Wipe bathroom basins, taps, mirrors and shower surfaces; remove hair from drains.",
  "Dust reachable surfaces, shelves and bedside tables, working from high to low.",
  "Vacuum carpets and rugs, then sweep and mop hard floors, including entry areas where sand collects.",
  "Change bed linen and wipe obvious marks from switches, handles and other high-touch spots.",
]

const monthlyTasks = [
  "Clean the microwave interior, appliance fronts and the fridge shelves that need attention.",
  "Wipe skirting boards, door frames, window sills and accessible window tracks.",
  "Wash shower screens more thoroughly and check grout and silicone for persistent dampness or mould.",
  "Vacuum upholstery and under movable cushions; clean removable covers according to their care labels.",
  "Dust ceiling fan blades and reachable light fittings safely, with the power switched off where needed.",
  "Check pantry shelves and cupboard interiors, removing crumbs and wiping spills.",
]

const seasonalTasks = [
  "Wash curtains or blinds according to the manufacturer's care instructions.",
  "Clean rangehood filters and inspect less-used appliance areas for grease or dust.",
  "Move light furniture to vacuum underneath and review areas that are missed in a routine clean.",
  "Check ventilation in bathrooms, laundries and wardrobes, especially during humid or rainy periods.",
  "Review outdoor entryways and balconies for tracked-in grit, leaves and salt residue.",
]

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      headline: "House Cleaning Checklist Gold Coast: Weekly, Monthly & Seasonal Tasks",
      description,
      author: { "@type": "Organization", name: "Wave Solution Cleaning", url: "https://www.wavesolution.com.au/about" },
      publisher: { "@type": "Organization", name: "Wave Solution Cleaning" },
      datePublished: "2026-10-16",
      dateModified: "2026-10-16",
      mainEntityOfPage: pageUrl,
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      inLanguage: "en-AU",
    },
  ],
}

function TaskList({ tasks }: { tasks: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {tasks.map((task) => (
        <li key={task} className="flex items-start gap-3 text-base leading-7 text-slate-700">
          <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
          <span>{task}</span>
        </li>
      ))}
    </ul>
  )
}

export default function HouseCleaningChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <section className="bg-primary px-4 py-14 text-white sm:py-20">
        <div className="classic-container mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            <span aria-current="page" className="text-white">House Cleaning Checklist</span>
          </nav>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            <Home aria-hidden="true" className="h-4 w-4" /> Gold Coast Home Care
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            A realistic room-by-room routine to help keep dust, kitchen grime, bathroom residue and Gold Coast sand under control.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-white/70">
            <span>By Wave Solution Cleaning</span>
            <span className="flex items-center gap-2"><Clock aria-hidden="true" className="h-4 w-4" /> 7 minute read</span>
            <time dateTime="2026-10-16">Updated October 16, 2026</time>
          </div>
          <Button asChild className="mt-8 h-12 rounded-full bg-cyan-500 px-6 font-bold text-white hover:bg-cyan-600">
            <Link href="/house-cleaning-gold-coast">
              Explore Gold Coast house cleaning <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <article className="classic-container mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-lg leading-8 text-slate-700">
            A useful house cleaning checklist helps you spend time on the jobs that make the biggest difference. You do not need to deep clean every room every week: handle high-use surfaces and floors regularly, then rotate less frequent tasks through the month.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Gold Coast homes also deal with tracked-in sand, warm weather and periods of high humidity. Ventilation and wiping damp surfaces can help keep bathrooms and wardrobes fresher between cleans. Adjust this schedule for your household, pets, visitors and the way each room is used.
          </p>
          <p className="mt-5 rounded-xl border-l-4 border-cyan-600 bg-cyan-50 p-5 text-base leading-7 text-slate-800">
            <strong>Quick checklist:</strong> clean kitchen and bathroom touchpoints, dust and vacuum weekly; rotate appliance, window-track and detail cleaning monthly; handle curtains, filters and less-used areas seasonally. Use your browser&apos;s Print command to keep the lists handy.
          </p>

          <section className="mt-12" aria-labelledby="weekly-cleaning">
            <h2 id="weekly-cleaning" className="text-2xl font-black text-slate-900 sm:text-3xl">Weekly house cleaning checklist</h2>
            <p className="mt-3 leading-7 text-slate-600">Start with the rooms used every day. Work from higher surfaces down to the floor so dust and crumbs are picked up as you go.</p>
            <TaskList tasks={weeklyTasks} />
          </section>

          <section className="mt-12" aria-labelledby="monthly-cleaning">
            <h2 id="monthly-cleaning" className="text-2xl font-black text-slate-900 sm:text-3xl">Monthly cleaning checklist</h2>
            <p className="mt-3 leading-7 text-slate-600">Choose a few of these tasks each week, or set aside one longer session for the details that are easy to miss during routine cleaning.</p>
            <TaskList tasks={monthlyTasks} />
          </section>

          <section className="mt-12" aria-labelledby="seasonal-cleaning">
            <h2 id="seasonal-cleaning" className="text-2xl font-black text-slate-900 sm:text-3xl">Seasonal and occasional tasks</h2>
            <p className="mt-3 leading-7 text-slate-600">These jobs depend on the home and the season. Do them when needed rather than treating every item as a fixed weekly requirement.</p>
            <TaskList tasks={seasonalTasks} />
          </section>

          <section className="mt-12 rounded-2xl bg-cyan-50 p-6" aria-labelledby="cleaning-safely">
            <h2 id="cleaning-safely" className="text-xl font-black text-slate-900">Clean safely and protect surfaces</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Read product labels and test unfamiliar cleaners on a small, inconspicuous area first.</li>
              <li>Never mix cleaning products, especially bleach with acids or ammonia-based products.</li>
              <li>Use a suitable cloth or tool for each surface; avoid abrasive pads on finishes that can scratch.</li>
              <li>For persistent or widespread mould, leaks or dampness, address the moisture source and seek appropriate help.</li>
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="make-routine">
            <h2 id="make-routine" className="text-2xl font-black text-slate-900 sm:text-3xl">Make the checklist fit your home</h2>
            <p className="mt-3 leading-7 text-slate-700">
              A smaller home may need less time, while pets, children, frequent guests or sandy entryways can mean some jobs need doing more often. Keep a short list of the tasks that matter most to you and rotate the rest, instead of trying to complete every item in one session.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              If regular cleaning is difficult to fit into your week, compare the scope and schedule options on our <Link href="/house-cleaning-gold-coast" className="font-semibold text-cyan-700 underline underline-offset-4">Gold Coast house cleaning page</Link>. For price factors, see the <Link href="/house-cleaning-cost-gold-coast" className="font-semibold text-cyan-700 underline underline-offset-4">house cleaning cost guide</Link>.
            </p>
          </section>

          <section className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="faq">
            <h2 id="faq" className="text-2xl font-black text-slate-900 sm:text-3xl">House cleaning checklist FAQs</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">How often should I clean my home?</h3>
                <p className="mt-2 leading-7 text-slate-600">It depends on how many people live in the home, whether you have pets, and how quickly dust or mess builds up. Many households do a short weekly reset and rotate deeper tasks monthly.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">What should be on a weekly house cleaning checklist?</h3>
                <p className="mt-2 leading-7 text-slate-600">Prioritise kitchen and bathroom touchpoints, dusting, changing bed linen, vacuuming and hard-floor care. Add jobs based on the rooms your household uses most.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Can I book regular house cleaning on the Gold Coast?</h3>
                <p className="mt-2 leading-7 text-slate-600">Yes. Wave Solution offers house cleaning enquiries for Gold Coast homes. Share your suburb, property details and preferred schedule to request a quote.</p>
              </div>
            </div>
          </section>

          <div className="mt-12 rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
            <div className="flex items-start gap-4">
              <Sparkles aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
              <div>
                <h2 className="text-xl font-black">Want help keeping up with the routine?</h2>
                <p className="mt-2 leading-7 text-white/75">Tell us your suburb, home size and preferred frequency to get a house cleaning quote.</p>
                <Button asChild className="mt-5 rounded-full bg-cyan-500 px-5 font-bold text-white hover:bg-cyan-600">
                  <Link href="/book?service=house-cleaning-gold-coast">Request a house cleaning quote <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-slate-500">
          <Link href="/blog" className="font-semibold text-cyan-700 hover:underline">← More cleaning guides</Link>
        </div>
      </article>
    </main>
  )
}
