import React from 'react'
import SeekerHome from './seeker/page'
import { Navbar } from '@/components/navbar'

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