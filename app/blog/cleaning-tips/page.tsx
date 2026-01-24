import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ChevronRight, CheckCircle2, Sparkles, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "१० घर सफा राख्ने उपयोगी टिप्स | CRYSTALFRONT Blog",
    description: "तपाईंको घरलाई सधैं चम्किलो र सफा राख्नका लागि १० महत्वपूर्ण टिप्सहरू।",
}

export default function CleaningTipsPage() {
    const tips = [
        {
            title: "१. दैनिक धुलो पुछ्ने बानी बसाल्नुहोस्",
            content: "काठमाडौं र ललितपुर जस्ता सहरहरूमा धुलोको समस्या धेरै हुने गर्दछ। त्यसैले, दैनिक रूपमा झ्यालका ढोका र सरसामानको हल्का पुछपाछ गर्दा घर सधैं नयाँ जस्तै देखिन्छ।"
        },
        {
            title: "२. माइक्रोफाइबर कपडाको प्रयोग",
            content: "साधारण सुतीको कपडा भन्दा माइक्रोफाइबर कपडाले धुलो र फोहोरलाई राम्रोसँग तान्छ र काँचका सामानहरूमा दाग बस्न दिँदैन।"
        },
        {
            title: "३. भिनेगर र बेकिङ सोडाको जादु",
            content: "रसायनयुक्त सफा गर्ने साधनको सट्टा घरमै पाइने भिनेगर र बेकिङ सोडाको मिश्रणले भान्छा र बाथरुमका कडा दागहरू सजिलै हटाउन सकिन्छ।"
        },
        {
            title: "४. झ्याल र काँचको विशेष ध्यान",
            content: "काँच सफा गर्दा सधैं माथिबाट तल तिर सफा गर्नुहोस्। यसले गर्दा पानीको रेखा बस्न पाउँदैन र झ्याल पूर्ण रूपमा चम्किलो हुन्छ।"
        },
        {
            title: "५. फोहोरको समयमै व्यवस्थापन",
            content: "भान्छाको सड्ने फोहोर र नसड्ने फोहोरलाई छुट्टाछुट्टै राख्नुहोस्। यसले घरमा दुर्गन्ध फैलाउन दिँदैन र सरसफाईमा सहजता ल्याउँछ।"
        },
        {
            title: "६. बाथरुमलाई सुख्खा राख्नुहोस्",
            content: "नुहाइसकेपछि बाथरुमको भुँइ र भित्तालाई सुख्खा राख्ने प्रयास गर्नुहोस्। यसले गर्दा लेउ (Mould) लाग्ने सम्भावना कम हुन्छ।"
        },
        {
            title: "७. ओछ्यान मिलाउने बानी",
            content: "बिहान उठ्ने बित्तिकै ओछ्यान मिलाउँदा कोठा तुरुन्तै सफा र व्यवस्थित देखिन्छ। यो मनोवैज्ञानिक रूपमा पनि सकारात्मक हुन्छ।"
        },
        {
            title: "८. भुइँको सरसफाई (Mopping)",
            content: "हप्तामा कम्तिमा दुई पटक भुइँलाई राम्रो किटाणुनाशक प्रयोग गरेर पुछ्नुहोस्। विशेष गरी बालबालिका भएका घरमा यो अनिवार्य छ।"
        },
        {
            title: "९. अनावश्यक सामान हटाउनुहोस् (Declutter)",
            content: "नचाहिने पुराना लुगा, पत्रिका र प्लास्टिकका सामानहरू हटाउँदा घरमा ठाउँ बढ्छ र सफा गर्न सजिलो हुन्छ।"
        },
        {
            title: "१०. व्यावसायिक सरसफाई सेवाको मद्दत",
            content: "कहिलेकाँही घरको गहिरो सरसफाई (Deep Cleaning) का लागि विशेषज्ञहरूको मद्दत लिनु फाइदाजनक हुन्छ। CRYSTALFRONT जस्ता विशेषज्ञहरूले तपाईंको घरलाई नयाँ रूप दिन सक्छन्।"
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
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
                        10 Useful Tips to Keep Your Home <span className="text-secondary">Sparkling Always</span>
                    </h1>


                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold opacity-80 uppercase tracking-widest">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-secondary" /> CrystalFront Expert
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-secondary" /> February 15, 2026
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-secondary" /> ५ मिनेट पढ्नुहोस्
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
                                घरलाई सफा र स्वास्थ्यकर राख्नु केवल बाहिरी चमक मात्र होइन, यो एक सुखद जीवनशैली पनि हो। यहाँ हामीले नेपाली परिवेश अनुसार घरलाई कसरी व्यवस्थित र चम्किलो राख्ने भन्ने बारे केही व्यावहारिक टिप्सहरू प्रस्तुत गरेका छौं।
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
                                        Following these simple yet effective tips will keep your home always fresh and vibrant. If you need deep cleaning or specialized window cleaning, CRYSTALFRONT is always ready to serve you.
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
                                ← फिर्ता जानुहोस्
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="bg-primary text-white py-16 text-center">
                <div className="classic-container px-4">
                    <h2 className="text-3xl font-serif font-black mb-6">हाम्रा नयाँ सेवाहरूको बारेमा जानकारी पाउनुहोस्</h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto uppercase tracking-widest font-bold text-xs">हाम्रो सफाइ विशेषज्ञ टोलीसँग जोडिनुहोस्</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild variant="outline" className="h-14 px-10 rounded-full border-2 border-white/20 hover:border-white text-white font-black">
                            <Link href="/services">हाम्रा सेवाहरू हेर्नुहोस्</Link>
                        </Button>
                        <Button asChild className="h-14 px-10 rounded-full bg-secondary hover:bg-secondary/90 text-white font-black">
                            <Link href="/contact">सम्पर्क गर्नुहोस्</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
