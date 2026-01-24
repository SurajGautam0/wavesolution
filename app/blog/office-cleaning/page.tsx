import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, Building2, Briefcase, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "अफिस सरसफाई: कति पटक र कसरी? | CRYSTALFRONT Blog",
    description: "एउटा स्वच्छ कार्यालयले कर्मचारीहरूको कार्यक्षमता बढाउँछ। अफिस सरसफाईको सही तालिकाको लागि यो ब्लग पढ्नुहोस्।",
}

export default function OfficeCleaningPage() {
    const points = [
        { title: "दैनिक (Daily)", content: "टेबल, कम्प्युटर किबोर्ड र साझा ठाउँहरूको सफाई दैनिक हुनुपर्छ।" },
        { title: "साप्ताहिक (Weekly)", content: "झ्यालका काँच, कार्पेट र क्याबिनेटहरूको गहिरो सफाई हप्ताको एक पटक आवश्यक हुन्छ।" },
        { title: "महिनावारी (Monthly)", content: "भेन्टिलेसन, माथिल्लो तल्लाका झ्याल र स्टोर कोठाको सफाई महिनामा एक पटक गर्दा उचित हुन्छ।" }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="classic-container relative z-10">
                    <Link href="/" className="inline-flex items-center text-secondary text-sm font-black uppercase tracking-widest mb-8 hover:gap-2 transition-all">
                        <ArrowLeft className="w-4 h-4 mr-2" /> मुख्य पृष्ठमा जानुहोस्
                    </Link>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tighter mb-8 leading-tight max-w-4xl mx-auto uppercase">
                        अफिस <span className="text-secondary">सरसफाई</span>: कति पटक र कसरी गर्ने?
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
                            <h2 className="text-xl sm:text-2xl font-black text-blue-950 uppercase tracking-tight">स्वच्छ कार्यालय, उच्च कार्यक्षमता</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-12">
                            हामी दिनको ८-९ घण्टा कार्यालयमा बिताउँछौँ। त्यसैले अफिसको वातावरण स्वच्छ र किटाणुमुक्त हुनु अत्यन्त जरुरी छ। एउटा व्यवस्थित सफाई तालिकाले कर्मचारीहरूलाई बिरामी हुनबाट बचाउँछ र राम्रो कार्यवातावरण सिर्जना गर्दछ।
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
                            <h3 className="text-2xl font-black text-blue-950 mb-4 uppercase tracking-tight">हाम्रो कोर्पोरेट सेवा</h3>
                            <p className="text-muted-foreground mb-8">
                                CRYSTALFRONT ले सानो अफिस देखि ठूला कोर्पोरेट भवनहरू सम्मका लागि विशेष सफाई सेवा प्रदान गर्दछ। हामी विशेष गरी काँचका भित्ता र झ्यालहरूको सफाईमा विशेषज्ञता राख्दछौँ।
                            </p>
                            <Button asChild className="rounded-full bg-primary hover:bg-blue-900 text-white font-black uppercase tracking-widest px-10 h-14">
                                <Link href="/contact">हाम्रो टोलीसँग परामर्श गर्नुहोस्</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
