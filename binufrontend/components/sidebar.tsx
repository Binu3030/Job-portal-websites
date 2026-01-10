"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Search,
  Briefcase,
  Building2,
  BookmarkCheck,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  User,
  LayoutDashboard,
  Bell,
  Clock,
  TrendingUp,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const mainNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Find Jobs", href: "/jobs", icon: Search },
  { name: "My Applications", href: "/applications", icon: Briefcase },
  { name: "Saved Jobs", href: "/saved", icon: BookmarkCheck },
  { name: "Companies", href: "/companies", icon: Building2 },
]

const activityItems = [
  { name: "Recent Views", href: "/recent", icon: Clock },
  { name: "Job Alerts", href: "/alerts", icon: Bell },
  { name: "Recommendations", href: "/recommendations", icon: TrendingUp },
]

const accountItems = [
  { name: "My Profile", href: "/profile", icon: User },
  { name: "My Resume", href: "/resume", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help Center", href: "/help", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-card">
      {/* User Profile Section */}
      <div className="flex items-center gap-3 p-6">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/pp.jpg" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">BINU</span>
          <span className="text-xs text-muted-foreground">Software Developer</span>
        </div>
      </div>

      <Separator />

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {/* Main Navigation */}
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

        {/* Activity Section */}
        <div className="mt-6 space-y-1">
          <span className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Activity</span>
          <ul className="mt-2 space-y-1">
            {activityItems.map((item) => {
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

        {/* Account Section */}
        <div className="mt-6 space-y-1">
          <span className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Account</span>
          <ul className="mt-2 space-y-1">
            {accountItems.map((item) => {
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

      <Separator />

      {/* Logout Button */}
      <div className="p-3">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
