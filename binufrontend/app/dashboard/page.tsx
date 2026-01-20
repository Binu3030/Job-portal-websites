'use client'

import React, { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Plus, Search, Eye, Edit, Trash } from "lucide-react"
import { getAllJobs, deleteJob } from "@/services/jobService"

export default function DashboardPage() {
  const [data, setData] = useState<any[]>([])
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch jobs from API
  const fetchJobs = async () => {
    setLoading(true)
    setError(null)
    try {
      const jobs = await getAllJobs()
      setData(jobs)
    } catch (err) {
      console.error(err)
      setError("Failed to load jobs.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  // Filter jobs based on search query
  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return data
    return data.filter((j) =>
      j.company?.toLowerCase().includes(q) ||
      j.location?.toLowerCase().includes(q) ||
      j.type?.toLowerCase().includes(q) ||
      j.salary?.toLowerCase().includes(q)
    )
  }, [query, data])

  // Handle delete
  const handleDelete = async (id: number) => {
    if (!confirm("Delete this job? This action cannot be undone.")) return
    try {
      await deleteJob(id) // call API
      setData((prev) => prev.filter((j) => j.id !== id))
    } catch (err) {
      console.error(err)
      alert("Failed to delete job")
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Dashboard</CardTitle>
            <CardAction>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={fetchJobs}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
                <Button asChild size="sm">
                  <Link href="/post-job">
                    <span className="inline-flex items-center gap-2">
                      <Plus className="h-4 w-4" /> Add Job
                    </span>
                  </Link>
                </Button>
              </div>
            </CardAction>
          </div>
        </CardHeader>

        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jobs..."
                aria-label="Search jobs"
                className="w-full rounded-md border border-input bg-transparent py-2 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              {filteredJobs.length} result{filteredJobs.length !== 1 ? 's' : ''}
            </div>
          </div>

          {loading && <div className="text-center py-4">Loading jobs...</div>}
          {error && <div className="text-center py-4 text-red-500">{error}</div>}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] table-fixed text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground sticky top-0 bg-popover/80 backdrop-blur">
                    <th className="p-3">Company</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Salary</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredJobs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-4 text-sm text-muted-foreground text-center">
                        No jobs found.
                      </td>
                    </tr>
                  ) : (
                    filteredJobs.map((j, idx) => (
                      <tr key={j.id} className={`${idx % 2 === 0 ? '' : 'bg-muted/5'} hover:bg-accent/50`}>
                        <td className="p-3">{j.company}</td>
                        <td className="p-3">{j.location}</td>
                        <td className="p-3">{j.type}</td>
                        <td className="p-3">{j.salary}</td>
                        <td className="p-3 text-right">
                          <div className="inline-flex items-center gap-2 justify-end">
                            <Link
                              href={`/jobs/${j.id}`}
                              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                            >
                              <Eye className="h-4 w-4" /> View
                            </Link>
                            <Link
                              href={`/jobs/${j.id}/edit`}
                              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                            >
                              <Edit className="h-4 w-4" /> Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(j.id)}
                              className="inline-flex items-center gap-2 text-sm text-destructive hover:underline"
                            >
                              <Trash className="h-4 w-4" /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
