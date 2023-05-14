import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailPage({params: { id }}) {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 600 } });
    const product = await res.json();
    product["oprice"] = product.price;
    product.price += Math.floor(Math.random() * 4) + 1

    
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-8 mt-12 pb-10 ">
      
      <Image
          src={product.image}
          alt={product.title}
          width={400}
         height={400}
        />

      <div className="divide-y space-y-4">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            {product.title}&nbsp;
          </h1>
          <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
            ${product.price}&nbsp; <span className="text-sm">[previous: ${product.oprice}]</span>
          </h2>
        </div>
        <div className="flex items-center text-sm my-4">
          <p>{product?.rating.rate}</p>&nbsp;
          <p className="text-blue-600 hover:underline cursor-pointer text-xs">
            See all {product.rating.count} reviews&nbsp;
          </p>
        </div>
        <div className="pt-8">
            <p className="text-xs md:text-sm">{product?.description}</p>
            <p className="text-xs md:text-sm">{product?.currentTime}</p>
        </div>

        <div className="text-sm">
        <Link href="/cart/1"><button className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 py-2">
            Add to bag
          </button></Link>
        </div>
        <div className="text-sm">
        <Link href="/product/all">
          <button
            className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 py-2"           
          >
           Back
            
          </button></Link>
        </div>
      </div>
    </div>
  );
}
