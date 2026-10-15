"use client"

import {
  Activity,
  BarChart3,
  CalendarDays,
  ClipboardList,
  CreditCard,
  DollarSign,
  FileText,
  Home,
  Percent,
  Settings,
  Users,
  MessageSquare,
  Mail,
  Link2,
  Megaphone,
  UserRoundSearch,
  UsersRound,
  Layers,
  FileEdit,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface AdminNavProps {
  activeTab?: string
  setActiveTab?: (tab: string) => void
  mobileStacked?: boolean
  compactMobile?: boolean
}

interface NavItem {
  id: string
  label: string
  icon: any
  badge?: string
}

interface NavSection {
  title: string
  items: NavItem[]
}

export function AdminNav({ activeTab = "dashboard", setActiveTab, mobileStacked = false, compactMobile = false }: AdminNavProps) {
  const router = useRouter()

  const sections: NavSection[] = [
    {
      title: "Overview",
      items: [
        {
          id: "dashboard",
          label: "Operations Overview",
          icon: Home,
        },
        {
          id: "reports",
          label: "Analytics & Reports",
          icon: BarChart3,
        },
        {
          id: "activity",
          label: "Audit & Activity Log",
          icon: Activity,
        },
      ],
    },
    {
      title: "Field & Operations",
      items: [
        {
          id: "operations",
          label: "Job Board",
          icon: ClipboardList,
        },
        {
          id: "bookings",
          label: "Bookings Register",
          icon: CalendarDays,
        },
        {
          id: "services",
          label: "Services Catalog",
          icon: Layers,
        },
      ],
    },
    {
      title: "Sales & Finance",
      items: [
        {
          id: "customers",
          label: "Leads & Enquiries",
          icon: UserRoundSearch,
        },
        {
          id: "quotes",
          label: "Quote Builder",
          icon: FileText,
        },
        {
          id: "invoices",
          label: "Invoices & Payments",
          icon: CreditCard,
        },
        {
          id: "pricing",
          label: "Pricing Analysis",
          icon: DollarSign,
        },
      ],
    },
    {
      title: "Marketing & Growth",
      items: [
        {
          id: "ai-agent",
          label: "Outreach Engine",
          icon: Megaphone,
        },
        {
          id: "seo",
          label: "SEO & Backlinks",
          icon: Link2,
        },
        {
          id: "posts",
          label: "Content & Blog",
          icon: FileEdit,
        },
        {
          id: "coupons",
          label: "Coupons & Discounts",
          icon: Percent,
        },
        {
          id: "subscribers",
          label: "Newsletter Subscribers",
          icon: Users,
        },
      ],
    },
    {
      title: "Communications & System",
      items: [
        {
          id: "communications",
          label: "Customer Email",
          icon: Mail,
        },
        {
          id: "messages",
          label: "Inbox & Reviews",
          icon: MessageSquare,
        },
        {
          id: "users",
          label: "Team & Access Control",
          icon: UsersRound,
        },
        {
          id: "settings",
          label: "System & API Settings",
          icon: Settings,
        },
      ],
    },
  ]

  const handleNavigate = (tabId: string) => {
    if (setActiveTab) {
      setActiveTab(tabId)
    } else {
      router.push(`/admin?tab=${tabId}`)
    }
  }

  return (
    <nav aria-label="Admin dashboard" className={mobileStacked ? "space-y-4 p-1" : compactMobile ? "flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden" : "hidden gap-2 overflow-x-auto p-1 lg:block lg:space-y-4 lg:overflow-visible"}>
      {sections.map((section, idx) => (
        <div key={idx} className={mobileStacked ? "space-y-1" : compactMobile ? "flex shrink-0 snap-start items-center gap-1" : "flex shrink-0 items-center gap-1 lg:block lg:space-y-1"}>
          <p className={cn("px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400", mobileStacked || compactMobile ? "" : "hidden lg:block")}>
            {section.title}
          </p>
          <div className={mobileStacked ? "space-y-0.5" : compactMobile ? "flex gap-1" : "flex gap-1 lg:block lg:space-y-0.5"}>
            {section.items.map((item) => {
              const isActive =
                activeTab === item.id ||
                (item.id === "users" && activeTab === "team")

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={cn(
                    "flex min-h-10 items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium transition-all duration-150",
                    mobileStacked ? "w-full" : compactMobile ? "min-h-10 w-auto shrink-0 whitespace-nowrap" : "w-auto shrink-0 lg:w-full",
                    isActive
                      ? "bg-slate-900 text-white font-semibold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <item.icon
                      className={cn(
                        "h-4 w-4 shrink-0 transition-colors",
                        isActive ? "text-cyan-400" : "text-slate-400"
                      )}
                    />
                    <span className={cn(mobileStacked ? "truncate" : "whitespace-nowrap lg:truncate")}>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={cn(
                        "ml-2 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        isActive
                          ? "bg-slate-800 text-cyan-300"
                          : "bg-slate-100 text-slate-600"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </nav>
  )
}
