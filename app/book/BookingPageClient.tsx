"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {
	Loader2,
	CheckCircle2,
	MapPin,
	Contact,
	Phone,
	User,
	Settings2,
	ClipboardList,
	TrendingUp,
	Sparkles,
	ArrowRight,
	ShieldCheck,
	Zap,
	MessageCircle
} from "lucide-react"
import { saveBooking } from "@/lib/firebase-service"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const windowPackages = [
	{
		category: "Everest (XL)",
		area: "Biggest XL showrooms, wide glass fronts",
		prices: [6500, 8000],
		icon: "🏔️"
	},
	{
		category: "Lhotse (Large)",
		area: "Auto showrooms, large restaurants",
		prices: [3500, 4000, 5000],
		icon: "🏔️"
	},
	{
		category: "Manaslu (Medium)",
		area: "Restaurants, retail stores",
		prices: [3000, 4000, 4500],
		icon: "🏔️"
	},
	{
		category: "Annapurna (Small)",
		area: "Small shops, boutiques",
		prices: [2500, 3500, 4000],
		icon: "🏔️"
	},
]

const frequencyLabels = [
	"Weekly",
	"Bi-Weekly",
	"Monthly",
]

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	phone: z.string().min(10, "Phone number must be at least 10 digits"),
	email: z.string().email("Invalid email address"),
	address: z.string().min(5, "Address must be at least 5 characters"),
})

type FormValues = z.infer<typeof formSchema>

