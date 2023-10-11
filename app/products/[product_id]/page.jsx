import Image from 'next/image';
import React, { Suspense } from 'react'
import { ProductDetails } from './productComponent';
import LoadingScreen from './loadingPage';

// export async function generateStaticParams(){
//   const products = await fetch(`https://dummyjson.com/products`).then(
//     res => res.json()
//   ).then(
//     res=>res.products
//   );

//   return products.map(
//     product =>({product_id:`${product.id}`})
//   )
// }



export default async function Page(props) {
  // console.log(params);

  return (
    <div className='w-full p-10'>
      <p className='text-2xl font-bold text-green-600 pb-3 text-center'>Product Details</p>
      <Suspense fallback={<LoadingScreen/>}>
        <ProductDetails product_id={props.params.product_id} />
      </Suspense>
    </div>
  )
}
