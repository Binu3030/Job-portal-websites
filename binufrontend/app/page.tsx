import { Navbar } from '@/components/navbar'
import React from 'react'
import SeekerHome from './seeker/page'

const Homepage = () => {
  return (
    <div>
      <Navbar/>

      <div>
        <SeekerHome/>
      </div>

    </div>
  )
}

export default Homepage
