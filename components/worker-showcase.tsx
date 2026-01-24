"use client"

import Image from "next/image"
import { ShieldCheck, Star, Users, Zap } from "lucide-react"

export function WorkerShowcase() {
    const trainingFeatures = [
        {
            icon: ShieldCheck,
            title: "Certified Professionalism",
            description: "Every team member undergoes rigorous field training and background checks."
        },
        {
            icon: Star,
            title: "Mastery of Detail",
            description: "Our 'Cleaning Classes' focus on advanced techniques for XL showrooms and luxury homes."
        },
        {
            icon: Users,
            title: "Elite Team Spirit",
            description: "We foster a culture of excellence and shared standards across our entire workforce."
        }
    ]

    return (
        <section className="classic-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                            <Zap className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Academy of Excellence</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-blue-950 tracking-tighter leading-tight">
                            Our Pro <span className="text-secondary">Cleaning Classes</span>
                        </h2>
                        <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md">
                            At CRYSTALFRONT, we don't just hire cleaners; we train artisans. Our dedicated training academy ensures every worker masters the 'Crystal Clear' standard.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {trainingFeatures.map((feature, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <div className="mt-1 p-2 bg-blue-50 rounded-xl">
                                    <feature.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-black text-blue-950 uppercase text-xs tracking-widest">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground mt-1 font-medium">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-[400px] lg:min-h-full bg-slate-100 group overflow-hidden">
                    <Image
                        src="/cleaning_training.png"
                        alt="CRYSTALFRONT Training Session"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent flex flex-col justify-end p-8 lg:p-12">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                            <p className="text-white text-xs font-black uppercase tracking-widest mb-1">Live Training Insight</p>
                            <p className="text-white/80 text-sm font-medium italic">"Precision in every stroke is what separates us from the rest."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
