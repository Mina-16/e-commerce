import React from 'react'
import ProductItem from './ProductItem'
import Link from 'next/link'

function ProductList({ productList }) {
  return (
    <div>
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