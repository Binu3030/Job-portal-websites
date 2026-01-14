'use client'

import React, { useEffect } from 'react'
import { useJobs } from '@/contexts/JobsContext'
import { Navbar } from '@/components/navbar'
import Jobcard from '@/components/ui/Jobcard'

const Homepage = () => {
  const { jobs, setJobs } = useJobs()

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const products = await res.json()

        const mappedJobs = products.map((item) => ({
          id: item.id,
          title: [
            'frontend developer',
            'backend developer',
            'fullstack developer',
            'data scientist',
            'devops engineer',
            'AI Developer',
            'QA',
            'Security Engineer'
          ][item.id % 8],
          company: `Company ${item.id}`,
          location: ['Kathmandu','Pokhara','Lalitpur','Butwal','Chitwan'][item.id % 5],
          type: ['Full Time','Part Time','Remote'][item.id % 3],
          salary: `$${Math.floor(item.price * 100)} - $${Math.floor(item.price * 200)}`
        }))

        setJobs(mappedJobs)  // store in context
      } catch (err) {
        console.error(err)
      }
    }

    fetchdata()
  }, [setJobs])

  return (
    <div className='p-4'>
      <Navbar/>
      <h1 className='text-2xl font-bold mb-4'>Job Listings</h1>
      <Jobcard jobs={jobs} />
    </div>
  )
}

export default Homepage
