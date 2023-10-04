import React from 'react'

export default function Page() {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is the first product description.',
            price: 19.99,
            category: 'Electronics',
            inStock: true,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for the second product.',
            price: 29.99,
            category: 'Clothing',
            inStock: false,
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Product three details go here.',
            price: 9.99,
            category: 'Home & Kitchen',
            inStock: true,
        },
        
        {
            id: 4,
            name: 'Product 4',
            description: 'Product three details go here.',
            price: 9.99,
            category: 'Home & Kitchen',
            inStock: true,
        },
        // Add more products as needed
    ];


    return (
        <div className='bg-stone-50 h-full w-full grid grid-cols-3 gap-5 p-4'>
            {
                products.map(
                    (products,index) => {
                        return (
                            <div key={index} className='ring-1 ring-green-600 rounded-xl shadow-2xl shadow-gray-300 p-3 flex flex-col hover:ring-2 hover:shadow-gray-400 ease-in duration-100'>
                                <p className='font-semibold'>{products.name}</p>
                                <p className='text-2xl font-semibold'>{products.price}</p>
                                <p className='text-gray-500'>{products.description}</p>
                                <button className='ms-auto w-200px bg-green-600 px-5 py-1 rounded-md text-white font-semibold hover:bg-green-500 ease-in duration-75'>Buy</button>
                            </div>
                        )
                    }


                )
            }
        </div>
    )
}
