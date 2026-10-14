"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Loader2,
    ArrowRight,
    Sparkles,
    CalendarDays,
    MapPin,
    Clock3,
    Star,
    Check,
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { businessInfo, siteLinks } from "@/lib/business-info"

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
    const router = useRouter()
    const { signIn, user, signInWithGoogle } = useAuth()
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Redirect if user is already logged in
    useEffect(() => {
        if (user) {
            if (user.role === "admin" || user.role === "dispatcher") router.push("/operations")
            else if (user.role === "worker") router.push("/worker")
            else router.push("/dashboard")
        }
    }, [user, router])

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: LoginFormValues) {
        setIsSubmitting(true)
        try {
            console.log("Attempting sign in...")
            await signIn(values.email, values.password)
            console.log("Sign in successful")
            toast.success("Welcome back to WaveSolution!")

            // Redirect is now handled by the useEffect above when 'user' state updates
            // But we keep manual redirect as fallback
            // router.push("/admin")
        } catch (error: any) {
            console.error("Login Error:", error)
            toast.error(error.message || "Invalid credentials. Please try again.")
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen bg-[#f2f5fb] p-0 text-slate-900 sm:p-5 lg:p-8">
            <div className="mx-auto grid min-h-screen max-w-[1440px] overflow-hidden bg-white shadow-[0_30px_100px_-48px_rgba(51,51,101,0.32)] sm:min-h-[calc(100vh-2.5rem)] sm:rounded-[2rem] lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.08fr_0.92fr]">
                <section className="relative hidden overflow-hidden bg-secondary p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
                    <Image src="/images/gold-coast-cleaning-service.jpg" alt="Wave Solution team providing a professional clean" fill priority quality={75} sizes="50vw" className="object-cover opacity-35" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#333365]/95 via-[#333365]/80 to-[#23234d]/90" />
                    <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full border border-white/10" />
                    <div className="absolute -right-12 -top-8 h-56 w-56 rounded-full border border-white/10" />
                    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
                    <Link href={siteLinks.home} className="relative z-10 inline-flex w-fit rounded-xl bg-white/95 px-4 py-2.5">
                        <img src="/logo.png" alt="Wave Solution" width={160} height={40} className="h-9 object-contain" />
                    </Link>
                    <div className="relative z-10 max-w-xl py-10">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9DE7FA]"><Sparkles className="h-4 w-4" /> A brighter kind of clean</span>
                        <h1 className="max-w-lg text-5xl font-bold leading-[1.06] tracking-tight xl:text-6xl">Come home to <span className="text-[#58C8E8]">the good feeling.</span></h1>
                        <p className="mt-5 max-w-md text-base leading-7 text-white/80">More time to unwind. Less time worrying about the clean. Your Wave Solution account keeps it all easy.</p>
                        <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-white/90">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><Check className="h-3.5 w-3.5 text-[#58C8E8]" /> Trusted local team</span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><Check className="h-3.5 w-3.5 text-[#58C8E8]" /> Easy booking updates</span>
                        </div>
                        <div className="mt-8 max-w-sm rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#39BDE4]/20 text-[#75D8F2]"><CalendarDays className="h-5 w-5" /></div>
                                <div>
                                    <div className="mb-1 flex gap-0.5 text-[#79D9F2]" aria-label="5 out of 5 stars"><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /></div>
                                    <p className="font-semibold">A fresh start, on your schedule</p><p className="mt-1 text-sm leading-6 text-white/70">See upcoming services and keep your booking details close.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-between gap-4 text-xs text-white/65">
                        <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Proudly serving the Gold Coast</span>
                        <a href={businessInfo.phoneHref} className="hover:text-white">{businessInfo.phoneDisplay}</a>
                    </div>
                </section>
                <section className="relative flex items-center justify-center overflow-hidden px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.07] blur-3xl" />
                    <div className="w-full max-w-[400px]">
                        <div className="mb-10 flex items-center justify-between lg:hidden">
                            <Link href={siteLinks.home} aria-label="Wave Solution home"><img src="/logo.png" alt="Wave Solution" width={150} height={38} className="h-9 object-contain" /></Link>
                            <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-secondary">Client portal</span>
                        </div>
                        <div className="mb-8">
                            <p className="text-sm font-semibold tracking-wide text-primary">YOUR CLEANING, MADE EASY</p>
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-[2.1rem]">Welcome back</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-500">Sign in to manage your bookings and enjoy a little more peace of mind.</p>
                        </div>
                        <Card className="border-0 bg-transparent shadow-none">
                            <CardContent className="p-0">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-5">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2.5">
                                                    <FormLabel className="text-sm font-medium text-secondary">
                                                        Email address
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            autoComplete="email"
                                                            placeholder="you@example.com"
                                                            {...field}
                                                            className="h-12 rounded-xl border-slate-200 bg-slate-50/50 px-4 text-sm shadow-none placeholder:text-slate-400 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10"
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="font-bold text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2.5">
                                                    <div className="flex items-center justify-between">
                                                        <FormLabel className="text-sm font-medium text-secondary">
                                                            Password
                                                        </FormLabel>
                                                    </div>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Input
                                                                type="password"
                                                                autoComplete="current-password"
                                                                placeholder="Enter your password"
                                                                {...field}
                                                                className="h-12 rounded-xl border-slate-200 bg-slate-50/50 px-4 text-sm shadow-none placeholder:text-slate-400 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10"
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage className="font-bold text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="h-12 w-full rounded-xl bg-primary text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-[#249FC5]"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="h-6 w-6 animate-spin" />
                                        ) : (
                                            <span className="flex items-center">
                                                Sign in <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </Form>

                            <div className="mt-6 space-y-5">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-slate-200" />
                                    </div>
                                    <div className="relative flex justify-center text-xs">
                                        <span className="bg-white px-3 text-xs text-slate-400">OR</span>
                                    </div>
                                </div>

                                <div>
                                    <Button
                                        variant="outline"
                                        type="button"
                                        disabled={isSubmitting}
                                        onClick={async () => {
                                            setIsSubmitting(true)
                                            try {
                                                await signInWithGoogle()
                                                toast.success("Welcome back to WaveSolution!")
                                            } catch (error) {
                                                toast.error("Google Sign-In failed.")
                                            } finally {
                                                setIsSubmitting(false)
                                            }
                                        }}
                                        className="h-12 w-full rounded-xl border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-none hover:bg-slate-50"
                                    >
                                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        Google
                                    </Button>
                                </div>

                                <div className="pt-1 text-center">
                                    <p className="text-sm text-slate-500">
                                        New to Wave Solution?{" "}
                                        <Link href="/register" className="font-semibold text-primary hover:underline underline-offset-4">Create an account</Link>
                                    </p>
                                </div>
                                <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-slate-400"><Clock3 className="h-3.5 w-3.5" /> Here when you need us, every day.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </section>
            </div>
        </main>
    )
}
