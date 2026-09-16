import Link from "next/link"
import { Award, CheckCircle, ShieldCheck, UserCheck } from "lucide-react"

export type AuthorBioProps = {
  name?: string
  role?: string
  experience?: string
  bio?: string
}

export function AuthorBio({
  name = "Suraj Gautam",
  role = "Operations Director & Quality Assurance Lead",
  experience = "8+ years in Gold Coast property cleaning & compliance",
  bio = "Suraj leads service quality, environmental compliance, and property handover standards at Wave Solution Cleaning & Pest Control. With comprehensive field expertise across residential bond cleans, coastal high-rises, and commercial hygiene, he ensures every clean strictly meets Queensland tenancy and health benchmarks.",
}: AuthorBioProps) {
  return (
    <div className="my-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-md">
          <span className="text-2xl sm:text-3xl font-black tracking-wider">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
          <div className="absolute -bottom-1 -right-1 rounded-full bg-emerald-500 p-1 text-white ring-2 ring-white" title="Verified Specialist">
            <CheckCircle className="h-3.5 w-3.5" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Written & Fact-Checked By
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
              <UserCheck className="h-3 w-3" />
              Verified Local Specialist
            </span>
          </div>

          <h3 className="mt-1 text-lg sm:text-xl font-black tracking-tight text-primary">
            {name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-600">
            {role} • <span className="text-slate-500">{experience}</span>
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {bio}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-3 border-t border-slate-100">
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Gold Coast Based & Insured
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              <Award className="h-4 w-4 text-amber-500" />
              QLD Tenancy Standard Aligned
            </span>
            <div className="sm:ml-auto flex items-center gap-3">
              <Link
                href="/about"
                className="text-primary hover:text-secondary underline underline-offset-4 transition-colors"
              >
                About Wave Solution
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/team"
                className="text-primary hover:text-secondary underline underline-offset-4 transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
