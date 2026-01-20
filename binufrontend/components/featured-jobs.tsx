'use client'

import { MapPin, Briefcase, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'TechFlow Inc',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$180K - $220K',
    description: 'Build scalable web applications with React and TypeScript. Work with modern UI frameworks and collaborate with designers.',
    tags: ['React', 'TypeScript', 'Next.js']
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'StartupHub',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140K - $180K',
    description: 'Drive product strategy and development for our flagship platform. Lead cross-functional teams and define roadmaps.',
    tags: ['Product', 'Strategy', 'Leadership']
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'DesignStudio',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$120K - $150K',
    description: 'Create beautiful and intuitive user interfaces. Collaborate with product and engineering teams on design systems.',
    tags: ['Figma', 'Design System', 'UI/UX']
  },
  {
    id: 4,
    title: 'Backend Engineer',
    company: 'CloudServices',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$160K - $200K',
    description: 'Build robust backend systems using Python and PostgreSQL. Design scalable APIs and microservices architecture.',
    tags: ['Python', 'PostgreSQL', 'AWS']
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'AI Innovations',
    location: 'Remote',
    type: 'Full-time',
    salary: '$150K - $190K',
    description: 'Develop machine learning models and data pipelines. Analyze large datasets and drive insights for business decisions.',
    tags: ['Python', 'ML', 'Big Data']
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'InfraCloud',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$170K - $210K',
    description: 'Manage cloud infrastructure and deployment pipelines. Ensure system reliability and implement automation solutions.',
    tags: ['Kubernetes', 'Docker', 'AWS']
  }
]

export function FeaturedJobs() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Jobs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our handpicked selection of the most exciting opportunities available right now.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {job.company}
                </p>
              </div>

              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {job.description}
              </p>

              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Clock className="h-4 w-4" />
                  {job.salary}
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                View Details
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  )
}
