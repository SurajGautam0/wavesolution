"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2, CheckCircle2, MapPin, Contact, Phone, User, Settings2, ClipboardList, TrendingUp, Sparkles } from "lucide-react"
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
	},
	{
		category: "Lhotse (Large)",
		area: "Auto showrooms, large restaurants, medium showrooms",
		prices: [3500, 4000, 5000],
	},
	{
		category: "Manaslu (Medium)",
		area: "Restaurants, retail stores",
		prices: [3000, 4000, 4500],
	},
	{
		category: "Annapurna (Small)",
		area: "Small shops, pharmacies, boutiques",
		prices: [2500, 3500, 4000],
	},
]

const frequencyLabels = [
	"4x/Month (Weekly)",
	"6x/Month (5 days)",
	"8x/Month (Bi-Weekly)",
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

	// Interior is 70% of exterior price normally, then 60% off
	const interiorOriginalPrice = Math.round(exteriorPrice * 0.7)
	const interiorDiscountedPrice = Math.round(interiorOriginalPrice * 0.4) // 60% off means paying 40%

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
		<div className="min-h-screen bg-slate-50 py-8 sm:py-16 md:py-24 px-4">
			<div className="classic-container">
				<div className="mx-auto max-w-5xl">
					{/* Responsive Header */}
					<div className="flex flex-col space-y-4 text-center mb-10 sm:mb-16">
						<span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-blue-600">Premium Service Booking</span>
						<h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tighter text-blue-950">
							Book Your Service
						</h1>
						<div className="w-20 sm:w-28 h-2 bg-blue-600 mx-auto rounded-full"></div>
						<p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-4 font-medium">
							Experience the CRYSTALFRONT standard. Select your package and confirm your details.
						</p>
					</div>

					<div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-blue-50 overflow-hidden">
						<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
							<TabsList className="grid w-full grid-cols-2 h-16 sm:h-24 bg-blue-50/50 p-2 sm:p-3 gap-2 sm:gap-4">
								<TabsTrigger
									value="package"
									className="rounded-xl sm:rounded-2xl text-xs sm:text-xl font-black uppercase tracking-widest data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-500"
								>
									<Settings2 className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-3" />
									1. Package
								</TabsTrigger>
								<TabsTrigger
									value="details"
									className="rounded-xl sm:rounded-2xl text-xs sm:text-xl font-black uppercase tracking-widest data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-500"
								>
									<ClipboardList className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-3" />
									2. Details
								</TabsTrigger>
							</TabsList>

							<div className="p-4 sm:p-10 md:p-14">
								<TabsContent value="package" className="mt-0 space-y-8 sm:space-y-12 animate-in fade-in slide-in-from-left-4 duration-700">
									<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
										<div>
											<h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">Select Package</h2>
											<p className="text-blue-700/60 font-medium text-sm sm:text-base mt-2">Choose the size that fits your space.</p>
										</div>
										<div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full w-fit">
											<TrendingUp className="w-4 h-4 text-blue-600" />
											<span className="text-[10px] font-black uppercase tracking-widest text-blue-800">Popular in Lalitpur</span>
										</div>
									</div>

									{/* Mobile Package Grid (Visible on mobile only) */}
									<div className="grid grid-cols-1 gap-4 lg:hidden">
										{windowPackages.map((row) => (
											<button
												key={row.category}
												onClick={() => setSelectedCategory(row.category)}
												className={cn(
													"flex flex-col p-6 rounded-3xl border-2 transition-all duration-300 text-left",
													selectedCategory === row.category
														? "bg-blue-600 border-blue-600 text-white shadow-xl scale-[1.02]"
														: "bg-white border-blue-50 hover:border-blue-200"
												)}
											>
												<span className={cn("text-xs font-black uppercase tracking-widest mb-1", selectedCategory === row.category ? "text-blue-100" : "text-blue-500")}>
													Category
												</span>
												<h3 className="text-xl font-black mb-2 tracking-tight">{row.category}</h3>
												<p className={cn("text-xs font-medium leading-relaxed mb-4", selectedCategory === row.category ? "text-blue-50" : "text-gray-500")}>
													{row.area}
												</p>
												<div className="mt-auto flex flex-wrap gap-2">
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
																"flex-1 px-3 py-3 rounded-xl text-[10px] font-black text-center transition-all",
																(selectedFrequency === freq && selectedCategory === row.category)
																	? "bg-white text-blue-600 shadow-sm"
																	: !row.prices[i] ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400" : selectedCategory === row.category ? "bg-white/10 text-white" : "bg-blue-50 text-blue-900 border border-blue-100"
															)}
														>
															{freq.split('(')[0]}<br />
															{row.prices[i] ? `NPR ${row.prices[i].toLocaleString()}` : "N/A"}
														</div>
													))}
												</div>
											</button>
										))}
									</div>

									{/* Desktop Table (Hidden on mobile) */}
									<div className="hidden lg:block overflow-hidden rounded-[2rem] border border-blue-100 shadow-2xl shadow-blue-900/5">
										<table className="min-w-full divide-y divide-blue-50">
											<thead className="bg-blue-50/30">
												<tr>
													<th className="px-8 py-6 text-left text-[10px] font-black text-blue-900 uppercase tracking-[0.2em]">Package Level</th>
													<th className="px-8 py-6 text-left text-[10px] font-black text-blue-900 uppercase tracking-[0.2em]">Area Expertise</th>
													{frequencyLabels.map((label) => (
														<th key={label} className="px-8 py-6 text-center text-[10px] font-black text-blue-900 uppercase tracking-[0.2em]">
															{label}
														</th>
													))}
												</tr>
											</thead>
											<tbody className="bg-white divide-y divide-blue-50">
												{windowPackages.map((row) => (
													<tr key={row.category} className="hover:bg-blue-50/20 transition-colors group">
														<td className="px-8 py-7">
															<button
																type="button"
																className={cn(
																	"px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-500",
																	selectedCategory === row.category
																		? "bg-blue-600 text-white shadow-xl scale-110"
																		: "bg-blue-50 text-blue-800 group-hover:bg-blue-100"
																)}
																onClick={() => setSelectedCategory(row.category)}
															>
																{row.category}
															</button>
														</td>
														<td className="px-8 py-7 text-sm font-bold text-gray-500 max-w-[200px] leading-relaxed">
															{row.area}
														</td>
														{frequencyLabels.map((freq, i) => (
															<td key={freq} className="px-8 py-7 text-center">
																<button
																	type="button"
																	className={cn(
																		"px-5 py-3 rounded-full font-black text-xs transition-all duration-500",
																		(selectedFrequency === freq && selectedCategory === row.category)
																			? "bg-blue-600 text-white shadow-2xl scale-110 shadow-blue-600/30"
																			: "bg-white border border-blue-100 text-blue-900 hover:border-blue-400 hover:text-blue-600"
																	)}
																	onClick={() => {
																		setSelectedCategory(row.category)
																		setSelectedFrequency(freq)
																	}}
																>
																	{row.prices[i] ? `NPR ${row.prices[i].toLocaleString()}` : "-"}
																</button>
															</td>
														))}
													</tr>
												))}
											</tbody>
										</table>
									</div>

									{/* Interior Add-on Section */}
									<div className="bg-blue-50/50 p-6 sm:p-10 rounded-[2rem] border-2 border-dashed border-blue-200">
										<div className="flex flex-col md:flex-row items-center justify-between gap-6">
											<div className="flex items-center space-x-6">
												<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-blue-100">
													<Sparkles className="w-8 h-8 text-blue-600" />
												</div>
												<div>
													<h3 className="text-xl font-black text-blue-950 uppercase tracking-tight">Interior Cleaning Add-on</h3>
													<p className="text-blue-700/60 font-medium text-sm">Get your interiors sparkling clean with our professional team.</p>
												</div>
											</div>
											<div className="flex flex-col items-center sm:items-end">
												<div className="flex items-center space-x-3 mb-2">
													<span className="bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">Save 60% Today</span>
													<span className="text-blue-900/30 line-through font-bold">NPR {interiorOriginalPrice.toLocaleString()}</span>
												</div>
												<div className="flex items-center space-x-6">
													<div className="text-right">
														<p className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none mb-1">Promo Price</p>
														<p className="text-2xl font-black text-blue-950 leading-none">NPR {interiorDiscountedPrice.toLocaleString()}</p>
													</div>
													<button
														onClick={() => setIncludeInterior(!includeInterior)}
														className={cn(
															"w-14 h-8 rounded-full transition-all duration-300 relative",
															includeInterior ? "bg-blue-600" : "bg-gray-200"
														)}
													>
														<div className={cn(
															"absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md",
															includeInterior ? "left-7" : "left-1"
														)} />
													</button>
												</div>
											</div>
										</div>
									</div>

									{/* Total Visualization Card */}
									<div className="flex flex-col lg:flex-row lg:items-center justify-between bg-blue-950 text-white p-6 sm:p-12 rounded-[2.5rem] shadow-2xl mt-8 sm:mt-12 overflow-hidden relative group">
										<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150" />

										<div className="flex items-center space-x-4 sm:space-x-8 mb-8 lg:mb-0 relative z-10">
											<div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl sm:rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl">
												<CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
											</div>
											<div>
												<p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2 leading-none">Your Configuration</p>
												<h3 className="text-2xl sm:text-4xl font-black tracking-tighter leading-none">{selectedCategory}</h3>
												<p className="text-white/50 text-xs sm:text-sm font-bold mt-3 uppercase tracking-widest">
													{selectedFrequency} {includeInterior && "+ Interior Cleaning"}
												</p>
											</div>
										</div>
										<div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
											<div className="text-center sm:text-right">
												<p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2 leading-none">Final Price</p>
												<p className="text-4xl sm:text-5xl font-black text-white leading-none whitespace-nowrap">
													{selectedPrice ? `NPR ${selectedPrice.toLocaleString()}` : "Contact Us"}
												</p>
											</div>
											<Button
												onClick={() => {
													window.scrollTo({ top: 0, behavior: 'smooth' });
													setTimeout(() => setActiveTab("details"), 300);
												}}
												className="w-full sm:w-auto h-16 sm:h-20 px-10 sm:px-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-base sm:text-lg uppercase tracking-widest shadow-2xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
											>
												Confirm Details →
											</Button>
										</div>
									</div>
								</TabsContent>

								<TabsContent value="details" className="mt-0 space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
									<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-10 bg-blue-50/50 rounded-[2rem] border border-blue-50 shadow-sm">
										<div>
											<h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">Final Details</h2>
											<p className="text-blue-700/60 font-medium text-sm sm:text-base mt-2">Almost there! Complete your information.</p>
										</div>
										<div className="text-left sm:text-right bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-blue-50">
											<p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Total Amount</p>
											<p className="text-3xl font-black text-blue-950 leading-none">NPR {(selectedPrice || 0).toLocaleString()}</p>
										</div>
									</div>

									<Form {...form}>
										<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
											<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
												<FormField
													control={form.control}
													name="name"
													render={({ field }) => (
														<FormItem className="space-y-3">
															<FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
																<User className="w-4 h-4 mr-2 text-blue-600" /> Full Name
															</FormLabel>
															<FormControl>
																<Input placeholder="Johnathan Doe" {...field} className="h-16 border-blue-100 bg-white hover:border-blue-300 focus:bg-white focus:border-blue-600 focus:ring-8 focus:ring-blue-600/5 rounded-2xl transition-all font-bold text-lg" />
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
																<Phone className="w-4 h-4 mr-2 text-blue-600" /> Phone
															</FormLabel>
															<FormControl>
																<Input placeholder="98XXXXXXXX" {...field} className="h-16 border-blue-100 bg-white hover:border-blue-300 focus:bg-white focus:border-blue-600 focus:ring-8 focus:ring-blue-600/5 rounded-2xl transition-all font-bold text-lg" />
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
																<Contact className="w-4 h-4 mr-2 text-blue-600" /> Email
															</FormLabel>
															<FormControl>
																<Input placeholder="john@example.com" {...field} className="h-16 border-blue-100 bg-white hover:border-blue-300 focus:bg-white focus:border-blue-600 focus:ring-8 focus:ring-blue-600/5 rounded-2xl transition-all font-bold text-lg" />
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
																<MapPin className="w-4 h-4 mr-2 text-blue-600" /> Address
															</FormLabel>
															<FormControl>
																<Input placeholder="Bhaisepati, Ward 2" {...field} className="h-16 border-blue-100 bg-white hover:border-blue-300 focus:bg-white focus:border-blue-600 focus:ring-8 focus:ring-blue-600/5 rounded-2xl transition-all font-bold text-lg" />
															</FormControl>
															<FormMessage className="font-bold text-xs" />
														</FormItem>
													)}
												/>
											</div>

											<div className="flex flex-col items-center pt-12 border-t border-gray-100">
												<Button
													type="submit"
													disabled={isSubmitting}
													className="w-full md:w-auto min-w-[320px] h-20 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-600/30 transition-all duration-500 transform hover:scale-105 active:scale-95"
												>
													{isSubmitting ? (
														<>
															<Loader2 className="mr-4 h-8 w-8 animate-spin" />
															SECURED...
														</>
													) : (
														"CONFIRM BOOKING"
													)}
												</Button>
												<button
													type="button"
													onClick={() => setActiveTab("package")}
													className="mt-8 text-xs font-black text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-[0.4em]"
												>
													← Change Selected Package
												</button>
											</div>
										</form>
									</Form>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>

			{/* Premium Success Dialog */}
			<Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
				<DialogContent className="sm:max-w-xl rounded-[3rem] p-0 overflow-hidden border-none shadow-2xl">
					<div className="bg-blue-950 p-10 sm:p-14 text-center text-white relative overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
						<div className="mx-auto w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 shadow-2xl">
							<CheckCircle2 className="w-12 h-12 text-white" />
						</div>
						<DialogTitle className="text-3xl sm:text-5xl font-black tracking-tighter mb-4">Confirmed!</DialogTitle>
						<DialogDescription className="text-white/60 text-lg font-medium leading-relaxed">
							Your premium cleaning service for <span className="text-white font-black">{selectedCategory}</span> {includeInterior && "including Interior"} has been successfully scheduled.
						</DialogDescription>
					</div>
					<div className="p-8 sm:p-12 space-y-8 bg-white">
						<div className="bg-blue-50 rounded-3xl p-8 space-y-5 border border-blue-50 shadow-inner">
							<div className="flex justify-between items-center px-2">
								<span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Selected Item</span>
								<span className="text-blue-950 font-black text-lg">{selectedCategory}</span>
							</div>
							<div className="flex justify-between items-center px-2 pt-5 border-t border-blue-100">
								<span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Final Price</span>
								<span className="text-blue-600 font-black text-3xl tabular-nums">NPR {(selectedPrice || 0).toLocaleString()}</span>
							</div>
						</div>
						<div className="flex flex-col space-y-4">
							<Button
								className="bg-blue-600 hover:bg-blue-700 text-white h-16 sm:h-20 rounded-full font-black text-xl uppercase tracking-widest shadow-2xl shadow-blue-600/20 transition-all active:scale-95"
								onClick={() => router.push("/")}
							>
								Return Home
							</Button>
							<p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] pt-2">
								Redirecting to home in 5s...
							</p>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}
