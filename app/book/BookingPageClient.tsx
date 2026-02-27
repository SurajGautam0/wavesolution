"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {
	Loader2,
	CheckCircle2,
	MapPin,
	Mail,
	Phone,
	User,
	Sparkles,
	ArrowRight,
	ArrowLeft,
	ShieldCheck,
	Star,
	Clock,
	Calendar,
	BadgeCheck,
	MessageCircle,
	Home,
	Building2,
	Check,
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
import { cn } from "@/lib/utils"

// ── Data ──────────────────────────────────────────────
const serviceTypes = [
	{ id: "home", label: "Home Cleaning", icon: Home, color: "text-blue-600", bg: "bg-blue-50", desc: "Regular or one-off house cleaning" },
	{ id: "office", label: "Office Cleaning", icon: Building2, color: "text-indigo-600", bg: "bg-indigo-50", desc: "Commercial & workplace cleaning" },
	{ id: "deep", label: "Deep Cleaning", icon: Sparkles, color: "text-purple-600", bg: "bg-purple-50", desc: "Thorough top-to-bottom clean" },
]

const propertySizes = [
	{ id: "1-2bed", label: "1–2 Bedrooms", description: "Apartments, studios, small units" },
	{ id: "3bed", label: "3 Bedrooms", description: "Family homes, townhouses, duplexes", popular: true },
	{ id: "4+bed", label: "4+ Bedrooms", description: "Large homes, multi-storey houses" },
	{ id: "commercial", label: "Business Space", description: "Offices, retail, commercial spaces" },
]

type Frequency = "weekly" | "fortnightly" | "monthly" | "one-off"

const frequencies: { id: Frequency; label: string }[] = [
	{ id: "weekly", label: "Weekly" },
	{ id: "fortnightly", label: "Fortnightly" },
	{ id: "monthly", label: "Monthly" },
	{ id: "one-off", label: "One-off" },
]

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	phone: z.string().min(10, "Phone number must be at least 10 digits"),
	email: z.string().email("Invalid email address"),
	address: z.string().min(5, "Address must be at least 5 characters"),
	preferredDate: z.string().optional(),
	notes: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

// ── Steps ─────────────────────────────────────────────
const steps = [
	{ id: 1, label: "Service" },
	{ id: 2, label: "Preferences" },
	{ id: 3, label: "Details" },
]

