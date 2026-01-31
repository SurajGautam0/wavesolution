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
    ArrowRight,
    Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
        title: "Premium Villa Glass Maintenance",
        description: "Advanced multi-stage High Glass Cleaning for high-end residential exteriors.",
        image: "/gallary_1.jpeg",
        stats: "Crystal Clear"
    },
    {
        id: 2,
        category: "commercial",
        title: "Commercial Plaza Window Care",
        description: "Streak-free High Glass Cleaning and mineral deposit removal for premium commercial buildings.",
        image: "/gallary_2.jpeg",
        stats: "Commercial Grade"
    },
    {
        id: 3,
        category: "industrial",
        title: "Industrial Facility Restoration",
        description: "Heavy-duty High Glass Cleaning for high-traffic industrial zones and specialized facilities.",
        image: "/gallary_3.jpeg",
        stats: "Ultra Sanitize"
    },
    {
        id: 4,
        category: "residential",
        title: "Luxury Apartment Glass Treatment",
        description: "Detailed frame and glass treatment for panoramic views using High Glass Cleaning techniques.",
        image: "/gallary_4.jpeg",
        stats: "Family Safe"
    },
    {
        id: 5,
        category: "commercial",
        title: "High Glass Showroom Cleaning",
        description: "Display-ready glass treatment for high-end retail storefronts and luxury showrooms.",
        image: "/gallary_5.jpeg",
        stats: "Showroom Quality"
    },
    {
        id: 6,
        category: "industrial",
        title: "High-Reach Facility Maintenance",
        description: "Specialized High Glass Cleaning for large scale warehouses and high-access industrial sites.",
        image: "/gallary_6.jpeg",
        stats: "Safety First"
    },
    {
        id: 7,
        category: "residential",
        title: "Modern Interior Glass Detailing",
        description: "Precision cleaning for intricate glass partitions and internal decorative glass work.",
        image: "/gallary_7.jpeg",
        stats: "Home Harmony"
    },
    {
        id: 8,
        category: "commercial",
        title: "Corporate Office Glass Sanitization",
        description: "Maintaining a professional first impression with expert High Glass Cleaning for corporate entries.",
        image: "/gallary_8.jpeg",
        stats: "Ultra Clean"
    },
    {
        id: 9,
        category: "industrial",
        title: "Industrial Stain & Residue Removal",
        description: "Effective chemical-free removal of tough industrial stains from large glass surfaces.",
        image: "/gallary_9.jpeg",
        stats: "Tough Stains"
    },
    {
        id: 10,
        category: "residential",
        title: "Residential Terrace Care",
        description: "Complete High Glass Cleaning for terrace living spaces and specialized glass railings.",
        image: "/gallary_10.jpeg",
        stats: "Weather Proof"
    },
    {
        id: 11,
        category: "commercial",
        title: "Retail Shopfront Excellence",
        description: "Boosting commercial curb appeal with professional High Glass Cleaning for premium retail units.",
        image: "/gallary_11.jpeg",
        stats: "Attract Clients"
    },
    {
        id: 12,
        category: "industrial",
        title: "Post-Construction Precision Cleaning",
        description: "Final High Glass Cleaning and detailing before project delivery and occupation.",
        image: "/gallary_12.jpeg",
        stats: "Ready to Move"
    },
    {
        id: 13,
        category: "all",
        title: "Elite Series Masterworks",
        description: "A showcase of our most complex High Glass Cleaning challenges successfully delivered.",
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
        <div className="flex min-h-screen flex-col">
            {/* Premium Header matching About/Contact pages */}
            <div className="page-header relative min-h-[40vh] flex items-center overflow-hidden bg-primary py-0">
                <div className="absolute inset-0 z-0">
                    <div className="relative h-full w-full overflow-hidden">
                        <Image
                            src="/gallary_13.jpeg"
                            alt="Gallery Header"
                            fill
                            className="object-cover scale-110 opacity-30"
                            style={{ animation: "ken-burns 20s ease-in-out infinite alternate" }}
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
                </div>

                <div className="classic-container relative z-20 py-20 text-white">
                    <div className="max-w-3xl text-left animate-fadeIn">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 overflow-hidden">
                            <div className="relative w-4 h-4 overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">#1 Cleaning Services</span>
                        </div>

                        <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl mb-8 leading-[0.9]">
                            Our <br />
                            <span className="text-secondary shimmer-text">Gallery</span>
                        </h1>

                        <div className="w-24 h-2 bg-secondary mb-10 rounded-full" />

                        <p className="text-xl sm:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed">
                            Witness the transformation from ordinary to extraordinary. Our works define the highest standard of
                            <span className="text-white font-black italic"> Professional Excellence </span>
                            in high-reach glass maintenance across Kathmandu, Lalitpur, and Bhaktapur.
                        </p>
                    </div>
                </div>


            </div>

            {/* Filter Section - Matching website buttons */}
            <section className="py-12 bg-white border-b border-gray-100 sticky top-[72px] sm:top-[80px] lg:top-[96px] z-30">
                <div className="classic-container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center space-x-3 text-primary/40 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Filter className="w-4 h-4" />
                            <span>Filter Projects</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`
                    px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300
                    ${filter === cat.id
                                            ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                        }
                  `}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid - Matching Website Card Style */}
            <section className="py-20 bg-gray-50">
                <div className="classic-container">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="group"
                                    onClick={() => setSelectedImage(item)}
                                >
                                    <div className="classic-card !rounded-[2rem] overflow-hidden group cursor-pointer h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />

                                            <div className="absolute top-4 right-4">
                                                <div className="bg-secondary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500 origin-right">
                                                    <ZoomIn className="w-3 h-3" />
                                                    View Project
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary mb-2">
                                                {item.category} • {item.stats}
                                            </div>
                                            <h3 className="text-xl font-black text-primary mb-3 leading-tight tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-muted-foreground leading-relaxed italic mb-4">
                                                "{item.description}"
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox - Matching Brand Aesthetic */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[300px] md:h-auto md:w-2/3">
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 md:p-12 md:w-1/3 flex flex-col justify-center bg-white">
                                <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest mb-6">
                                    {selectedImage.category}
                                </div>
                                <h2 className="text-3xl font-black text-primary mb-6 leading-tight">
                                    {selectedImage.title}
                                </h2>
                                <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
                                <p className="text-sm text-muted-foreground font-medium italic mb-10 leading-relaxed">
                                    "{selectedImage.description}"
                                </p>
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 mb-8">
                                    <ShieldCheck className="w-5 h-5 text-secondary" />
                                    <div>
                                        <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Standard Check</div>
                                        <div className="text-xs font-bold text-primary">{selectedImage.stats}</div>
                                    </div>
                                </div>

                                <Button asChild className="classic-button w-full h-12 rounded-full uppercase text-[10px] tracking-[0.2em] font-black">
                                    <Link href="/book">Book Similar Work</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section - Matching Home/About Page */}
            <section className="bg-primary text-white py-20">
                <div className="classic-container">
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3.5rem] p-12 md:p-20 text-center overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-serif font-black mb-8">Ready for a Cleaner Space?</h2>
                            <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                                Experience the highest standard of professional glass maintenance in your own property. Book your expert cleaning today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button asChild size="lg" className="h-16 px-12 rounded-full !bg-secondary hover:!bg-secondary/90 text-white font-black text-sm uppercase tracking-widest shadow-2xl shadow-secondary/20 transition-all hover:scale-105">
                                    <Link href="/book">Book Now</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="h-16 px-12 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 font-black text-sm uppercase tracking-widest transition-all hover:scale-105">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </div>
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
          animation: shimmer 5s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15) translate(1%, 1%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
        </div>
    )
}
