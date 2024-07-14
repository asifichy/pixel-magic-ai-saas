"use client" // server side rending  by default it's going to a client side rendering

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'

const Sidebar = () => {

    const pathname = usePathname();

  return (
    <aside className='sidebar'>
        <div className="flex size-full flex-col gap-4">
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/images/Pixel Magic.png" alt="Logo" width={180} height={10}/>
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname;

                            return (
                                <li key={link.route} className={`sidebar-nav_element group 
                                    ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image src={link.icon} alt="logo" width={24} height={20}
                                                className={`${isActive &&'brightness-200'}`}/>

                                                {link.label}
                                        </Link>
                                </li>
                            )
                        })}
                    </ul>
                </SignedIn>

                <SignedOut>
                    
                </SignedOut>
            </nav>

        </div>        

    </aside> // it's a html5 symantic tag means something on the side
  )
}

export default Sidebar
