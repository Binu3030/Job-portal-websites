'use client'

import { Search, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/80 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Find Your Dream Job Today
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
            Discover thousands of job opportunities from top companies. Connect with employers actively hiring for your skills.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-md">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 border-0 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-md">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="City or remote"
              className="flex-1 border-0 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Button className="h-12 bg-accent px-8 font-semibold hover:bg-accent/90">
            Search Jobs
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-primary-foreground">
            Remote Jobs
          </span>
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-primary-foreground">
            Entry Level
          </span>
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-primary-foreground">
            Senior Positions
          </span>
        </div>
      </div>
    </section>
  )
}
