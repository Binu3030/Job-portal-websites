'use client'

import { Button } from '@/components/ui/button'

const companies = [
  {
    id: 1,
    name: 'TechFlow',
    logo: '🚀',
    openJobs: 24,
    description: 'Cloud computing and DevOps solutions'
  },
  {
    id: 2,
    name: 'DesignCo',
    logo: '🎨',
    openJobs: 12,
    description: 'Creative design and branding agency'
  },
  {
    id: 3,
    name: 'DataHub',
    logo: '📊',
    openJobs: 18,
    description: 'Big data analytics platform'
  },
  {
    id: 4,
    name: 'FinanceAI',
    logo: '💰',
    openJobs: 15,
    description: 'AI-powered financial services'
  },
  {
    id: 5,
    name: 'HealthTech',
    logo: '🏥',
    openJobs: 20,
    description: 'Healthcare technology solutions'
  },
  {
    id: 6,
    name: 'GreenEnergy',
    logo: '♻️',
    openJobs: 10,
    description: 'Renewable energy innovation'
  }
]

export function TopCompanies() {
  return (
    <section className="bg-secondary/5 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Top Hiring Companies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join leading companies that are actively looking for talented professionals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group rounded-lg border border-border bg-white p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="text-4xl">{company.logo}</div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {company.openJobs} jobs
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                {company.name}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {company.description}
              </p>

              <Button className="w-full bg-secondary hover:bg-secondary/90" variant="default">
                View Open Positions
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Browse All Companies
          </Button>
        </div>
      </div>
    </section>
  )
}
