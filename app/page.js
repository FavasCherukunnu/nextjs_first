import Image from 'next/image'
import Link from 'next/link'

export default function Home(props) {
  return (
    <div className='w-full flex justify-center'>
      <div className='p-9 flex flex-col items-center'>
        <h2 className='text-3xl font-semibold'>HomePage</h2>
        <div className=' grid grid-cols-1 gap-8 p-6 md:px-20 md:grid-cols-2 md:gap-6 lg:px-40'>
          {props.trending}
          {props.bestdeals}
        </div>
      </div>
    </div>
  )
}
