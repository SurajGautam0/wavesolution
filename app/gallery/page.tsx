"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
    Camera,
    ZoomIn,
    X,
    Sparkles,
    ShieldCheck,
    Maximize2,
    Filter,
    ArrowRight
} from "lucide-react"

const categories = [
    { id: "all", label: "All Works", icon: Camera },
    { id: "residential", label: "Residential", icon: ShieldCheck },
    { id: "commercial", label: "Commercial", icon: Sparkles },
    { id: "industrial", label: "Industrial", icon: Maximize2 },
]

const galleryItems = [
    {
        id: 1,
        category: "residential",
        title: "Bhaisepati Villa Exterior",
        description: "Multi-stage glass sanitization for a high-end residence.",
        image: "/gallary_1.jpeg",
        stats: "Crystal Clear"
    },
    {
        id: 2,
        category: "commercial",
        title: "Sanepa Business Plaza",
        description: "Streak-free mineral deposit removal for premium commercial glass.",
        image: "/gallary_2.jpeg",
        stats: "Commercial Grade"
    },
    {
        id: 3,
        category: "industrial",
        title: "Industrial Facility Restoration",
        description: "Heavy-duty deep cleaning for high-traffic industrial zones.",
        image: "/gallary_3.jpeg",
        stats: "Deep Sanitize"
    },
    {
        id: 4,
        category: "residential",
        title: "Luxury Apartment Balcony",
        description: "Detailed frame and glass treatment for panoramic city views.",
        image: "/gallary_4.jpeg",
        stats: "Family Safe"
    },
    {
        id: 5,
        category: "commercial",
        title: "Premium Showroom Front",
        description: "Display-ready glass treatment for high-end retail storefronts.",
        image: "/gallary_5.jpeg",
        stats: "Showroom Quality"
    },
    {
        id: 6,
        category: "industrial",
        title: "Warehouse High-Reach Clean",
        description: "Specialized high-access cleaning for large scale facilities.",
        image: "/gallary_6.jpeg",
        stats: "Safety First"
    },
    {
        id: 7,
        category: "residential",
        title: "Modern Home Interior Glass",
        description: "Intricate cleaning for glass partitions and internal windows.",
        image: "/gallary_7.jpeg",
        stats: "Home Harmony"
    },
    {
        id: 8,
        category: "commercial",
        title: "Corporate Lobby Glass",
        description: "Maintaining a professional first impression for business entries.",
        image: "/gallary_8.jpeg",
        stats: "Ultra Clean"
    },
    {
        id: 9,
        category: "industrial",
        title: "Workshop Degreasing",
        description: "Effective removal of tough industrial stains and residues.",
        image: "/gallary_9.jpeg",
        stats: "Tough Stains"
    },
    {
        id: 10,
        category: "residential",
        title: "Residential Terrace Care",
        description: "Complete cleaning for outdoor living spaces and railings.",
        image: "/gallary_10.jpeg",
        stats: "Weather Proof"
    },
    {
        id: 11,
        category: "commercial",
        title: "Retail Window Excellence",
        description: "Boosting curb appeal with sparkling retail shopfronts.",
        image: "/gallary_11.jpeg",
        stats: "Attract Clients"
    },
    {
        id: 12,
        category: "industrial",
        title: "Site Handover Cleaning",
        description: "Final deep clean before project delivery and occupation.",
        image: "/gallary_12.jpeg",
        stats: "Ready to Move"
    },
    {
        id: 13,
        category: "all",
        title: "Masterworks Series",
        description: "A showcase of our most complex cleaning challenges successfully delivered.",
        image: "/gallary_13.jpeg",
        stats: "Elite Standard"
    },
]

