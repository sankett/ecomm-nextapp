import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailPage({params: { id }}) {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-8 mt-12 pb-10 dark:bg-black">
      <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={800}
        />

      <div className="divide-y space-y-4">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            {product.title}&nbsp;
          </h1>
          <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
            ${product.price}&nbsp;
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
        </div>

        <div className="text-sm">
          <button className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 py-2">
            <Link href="/cart">Add to bag</Link>
          </button>
        </div>
        <div className="text-sm">
          <button
            className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 py-2"           
          >
            <Link href="/product/all">Back</Link>
            
          </button>
        </div>
      </div>
    </div>
  );
}
