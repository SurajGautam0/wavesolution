"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import { Loader2 } from "lucide-react"

import { auth } from "@/lib/firebase"

function clearClientAuthState() {
  localStorage.removeItem("user")
  sessionStorage.removeItem("user")

  document.cookie = "user=; path=/; max-age=0"
  document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  document.cookie = "user_id=; path=/; max-age=0"
  document.cookie = "user_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
}

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    let isMounted = true

    async function logout() {
      await Promise.allSettled([signOut(auth)])

      clearClientAuthState()

      try {
        await fetch("/api/logout", {
          method: "POST",
          cache: "no-store",
        })
      } catch (error) {
        console.error("Failed to clear server auth cookies:", error)
      }

      if (isMounted) {
        router.replace("/")
      }
    }

    void logout()

    return () => {
      isMounted = false
    }
  }, [router])

  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <div className="space-y-1">
          <h1 className="text-xl font-bold text-slate-900">Signing you out</h1>
          <p className="text-sm text-slate-500">Clearing your session and redirecting home.</p>
        </div>
      </div>
    </main>
  )
}
