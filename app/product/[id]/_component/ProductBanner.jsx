import Image from 'next/image';
import React from 'react';

function ProductBanner({ product }) {
  const imageUrl =
    product?.banner?.url ||
    product?.banner?.data?.attributes?.url;

  console.log("IMAGE URL:", imageUrl);

  // if (!imageUrl) return <p>No Image Found</p>;

  return (
    <div>
      
      {imageUrl? <Image
        src={imageUrl}
        alt="banner"
        width={400}
        height={400}
        className='rounded-lg'
      />
      :

      <div className='w-[400px] h-[250px] bg-slate-200 animate-pulse rounded-lg'></div>}
     
    </div>
  );
}

export default ProductBanner;