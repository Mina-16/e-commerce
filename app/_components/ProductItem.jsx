import Image from 'next/image'
import React from 'react'

function ProductItem({product}) {
  return (
    <div>
      <Image src={product.banner.url} alt="banner" width={400} height={400}/>
    </div>
  )
}

export default ProductItem
