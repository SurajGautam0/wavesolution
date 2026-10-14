import type { ReactNode } from "react"
import { AuthProvider } from "@/lib/auth-context"

export default function WorkerLayout({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
