import Image from 'next/image';
import React from 'react';

function ProductBanner({ product }) {
  const imageUrl =
    product?.banner?.url ||
    product?.banner?.data?.attributes?.url;

  console.log("IMAGE URL:", imageUrl);

  if (!imageUrl) return <p>No Image Found</p>;

  return (
    <div>
      {/* ✅ للتأكد */}
      <img src={imageUrl} alt="banner" width={400} />

      {/* بعد التأكد شغال */}
      {/*
      <Image
        src={imageUrl}
        alt="banner"
        width={400}
        height={400}
      />
      */}
    </div>
  );
}

export default ProductBanner;