"use client"

import { useState } from "react"
import { Loader2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { saveSubscription } from "@/lib/firebase-service"

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
    } catch {
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
    <div className="space-y-3">
      <div className="relative">
        <Input
          placeholder="Your email address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-12 rounded-2xl border-white/12 bg-slate-950/40 px-4 pr-12 text-white placeholder:text-slate-400 focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
          onKeyDown={(event) => event.key === "Enter" && handleSubscribe()}
        />
        <Mail className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      </div>

      <Button
        onClick={handleSubscribe}
        disabled={loading}
        className="h-12 w-full rounded-2xl bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-secondary/20 transition-transform hover:-translate-y-0.5 hover:bg-secondary/90"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {loading ? "Subscribing..." : "Subscribe"}
      </Button>

      <p className="text-xs leading-6 text-slate-400">
        No spam. Just seasonal offers, cleaning tips, and priority service updates.
      </p>
    </div>
  )
}
