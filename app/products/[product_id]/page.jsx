import Image from 'next/image';
import React from 'react'

export async function generateStaticParams(){
  const products = await fetch(`https://dummyjson.com/products`).then(
    res => res.json()
  ).then(
    res=>res.products
  );

  return products.map(
    product =>({product_id:`${product.id}`})
  )
}

const loadProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`).then(
    res => res.json()
  );
  return res;
}

export default async function Page(props) {
  // console.log(params);
  const product = await loadProduct(props.params.product_id);
  console.log('product is', product);

  return (
    <div className='w-full p-10'>
      <div className='mx-auto ring-1 ring-green-600 rounded-md p-6 w-96'>
        <h2 className='text-center'>{product.title}</h2>
        <img className='mx-auto my-4' src={product.thumbnail} width={200} />
        <p className='font-bold text-xl'>Price: {product.price}$ </p>
        <p>({product.discountPercentage}% off)</p>
        <p className='from-neutral-500 font-semibold'>Stock: {product.stock}</p>
        <p className='from-neutral-500'>{product.description}</p>
      </div>
    </div>
  )
}
