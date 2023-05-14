import Product from "@/components/Product";
import Categories from "./category/page";
import Link from "next/link";
export default function Home() {
  console.log("home goe here..");

  return (
    <main className="min-h-screen flex bg-white w-full  px-8 pt-16">
      <section className="flex flex-col space-y-12 pb-44">
        <h3 className="text-3xl font-bold text-center ">Home</h3>
       
        <div
          className="grid grid-cols-1 gap-y-6 gap-x-6 
        sm:grid-cols-1 
        md:grid-cols-1
        lg:grid-cols-1
        xl:grid-cols-1 xl:gap-x-8 "
        >
           <ul class="list-disc">
          <li> 

          <div className=" flex-1 mb-5">
            <span className="text-green-700 font-semibold underline decoration-solid decoration-pink-500  decoration-2">
              Static generation without data:{" "}
            </span>{" "}
            <br></br>If a page does not require fetching external data, it will
            automatically pre-render into HTML at build time. This is the
            default for Next.js pages.
          </div>
          </li>
          <li> 
          <div className=" flex-1 my-5">
            <span className="text-green-700 font-semibold underline decoration-solid decoration-pink-500  decoration-2">
              Static Generation with Data, Combined with Client-side
              Fetching:{" "}
            </span>{" "}
            <br></br>
            This page shows the list of all the users.<br></br>
            <span className="font-semibold">
              React Client Component: Fetch and display the data client-side.
              (Client-side Fetching)
            </span>{" "}
            and &nbsp;<br></br>
            <span className="font-semibold">
              Server Components: Pre-render the page with data
            </span>{" "}
            side by side. &nbsp;
            <Link
              href="/user"
              className="text-blue-600 text-sm underline font-bold"
            >
              Click here (/user)
            </Link>
          </div>
          </li>
          <li> 
          <div className="flex-1 my-5">
            <span className="text-green-700 font-semibold underline decoration-solid decoration-pink-500  decoration-2">
              Static Generation with Data:{" "}
            </span>{" "}
            <br></br>
            E-commerce app needs a page for:
            <br></br>&nbsp;- each category with aroute based on its
            category&nbsp;
            <Link
              href="/product/all"
              className="text-blue-600 text-sm underline font-bold"
            >
              Click here (product/[category]){" "}
            </Link>
            <br></br>&nbsp;- each product with a route based on its id&nbsp;
            <Link
              href="/product/detail/1"
              className="text-blue-600 text-sm underline font-bold"
            >
              Click here (product/detail/[id])
            </Link>
            <br></br>The data will be fetched from a API. This page will look
            the same for all users.
          </div>
          </li>
          <li> 
          <div className=" flex-1 my-5">
            <span className="text-green-700 font-semibold underline decoration-solid decoration-pink-500  decoration-2">
              Static Generation without Data, Combined with
              Client-side Fetching:{" "}
            </span>{" "}
            <br></br>
            Shopping Cart: This page shows a user’s shopping cart. The data will
            be fetched from a API. <br></br>
            This page will look different for each user.&nbsp;
            <Link
              href="/cart/1"
              className="text-blue-600 text-sm underline font-bold"
            >
              Click here (cart/1)
            </Link>
          </div>
          </li>
          
          </ul>
        </div>
      </section>
    </main>
  );
}
