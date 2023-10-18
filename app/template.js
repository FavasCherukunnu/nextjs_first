import React from 'react'

export default function Template({ children }) {
    console.log('rebulding template');
    return (
        <div>
            <div className=' text-2xl'>This is Template</div>
            <div>{children}</div>
        </div>
    )
}
