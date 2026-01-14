'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import {
  Briefcase,
  Menu,
  X,
  ChevronDown,
  Building2,
  Users,
  FileText,
  Bell
} from "lucide-react"
import { SelectDemo } from "./ui/select"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">JobPortal</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <SelectDemo />

          <Link
            href="/jobs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Find Jobs
          </Link>

          {/* For Employers Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
              For Employers <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/post-job" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Post a Job
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/candidates" className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> Browse Candidates
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/pricing" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> Pricing Plans
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/companies"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Companies
          </Link>

          <Link
            href="/resources"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Resources
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
          </Button>

          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>

          <Button asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-wrap gap-3 px-4 py-4">
            <Link
              href="/jobs"
              className="flex items-center gap-1 px-3 py-2 rounded-md bg-accent text-sm font-medium hover:bg-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Briefcase className="h-5 w-5" /> Find Jobs
            </Link>

            <Link
              href="/post-job"
              className="flex items-center gap-1 px-3 py-2 rounded-md bg-accent text-sm font-medium hover:bg-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="h-5 w-5" /> Post a Job
            </Link>

            <Link
              href="/candidates"
              className="flex items-center gap-1 px-3 py-2 rounded-md bg-accent text-sm font-medium hover:bg-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Users className="h-5 w-5" /> Browse Candidates
            </Link>

            <Link
              href="/pricing"
              className="flex items-center gap-1 px-3 py-2 rounded-md bg-accent text-sm font-medium hover:bg-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Building2 className="h-5 w-5" /> Pricing Plans
            </Link>

            <Link
              href="/companies"
              className="flex items-center gap-1 px-3 py-2 rounded-md bg-accent text-sm font-medium hover:bg-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Building2 className="h-5 w-5" /> Companies
            </Link>

            <Link
              href="/resources"
              className="flex items-center gap-1 px-3 py-2 rounded-md bg-accent text-sm font-medium hover:bg-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="h-5 w-5" /> Resources
            </Link>

            {/* Mobile Sign In / Get Started */}
            <Button variant="outline" asChild className="flex-1">
              <Link href="/login">Sign In</Link>
            </Button>

            <Button asChild className="flex-1">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
