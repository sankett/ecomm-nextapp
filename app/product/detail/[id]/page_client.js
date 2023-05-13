"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function ProductDetailPage() {
    const id = useParams().id;
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchProduct() {
          setLoading(true);
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const product = await res.json();
    
          setProduct(product);
    
          setLoading(false);
        }
    
        fetchProduct();
      }, [id]);

      

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-8 mt-12 pb-10 ">
      {product && <Image src={product.image} alt={product.title} width={400} height={800} /> }
      {!product && <Image src={'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'} 
      className="scale-110 blur-sm grayscale object-contain duration-700 ease-in-out group-hover:opacity-75"
      alt={'title'} width={400} height={800} /> }

      <div className="divide-y space-y-4">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold">{product?.title}&nbsp;</h1>
          <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
            ${product?.price}&nbsp;
          </h2>
        </div>
        <div className="flex items-center text-sm my-4">
          <p>{product?.rating.rate}</p>&nbsp;
          <p className="text-blue-600 hover:underline cursor-pointer text-xs">
            See all {product?.rating.count} reviews&nbsp;
          </p>
        </div>
        <div className="pt-8">
            {
                product && <p className="text-xs md:text-sm">{product?.description}</p>
            }
            {
                !product && <p className="text-xs md:text-sm scale-100 blur-sm grayscale">
                    sample text goes here sample text goes heresample text goes heresample text goes here
                    sample text goes heresample text goes heresample text goes heresample text goes heresample text goes here
                    sample text goes heresample text goes heresample text goes here
                </p>
            }
        </div>
       
        <div className="text-sm">
          <button className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 py-2">
            <Link href="/cart">Add to bag</Link>
          </button>
        
        </div>
        <div className="text-sm">
          <button className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 py-2" onClick={() => router.back()}>
            Back
          </button>
        
        </div>
      </div>
      
    </div>
  );
}
