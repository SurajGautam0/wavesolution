"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ShieldCheck, Star, Users, Zap } from "lucide-react"

export function WorkerShowcase() {
    const [randomImage, setRandomImage] = useState("/gold-coast-cleaning-team.jpg")

    useEffect(() => {
        // Use a local branded image with a descriptive filename for SEO.
        setRandomImage("/gold-coast-cleaning-team.jpg")
    }, [])

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
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <Zap className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Academy of Excellence</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-secondary tracking-tighter leading-tight">
                            Professional <span className="text-secondary">Cleaning Services</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-md">
                            Our team of experienced professionals uses the latest cleaning techniques and eco-friendly products to ensure your space is not just clean, but healthy too.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {trainingFeatures.map((feature, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <div className="mt-1 p-2 bg-primary/10 rounded-xl">
                                    <feature.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-black text-secondary uppercase text-xs tracking-widest">{feature.title}</h4>
                                    <p className="text-sm text-slate-600 mt-1 font-medium">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-[500px] lg:min-h-full bg-slate-100 group overflow-hidden">
                    <Image
                        src={randomImage}
                        alt="WaveSolution Professional Cleaning"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        key={randomImage}
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-700" />

                    {/* Top Right Luxury Badge */}
                    <div className="absolute top-6 right-6 animate-fadeIn">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl">
                            <div className="relative w-4 h-4 overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                    sizes="16px"
                                />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Gold Coast Specialists</span>
                        </div>
                    </div>

                    {/* Bottom Content - Immersive Glassmorphism */}
                    <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="relative">
                            {/* Decorative Line */}
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-secondary rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-top" />

                            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl overflow-hidden">
                                {/* Soft Light Leak Effect */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />

                                <div className="relative z-10 flex flex-col space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="h-px w-8 bg-secondary" />
                                        <p className="text-secondary text-[10px] font-black uppercase tracking-[0.3em]">Project Spotlight</p>
                                    </div>
                                    <h3 className="text-white text-2xl font-black tracking-tight leading-tight">
                                        The <span className="italic text-white/90">WaveSolution</span> Standard
                                    </h3>
                                    <p className="text-white/70 text-sm font-medium leading-relaxed max-w-sm">
                                        Whether it's your home, office, or commercial space, we pay attention to every detail to deliver exceptional results.
                                    </p>

                                    <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-2">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="w-6 h-6 rounded-full border border-white/20 bg-blue-100 overflow-hidden">
                                                        <Image src="/avatar-placeholder.svg" alt="Wave Solution crew member" width={24} height={24} className="object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Expert Crew Assigned</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-2.5 h-2.5 fill-secondary text-secondary" />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
