import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const jobs = [
  { id: 1, company: "Company 1", location: "Pokhara", type: "Part Time", salary: "$10,995 - $21,990" },
  { id: 2, company: "Company 2", location: "Kathmandu", type: "Full Time", salary: "$40,000 - $55,000" },
  { id: 3, company: "Company 3", location: "Lalitpur", type: "Remote", salary: "$25,000 - $35,000" },
  { id: 4, company: "Company 4", location: "Chitwan", type: "Contract", salary: "$5,000 - $10,000" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] table-fixed text-sm">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="p-3">Company</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Salary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {jobs.map((j) => (
                  <tr key={j.id} className="hover:bg-accent/50">
                    <td className="p-3">{j.company}</td>
                    <td className="p-3">{j.location}</td>
                    <td className="p-3">{j.type}</td>
                    <td className="p-3">{j.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}