import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, Sparkles, ArrowLeft, Leaf, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "वातावरणमैत्री सरसफाईका उपायहरू | CRYSTALFRONT Blog",
    description: "तपाईंको घरलाई रासायनिक रसायन बिना कसरी वातावरणमैत्री तरिकाले सफा राख्ने भन्ने बारे उपयोगी जानकारी।",
}

export default function EcoFriendlyCleaningPage() {
    const ecoTips = [
        {
            title: "प्राकृतिक क्लिनरको प्रयोग",
            description: "भिनेगर र बेकिङ सोडा जस्ता घरमै उपलब्ध हुने वस्तुहरूले कडा रसायन भन्दा राम्रो काम गर्न सक्छन्।",
        },
        {
            title: "कागतीको शक्ति",
            description: "कागतीले धातुका सामान र बेसिनमा भएको खया र दाग हटाउनुका साथै राम्रो बासना प्रदान गर्दछ।",
        },
        {
            title: "वाष्प सरसफाई (Steam Cleaning)",
            description: "रसायनको सट्टा तातो वाफ प्रयोग गर्दा किटाणुहरू मर्छन् र भुइँ गहिरो रूपले सफा हुन्छ।",
        },
        {
            title: "पुन: प्रयोग गर्न मिल्ने सामग्री",
            description: "एकपटक प्रयोग गरेर फाल्ने पेपर टावलको सट्टा धोएर फेरि प्रयोग गर्न मिल्ने कपडाहरू प्रयोग गर्नुहोस्।",
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -mr-48 -mt-48" />

                <div className="classic-container relative z-10 text-center">
                    <Link href="/" className="inline-flex items-center text-secondary text-sm font-black uppercase tracking-widest mb-8 hover:gap-2 transition-all">
                        <ArrowLeft className="w-4 h-4 mr-2" /> मुख्य पृष्ठमा जानुहोस्
                    </Link>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tighter mb-8 leading-tight max-w-4xl mx-auto">
                        वातावरणमैत्री <span className="text-secondary">सरसफाईका</span> प्रभावकारी उपायहरू
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
                                हामीले प्रयोग गर्ने धेरै जसो सरसफाईका साधनहरूमा कडा रसायनहरू हुन्छन् जसले हाम्रो स्वास्थ्य र वातावरण दुवैलाई असर गर्छ। इको-फ्रेन्डली सरसफाईले तपाईंको घरलाई सुरक्षित र स्वस्थ बनाउँछ।
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
                                <h3 className="text-2xl font-black text-blue-950 mb-6 uppercase tracking-tight">CRYSTALFRONT को प्रतिवद्धता</h3>
                                <p className="text-muted-foreground mb-8">
                                    हाम्रो टिमले सरसफाई गर्दा सकेसम्म वातावरणलाई कम असर पर्ने जैविक र सुरक्षित उत्पादनहरू प्रयोग गर्दछ। हामी तपाईंको घर मात्र सफा गर्दैनौँ, वातावरणको पनि ख्याल राख्छौँ।
                                </p>
                                <Button asChild className="rounded-full bg-secondary text-white font-black uppercase tracking-widest px-10 h-14">
                                    <Link href="/book">हामीसँग जोड्नुहोस्</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
