"use client"
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import React from 'react'
import { NavLinkManual } from './NavLink';
export function TopNavBar() {
    const navConfig = {
        navItems: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Dashboard',
                link: '/dashboard'
            },
            {
                name: 'Products',
                link: '/products'
            },
            {
                name: 'Kart',
                link: '/cart'
            },
            {
                name: 'Orders',
                link: '/orders'
            }
        ]
    }
    // console.log(segments)
    return (
        <div className=' border z-50 p-3 sticky top-0 text-center gap-1 bg-stone-100 shadow-sm ease-in-out duration-300 w-full flex flex-col align-middle justify-center flex-wrap content-center hover:shadow-md md:flex-row md:justify-between '>
            <p className='text-4xl'>Header</p>
            <div >
                {
                    navConfig.navItems.map(
                        (links, index) => (
                            <NavLinkManual
                                className={
                                    (isActive) => {
                                        return `inline-block px-4 py-3 mx-1 rounded-md border-transparent border ease-in duration-150 hover:border-stone-200 hover:shadow-md ${isActive ? 'border-stone-200 shadow-md' : ''}`
                                    }
                                }
                                key={index}
                                href={links.link}
                                follow={true}
                                fromRoot={true}
                            >
                                {links.name}
                            </NavLinkManual>
                        )
                    )
                }
            </div>
        </div>
    )
}
