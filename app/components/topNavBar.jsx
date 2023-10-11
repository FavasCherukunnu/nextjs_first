"use client"
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import React from 'react'
export function TopNavBar() {

    const pathName = useSelectedLayoutSegment();
    const navConfig = {
        initialPath: '/',
        navItems: [
            {
                name: 'Products',
                link: 'products'
            },
            {
                name: 'Kart',
                link: 'cart'
            },
            {
                name: 'Orders',
                link: 'orders'
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
                            <Link
                                className={`inline-block px-4 py-3 mx-1 rounded-md border-transparent border ease-in duration-150 hover:border-stone-200 hover:shadow-md ${pathName == links.link ? 'border-stone-200 shadow-md' : ''}`}
                                key={index} href={navConfig.initialPath+links.link}
                            >
                                {links.name}
                            </Link>)
                    )
                }
            </div>
        </div>
    )
}
