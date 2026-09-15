"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
	Camera,
	X,
	Sparkles,
	ShieldCheck,
	Play,
	Pause,
	ImageIcon,
	Film,
	ArrowRight,
	Volume2,
	VolumeX,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ── Media Types ─────────────────────────────────────
type MediaType = "image" | "video" | "gif"
type Category = "all" | "photos" | "videos"

interface GalleryItem {
	id: number
	type: MediaType
	category: Category
	src: string
	poster?: string
	title: string
	description: string
	tag: string
}

const categories: { id: Category; label: string; icon: React.ElementType }[] = [
	{ id: "all", label: "All Media", icon: Camera },
	{ id: "photos", label: "Photos", icon: ImageIcon },
	{ id: "videos", label: "Videos", icon: Film },
]

const galleryItems: GalleryItem[] = [
	{
		id: 1,
		type: "image",
		category: "photos",
		src: "/gold-coast-cleaning-services.jpeg",
		title: "Professional Home Cleaning",
		description: "Spotless results in every corner — our team delivering top-quality residential cleaning on the Gold Coast.",
		tag: "Residential",
	},
	{
		id: 2,
		type: "video",
		category: "videos",
		src: "/video1.mp4",
		poster: "/gold-coast-cleaning-services.jpeg",
		title: "Deep Kitchen Clean",
		description: "Watch our team tackle a complete kitchen deep clean — from grease removal to sparkling benchtops.",
		tag: "Deep Clean",
	},
	{
		id: 3,
		type: "image",
		category: "photos",
		src: "/gold-coast-before-after-cleaning.jpeg",
		title: "Sparkling Clean Results",
		description: "Before and after — the WaveSolution standard. Every surface polished to perfection.",
		tag: "Before & After",
	},
	{
		id: 4,
		type: "video",
		category: "videos",
		src: "/video2.mp4",
		poster: "/gold-coast-before-after-cleaning.jpeg",
		title: "Bathroom Transformation",
		description: "See a complete bathroom transformation — tiles, grout, mirrors and fixtures all gleaming.",
		tag: "Transformation",
	},
	{
		id: 5,
		type: "image",
		category: "photos",
		src: "/gold-coast-cleaning-team.jpg",
		title: "Our Team in Action",
		description: "A glimpse into how our professional cleaners work — efficient, thorough, and detail-oriented.",
		tag: "Behind the Scenes",
	},
	{
		id: 6,
		type: "video",
		category: "videos",
		src: "/video3.mp4",
		poster: "/gold-coast-cleaning-services.jpeg",
		title: "Full House Clean Session",
		description: "A complete walkthrough of our full house cleaning service — living room, bedrooms, and more.",
		tag: "Full Service",
	},
	{
		id: 7,
		type: "video",
		category: "videos",
		src: "/video4.mp4",
		poster: "/gold-coast-before-after-cleaning.jpeg",
		title: "Office Cleaning Excellence",
		description: "Commercial-grade cleaning for workplaces — desks, floors, and common areas made spotless.",
		tag: "Commercial",
	},
]

// ── Video Card Component ────────────────────────────
function VideoCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	function togglePlay(e: React.MouseEvent) {
		e.stopPropagation()
		if (!videoRef.current) return
		if (isPlaying) {
			videoRef.current.pause()
		} else {
			videoRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}

	return (
		<div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer" onClick={onClick}>
			<video
				ref={videoRef}
				src={item.src}
				poster={item.poster}
				muted
				loop
				playsInline
				preload="none"
				className="w-full h-full object-cover"
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			/>

			{/* Play/Pause overlay */}
			<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
			<button
				onClick={togglePlay}
				className="absolute inset-0 flex items-center justify-center z-10"
			>
				<div className={cn(
					"w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm",
					isPlaying
						? "bg-white/20 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100"
						: "bg-white/30 shadow-lg"
				)}>
					{isPlaying ? (
						<Pause className="w-6 h-6 text-white" />
					) : (
						<Play className="w-6 h-6 text-white ml-0.5" />
					)}
				</div>
			</button>

			{/* Video badge */}
			<div className="absolute top-4 left-4 z-10">
				<div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
					<Film className="w-3 h-3" />
					Video
				</div>
			</div>
		</div>
	)
}

