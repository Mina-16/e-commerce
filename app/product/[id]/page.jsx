'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductApis from '../../../app/-utils/ProductApis';
import ProductBanner from './_component/ProductBanner';
import ProductInfo from './_component/ProductInfo';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [productList, setProductList] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params?.id) {
      getProductById_();
    }
  }, [params?.id]);

  const getProductById_ = () => {
    ProductApis.getProductById(params.id)
      .then(res => {
        console.log("FULL RESPONSE:", res.data);

        const product = res.data.data?.[0];
        console.log("PRODUCT:", product);

        setProductDetails(product);

        if (product) {
          getProductListByCategory(product);
        }
      })
      .catch(err => console.error(err));
  };

  const getProductListByCategory = (product) => {
    // 🔥 مهم: حسب شكل Strapi
    const categoryId =
      product?.category?.id ||
      product?.category?.data?.id;

    console.log("CATEGORY ID:", categoryId);

    if (!categoryId) return;

    ProductApis.getProductByCategory(categoryId)
      .then(res => {
        setProductList(res?.data?.data || []);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">

          <ProductBanner product={productDetails} />
          <ProductInfo product={productDetails} />

    </div>
  );
}

export default ProductDetails;