export default function GalleryPage() {
    const [filter, setFilter] = useState("all")
    const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null)

    const filteredItems = galleryItems.filter(
        (item) => filter === "all" || item.category === filter
    )

    return (
        <div className="flex min-h-screen flex-col bg-[#050505]">
            {/* Dynamic Background Noise/Texture */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Cinematic Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24 px-4">
                {/* Animated Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />

                <div className="classic-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 border-glow">
                            <Sparkles className="w-4 h-4 text-secondary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Excellence in Every Frame</span>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.8] sm:leading-[0.85]">
                            Elite <br />
                            <span className="shimmer-text">Standards</span>
                        </h1>

                        <div className="w-32 h-1.5 bg-secondary mx-auto mb-10 rounded-full" />

                        <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed italic">
                            "Witness the transformation. Our gallery showcases the intersection of international technology and local dedication."
                        </p>
                    </motion.div>
                </div>

                {/* Floating Background Image Parallax */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-20" />
            </section>

            {/* Modern Filter Interface */}
            <section className="sticky top-20 z-[40] py-8 bg-[#050505]/80 backdrop-blur-xl border-y border-white/5">
                <div className="classic-container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center space-x-4 text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
                            <Filter className="w-4 h-4" />
                            <span>Refine View</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`
                    group flex items-center space-x-3 px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-500
                    ${filter === cat.id
                                            ? "bg-secondary text-primary shadow-[0_0_30px_rgba(255,170,0,0.2)]"
                                            : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                                        }
                  `}
                                >
                                    <cat.icon className={`w-4 h-4 transition-transform duration-500 ${filter === cat.id ? "scale-110" : "group-hover:scale-110"}`} />
                                    <span>{cat.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="hidden lg:block text-white/20 text-[10px] font-medium italic">
                            Showing {filteredItems.length} curated masterworks
                        </div>
                    </div>
                </div>
            </section>

            {/* Masonry Gallery Grid */}
            <section className="py-24 relative z-10">
                <div className="classic-container">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedImage(item)}
                                >
                                    {/* Premium Frame */}
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-zinc-900 border border-white/5 shadow-2xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                        />

                                        {/* Glass Overlay on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end p-10 text-center">
                                            <div className="bg-secondary p-5 rounded-full mb-8 transform -translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 shadow-2xl">
                                                <ZoomIn className="w-8 h-8 text-primary" />
                                            </div>

                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-4 drop-shadow-lg">
                                                    {item.stats}
                                                </div>
                                                <h3 className="text-3xl font-black text-white mb-3 tracking-tight leading-tight">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm font-medium text-white/60 line-clamp-2 max-w-xs mx-auto italic">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Professional Badge */}
                                            <div className="absolute top-10 right-10">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-1">
                                                        <ShieldCheck className="w-6 h-6 text-secondary" />
                                                    </div>
                                                    <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Verified</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Ultra-Modern Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-[#050505]/98 backdrop-blur-2xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button with Pulse */}
                        <button
                            className="absolute top-10 right-10 z-[110] p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 group"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8 text-white/50 group-hover:text-white group-hover:rotate-90 transition-all duration-500" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full h-full max-w-[1400px] overflow-hidden rounded-[4rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image Pane */}
                            <div className="relative w-full h-[60%] md:h-full md:w-[70%] bg-zinc-900">
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Detail Pane */}
                            <div className="w-full h-[40%] md:h-full md:w-[30%] bg-[#0A0A0A] p-10 md:p-16 flex flex-col justify-center border-l border-white/5">
                                <div className="mb-12">
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[11px] font-black uppercase tracking-[0.3em] mb-8">
                                        {selectedImage.category} Reference
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                                        {selectedImage.title}
                                    </h2>
                                    <div className="w-16 h-1 bg-secondary mb-8 rounded-full" />
                                    <p className="text-lg text-white/50 font-medium leading-relaxed italic mb-12">
                                        "{selectedImage.description}"
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4 p-4 rounded-3xl bg-white/5 border border-white/5">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Quality Metric</div>
                                            <div className="text-sm font-bold text-white">{selectedImage.stats}</div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.location.href = "/book"}
                                    className="mt-auto group flex items-center justify-between w-full p-6 rounded-[2rem] bg-secondary text-primary font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,170,0,0.15)]"
                                >
                                    Book Similar Service
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cinematic CTA */}
            <section className="bg-[#050505] py-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full transform -translate-x-1/2" />

                <div className="classic-container relative z-10">
                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-3xl border border-white/10 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden">
                        {/* Decorative shimmer line */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

                        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
                            Ready to See <br />
                            <span className="shimmer-text"> Perfection? </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white/40 mb-16 max-w-2xl mx-auto font-medium italic">
                            "Your property deserves the Crystalfront standard. Join our elite client base across the Valley."
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <button
                                onClick={() => window.location.href = "/book"}
                                className="group relative h-20 px-16 rounded-[2.5rem] bg-secondary text-primary font-black text-sm uppercase tracking-[0.2em] overflow-hidden shadow-[0_30px_60px_rgba(255,170,0,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <span className="relative z-10">Book Now</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </button>

                            <button
                                onClick={() => window.location.href = "/contact"}
                                className="h-20 px-16 rounded-[2.5rem] bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all backdrop-blur-lg"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .shimmer-text {
          background: linear-gradient(90deg, #ffffff 0%, #ffaa00 50%, #ffffff 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 8s linear infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .border-glow {
          box-shadow: 0 0 20px rgba(255, 170, 0, 0.1);
        }

        :global(body) {
          background-color: #050505;
        }
      `}</style>
        </div>
    )
}