// ── Main Gallery Page ───────────────────────────────
export default function GalleryPage() {
	const [filter, setFilter] = useState<Category>("all")
	const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
	const [lightboxMuted, setLightboxMuted] = useState(true)
	const lightboxVideoRef = useRef<HTMLVideoElement>(null)

	const filteredItems = galleryItems.filter(
		(item) => filter === "all" || item.category === filter
	)

	function toggleLightboxMute() {
		if (!lightboxVideoRef.current) return
		lightboxVideoRef.current.muted = !lightboxVideoRef.current.muted
		setLightboxMuted(!lightboxMuted)
	}

	return (
		<div className="flex min-h-screen flex-col">
			{/* ── Hero Header ──────────────────────────── */}
			<div className="page-header relative min-h-[40vh] flex items-center overflow-hidden bg-primary py-0">
				<div className="absolute inset-0 z-0">
					<div className="relative h-full w-full overflow-hidden">
						<Image
							src="/gold-coast-before-after-cleaning.jpeg"
							alt="Before and after cleaning results in Gold Coast"
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
							Cleaning Gallery <br />
						<span className="text-secondary shimmer-text">Gold Coast</span>
						</h1>

						<div className="w-24 h-2 bg-secondary mb-10 rounded-full" />

						<p className="text-xl sm:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed">
							See our work in action — real cleaning projects, real results.
							<span className="text-white font-black italic"> Professional Excellence </span>
							across homes and offices on the Gold Coast.
						</p>
					</div>
				</div>
			</div>

			{/* ── Filter Bar ──────────────────────────── */}
			<section className="py-8 bg-white border-b border-slate-100 sticky top-[72px] sm:top-[80px] lg:top-[96px] z-30">
				<div className="classic-container">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="flex items-center space-x-2 text-primary/40 text-[10px] font-black uppercase tracking-[0.2em]">
							<Camera className="w-4 h-4" />
							<span>Browse Our Work</span>
						</div>

						<div className="flex flex-wrap justify-center gap-2">
							{categories.map((cat) => (
								<button
									key={cat.id}
									onClick={() => setFilter(cat.id)}
									className={cn(
										"flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300",
										filter === cat.id
											? "bg-secondary text-white shadow-lg shadow-secondary/20"
											: "bg-slate-100 text-slate-500 hover:bg-slate-200"
									)}
								>
									<cat.icon className="w-3.5 h-3.5" />
									{cat.label}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── Gallery Grid ─────────────────────────── */}
			<section className="py-16 sm:py-20 bg-[#F3F3F3]">
				<div className="classic-container">
					<motion.div
						layout
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
					>
						<AnimatePresence mode="popLayout">
							{filteredItems.map((item, index) => (
								<motion.div
									key={item.id}
									layout
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{ duration: 0.4, delay: index * 0.06 }}
									className="group"
								>
									<div className="classic-card !rounded-[2rem] overflow-hidden cursor-pointer h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
										{/* Media area */}
										{item.type === "video" ? (
											<VideoCard item={item} onClick={() => setSelectedItem(item)} />
										) : item.type === "gif" ? (
											<div
												className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
												onClick={() => setSelectedItem(item)}
											>
												{/* eslint-disable-next-line @next/next/no-img-element */}
												<img
													src={item.src}
													alt={item.title}
													className="w-full h-full object-cover"
												/>
												<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
												<div className="absolute top-4 left-4 z-10">
													<div className="flex items-center gap-1.5 bg-purple-600/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
														<Sparkles className="w-3 h-3" />
														GIF
													</div>
												</div>
											</div>
										) : (
											<div
												className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
												onClick={() => setSelectedItem(item)}
											>
												<Image
													src={item.src}
													alt={item.title}
													fill
													className="object-cover transition-transform duration-700 group-hover:scale-110"
												/>
												<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
											</div>
										)}

										{/* Card content */}
										<div className="p-5 sm:p-6 flex flex-col flex-1" onClick={() => setSelectedItem(item)}>
											<div className="flex items-center gap-2 mb-2">
												<span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary">
													{item.tag}
												</span>
											</div>
											<h3 className="text-lg font-black text-primary mb-2 leading-tight tracking-tight">
												{item.title}
											</h3>
											<p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
												{item.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>

					{filteredItems.length === 0 && (
						<div className="text-center py-20">
							<Camera className="w-12 h-12 text-slate-300 mx-auto mb-4" />
							<p className="text-slate-400 font-medium">No items found in this category.</p>
						</div>
					)}
				</div>
			</section>

			{/* ── Lightbox ─────────────────────────────── */}
			<AnimatePresence>
				{selectedItem && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md"
						onClick={() => { setSelectedItem(null); setLightboxMuted(true) }}
					>
						<button
							className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
							onClick={() => { setSelectedItem(null); setLightboxMuted(true) }}
						>
							<X className="w-8 h-8" />
						</button>

						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Media side */}
							<div className="relative w-full h-[300px] md:h-auto md:w-2/3 bg-slate-900">
								{selectedItem.type === "video" ? (
									<>
										<video
											ref={lightboxVideoRef}
											src={selectedItem.src}
											autoPlay
											loop
											muted={lightboxMuted}
											playsInline
											className="w-full h-full object-cover"
										/>
										<button
											onClick={toggleLightboxMute}
											className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
										>
											{lightboxMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
										</button>
									</>
								) : selectedItem.type === "gif" ? (
									// eslint-disable-next-line @next/next/no-img-element
									<img
										src={selectedItem.src}
										alt={selectedItem.title}
										className="w-full h-full object-cover"
									/>
								) : (
									<Image
										src={selectedItem.src}
										alt={selectedItem.title}
										fill
										className="object-cover"
									/>
								)}
							</div>

							{/* Details side */}
							<div className="p-8 md:p-10 md:w-1/3 flex flex-col justify-center bg-white overflow-y-auto">
								<div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
									{selectedItem.tag}
								</div>
								<h2 className="text-2xl sm:text-3xl font-black text-primary mb-4 leading-tight">
									{selectedItem.title}
								</h2>
								<div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
								<p className="text-sm text-slate-600 font-medium leading-relaxed mb-8">
									{selectedItem.description}
								</p>

								<div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F3F3F3] border border-slate-100 mb-8">
									<ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0" />
									<div>
										<div className="text-[8px] font-black uppercase tracking-widest text-slate-600">Quality Assured</div>
										<div className="text-xs font-bold text-primary">100% Satisfaction Guaranteed</div>
									</div>
								</div>

								<Button asChild className="classic-button w-full h-12 rounded-full uppercase text-[10px] tracking-[0.2em] font-black">
									<Link href="/book">
										Book a Clean
										<ArrowRight className="w-4 h-4 ml-2" />
									</Link>
								</Button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ── CTA Section ──────────────────────────── */}
			<section className="bg-primary text-white py-20">
				<div className="classic-container">
					<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3.5rem] p-12 md:p-20 text-center overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
						<div className="relative z-10">
							<h2 className="text-4xl md:text-6xl font-serif font-black mb-8">Ready for a Cleaner Space?</h2>
							<p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
								See something you like? Let us deliver the same professional results for your home or office. Book today!
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
				.animate-fadeIn {
					animation: fadeIn 1s ease-out forwards;
				}
			`}</style>
		</div>
	)
}
