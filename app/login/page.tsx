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
    Mail,
    Lock,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    ShieldCheck,
    Facebook
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
    // Redirect if user is already logged in
    useEffect(() => {
        if (user) {
            // @ts-ignore
            if (user.role === 'admin') {
                router.push("/admin")
            } else {
                router.push("/dashboard")
            }
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
        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
            {/* Left Side: Aesthetic Brand Section */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-primary relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[80%] h-full bg-secondary/5 -skew-x-12 transform origin-top-right" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                    <Link href="/" className="inline-block">
                        <div className="relative w-48 h-12">
                            <img src="/logo.png" alt="WaveSolution" className="object-contain brightness-0 invert" />
                        </div>
                    </Link>
                </div>

                <div className="relative z-10 space-y-8 max-w-lg">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <div className="relative w-4 h-4 overflow-hidden">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">#1 Cleaning Services</span>
                    </div>
                    <h1 className="text-5xl font-serif font-black tracking-tighter leading-tight">
                        Login to Wave Solution <span className="text-secondary">Gold Coast</span>
                    </h1>
                    <p className="text-white/60 text-lg font-medium leading-relaxed">
                        Access your personalized cleaning dashboard, manage bookings, and communicate with your dedicated cleaning professionals—all in one place.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-10">
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
                                <ShieldCheck className="w-6 h-6 text-secondary" />
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest">Secured Login</p>
                            <p className="text-xs text-white/40 leading-relaxed font-bold">Encrypted 256-bit SSL protection for your account data.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
                                <CheckCircle2 className="w-6 h-6 text-secondary" />
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest">Real-time Mgmt</p>
                            <p className="text-xs text-white/40 leading-relaxed font-bold">Monitor your property services in real-time with ease.</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">&copy; 2026 WaveSolution PREMIUM SERVICES</p>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex items-center justify-center p-6 sm:p-12 lg:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                <div className="w-full max-w-md space-y-12 relative z-10">
                    <div className="space-y-4">
                        <div className="lg:hidden mb-8">
                            <img src="/logo.png" alt="WaveSolution" className="h-10 object-contain mx-auto" />
                        </div>
                        <h2 className="text-4xl font-black text-blue-950 tracking-tighter">Welcome Back</h2>
                        <p className="text-muted-foreground font-medium text-lg">Enter your professional credentials to continue.</p>
                    </div>

                    <Card className="border-none shadow-2xl shadow-blue-900/5 bg-white rounded-[2.5rem] overflow-hidden">
                        <CardContent className="p-8 sm:p-10">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="space-y-6">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
                                                        <Mail className="w-4 h-4 mr-2 text-primary" /> Email Address
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="admin@WaveSolution.com"
                                                            {...field}
                                                            className="h-14 border-slate-100 bg-slate-50/50 hover:border-primary/30 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 rounded-2xl transition-all font-bold"
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
                                                <FormItem className="space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
                                                            <Lock className="w-4 h-4 mr-2 text-primary" /> Password
                                                        </FormLabel>
                                                        <Link href="#" className="text-[9px] font-black text-primary/40 uppercase tracking-widest hover:text-primary transition-colors">Forgot?</Link>
                                                    </div>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Input
                                                                type="password"
                                                                placeholder="••••••••"
                                                                {...field}
                                                                className="h-14 border-slate-100 bg-slate-50/50 hover:border-primary/30 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 rounded-2xl transition-all font-bold"
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
                                        className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="h-6 w-6 animate-spin" />
                                        ) : (
                                            <span className="flex items-center">
                                                Login to Portal <ArrowRight className="ml-3 w-5 h-5" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </Form>

                            <div className="mt-10 space-y-8">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-slate-100" />
                                    </div>
                                    <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
                                        <span className="bg-white px-4 text-slate-400">Authenticated Access</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <Button variant="outline" className="h-14 rounded-2xl border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 font-black text-[10px] transition-all">
                                        <Facebook className="w-4 h-4 mr-2" /> Facebook
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={async () => {
                                            try {
                                                await signInWithGoogle()
                                                toast.success("Welcome back to WaveSolution!")
                                            } catch (error) {
                                                toast.error("Google Sign-In failed.")
                                            }
                                        }}
                                        className="h-14 rounded-2xl border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-200 font-black text-[10px] transition-all"
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

                                <div className="text-center pt-2">
                                    <p className="text-sm font-medium text-slate-400">
                                        Don't have an account?{" "}
                                        <Link href="/register" className="text-primary font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Sign Up</Link>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
