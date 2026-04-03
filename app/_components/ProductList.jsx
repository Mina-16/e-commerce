import React from 'react'
import ProductItem from './ProductItem'
import Link from 'next/link'

function ProductList({ productList }) {
  return (
    <div  className='grid grid-cols-5 gap-5 p-5'>
      {productList.map(item => (
        <Link key={item.id} href={`/product/${item.id}`}>
          <div>
            <ProductItem product={item} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductList