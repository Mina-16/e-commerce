import React from 'react'

function ProductInfo({product}) {
  return (
    <div>
      <h2>{product?.title}</h2>
    </div>
  )
}

export default ProductInfo
