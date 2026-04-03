"use client";
import React from "react";
import SkeltonProductInfo from "./SkeltonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../../-utils/CartApis";
import { useContext } from "react";
import { CartContext } from "../../../_context/CartContext";

function ProductInfo({ product }) {
  console.log("product", product);
  
  const { cart, setCart } = useContext(CartContext);

  const imageUrl =
    product?.banner?.url || product?.banner?.data?.attributes?.url;

  const { user } = useUser();
  const router = useRouter();
const handleAddToCart = () => {
  if (!product?.id) {
    console.log("❌ product not ready");
    return;
  }

  if (!user) {
    router.push("/sign-in");
  } else {
    const data = {
      data: {
        username: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        products: {
          connect: [product.id],
        },
      },
    };

    console.log("payload", data);
console.log("product", product);

    CartApis.addToCart(data)
      .then((res) => {
        console.log("cart created", res.data.data);
        setCart((oldCart) => [
          ...oldCart,
          {
            id: res?.data?.data?.id,
            product,
          },
        ]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
};

  if (!product) {
    return <SkeltonProductInfo />;
  }

  return (
    <div className="max-w-2xl rounded-2xl p-6 bg-white">
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>

      <p className="text-gray-600 text-sm mb-4">
        {product?.description?.[0]?.children?.[0]?.text}
      </p>

      <div className="text-2xl font-semibold text-primary mb-4">
        ${product.price}
      </div>

      <button
        onClick={handleAddToCart}
        disabled={!product}
        className="w-32 bg-primary text-white py-2 rounded-xl"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductInfo;
