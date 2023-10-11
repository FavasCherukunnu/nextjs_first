import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'
import Tabs from './component/tabs'

export default function CartPage({children}) {

    

    return (
        <div className='w-full pt-8 flex flex-col justify-center align-middle content-center flex-wrap'>
            <Tabs/>
            {children}
        </div>
    )
}
