import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ChevronRight, CheckCircle2, Sparkles, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "10 House Cleaning Tips for Gold Coast Homes",
    description: "Expert house cleaning tips from Gold Coast's top cleaners. Learn professional cleaning techniques for kitchens, bathrooms, windows & more. Practical tips for maintaining a spotless Gold Coast home year-round.",
    keywords: ["house cleaning tips Gold Coast", "home cleaning guide", "how to clean house", "cleaning tips Australia", "kitchen cleaning tips", "bathroom cleaning hacks"],
    alternates: {
        canonical: "https://www.wavesolution.com.au/blog/cleaning-tips",
    },
    openGraph: {
        title: "10 Expert House Cleaning Tips for Gold Coast Homes",
        description: "Professional cleaning tips from Gold Coast's trusted cleaners. Keep your home spotless year-round.",
        url: "https://www.wavesolution.com.au/blog/cleaning-tips",
    },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
    { "@type": "ListItem", position: 3, name: "House Cleaning Tips", item: "https://www.wavesolution.com.au/blog/cleaning-tips" },
  ],
}

export default function CleaningTipsPage() {
    const tips = [
        {
            title: "1. Establish a Daily Dusting Habit",
            content: "In metropolitan hubs like Gold Coast and Brisbane, dust accumulation is a constant challenge. A quick daily wipe of surfaces and window sills ensures your home remains fresh and prevents long-term grime buildup."
        },
        {
            title: "2. The Power of Microfiber",
            content: "Replace traditional cotton cloths with high-quality microfiber. These advanced fibers trap dust and allergens more effectively without leaving streaks or lint on delicate glass and polished surfaces."
        },
        {
            title: "3. Natural Cleaning Solutions",
            content: "Harness the power of kitchen staples like white vinegar and baking soda. This eco-friendly combination effectively dissolves tough stains in kitchens and bathrooms without exposing your family to harsh chemicals."
        },
        {
            title: "4. Mastering Glass and Windows",
            content: "To achieve a professional, streak-free shine, always clean glass surfaces from top to bottom. This technique prevents residue from dripping onto already cleaned areas, ensuring crystal-clear results."
        },
        {
            title: "5. Strategic Waste Management",
            content: "Implement a dual-bin system to separate organic and inorganic waste at the source. This prevents odors and streamlines the cleaning process, keeping your environment hygienic and organized."
        },
        {
            title: "6. Moisture Control in Bathrooms",
            content: "Prevent mold and mildew growth by keeping your bathroom dry. Squeegee walls and floors after use to maintain a pristine, spa-like atmosphere."
        },
        {
            title: "7. The Morning Bed Reset",
            content: "Making your bed immediately after waking up is a simple ritual that instantly elevates the room's aesthetic and sets a disciplined, productive tone for your entire day."
        },
        {
            title: "8. Systematic Floor Care",
            content: "Deep clean your floors at least twice a week using a high-quality disinfectant. This is essential for maintaining a safe and healthy environment, especially for households with children."
        },
        {
            title: "9. Declutter for Clarity",
            content: "Regularly remove unused clothing, old periodicals, and unnecessary plastics. A minimalist approach not only makes cleaning easier but also creates a more tranquil and spacious living area."
        },
        {
            title: "10. Professional Deep Cleaning Services",
            content: "Sometimes, your home requires a specialized touch. WaveSolution’s professional deep cleaning services utilize industrial-grade equipment and expertise to restore your home to its original brilliance."
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            {/* Blog Hero Section */}
            <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -ml-32 -mb-32" />

                <div className="classic-container relative z-10 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-secondary text-sm font-black uppercase tracking-widest mb-8 hover:gap-2 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tighter mb-8 leading-tight max-w-4xl mx-auto">
                        10 House Cleaning Tips for <span className="text-secondary">Gold Coast Homes</span>
                    </h1>


                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold opacity-80 uppercase tracking-widest">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-secondary" /> WaveSolution Expert
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-secondary" /> February 15, 2026
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-secondary" /> 5 Minute Read
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content Section */}
            <section className="py-12 sm:py-20">
                <div className="classic-container">
                    <div className="mx-auto max-w-4xl">
                        <div className="bg-white rounded-[3rem] shadow-2xl shadow-blue-900/5 p-8 sm:p-16 border border-blue-50">
                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 italic border-l-4 border-secondary pl-6">
                                Maintaining a clean and hygienic home is more than just about aesthetics—it&apos;s a commitment to a healthier, more vibrant lifestyle. We&apos;ve curated these professional tips to help you keep your living space pristine in any environment.
                            </p>

                            <div className="space-y-12 mb-16">
                                {tips.map((tip, index) => (
                                    <div key={index} className="group">
                                        <h2 className="text-2xl sm:text-3xl font-black text-blue-950 mb-4 group-hover:text-primary transition-colors">
                                            {tip.title}
                                        </h2>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {tip.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Conclusion Card */}
                            <div className="bg-blue-50 rounded-[2.5rem] p-8 sm:p-12 border border-blue-100 flex flex-col md:flex-row items-center gap-8">
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                                    <Sparkles className="w-10 h-10 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-blue-950 mb-3">Conclusion</h3>
                                    <p className="text-muted-foreground font-medium mb-6">
                                        Following these simple yet effective tips will keep your home always fresh and vibrant. If you need deep cleaning or specialized window cleaning, WaveSolution is always ready to serve you.
                                    </p>
                                    <Button asChild className="rounded-full h-12 px-8 bg-primary hover:bg-blue-900 text-white font-black uppercase tracking-widest transition-all">
                                        <Link href="/book">Book Now</Link>
                                    </Button>

                                </div>
                            </div>
                        </div>

                        {/* Back to Home Button */}
                        <div className="text-center mt-12">
                            <Link href="/" className="text-sm font-black text-blue-950/40 hover:text-primary transition-colors uppercase tracking-[0.4em]">
                                ← Back to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="bg-primary text-white py-16 text-center">
                <div className="classic-container px-4">
                    <h2 className="text-3xl font-serif font-black mb-6">Stay Informed on Our Premium Services</h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto uppercase tracking-widest font-bold text-xs">Connect with our team of cleaning experts today</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild variant="outline" className="h-14 px-10 rounded-full border-2 border-white/20 hover:border-white text-white font-black">
                            <Link href="/services">View Our Services</Link>
                        </Button>
                        <Button asChild className="h-14 px-10 rounded-full bg-secondary hover:bg-secondary/90 text-white font-black">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