export default function BookingPageClient() {
	const router = useRouter()
	const [activeTab, setActiveTab] = useState("package")
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccessDialog, setShowSuccessDialog] = useState(false)

	const [selectedCategory, setSelectedCategory] = useState(windowPackages[0].category)
	const [selectedFrequency, setSelectedFrequency] = useState(frequencyLabels[0])
	const [includeInterior, setIncludeInterior] = useState(false)

	// Automatically calculate price
	const selectedPackage = windowPackages.find((row) => row.category === selectedCategory)
	const freqIdx = frequencyLabels.indexOf(selectedFrequency)
	const exteriorPrice = selectedPackage && selectedPackage.prices[freqIdx] ? selectedPackage.prices[freqIdx] : 0

	const interiorOriginalPrice = Math.round(exteriorPrice * 0.7)
	const interiorDiscountedPrice = Math.round(interiorOriginalPrice * 0.4)

	const selectedPrice = exteriorPrice + (includeInterior ? interiorDiscountedPrice : 0)

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			address: "",
		},
	})

	async function onSubmit(values: FormValues) {
		if (!selectedPrice) {
			toast.error("Please select a valid package")
			return
		}

		setIsSubmitting(true)
		try {
			const bookingData = {
				...values,
				package: {
					category: selectedCategory,
					frequency: selectedFrequency,
					includeInterior,
					exteriorPrice,
					interiorPrice: includeInterior ? interiorDiscountedPrice : 0,
					totalPrice: selectedPrice,
				},
			}

			await saveBooking(bookingData)

			const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
			bookings.push({ ...bookingData, id: Date.now().toString(), status: 'pending', createdAt: new Date().toISOString() })
			localStorage.setItem("bookings", JSON.stringify(bookings))

			toast.success("Booking submitted successfully!")
			setShowSuccessDialog(true)

			setTimeout(() => {
				router.push("/")
			}, 5000)
		} catch (error) {
			console.error("Booking error:", error)
			toast.error("Something went wrong. Please try again.")
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="min-h-screen bg-white py-12 sm:py-20 md:py-32">
			<div className="classic-container">
				<div className="mx-auto max-w-6xl">
					{/* Premium Branding Section */}
					<div className="flex flex-col items-center mb-16 sm:mb-24 text-center px-4">
						<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 group hover:scale-105 transition-all duration-500">
							<ShieldCheck className="w-4 h-4 text-primary" />
							<span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Crystal Front Trust Verified</span>
						</div>
						<h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tighter text-blue-950 mb-6 leading-none">
							Schedule Your <span className="text-secondary italic">Brilliant</span> Service
						</h1>
						<div className="w-24 sm:w-32 h-2 bg-secondary rounded-full mb-8"></div>
						<p className="text-muted-foreground text-lg sm:text-xl max-w-3xl font-medium leading-relaxed">
							Join hundreds of premium properties in the Valley that trust our professional glass artisans for a world-class finish.
						</p>
					</div>

					<div className="bg-white rounded-[3rem] shadow-[0_32px_128px_-32px_rgba(30,58,138,0.15)] border border-blue-50 overflow-hidden relative">
						<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
							<TabsList className="grid w-full grid-cols-2 h-20 sm:h-28 bg-blue-50/30 p-2 sm:p-4 gap-2 sm:gap-6 border-b border-blue-50">
								<TabsTrigger
									value="package"
									className="rounded-2xl sm:rounded-3xl text-sm sm:text-lg font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-primary/30 transition-all duration-500 gap-3"
								>
									<Settings2 className="w-5 h-5 sm:w-6 sm:h-6 hidden sm:block" />
									1. Select Package
								</TabsTrigger>
								<TabsTrigger
									value="details"
									className="rounded-2xl sm:rounded-3xl text-sm sm:text-lg font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-primary/30 transition-all duration-500 gap-3"
								>
									<ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 hidden sm:block" />
									2. Your Details
								</TabsTrigger>
							</TabsList>

							<div className="p-6 sm:p-12 md:p-16">
								<TabsContent value="package" className="mt-0 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
									<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
										<div>
											<h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight mb-2">Choose Service Level</h2>
											<p className="text-blue-700/60 font-medium text-base sm:text-lg">Select the scale that matches your property.</p>
										</div>
										<div className="flex items-center space-x-3 bg-blue-50 border border-blue-100 px-6 py-3 rounded-2xl w-fit">
											<TrendingUp className="w-5 h-5 text-primary" />
											<span className="text-[11px] font-black uppercase tracking-widest text-primary">High Demand: Valley Central</span>
										</div>
									</div>

									{/* New Visual Package Grid */}
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
										{windowPackages.map((row) => (
											<button
												key={row.category}
												onClick={() => setSelectedCategory(row.category)}
												className={cn(
													"flex flex-col p-8 rounded-[2.5rem] border-2 text-left transition-all duration-500 group relative",
													selectedCategory === row.category
														? "bg-primary border-primary text-white shadow-2xl scale-[1.03] -translate-y-2"
														: "bg-white border-blue-50 hover:border-primary/20 hover:shadow-xl"
												)}
											>
												<span className={cn("text-xs font-black uppercase tracking-widest mb-4 block", selectedCategory === row.category ? "text-blue-100" : "text-primary")}>
													Level {windowPackages.indexOf(row) + 1}
												</span>
												<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{row.icon}</div>
												<h3 className="text-2xl font-black mb-3 tracking-tighter leading-none">{row.category}</h3>
												<p className={cn("text-xs font-medium leading-relaxed mb-8 h-10 line-clamp-2", selectedCategory === row.category ? "text-blue-50" : "text-gray-500")}>
													{row.area}
												</p>

												<div className="mt-auto space-y-3">
													{frequencyLabels.map((freq, i) => (
														<div
															key={freq}
															onClick={(e) => {
																if (!row.prices[i]) return;
																e.stopPropagation();
																setSelectedCategory(row.category);
																setSelectedFrequency(freq);
															}}
															className={cn(
																"flex items-center justify-between p-3 rounded-xl text-[11px] font-black transition-all border",
																(selectedFrequency === freq && selectedCategory === row.category)
																	? "bg-white text-primary border-white"
																	: !row.prices[i] ? "opacity-20 cursor-not-allowed hidden" : selectedCategory === row.category ? "bg-white/10 text-white border-white/20 hover:bg-white/20" : "bg-blue-50/50 text-blue-900 border-transparent hover:border-blue-100"
															)}
														>
															<span>{freq}</span>
															<span>{row.prices[i] ? `M${row.prices[i] / 1000}k` : "-"}</span>
														</div>
													))}
												</div>
											</button>
										))}
									</div>

									{/* Advanced Add-ons Detail */}
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
										<div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-blue-50 shadow-sm flex flex-col justify-center">
											<div className="flex items-center space-x-6 mb-8">
												<div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
													<Sparkles className="w-8 h-8 text-primary" />
												</div>
												<div>
													<h3 className="text-2xl font-black text-blue-950 tracking-tight">Interior Brilliance</h3>
													<p className="text-muted-foreground font-medium text-sm">Full deep clean of all interior glass surfaces.</p>
												</div>
											</div>

											<div className="flex flex-wrap items-center gap-6">
												<div className="flex flex-col">
													<span className="text-secondary text-[10px] font-black uppercase tracking-widest animate-pulse mb-1">Limited Offer -60%</span>
													<div className="flex items-center space-x-3">
														<span className="text-3xl font-black text-blue-950">NPR {interiorDiscountedPrice.toLocaleString()}</span>
														<span className="text-sm text-muted-foreground line-through font-bold">{interiorOriginalPrice.toLocaleString()}</span>
													</div>
												</div>
												<button
													onClick={() => setIncludeInterior(!includeInterior)}
													className={cn(
														"ml-auto h-12 px-8 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-lg",
														includeInterior ? "bg-primary text-white" : "bg-blue-50 text-primary border border-blue-100"
													)}
												>
													{includeInterior ? <CheckCircle2 className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
													{includeInterior ? "Applied" : "Add to Order"}
												</button>
											</div>
										</div>

										<div className="bg-blue-950 p-8 sm:p-10 rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden group">
											<div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
											<div className="relative z-10">
												<div className="flex items-center justify-between mb-8">
													<div>
														<p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">Total Monthly Investment</p>
														<h4 className="text-4xl sm:text-5xl font-black tracking-tighter tabular-nums leading-none">
															{selectedPrice ? `NPR ${selectedPrice.toLocaleString()}` : "Contact Us"}
														</h4>
													</div>
													<div className="text-right hidden sm:block">
														<p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Status</p>
														<span className="bg-green-500/20 text-green-400 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-green-500/20">Active</span>
													</div>
												</div>
												<Button
													onClick={() => {
														window.scrollTo({ top: 0, behavior: 'smooth' });
														setTimeout(() => setActiveTab("details"), 300);
													}}
													className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/40 transition-all hover:scale-[1.02] active:scale-95 group-hover:gap-6 duration-500"
												>
													Step 2: Confirm Details
													<ArrowRight className="w-5 h-5 ml-4" />
												</Button>
											</div>
										</div>
									</div>
								</TabsContent>

								<TabsContent value="details" className="mt-0 space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
									<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
										<div className="lg:col-span-2 space-y-12">
											<div>
												<h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight mb-2">Contact Information</h2>
												<p className="text-blue-700/60 font-medium text-base">We'll use these details to secure your service window.</p>
											</div>

											<Form {...form}>
												<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
													<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
														<FormField
															control={form.control}
															name="name"
															render={({ field }) => (
																<FormItem className="space-y-3">
																	<FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
																		Full Name
																	</FormLabel>
																	<FormControl>
																		<div className="relative">
																			<User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30" />
																			<Input placeholder="Johnathan Doe" {...field} className="h-16 pl-14 border-blue-50 bg-blue-50/20 hover:border-primary/30 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 rounded-2xl transition-all font-bold text-lg" />
																		</div>
																	</FormControl>
																	<FormMessage className="font-bold text-xs" />
																</FormItem>
															)}
														/>
														<FormField
															control={form.control}
															name="phone"
															render={({ field }) => (
																<FormItem className="space-y-3">
																	<FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
																		Direct Contact
																	</FormLabel>
																	<FormControl>
																		<div className="relative">
																			<Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30" />
																			<Input placeholder="98XXXXXXXX" {...field} className="h-16 pl-14 border-blue-50 bg-blue-50/20 hover:border-primary/30 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 rounded-2xl transition-all font-bold text-lg" />
																		</div>
																	</FormControl>
																	<FormMessage className="font-bold text-xs" />
																</FormItem>
															)}
														/>
														<FormField
															control={form.control}
															name="email"
															render={({ field }) => (
																<FormItem className="space-y-3">
																	<FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
																		Email Address
																	</FormLabel>
																	<FormControl>
																		<div className="relative">
																			<Contact className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30" />
																			<Input placeholder="john@example.com" {...field} className="h-16 pl-14 border-blue-50 bg-blue-50/20 hover:border-primary/30 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 rounded-2xl transition-all font-bold text-lg" />
																		</div>
																	</FormControl>
																	<FormMessage className="font-bold text-xs" />
																</FormItem>
															)}
														/>
														<FormField
															control={form.control}
															name="address"
															render={({ field }) => (
																<FormItem className="space-y-3">
																	<FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
																		Property Location
																	</FormLabel>
																	<FormControl>
																		<div className="relative">
																			<MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30" />
																			<Input placeholder="Bhaisepati, Ward 2" {...field} className="h-16 pl-14 border-blue-50 bg-blue-50/20 hover:border-primary/30 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 rounded-2xl transition-all font-bold text-lg" />
																		</div>
																	</FormControl>
																	<FormMessage className="font-bold text-xs" />
																</FormItem>
															)}
														/>
													</div>

													<div className="flex flex-col sm:flex-row items-center gap-6 pt-10 border-t border-blue-50">
														<Button
															type="submit"
															disabled={isSubmitting}
															className="w-full sm:w-auto min-w-[280px] h-20 rounded-2xl bg-primary hover:bg-blue-900 text-white text-xl font-black uppercase tracking-widest shadow-2xl shadow-primary/30 transition-all duration-500 transform hover:scale-[1.02] active:scale-95"
														>
															{isSubmitting ? (
																<>
																	<Loader2 className="mr-4 h-7 w-7 animate-spin" />
																	Verifying...
																</>
															) : (
																"Confirm Booking"
															)}
														</Button>
														<button
															type="button"
															onClick={() => setActiveTab("package")}
															className="text-xs font-black text-gray-400 hover:text-primary transition-colors uppercase tracking-[0.3em]"
														>
															← Edit Selected Order
														</button>
													</div>
												</form>
											</Form>
										</div>

										<div className="space-y-8">
											<div className="bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100">
												<h3 className="text-xl font-black text-blue-950 uppercase tracking-tight mb-6 flex items-center">
													<ClipboardList className="w-5 h-5 mr-3 text-primary" /> Order Summary
												</h3>
												<div className="space-y-5">
													<div className="flex justify-between items-center pb-4 border-b border-blue-100">
														<span className="text-xs font-bold text-muted-foreground">Category</span>
														<span className="text-sm font-black text-blue-950">{selectedCategory}</span>
													</div>
													<div className="flex justify-between items-center pb-4 border-b border-blue-100">
														<span className="text-xs font-bold text-muted-foreground">Frequency</span>
														<span className="text-sm font-black text-blue-950">{selectedFrequency}</span>
													</div>
													<div className="flex justify-between items-center pb-4 border-b border-blue-100">
														<span className="text-xs font-bold text-muted-foreground">Interior Add-on</span>
														<span className={cn("text-sm font-black", includeInterior ? "text-green-600" : "text-gray-400")}>{includeInterior ? "Included" : "None"}</span>
													</div>
													<div className="pt-4 flex justify-between items-center">
														<span className="text-xs font-black uppercase tracking-widest text-primary">Monthly Total</span>
														<span className="text-2xl font-black text-primary">NPR {selectedPrice.toLocaleString()}</span>
													</div>
												</div>
											</div>

											<div className="p-8 rounded-[2.5rem] border border-blue-50 bg-white relative overflow-hidden">
												<div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl -mr-12 -mt-12" />
												<h3 className="text-lg font-black text-blue-950 uppercase tracking-tight mb-4">Support</h3>
												<p className="text-sm text-muted-foreground font-medium mb-6">Need help with your configuration? Our experts are a call away.</p>
												<div className="space-y-4">
													<Link href="tel:0450833683" className="flex items-center text-primary font-black text-lg hover:underline group">
														<Phone className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" /> 0450 833 683
													</Link>
													<Link href="https://wa.me/61450833683" target="_blank" className="flex items-center text-[#25D366] font-black text-lg hover:underline group">
														<MessageCircle className="w-5 h-5 mr-3 text-[#25D366] group-hover:scale-110 transition-transform" /> WhatsApp Support
													</Link>
												</div>
											</div>

										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>

					{/* Social Proof Section */}
					<div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
						<div className="space-y-2">
							<p className="text-4xl font-serif font-black text-blue-950">500+</p>
							<p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Happy Properties</p>
						</div>
						<div className="space-y-2">
							<p className="text-4xl font-serif font-black text-blue-950">15 min</p>
							<p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Response Time</p>
						</div>
						<div className="space-y-2">
							<p className="text-4xl font-serif font-black text-blue-950">100%</p>
							<p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Brilliance Rate</p>
						</div>
					</div>
				</div>
			</div>

			{/* Premium Success Dialog */}
			<Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
				<DialogContent className="sm:max-w-xl rounded-[3rem] p-0 overflow-hidden border-none shadow-2xl">
					<div className="bg-blue-950 p-10 sm:p-14 text-center text-white relative overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
						<div className="mx-auto w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 shadow-2xl">
							<CheckCircle2 className="w-12 h-12 text-white" />
						</div>
						<DialogTitle className="text-3xl sm:text-5xl font-serif font-black tracking-tighter mb-4">Confirmed!</DialogTitle>
						<DialogDescription className="text-white/60 text-lg font-medium leading-relaxed">
							Your premium cleaning appointment is being secured. Our team will contact you within 15 minutes to finalize the schedule.
						</DialogDescription>
					</div>
					<div className="p-8 sm:p-12 space-y-8 bg-white">
						<div className="bg-blue-50/50 rounded-3xl p-8 space-y-5 border border-blue-50 shadow-inner">
							<div className="flex justify-between items-center px-2">
								<span className="text-[10px] font-black text-primary uppercase tracking-widest">Order Level</span>
								<span className="text-blue-950 font-black text-lg">{selectedCategory}</span>
							</div>
							<div className="flex justify-between items-center px-2 pt-5 border-t border-blue-100">
								<span className="text-[10px] font-black text-primary uppercase tracking-widest">Investment</span>
								<span className="text-primary font-black text-3xl tabular-nums">NPR {(selectedPrice || 0).toLocaleString()}</span>
							</div>
						</div>
						<div className="flex flex-col space-y-4">
							<Button
								className="bg-primary hover:bg-blue-900 text-white h-16 sm:h-20 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all active:scale-95"
								onClick={() => router.push("/")}
							>
								Return to Experience
							</Button>
							<p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] pt-2">
								Automatic redirect in 5s...
							</p>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

