import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <main className="root">
      { <Sidebar/>}
      { <MobileNav/> }


        <div className="root">
            <div className="root-contianer">
                <div className="wrapper">                   
                    {children}
                </div>
            </div>
        </div>
    </main>
  )
}

export default layout