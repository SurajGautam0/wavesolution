"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { saveSubscription } from "@/lib/firebase-service"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail } from "lucide-react"

export function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const handleSubscribe = async () => {
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            toast({
                title: "Invalid Email",
                description: "Please enter a valid email address.",
                variant: "destructive",
            })
            return
        }

        setLoading(true)
        try {
            const result = await saveSubscription(email)
            if (result.exists) {
                toast({
                    title: "Already Subscribed",
                    description: "You are already on our newsletter list!",
                })
            } else {
                toast({
                    title: "Subscribed!",
                    description: "Thank you for subscribing to our newsletter.",
                })
                setEmail("")
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-2">
            <div className="relative">
                <Input
                    placeholder="Your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-12"
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            </div>
            <Button
                onClick={handleSubscribe}
                disabled={loading}
                className="classic-button w-full"
            >
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Subscribe
            </Button>
        </div>
    )
}
