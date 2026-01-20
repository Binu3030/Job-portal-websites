'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Jobcard = ({ job }) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/jobs/${job.id}`)}
      className=" p-4 rounded shadow cursor-pointer"
    >
      <h2 className="font-bold">{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  )
}

export default Jobcard



