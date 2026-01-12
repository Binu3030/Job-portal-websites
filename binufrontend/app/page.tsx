

import React from 'react'
import axios from 'axios'
import SeekerHome from './seeker/page'
import { Navbar } from '@/components/navbar'

const Homepage =async() => {
  const {data} = await axios.get('https://901522ec-fa4d-4b63-aecc-a237dc24ac90.mock.pstmn.io/company/')
  return (
    <div>
      {JSON.stringify(data)}
      {/* <Navbar/> */}

      {/* <div>
        <SeekerHome/>
      </div> */}


    </div>
  )
}

export default Homepage