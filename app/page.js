
import Product from "@/components/Product";
import Categories from "./category/page";
import Link from "next/link";
export default function Home() {
  
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-white dark:bg-black">
      <section className="flex flex-col space-y-12 pb-44">
        <h3 className="text-3xl font-bold text-center dark:text-white">Home</h3>
        
        <div className="grid grid-cols-1 gap-y-6 gap-x-6 
        sm:grid-cols-1 
        md:grid-cols-1
        lg:grid-cols-1
        xl:grid-cols-2 xl:gap-x-8 ">
          <div className=" flex-1 ">
          <Link href="/user">Users: This page shows the list of all the users. 
          With <span className="text-emerald-500">React Client</span> and &nbsp;
          <span className="text-blue-500">Server Components</span></Link> side by side
            </div>
            <div className="flex-1">
            <Link href="/product/all">All Products: This page shows the list of all products. 
            The data will be fetched from a API. This page will look the same for all users.
           
            </Link>
            </div>
            <div className=" flex-1">
            <Link href="/product/detail/1">Individual Product: This page shows each individual product. Like the All Products page, the data will be fetched from a API, and each page will look the same for all users.</Link>
            </div>
            <div className=" flex-1">
            <Link href="/cart">Shopping Cart: This page shows a user’s shopping cart. The data will be fetched from a API. This page will look different for each user.</Link>
            </div>
        </div>
      </section>      
    </main>
  )
}
