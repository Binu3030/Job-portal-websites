"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/normalize"
import { Search, Briefcase, Building2, BookmarkCheck, LayoutDashboard } from "lucide-react"

const mainNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Find Jobs", href: "/jobs", icon: Search },
  { name: "My Applications", href: "/applications", icon: Briefcase },
  { name: "Saved Jobs", href: "/saved", icon: BookmarkCheck },
  { name: "Companies", href: "/companies", icon: Building2 },
]


export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          <span className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Main Menu</span>
          <ul className="mt-2 space-y-1">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </aside>
  )
}
