"use client"
import { NavLinkManual } from '@/app/components/NavLink';
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import React from 'react'

export default function Tabs() {
    const pathName = usePathname();
    const segment = useSelectedLayoutSegment();
    const segments = useSelectedLayoutSegments();
    const getCurrentPath = (fullPath = '', remainingPathArray) => {

        const currpathArray = fullPath.split('/');
        const subtractedArray = currpathArray.splice(0, currpathArray.length - remainingPathArray.length);
        return subtractedArray.join('/') + '/';

    }
    const currtab = segment === null ? '' : segment
    const linkConfig = {
        initialPath: getCurrentPath(pathName, segments),
        linkItems: [
            {
                name: 'Older',
                link: ''
            },
            {
                name: 'Newer',
                link: 'newer'
            },
        ]
    }

    return (
        <div className='px-2 py-2 border border-stone-200 rounded-md shadow-sm'>
            {
                linkConfig.linkItems.map(
                    (links, index) => (
                        <NavLinkManual
                            className={
                                (isActive)=>{
                                    return `inline-block py-2 px-2 border border-transparent rounded-md mx-1 hover:border hover:border-stone-200 hover:shadow-md ${isActive ? 'border border-stone-200 shadow-md' : ''} `
                                }
                            }
                            key={index}
                            href={links.link}
                            follow={true}
                        >
                            {links.name}
                        </NavLinkManual>
                    )
                )
            }
        </div>
    )
}
