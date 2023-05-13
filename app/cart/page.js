"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useProduct from "@/lib/useProduct";
import useCart from "@/lib/useCart";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
import Cart from "@/components/Cart";
export default function CartPage() {
  const router = useRouter();
  const [tempData] = useState([1, 2, 3, 4]);
  const { products, isLoading, isError } = useProduct();
  const { cart, isCartLoading, isCartError } = useCart(1);
  let finalCart;
  if (cart) {
    finalCart = cart[0].products.map((cartproduct) => {
      let prod = products.find(
        (product) => product.id == cartproduct.productId
      );
      prod["quantity"] = cartproduct.quantity;

      return {
        id: prod.id,
        image: prod.image,
        title: prod.title,
        quantity: prod.quantity,
        price: prod.price,
      };
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-white ">
      <section className="flex flex-col space-y-2 ">
        <h3 className="text-3xl font-bold text-center ">Cart</h3>
        <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {isCartLoading &&
            tempData.map((product) => (
              <Cart key={product} isLoading={isCartLoading} />
            ))}
          {finalCart &&
            finalCart.map((product) => (
              <Cart
                key={product.id}
                product={product}
                isLoading={isCartLoading}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
