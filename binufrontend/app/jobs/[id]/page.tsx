// 'use client'

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import { getJobById } from '@/services/jobService'

// const JobDetail = () => {
//   const { id } = useParams<{ id: string }>()
//   const [job, setJob] = useState<any>(null)

//   useEffect(() => {
//     if (!id) return

//     const fetchJob = async () => {
//       try {
//         const data = await getJobById(id)
//         setJob(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     fetchJob()
//   }, [id])

//   if (!job) return <div>Loading...</div>

//   return (
//     <div className="p-6 space-y-2">
//       <h1 className="text-2xl font-bold">{job.title}</h1>
//       <p>{job.description}</p>
//       <p><b>Company:</b> {job.company}</p>
//       <p><b>Location:</b> {job.location}</p>
//       <p><b>Salary:</b> {job.salary}</p>
//     </div>
//   )
// }

// export default JobDetail






'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getJobById } from '@/services/jobService'


const JobDetail = () => {
  const { id } = useParams()
  const [job, setJob] = useState<any>(null)

  useEffect(() => {
    if (!id) return

    const fetchJob = async () => {
      try {
        const data = await getJobById(id)
        setJob(data)
      } catch (error) {
        console.error("Error fetching job:", error)
      }
    }

    fetchJob()
  }, [id])

  if (!job) return <div>Loading...</div>

  return (
    <div className="p-6 space-y-3">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.description}</p>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>
      <p><b>Salary:</b> {job.salary}</p>
      <p><b>Type:</b> {job.type}</p>
    </div>
  )
}

export default JobDetail
