'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

type Job = {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
}

type Props = {
  jobs: Job[]
}

const Jobcard: React.FC<Props> = ({ jobs }) => {
  const router = useRouter()

  return (
    <div className="flex flex-wrap">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => router.push(`/products/${job.id}`)}
          className="bg-pink-200 m-4 shadow-lg p-4 rounded w-[20%] cursor-pointer hover:bg-pink-300 transition"
        >
          <h2 className="font-semibold mb-2">{job.title}</h2>
          <p className="text-sm mb-1">Company: {job.company}</p>
          <p className="text-sm mb-1">Location: {job.location}</p>
          <p className="text-sm mb-1">Type: {job.type}</p>
          <p className="text-sm mb-1">Salary: {job.salary}</p>
        </div>
      ))}
    </div>
  )
}

export default Jobcard
