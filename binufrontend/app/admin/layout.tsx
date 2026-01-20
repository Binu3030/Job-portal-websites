



// import React from 'react'
// import { Sidebar } from '@/components/sidebar'

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen flex bg-background">
//       <aside className="hidden md:block">
//         <Sidebar />
//       </aside>

//       <div className="flex-1 flex flex-col">
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   )
// } 

'use client'

import React from 'react'
import { Sidebar } from '@/components/sidebar'

const layout = () => {
  return (
    <div>
 <Sidebar />


    </div>
  )
}

export default layout