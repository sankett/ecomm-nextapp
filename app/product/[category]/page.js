import Categories from "@/app/category/page";
import Product from "@/components/Product";
export default async  function ProductPage( {params: { category }}) {
  const url = category === "all" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${category}`
  const res = await fetch(url);
  const products = await res.json();

  console.log("Product age goe here..")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-1 pt-16 bg-white w-full">
      <section className="flex flex-col space-y-12">
        <h3 className="text-2xl font-bold text-center">DEALS OF THE DAY</h3>
        
        <Categories cat={decodeURI(category)}/>
        <div className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>      
    </main>
  )
}
