import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, Building2, Briefcase, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Office Cleaning Guide Gold Coast | Wave Solution",
    description: "Expert guide on office cleaning frequency & best practices for Gold Coast businesses. Daily, weekly & monthly cleaning schedules. Learn how a clean workspace boosts productivity by 15%. Tips from Gold Coast's top commercial cleaners.",
    keywords: ["office cleaning guide Gold Coast", "commercial cleaning tips", "office cleaning schedule", "workplace cleaning best practices", "office hygiene Gold Coast", "commercial cleaning frequency"],
    alternates: {
        canonical: "https://www.wavesolution.com.au/blog/office-cleaning",
    },
    openGraph: {
        title: "Office Cleaning Guide | Best Practices for Gold Coast Businesses",
        description: "How often should you clean your office? Expert guide from Gold Coast's commercial cleaning professionals.",
        url: "https://www.wavesolution.com.au/blog/office-cleaning",
    },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
    { "@type": "ListItem", position: 3, name: "Office Cleaning Guide", item: "https://www.wavesolution.com.au/blog/office-cleaning" },
  ],
}

export default function OfficeCleaningPage() {
    const points = [
        { title: "Daily Maintenance", content: "Regular sanitization of workstations, keyboards, and common areas is essential to maintain daily hygiene and prevent germ transmission." },
        { title: "Weekly Deep Clean", content: "Glass surfaces, carpet vacuuming, and cabinet organization require weekly attention to maintain a professional atmosphere." },
        { title: "Monthly Intensive Care", content: "In-depth cleaning of ventilation systems, high-level windows, and storage units ensures long-term facility excellence." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="classic-container relative z-10">
                    <Link href="/" className="inline-flex items-center text-secondary text-sm font-black uppercase tracking-widest mb-8 hover:gap-2 transition-all">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tighter mb-8 leading-tight max-w-4xl mx-auto uppercase">
                        Office <span className="text-secondary">Cleaning Guide</span> Gold Coast
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold opacity-80 uppercase tracking-widest">
                        <div className="flex items-center"><User className="w-4 h-4 mr-2 text-secondary" /> Corporate Specialist</div>
                        <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-secondary" /> January 20, 2026</div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-20 text-center">
                <div className="classic-container text-left max-w-4xl">
                    <div className="bg-white rounded-[3rem] shadow-2xl p-8 sm:p-16 border border-blue-50">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-blue-50">
                            <Briefcase className="w-10 h-10 text-primary" />
                            <h2 className="text-xl sm:text-2xl font-black text-blue-950 uppercase tracking-tight">Pristine Workspace, Peak Productivity</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-12">
                            With professionals spending a significant portion of their day in the office, maintaining a sterile and organized environment is paramount. A systematic cleaning strategy not only safeguards employee health but also cultivates a professional and motivating workplace.
                        </p>

                        <div className="space-y-8 mb-16">
                            {points.map((p, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-blue-950 uppercase tracking-tight mb-2">{p.title}</h4>
                                        <p className="text-muted-foreground font-medium">{p.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-primary/5 rounded-[2.5rem] p-8 sm:p-12 border border-primary/10">
                            <Building2 className="w-12 h-12 text-primary mb-6" />
                            <h3 className="text-2xl font-black text-blue-950 mb-4 uppercase tracking-tight">Our Corporate Solutions</h3>
                            <p className="text-muted-foreground mb-8">
                                WaveSolution provides bespoke cleaning solutions ranging from boutique offices to sprawling corporate complexes. We specialize in exterior glass maintenance and comprehensive facility hygiene.
                            </p>
                            <Button asChild className="rounded-full bg-primary hover:bg-blue-900 text-white font-black uppercase tracking-widest px-10 h-14">
                                <Link href="/contact">Consult with Our Experts</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
