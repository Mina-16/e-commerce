import Image from 'next/image'
import React from 'react'

function ProductItem({product}) {
  return (
      <div className="w-auto cursor-pointer hover:scale-102 transition bg-white p-4 rounded-xl shadow-md">

        <Image
          src={product.banner.url}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-xl"
        />

        {/* title */}
        <h2 className="mt-3 text-lg font-bold">
          {product.title}
        </h2>

        {/* description */}
        <p className="text-gray-500 text-sm mt-1 line-clamp-3">
          {product?.description?.[0]?.children?.[0]?.text}
        </p>

        {/* price */}
        <div className="text-primary text-[25px] font-semibold mt-2">
          ${product.price}
        </div>

      </div>
  )
}

export default ProductItem
