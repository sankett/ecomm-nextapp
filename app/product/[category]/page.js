import Categories from "@/app/category/page";
import Product from "@/components/Product";
export default async  function ProductPage( {params: { category }}) {
  const url = category === "all" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${category}`
  const res = await fetch(url);
  const products = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-white dark:bg-black">
      <section className="flex flex-col space-y-12 pb-44">
        <h3 className="text-3xl font-bold text-center dark:text-white">DEALS OF THE DAY</h3>
        
        <Categories cat={decodeURI(category)}/>
        <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 dark:bg-black">
          
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>      
    </main>
  )
}
