"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Loader2,
    Mail,
    Lock,
    ArrowRight,
    User,
    Sparkles,
    ShieldCheck,
    Facebook,
    Github,
    CheckCircle2
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
import { cn } from "@/lib/utils"

const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type SignUpFormValues = z.infer<typeof signUpSchema>

export default function RegisterPage() {
    const router = useRouter()
    const { signUp } = useAuth()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: SignUpFormValues) {
        setIsSubmitting(true)
        try {
            await signUp(values.email, values.password, values.name)
            toast.success("Account created successfully! Welcome to CRYSTALFRONT.")

            setTimeout(() => {
                router.push("/admin") // Defaulting to dashboard/admin for demonstration
            }, 1000)
        } catch (error: any) {
            console.error("Sign Up Error:", error)
            toast.error(error.message || "Failed to create account. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
            {/* Left Side: Aesthetic Brand Section (Reusing Login Style for Consistency) */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-primary relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[80%] h-full bg-secondary/5 -skew-x-12 transform origin-top-right" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                    <Link href="/" className="inline-block">
                        <div className="relative w-48 h-12">
                            <img src="/logo.png" alt="CRYSTALFRONT" className="object-contain brightness-0 invert" />
                        </div>
                    </Link>
                </div>

                <div className="relative z-10 space-y-8 max-w-lg">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-secondary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">New Member Registration</span>
                    </div>
                    <h1 className="text-5xl font-serif font-black tracking-tighter leading-tight">
                        Join the Elite Circle of <span className="text-secondary">Pristine</span> Living.
                    </h1>
                    <p className="text-white/60 text-lg font-medium leading-relaxed">
                        Create your account to unlock personalized cleaning plans, VIP scheduling, and exclusive property maintenance insights.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-10">
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
                                <ShieldCheck className="w-6 h-6 text-secondary" />
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest">Global Standards</p>
                            <p className="text-xs text-white/40 leading-relaxed font-bold">Adopting international best practices in hygiene and care.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
                                <CheckCircle2 className="w-6 h-6 text-secondary" />
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest">Instant Booking</p>
                            <p className="text-xs text-white/40 leading-relaxed font-bold">Proprietary logic for immediate service allocation and tracking.</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">&copy; 2026 CRYSTALFRONT PREMIUM SERVICES</p>
                </div>
            </div>

            {/* Right Side: Sign Up Form */}
            <div className="flex items-center justify-center p-6 sm:p-12 lg:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                <div className="w-full max-w-md space-y-12 relative z-10">
                    <div className="space-y-4">
                        <div className="lg:hidden mb-8">
                            <img src="/logo.png" alt="CRYSTALFRONT" className="h-10 object-contain mx-auto" />
                        </div>
                        <h2 className="text-4xl font-black text-blue-950 tracking-tighter">Create Account</h2>
                        <p className="text-muted-foreground font-medium text-lg">Your journey to a cleaner lifestyle starts here.</p>
                    </div>

                    <Card className="border-none shadow-2xl shadow-blue-900/5 bg-white rounded-[2.5rem] overflow-hidden">
                        <CardContent className="p-8 sm:p-10">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-5">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
                                                        <User className="w-4 h-4 mr-2 text-primary" /> Full Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="John Doe"
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
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
                                                        <Mail className="w-4 h-4 mr-2 text-primary" /> Email Address
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="john@example.com"
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
                                                    <FormLabel className="flex items-center text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] ml-1">
                                                        <Lock className="w-4 h-4 mr-2 text-primary" /> Create Password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="password"
                                                            placeholder="••••••••"
                                                            {...field}
                                                            className="h-14 border-slate-100 bg-slate-50/50 hover:border-primary/30 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 rounded-2xl transition-all font-bold"
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="font-bold text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed pt-2">
                                        By signing up, you agree to our <Link href="/terms" className="text-primary hover:underline underline-offset-4">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline underline-offset-4">Privacy Policy</Link>.
                                    </p>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="h-6 w-6 animate-spin" />
                                        ) : (
                                            <span className="flex items-center">
                                                Create Portal Account <ArrowRight className="ml-3 w-5 h-5" />
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
                                        <span className="bg-white px-4 text-slate-400">Join CRYSTALFRONT</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <Button variant="outline" className="h-14 rounded-2xl border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 font-black text-[10px] transition-all">
                                        <Facebook className="w-4 h-4 mr-2" /> Facebook
                                    </Button>
                                    <Button variant="outline" className="h-14 rounded-2xl border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-200 font-black text-[10px] transition-all">
                                        <Github className="w-4 h-4 mr-2" /> Github
                                    </Button>
                                </div>

                                <div className="text-center pt-2">
                                    <p className="text-sm font-medium text-slate-400">
                                        Already a member?{" "}
                                        <Link href="/login" className="text-primary font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Sign In</Link>
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
