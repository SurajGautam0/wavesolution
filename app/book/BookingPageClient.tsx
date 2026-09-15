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
import { businessInfo } from "@/lib/business-info"

// ── Data ──────────────────────────────────────────────
const serviceTypes = [
	{ id: "home", label: "Home Cleaning", icon: Home, desc: "Regular or one-off house cleaning" },
	{ id: "office", label: "Office Cleaning", icon: Building2, desc: "Commercial and workplace cleaning" },
	{ id: "deep", label: "Deep Cleaning", icon: Sparkles, desc: "Thorough top-to-bottom clean" },
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
		<div className="min-h-screen bg-[#F3F3F3]">
			{/* ── Header ──────────────────────────────── */}
			<div className="relative overflow-hidden bg-secondary">
				<div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
				<div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#39BDE4]/10 blur-3xl" />
				<div className="classic-container relative z-10 px-4 py-12 sm:px-6 sm:py-16">
					<div className="mx-auto max-w-2xl text-center">
						<span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
							<span className="h-1.5 w-1.5 rounded-full bg-[#39BDE4]" />
							Online Booking
						</span>
						<h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
							Book Your Clean
						</h1>
						<p className="mx-auto mt-3 max-w-xl text-base text-white/70 sm:text-lg">
							Select your service, tell us about your space, and we will get back to you with a custom quote.
						</p>
					</div>

					{/* ── Progress Stepper ───────────────────── */}
					<div className="mx-auto mt-10 flex max-w-md items-center justify-center">
						{steps.map((step, i) => (
							<div key={step.id} className="flex flex-1 items-center last:flex-initial">
								<button
									onClick={() => {
										if (step.id < currentStep) setCurrentStep(step.id)
									}}
									className="group flex flex-col items-center gap-2"
								>
									<div
										className={cn(
											"flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300",
											currentStep > step.id
												? "border-[#39BDE4] bg-[#39BDE4] text-white"
												: currentStep === step.id
													? "scale-110 border-white bg-white text-secondary shadow-lg"
													: "border-white/20 bg-transparent text-white/40"
										)}
									>
										{currentStep > step.id ? (
											<Check className="h-5 w-5" />
										) : (
											step.id
										)}
									</div>
									<span
										className={cn(
											"text-xs font-bold transition-colors",
											currentStep >= step.id ? "text-white" : "text-white/40"
										)}
									>
										{step.label}
									</span>
								</button>
								{i < steps.length - 1 && (
									<div className="mx-3 mt-[-24px] flex-1">
										<div className="h-0.5 rounded-full bg-white/15">
											<div
												className={cn(
													"h-full rounded-full bg-[#39BDE4] transition-all duration-500",
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
			<div className="classic-container -mt-6 px-4 sm:px-6">
				<div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">

					{/* ═══ STEP 1 — Service Type ═══ */}
					{currentStep === 1 && (
						<div className="animate-in fade-in slide-in-from-right-4 p-6 duration-300 sm:p-10">
							<div className="mb-8">
								<span className="eyebrow">Step 1 of 3</span>
								<h2 className="pt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
									What do you need cleaned?
								</h2>
								<p className="mt-2 text-slate-500">Select the type of cleaning service you require.</p>
							</div>

							<div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
								{serviceTypes.map((svc) => {
									const Icon = svc.icon
									const isSelected = selectedService === svc.id
									return (
										<button
											key={svc.id}
											onClick={() => setSelectedService(svc.id)}
											className={cn(
												"relative flex flex-col items-center rounded-2xl border-2 p-8 transition-all duration-300",
												isSelected
													? "border-[#39BDE4] bg-[#39BDE4]/5 shadow-lg shadow-[#39BDE4]/10"
													: "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
											)}
										>
											{isSelected && (
												<div className="absolute right-3 top-3">
													<CheckCircle2 className="h-5 w-5 text-[#39BDE4]" />
												</div>
											)}
											<div className={cn("mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors", isSelected ? "bg-[#39BDE4] text-white" : "bg-[#39BDE4]/10 text-[#39BDE4]")}>
												<Icon className="h-7 w-7" />
											</div>
											<span className={cn("mb-1 text-base font-bold", isSelected ? "text-secondary" : "text-slate-700")}>
												{svc.label}
											</span>
											<span className="text-xs text-slate-400">
												{svc.desc}
											</span>
										</button>
									)
								})}
							</div>

							{/* Trust strip */}
							<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-slate-100 py-6">
								{[
									{ icon: ShieldCheck, text: "Fully Insured" },
									{ icon: BadgeCheck, text: "Police Checked" },
									{ icon: Star, text: "4.9 out of 5 Rating" },
									{ icon: Clock, text: "Same-day Available" },
								].map((item) => (
									<div key={item.text} className="flex items-center gap-2 text-sm text-slate-500">
										<item.icon className="h-4 w-4 text-[#39BDE4]" />
										<span className="font-semibold">{item.text}</span>
									</div>
								))}
							</div>

							<div className="flex justify-end pt-6">
								<Button
									onClick={goNext}
									className="h-12 rounded-full bg-[#39BDE4] px-8 text-xs font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-[#39BDE4]/25 transition-all hover:bg-[#249FC5]"
								>
									Continue
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</div>
						</div>
					)}

					{/* ═══ STEP 2 — Property Size & Frequency ═══ */}
					{currentStep === 2 && (
						<div className="animate-in fade-in slide-in-from-right-4 p-6 duration-300 sm:p-10">
							<div className="mb-8">
								<span className="eyebrow">Step 2 of 3</span>
								<h2 className="pt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
									Tell us about your space
								</h2>
								<p className="mt-2 text-slate-500">Select your property size and how often you would like us to clean.</p>
							</div>

							{/* Property Size Cards */}
							<h3 className="mb-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">Property Size</h3>
							<div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
								{propertySizes.map((p) => {
									const isSelected = selectedSize === p.id
									return (
										<button
											key={p.id}
											onClick={() => setSelectedSize(p.id)}
											className={cn(
												"relative flex flex-col rounded-2xl border-2 p-6 text-left transition-all duration-300",
												isSelected
													? "border-secondary bg-secondary text-white shadow-xl shadow-secondary/20"
													: "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
											)}
										>
											{p.popular && (
												<span className={cn(
													"absolute -top-3 left-4 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest",
													isSelected
														? "bg-[#39BDE4] text-white"
														: "bg-secondary text-white"
												)}>
													Most Common
												</span>
											)}

											{isSelected && (
												<div className="absolute right-4 top-4">
													<CheckCircle2 className="h-5 w-5 text-[#39BDE4]" />
												</div>
											)}

											<h3 className={cn("mb-1 text-lg font-bold", !isSelected && "text-slate-900")}>
												{p.label}
											</h3>
											<p className={cn("text-xs leading-relaxed", isSelected ? "text-white/70" : "text-slate-400")}>
												{p.description}
											</p>
										</button>
									)
								})}
							</div>

							{/* Frequency Selection */}
							<h3 className="mb-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">Cleaning Frequency</h3>
							<div className="mx-auto mb-8 flex max-w-lg items-center justify-center gap-1 rounded-2xl bg-[#F3F3F3] p-1.5">
								{frequencies.map((freq) => (
									<button
										key={freq.id}
										onClick={() => setSelectedFrequency(freq.id)}
										className={cn(
											"flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300",
											selectedFrequency === freq.id
												? "bg-white text-secondary shadow-sm"
												: "text-slate-500 hover:text-slate-700"
										)}
									>
										{freq.label}
									</button>
								))}
							</div>

							{/* Deep Clean Add-on */}
							<div className={cn(
								"flex cursor-pointer items-center justify-between rounded-2xl border-2 p-5 transition-all duration-300",
								includeDeepClean
									? "border-[#39BDE4] bg-[#39BDE4]/5"
									: "border-slate-200 bg-white hover:border-slate-300"
							)}
								onClick={() => setIncludeDeepClean(!includeDeepClean)}
							>
								<div className="flex items-center gap-4">
									<div className={cn(
										"flex h-11 w-11 items-center justify-center rounded-xl",
										includeDeepClean ? "bg-[#39BDE4] text-white" : "bg-[#39BDE4]/10 text-[#39BDE4]"
									)}>
										<Sparkles className="h-5 w-5" />
									</div>
									<div>
										<p className="font-bold text-slate-900">Add Deep Clean</p>
										<p className="text-sm text-slate-500">Includes oven, fridge, inside cabinets and more</p>
									</div>
								</div>
								<div className={cn(
									"flex h-6 w-6 items-center justify-center rounded-md border-2 transition-all",
									includeDeepClean
										? "border-[#39BDE4] bg-[#39BDE4]"
										: "border-slate-300"
								)}>
									{includeDeepClean && <Check className="h-4 w-4 text-white" />}
								</div>
							</div>

							{/* Navigation */}
							<div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
								<Button
									variant="outline"
									onClick={goBack}
									className="h-12 w-full rounded-full border-slate-200 px-6 font-semibold text-slate-600 hover:bg-slate-50 sm:w-auto"
								>
									<ArrowLeft className="mr-2 h-4 w-4" />
									Back
								</Button>
								<Button
									onClick={goNext}
									className="h-12 w-full rounded-full bg-[#39BDE4] px-8 text-xs font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-[#39BDE4]/25 transition-all hover:bg-[#249FC5] sm:w-auto"
								>
									Continue
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</div>
						</div>
					)}

					{/* ═══ STEP 3 — Contact Details ═══ */}
					{currentStep === 3 && (
						<div className="animate-in fade-in slide-in-from-right-4 p-6 duration-300 sm:p-10">
							<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
								{/* Form Column */}
								<div className="lg:col-span-2">
									<div className="mb-8">
										<span className="eyebrow">Step 3 of 3</span>
										<h2 className="pt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
											Your details
										</h2>
										<p className="mt-2 text-slate-500">
											Fill in your details and we will contact you with a personalised quote.
										</p>
									</div>

									<Form {...form}>
										<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
											<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
												<FormField
													control={form.control}
													name="name"
													render={({ field }) => (
														<FormItem>
															<FormLabel className="text-sm font-semibold text-slate-700">Full Name</FormLabel>
															<FormControl>
																<div className="relative">
																	<User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
																	<Input
																		placeholder="e.g. John Smith"
																		{...field}
																		className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/60 pl-10 transition-all hover:border-slate-300 focus:border-[#39BDE4] focus:bg-white focus:ring-2 focus:ring-[#39BDE4]/10"
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
															<FormLabel className="text-sm font-semibold text-slate-700">Phone Number</FormLabel>
															<FormControl>
																<div className="relative">
																	<Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
																	<Input
																		placeholder="04XX XXX XXX"
																		{...field}
																		className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/60 pl-10 transition-all hover:border-slate-300 focus:border-[#39BDE4] focus:bg-white focus:ring-2 focus:ring-[#39BDE4]/10"
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
															<FormLabel className="text-sm font-semibold text-slate-700">Email Address</FormLabel>
															<FormControl>
																<div className="relative">
																	<Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
																	<Input
																		placeholder="john@example.com"
																		{...field}
																		className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/60 pl-10 transition-all hover:border-slate-300 focus:border-[#39BDE4] focus:bg-white focus:ring-2 focus:ring-[#39BDE4]/10"
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
															<FormLabel className="text-sm font-semibold text-slate-700">Property Address</FormLabel>
															<FormControl>
																<div className="relative">
																	<MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
																	<Input
																		placeholder="e.g. 12 Cavill Ave, Surfers Paradise"
																		{...field}
																		className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/60 pl-10 transition-all hover:border-slate-300 focus:border-[#39BDE4] focus:bg-white focus:ring-2 focus:ring-[#39BDE4]/10"
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
														<FormLabel className="text-sm font-semibold text-slate-700">Preferred Date and Time</FormLabel>
														<FormControl>
															<div className="relative">
																<Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
																<Input
																	type="datetime-local"
																	{...field}
																	className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/60 pl-10 transition-all hover:border-slate-300 focus:border-[#39BDE4] focus:bg-white focus:ring-2 focus:ring-[#39BDE4]/10"
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
														<FormLabel className="text-sm font-semibold text-slate-700">
															Special Instructions <span className="font-normal text-slate-400">(optional)</span>
														</FormLabel>
														<FormControl>
															<textarea
																placeholder="e.g. Pet-friendly products preferred, focus on kitchen..."
																{...field}
																rows={3}
																className="w-full resize-none rounded-xl border border-slate-200 bg-[#F3F3F3]/60 px-4 py-3 text-sm outline-none transition-all hover:border-slate-300 focus:border-[#39BDE4] focus:bg-white focus:ring-2 focus:ring-[#39BDE4]/10"
															/>
														</FormControl>
													</FormItem>
												)}
											/>

											{/* Submit row */}
											<div className="flex flex-col items-center gap-4 border-t border-slate-100 pt-6 sm:flex-row">
												<Button
													type="button"
													variant="outline"
													onClick={goBack}
													className="h-12 w-full rounded-full border-slate-200 px-6 font-semibold text-slate-600 hover:bg-slate-50 sm:w-auto"
												>
													<ArrowLeft className="mr-2 h-4 w-4" />
													Back
												</Button>
												<Button
													type="submit"
													disabled={isSubmitting}
													className="h-14 w-full rounded-full bg-[#39BDE4] px-10 text-xs font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-[#39BDE4]/25 transition-all hover:bg-[#249FC5] disabled:opacity-60 sm:flex-1"
												>
													{isSubmitting ? (
														<>
															<Loader2 className="mr-3 h-5 w-5 animate-spin" />
															Sending...
														</>
													) : (
														<>
															Submit Booking Request
															<ArrowRight className="ml-2 h-4 w-4" />
														</>
													)}
												</Button>
											</div>
										</form>
									</Form>
								</div>

								{/* Sidebar — Booking Summary */}
								<div className="space-y-5">
									<div className="rounded-2xl border border-slate-200 bg-[#F3F3F3]/60 p-6">
										<h3 className="mb-5 flex items-center gap-2 font-bold text-slate-900">
											<span className="h-5 w-1.5 rounded-full bg-[#39BDE4]" />
											Booking Summary
										</h3>
										<div className="space-y-4 text-sm">
											<div className="flex items-center justify-between border-b border-slate-200 pb-3">
												<span className="text-slate-500">Service</span>
												<span className="font-bold text-slate-900">{serviceLabel}</span>
											</div>
											<div className="flex items-center justify-between border-b border-slate-200 pb-3">
												<span className="text-slate-500">Property Size</span>
												<span className="font-bold text-slate-900">{sizeLabel}</span>
											</div>
											<div className="flex items-center justify-between border-b border-slate-200 pb-3">
												<span className="text-slate-500">Frequency</span>
												<span className="font-bold capitalize text-slate-900">{selectedFrequency}</span>
											</div>
											{includeDeepClean && (
												<div className="flex items-center justify-between border-b border-slate-200 pb-3">
													<span className="text-slate-500">Deep Clean</span>
													<span className="font-bold text-green-600">Included</span>
												</div>
											)}
										</div>
										<div className="mt-5 rounded-xl border border-[#39BDE4]/20 bg-[#39BDE4]/5 p-4">
											<p className="text-center text-xs font-semibold leading-relaxed text-secondary">
												We will review your details and send you a personalised quote within 15 minutes.
											</p>
										</div>
									</div>

									{/* Contact Support */}
									<div className="rounded-2xl border border-slate-200 bg-white p-6">
										<p className="mb-4 text-sm font-bold text-slate-900">Need help booking?</p>
										<div className="space-y-3">
											<Link
												href={businessInfo.phoneHref}
												className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-secondary"
											>
												<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#39BDE4]/10 transition-colors group-hover:bg-[#39BDE4]/20">
													<Phone className="h-4 w-4 text-[#39BDE4]" />
												</div>
												<span className="font-semibold">{businessInfo.phoneDisplay}</span>
											</Link>
											<Link
											href={`https://wa.me/${businessInfo.phoneE164.replace(/\D/g, "")}`}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-green-600"
											>
												<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 transition-colors group-hover:bg-green-100">
													<MessageCircle className="h-4 w-4 text-green-600" />
												</div>
												<span className="font-semibold">WhatsApp Us</span>
											</Link>
										</div>
									</div>

									{/* Guarantee Badge */}
									<div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center">
										<ShieldCheck className="mx-auto mb-2 h-8 w-8 text-green-600" />
										<p className="text-sm font-bold text-green-800">100% Satisfaction Guarantee</p>
										<p className="mt-1 text-xs text-green-600">Not happy? We will re-clean for free.</p>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* ── Stats Strip ─────────────────────── */}
				<div className="mb-16 mt-12 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
					{[
						{ value: "2,000+", label: "Happy Customers" },
						{ value: "4.9 / 5", label: "Average Rating" },
						{ value: "15 min", label: "Response Time" },
						{ value: "100%", label: "Satisfaction Rate" },
					].map((stat) => (
						<div key={stat.label} className="py-4">
							<p className="text-2xl font-black text-slate-900 sm:text-3xl">{stat.value}</p>
							<p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">{stat.label}</p>
						</div>
					))}
				</div>
			</div>

			{/* ── Success Dialog ────────────────────────────── */}
			<Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
				<DialogContent className="overflow-hidden rounded-[2rem] border-none p-0 shadow-2xl sm:max-w-md">
					<div className="relative overflow-hidden bg-secondary p-8 text-center text-white sm:p-10">
						<div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#39BDE4]/20 blur-3xl" />
						<div className="relative z-10">
							<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
								<CheckCircle2 className="h-8 w-8 text-[#39BDE4]" />
							</div>
							<DialogTitle className="mb-3 text-2xl font-black sm:text-3xl">
								Request Received
							</DialogTitle>
							<DialogDescription className="text-sm leading-relaxed text-white/70">
								Thank you. We will review your booking details and contact you within 15 minutes with a personalised quote.
							</DialogDescription>
						</div>
					</div>
					<div className="space-y-5 bg-white p-6 sm:p-8">
						<div className="space-y-3 rounded-2xl border border-slate-200 bg-[#F3F3F3]/60 p-5">
							<div className="flex items-center justify-between text-sm">
								<span className="text-slate-500">Service</span>
								<span className="font-bold text-slate-900">{serviceLabel}</span>
							</div>
							<div className="flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
								<span className="text-slate-500">Property</span>
								<span className="font-bold text-slate-900">{sizeLabel}</span>
							</div>
							<div className="flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
								<span className="text-slate-500">Frequency</span>
								<span className="font-bold capitalize text-slate-900">{selectedFrequency}</span>
							</div>
						</div>
						<Button
							className="h-12 w-full rounded-full bg-[#39BDE4] font-black uppercase tracking-[0.15em] text-white shadow-lg hover:bg-[#249FC5]"
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
