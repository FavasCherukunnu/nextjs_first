import Link from 'next/link';
import React from 'react'

const loadProducts = async ()=>{

    const res = await fetch('https://dummyjson.com/products',
        {
            cache:'no-store'
        }
    ).then(
        res=>res.json()
    ).then(
        res=>res.products
    );
    // const products = await res.json()
    return res;

}

export default async function Page() {
    const products = await loadProducts();
    return (
        <div className=' h-full w-full grid grid-cols-3 gap-5 p-4'>
            {
                products.map(
                    (products,index) => {
                        return (
                            <Link href={`products/${products.id}`} key={index} className='ring-1 ring-green-600 rounded-xl shadow-2xl shadow-gray-300 p-3 flex flex-col  hover:ring-2 hover:shadow-gray-400 ease-in duration-100'>
                                <p className='font-semibold'>{products.title}</p>
                                <p className='text-2xl font-semibold'>{products.price}$</p>
                                <p className='text-gray-500'>{products.description}</p>
                                <button className='ms-auto w-200px bg-green-600 px-5 py-1 rounded-md text-white font-semibold hover:bg-green-500 ease-in duration-75'>Buy</button>
                            </Link>
                        )
                    }


                )
            }
        </div>
    )
}
