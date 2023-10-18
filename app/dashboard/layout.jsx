import React from 'react'

export default function Layout(props) {
    return (
        <div className='w-full flex justify-center'>
            <div className='flex flex-col items-center w-full'>
                <h2 className='text-3xl pt-5 font-semibold'>Dashbord</h2>
                {/* <div className=' grid grid-cols-1 gap-8 p-6 md:px-20 md:grid-cols-2 md:gap-6 lg:px-40 w-full'>
                    {props.trending}
                    {props.bestdeals}
                </div> */}
            </div>
        </div>
    )
}
