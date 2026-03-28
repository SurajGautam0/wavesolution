import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, Sparkles, ArrowLeft, Leaf, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Eco-Friendly Cleaning Methods | Gold Coast",
    description: "Discover eco-friendly cleaning solutions for Gold Coast homes. Safe, non-toxic green cleaning methods for all suburbs.",
    keywords: ["eco-friendly cleaning Gold Coast", "green cleaning products", "natural cleaning methods", "non-toxic cleaning Gold Coast", "sustainable cleaning Australia", "pet safe cleaning"],
    alternates: {
        canonical: "https://www.wavesolution.com.au/blog/eco-friendly",
    },
    openGraph: {
        title: "Eco-Friendly Cleaning Solutions | Green Cleaning Gold Coast",
        description: "Non-toxic, sustainable cleaning methods for Gold Coast homes. Safe for kids & pets.",
        url: "https://www.wavesolution.com.au/blog/eco-friendly",
    },
}

export default function EcoFriendlyCleaningPage() {
    const ecoTips = [
        {
            title: "Leverage Natural Cleaners",
            description: "Everyday pantry staples like white vinegar and baking soda can outperform harsh industrial chemicals, providing a deep clean without toxic residues.",
        },
        {
            title: "The Power of Citrus",
            description: "Lemon juice naturally dissolves mineral deposits and stains on metal fixtures while leaving behind a refreshing, organic scent.",
        },
        {
            title: "Advanced Steam Cleaning",
            description: "High-temperature steam effectively sanitizes surfaces and kills bacteria without the need for chemical agents, ensuring a deep, sterile clean.",
        },
        {
            title: "Sustainable Cleaning Tools",
            description: "Transition from disposable paper towels to reusable, high-performance microfiber cloths to significantly reduce waste and improve efficiency.",
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -mr-48 -mt-48" />

                <div className="classic-container relative z-10 text-center">
                    <Link href="/" className="inline-flex items-center text-secondary text-sm font-black uppercase tracking-widest mb-8 hover:gap-2 transition-all">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tighter mb-8 leading-tight max-w-4xl mx-auto">
                        Eco-Friendly Cleaning Solutions <span className="text-secondary">Gold Coast</span>
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold opacity-80 uppercase tracking-widest">
                        <div className="flex items-center"><User className="w-4 h-4 mr-2 text-secondary" /> Eco Expert</div>
                        <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-secondary" /> February 02, 2026</div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-20 text-center">
                <div className="classic-container">
                    <div className="mx-auto max-w-4xl">
                        <div className="bg-white rounded-[3rem] shadow-2xl p-8 sm:p-16 border border-blue-50">
                            <div className="flex justify-center mb-10 text-green-500">
                                <Leaf className="w-16 h-16 animate-pulse" />
                            </div>

                            <p className="text-lg text-muted-foreground mb-12">
                                Many conventional cleaning products contain harsh chemicals that can impact both indoor air quality and the environment. Adopting eco-friendly practices ensures your home remains a safe, healthy sanctuary for your family.
                            </p>

                            <div className="grid gap-6 text-left">
                                {ecoTips.map((tip, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 group hover:bg-white hover:shadow-xl transition-all">
                                        <div className="flex items-center gap-4 mb-3">
                                            <Zap className="w-5 h-5 text-secondary" />
                                            <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight">{tip.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground font-medium">{tip.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-10 border-t border-blue-50">
                                <h3 className="text-2xl font-black text-blue-950 mb-6 uppercase tracking-tight">WaveSolution Commitment</h3>
                                <p className="text-muted-foreground mb-8">
                                    Our team is dedicated to environmental stewardship. We prioritize biodegradable and non-toxic products in all our services, ensuring a pristine clean that respects the planet.
                                </p>
                                <Button asChild className="rounded-full bg-secondary text-white font-black uppercase tracking-widest px-10 h-14">
                                    <Link href="/book">Schedule a Clean</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
