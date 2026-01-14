'use client'

import React, { createContext, useContext, useState } from 'react'

type Job = {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
}

type JobsContextType = {
  jobs: Job[]
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>
}

// create context with default values
const JobsContext = createContext<JobsContextType | undefined>(undefined);

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([])
  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  )
}

export const useJobs = () => {
  const context = useContext(JobsContext)
  if (!context) {
    throw new Error("useJobs must be used within a JobsProvider")
  }
  return context
}
