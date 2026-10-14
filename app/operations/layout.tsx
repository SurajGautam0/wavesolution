import type { ReactNode } from "react"
import { AuthProvider } from "@/lib/auth-context"

export default function OperationsLayout({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