export default function BookingPageClient() {
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(1)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccessDialog, setShowSuccessDialog] = useState(false)

	// Selections
	const [selectedService, setSelectedService] = useState("home")
	const [selectedSize, setSelectedSize] = useState("3bed")
	const [selectedFrequency, setSelectedFrequency] = useState<Frequency>("fortnightly")
	const [includeDeepClean, setIncludeDeepClean] = useState(false)

	const sizeLabel = propertySizes.find((s) => s.id === selectedSize)?.label || selectedSize
	const serviceLabel = serviceTypes.find((s) => s.id === selectedService)?.label || selectedService

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			address: "",
			preferredDate: "",
			notes: "",
		},
	})

	function goNext() {
		if (currentStep < 3) {
			setCurrentStep((s) => s + 1)
			window.scrollTo({ top: 0, behavior: "smooth" })
		}
	}

	function goBack() {
		if (currentStep > 1) {
			setCurrentStep((s) => s - 1)
			window.scrollTo({ top: 0, behavior: "smooth" })
		}
	}

	async function onSubmit(values: FormValues) {
		setIsSubmitting(true)
		try {
			const bookingPayload = {
				...values,
				service: selectedService,
				packageSize: sizeLabel,
				frequency: selectedFrequency,
				includeDeepClean,
			}

			// 1. Send email notification
			const emailRes = await fetch("/api/send-booking", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(bookingPayload),
			})

			if (!emailRes.ok) {
				const errData = await emailRes.json().catch(() => ({}))
				console.warn("Email send issue:", errData)
			}

			// 2. Also save to Firebase for dashboard
			try {
				await saveBooking(bookingPayload)
			} catch {
				// Firebase save is optional — email is the primary notification
			}

			// 3. Save to localStorage for client-side tracking
			const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
			bookings.push({
				...bookingPayload,
				id: Date.now().toString(),
				status: "pending",
				createdAt: new Date().toISOString(),
			})
			localStorage.setItem("bookings", JSON.stringify(bookings))

			toast.success("Booking request sent successfully!")
			setShowSuccessDialog(true)

			setTimeout(() => {
				router.push("/")
			}, 6000)
		} catch (error) {
			console.error("Booking error:", error)
			toast.error("Something went wrong. Please try again.")
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
			{/* ── Hero Header ──────────────────────────────── */}
			<div className="bg-primary relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
				<div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
					<div className="text-center">
						<p className="text-blue-200 text-sm font-semibold tracking-wider uppercase mb-3">
							Gold Coast&apos;s Trusted Cleaning Service
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
							Book Your Clean
						</h1>
						<p className="text-blue-100/80 text-base sm:text-lg max-w-xl mx-auto">
							Select your service, tell us about your space, and we&apos;ll get back to you with a custom quote.
						</p>
					</div>

					{/* ── Progress Stepper ───────────────────── */}
					<div className="mt-10 flex items-center justify-center max-w-md mx-auto">
						{steps.map((step, i) => (
							<div key={step.id} className="flex items-center flex-1 last:flex-initial">
								<button
									onClick={() => {
										if (step.id < currentStep) setCurrentStep(step.id)
									}}
									className="flex flex-col items-center gap-2 group"
								>
									<div
										className={cn(
											"w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2",
											currentStep > step.id
												? "bg-green-500 border-green-500 text-white"
												: currentStep === step.id
													? "bg-white border-white text-primary scale-110 shadow-lg shadow-white/20"
													: "bg-transparent border-blue-300/40 text-blue-300/60"
										)}
									>
										{currentStep > step.id ? (
											<Check className="w-5 h-5" />
										) : (
											step.id
										)}
									</div>
									<span
										className={cn(
											"text-xs font-semibold transition-colors",
											currentStep >= step.id ? "text-white" : "text-blue-300/50"
										)}
									>
										{step.label}
									</span>
								</button>
								{i < steps.length - 1 && (
									<div className="flex-1 mx-3 mt-[-24px]">
										<div className="h-0.5 rounded-full bg-blue-300/20">
											<div
												className={cn(
													"h-full rounded-full bg-green-400 transition-all duration-500",
													currentStep > step.id ? "w-full" : "w-0"
												)}
											/>
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── Main Content ─────────────────────────────── */}
			<div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6">
				<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

					{/* ═══ STEP 1 — Service Type ═══ */}
					{currentStep === 1 && (
						<div className="p-6 sm:p-10 animate-in fade-in slide-in-from-right-4 duration-500">
							<div className="mb-8">
								<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
									What do you need cleaned?
								</h2>
								<p className="text-slate-500">Select the type of cleaning service you require.</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
								{serviceTypes.map((svc) => {
									const Icon = svc.icon
									const isSelected = selectedService === svc.id
									return (
										<button
											key={svc.id}
											onClick={() => setSelectedService(svc.id)}
											className={cn(
												"relative flex flex-col items-center p-8 rounded-xl border-2 transition-all duration-300 group",
												isSelected
													? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
													: "border-slate-100 hover:border-slate-200 hover:shadow-md bg-white"
											)}
										>
											{isSelected && (
												<div className="absolute top-3 right-3">
													<CheckCircle2 className="w-5 h-5 text-primary" />
												</div>
											)}
											<div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors", isSelected ? "bg-primary/10" : svc.bg)}>
												<Icon className={cn("w-7 h-7", isSelected ? "text-primary" : svc.color)} />
											</div>
											<span className={cn("font-semibold text-base mb-1", isSelected ? "text-primary" : "text-slate-700")}>
												{svc.label}
											</span>
											<span className={cn("text-xs", isSelected ? "text-primary/70" : "text-slate-400")}>
												{svc.desc}
											</span>
										</button>
									)
								})}
							</div>

							{/* Quick trust strip */}
							<div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-slate-100">
								{[
									{ icon: ShieldCheck, text: "Fully Insured" },
									{ icon: BadgeCheck, text: "Police Checked" },
									{ icon: Star, text: "4.9\u2605 Rated" },
									{ icon: Clock, text: "Same-day Available" },
								].map((item) => (
									<div key={item.text} className="flex items-center gap-2 text-sm text-slate-500">
										<item.icon className="w-4 h-4 text-primary" />
										<span className="font-medium">{item.text}</span>
									</div>
								))}
							</div>

							<div className="flex justify-end pt-6">
								<Button
									onClick={goNext}
									className="h-12 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30"
								>
									Continue
									<ArrowRight className="w-4 h-4 ml-2" />
								</Button>
							</div>
						</div>
					)}

					{/* ═══ STEP 2 — Property Size & Frequency ═══ */}
					{currentStep === 2 && (
						<div className="p-6 sm:p-10 animate-in fade-in slide-in-from-right-4 duration-500">
							<div className="mb-8">
								<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
									Tell us about your space
								</h2>
								<p className="text-slate-500">Select your property size and how often you&apos;d like us to clean.</p>
							</div>

							{/* Property Size Cards */}
							<h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">Property Size</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
								{propertySizes.map((p) => {
									const isSelected = selectedSize === p.id
									return (
										<button
											key={p.id}
											onClick={() => setSelectedSize(p.id)}
											className={cn(
												"relative flex flex-col p-6 rounded-xl border-2 text-left transition-all duration-300",
												isSelected
													? "border-primary bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]"
													: "border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg"
											)}
										>
											{p.popular && (
												<span className={cn(
													"absolute -top-3 left-4 text-[10px] font-bold px-3 py-1 rounded-full",
													isSelected
														? "bg-orange-400 text-white"
														: "bg-orange-100 text-orange-700"
												)}>
													Most Common
												</span>
											)}

											{isSelected && (
												<div className="absolute top-4 right-4">
													<CheckCircle2 className="w-5 h-5 text-white/80" />
												</div>
											)}

											<h3 className={cn("text-lg font-bold mb-1", !isSelected && "text-slate-900")}>
												{p.label}
											</h3>
											<p className={cn("text-xs leading-relaxed", isSelected ? "text-blue-100/70" : "text-slate-400")}>
												{p.description}
											</p>
										</button>
									)
								})}
							</div>

							{/* Frequency Selection */}
							<h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">Cleaning Frequency</h3>
							<div className="flex items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-xl mb-8 max-w-lg mx-auto">
								{frequencies.map((freq) => (
									<button
										key={freq.id}
										onClick={() => setSelectedFrequency(freq.id)}
										className={cn(
											"flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300",
											selectedFrequency === freq.id
												? "bg-white text-slate-900 shadow-sm"
												: "text-slate-500 hover:text-slate-700"
										)}
									>
										{freq.label}
									</button>
								))}
							</div>

							{/* Deep Clean Add-on */}
							<div className={cn(
								"flex items-center justify-between p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer",
								includeDeepClean
									? "border-primary bg-primary/5"
									: "border-slate-100 hover:border-slate-200 bg-white"
							)}
								onClick={() => setIncludeDeepClean(!includeDeepClean)}
							>
								<div className="flex items-center gap-4">
									<div className={cn(
										"w-10 h-10 rounded-lg flex items-center justify-center",
										includeDeepClean ? "bg-primary/10" : "bg-purple-50"
									)}>
										<Sparkles className={cn("w-5 h-5", includeDeepClean ? "text-primary" : "text-purple-500")} />
									</div>
									<div>
										<p className="font-semibold text-slate-900">Add Deep Clean</p>
										<p className="text-sm text-slate-500">Includes oven, fridge, inside cabinets & more</p>
									</div>
								</div>
								<div className={cn(
									"w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all",
									includeDeepClean
										? "bg-primary border-primary"
										: "border-slate-300"
								)}>
									{includeDeepClean && <Check className="w-4 h-4 text-white" />}
								</div>
							</div>

							{/* Navigation */}
							<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
								<Button
									variant="outline"
									onClick={goBack}
									className="h-12 px-6 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 font-medium w-full sm:w-auto"
								>
									<ArrowLeft className="w-4 h-4 mr-2" />
									Back
								</Button>
								<Button
									onClick={goNext}
									className="h-12 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30 w-full sm:w-auto"
								>
									Continue
									<ArrowRight className="w-4 h-4 ml-2" />
								</Button>
							</div>
						</div>
					)}

					{/* ═══ STEP 3 — Contact Details ═══ */}
					{currentStep === 3 && (
						<div className="p-6 sm:p-10 animate-in fade-in slide-in-from-right-4 duration-500">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
								{/* Form Column */}
								<div className="lg:col-span-2">
									<div className="mb-8">
										<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
											Your details
										</h2>
										<p className="text-slate-500">
											Fill in your details and we&apos;ll contact you with a personalised quote.
										</p>
									</div>

									<Form {...form}>
										<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
												<FormField
													control={form.control}
													name="name"
													render={({ field }) => (
														<FormItem>
															<FormLabel className="text-slate-700 font-medium text-sm">Full Name</FormLabel>
															<FormControl>
																<div className="relative">
																	<User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
																	<Input
																		placeholder="e.g. John Smith"
																		{...field}
																		className="h-12 pl-10 border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl transition-all"
																	/>
																</div>
															</FormControl>
															<FormMessage className="text-xs" />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="phone"
													render={({ field }) => (
														<FormItem>
															<FormLabel className="text-slate-700 font-medium text-sm">Phone Number</FormLabel>
															<FormControl>
																<div className="relative">
																	<Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
																	<Input
																		placeholder="04XX XXX XXX"
																		{...field}
																		className="h-12 pl-10 border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl transition-all"
																	/>
																</div>
															</FormControl>
															<FormMessage className="text-xs" />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="email"
													render={({ field }) => (
														<FormItem>
															<FormLabel className="text-slate-700 font-medium text-sm">Email Address</FormLabel>
															<FormControl>
																<div className="relative">
																	<Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
																	<Input
																		placeholder="john@example.com"
																		{...field}
																		className="h-12 pl-10 border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl transition-all"
																	/>
																</div>
															</FormControl>
															<FormMessage className="text-xs" />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="address"
													render={({ field }) => (
														<FormItem>
															<FormLabel className="text-slate-700 font-medium text-sm">Property Address</FormLabel>
															<FormControl>
																<div className="relative">
																	<MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
																	<Input
																		placeholder="e.g. 12 Cavill Ave, Surfers Paradise"
																		{...field}
																		className="h-12 pl-10 border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl transition-all"
																	/>
																</div>
															</FormControl>
															<FormMessage className="text-xs" />
														</FormItem>
													)}
												/>
											</div>

											<FormField
												control={form.control}
												name="preferredDate"
												render={({ field }) => (
													<FormItem>
														<FormLabel className="text-slate-700 font-medium text-sm">Preferred Date & Time</FormLabel>
														<FormControl>
															<div className="relative">
																<Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
																<Input
																	type="datetime-local"
																	{...field}
																	className="h-12 pl-10 border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl transition-all"
																/>
															</div>
														</FormControl>
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name="notes"
												render={({ field }) => (
													<FormItem>
														<FormLabel className="text-slate-700 font-medium text-sm">
															Special Instructions <span className="text-slate-400 font-normal">(optional)</span>
														</FormLabel>
														<FormControl>
															<textarea
																placeholder="e.g. Pet-friendly products preferred, focus on kitchen..."
																{...field}
																rows={3}
																className="w-full px-4 py-3 border border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl transition-all text-sm resize-none outline-none"
															/>
														</FormControl>
													</FormItem>
												)}
											/>

											{/* Submit row */}
											<div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
												<Button
													type="button"
													variant="outline"
													onClick={goBack}
													className="h-12 px-6 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 font-medium w-full sm:w-auto"
												>
													<ArrowLeft className="w-4 h-4 mr-2" />
													Back
												</Button>
												<Button
													type="submit"
													disabled={isSubmitting}
													className="h-14 px-10 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 w-full sm:flex-1 disabled:opacity-60"
												>
													{isSubmitting ? (
														<>
															<Loader2 className="mr-3 h-5 w-5 animate-spin" />
															Sending...
														</>
													) : (
														<>
															Submit Booking Request
															<ArrowRight className="w-4 h-4 ml-2" />
														</>
													)}
												</Button>
											</div>
										</form>
									</Form>
								</div>

								{/* Sidebar — Booking Summary (no prices) */}
								<div className="space-y-5">
									<div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
										<h3 className="font-bold text-slate-900 mb-5 flex items-center gap-2">
											<span className="w-1.5 h-5 bg-primary rounded-full" />
											Booking Summary
										</h3>
										<div className="space-y-4 text-sm">
											<div className="flex justify-between items-center pb-3 border-b border-slate-200">
												<span className="text-slate-500">Service</span>
												<span className="font-semibold text-slate-900">{serviceLabel}</span>
											</div>
											<div className="flex justify-between items-center pb-3 border-b border-slate-200">
												<span className="text-slate-500">Property Size</span>
												<span className="font-semibold text-slate-900">{sizeLabel}</span>
											</div>
											<div className="flex justify-between items-center pb-3 border-b border-slate-200">
												<span className="text-slate-500">Frequency</span>
												<span className="font-semibold text-slate-900 capitalize">{selectedFrequency}</span>
											</div>
											{includeDeepClean && (
												<div className="flex justify-between items-center pb-3 border-b border-slate-200">
													<span className="text-slate-500">Deep Clean</span>
													<span className="font-semibold text-green-600">Included</span>
												</div>
											)}
										</div>
										<div className="mt-5 p-4 bg-blue-50 rounded-lg border border-blue-100">
											<p className="text-xs text-blue-700 font-medium text-center">
												We&apos;ll review your details and send you a personalised quote within 15 minutes.
											</p>
										</div>
									</div>

									{/* Contact Support */}
									<div className="bg-white p-6 rounded-xl border border-slate-100">
										<p className="text-sm font-semibold text-slate-900 mb-4">Need help booking?</p>
										<div className="space-y-3">
											<Link
												href="tel:0450833683"
												className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors group"
											>
												<div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
													<Phone className="w-4 h-4 text-primary" />
												</div>
												<span className="font-medium">0450 833 683</span>
											</Link>
											<Link
												href="https://wa.me/61450833683"
												target="_blank"
												className="flex items-center gap-3 text-sm text-slate-600 hover:text-green-600 transition-colors group"
											>
												<div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
													<MessageCircle className="w-4 h-4 text-green-600" />
												</div>
												<span className="font-medium">WhatsApp Us</span>
											</Link>
										</div>
									</div>

									{/* Guarantee Badge */}
									<div className="bg-green-50 p-5 rounded-xl border border-green-100 text-center">
										<ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
										<p className="font-semibold text-green-800 text-sm">100% Satisfaction Guarantee</p>
										<p className="text-xs text-green-600 mt-1">Not happy? We&apos;ll re-clean for free.</p>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* ── Social Proof Strip ─────────────────────── */}
				<div className="mt-12 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
					{[
						{ value: "2,000+", label: "Happy Customers" },
						{ value: "4.9\u2605", label: "Average Rating" },
						{ value: "15 min", label: "Response Time" },
						{ value: "100%", label: "Satisfaction Rate" },
					].map((stat) => (
						<div key={stat.label} className="py-4">
							<p className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</p>
							<p className="text-xs text-slate-500 font-medium mt-1">{stat.label}</p>
						</div>
					))}
				</div>
			</div>

			{/* ── Success Dialog ────────────────────────────── */}
			<Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
				<DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden border-none shadow-2xl">
					<div className="bg-primary p-8 sm:p-10 text-center text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
						<div className="relative z-10">
							<div className="mx-auto w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm border border-white/20">
								<CheckCircle2 className="w-8 h-8 text-white" />
							</div>
							<DialogTitle className="text-2xl sm:text-3xl font-bold mb-3">
								Request Received!
							</DialogTitle>
							<DialogDescription className="text-blue-100/80 text-sm leading-relaxed">
								Thank you! We&apos;ll review your booking details and contact you within 15 minutes with a personalised quote.
							</DialogDescription>
						</div>
					</div>
					<div className="p-6 sm:p-8 space-y-5 bg-white">
						<div className="bg-slate-50 rounded-xl p-5 space-y-3 border border-slate-100">
							<div className="flex justify-between items-center text-sm">
								<span className="text-slate-500">Service</span>
								<span className="font-semibold text-slate-900">{serviceLabel}</span>
							</div>
							<div className="flex justify-between items-center text-sm pt-3 border-t border-slate-200">
								<span className="text-slate-500">Property</span>
								<span className="font-semibold text-slate-900">{sizeLabel}</span>
							</div>
							<div className="flex justify-between items-center text-sm pt-3 border-t border-slate-200">
								<span className="text-slate-500">Frequency</span>
								<span className="font-semibold text-slate-900 capitalize">{selectedFrequency}</span>
							</div>
						</div>
						<Button
							className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold shadow-md"
							onClick={() => router.push("/")}
						>
							Return to Home
						</Button>
						<p className="text-center text-xs text-slate-400">
							Redirecting automatically in a few seconds...
						</p>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

