import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <div className='p-9 flex flex-col items-center'>
        <h2 className='text-3xl font-semibold'>HOME PAGE</h2>
        <Link href='/products' className='rounded-full border px-4 py-1 mt-5 bg-stone-100 shadow hover:shadow-md hover:scale-105 ease-in duration-75 cursor-pointer'>
          Products
        </Link>
      </div>
    </div>
  )
}
