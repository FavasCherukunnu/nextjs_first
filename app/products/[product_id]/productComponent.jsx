const loadProduct = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`).then(
        res => res.json()
    );
    return res;
}

export async function ProductDetails({ product_id }) {

    const product = await loadProduct(product_id);
    console.log('product is', product);


    return (
        <div className='mx-auto ring-1 ring-green-600 rounded-md p-6 w-80 md:w-96'>
            <h2 className='text-center'>{product.title}</h2>
            <img className='mx-auto my-4' src={product.thumbnail} width={200} />
            <p className='font-bold text-xl'>Price: {product.price}$ </p>
            <p>({product.discountPercentage}% off)</p>
            <p className='from-neutral-500 font-semibold'>Stock: {product.stock}</p>
            <p className='from-neutral-500'>{product.description}</p>
        </div>
    )
}