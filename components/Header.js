import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow 
    bg-gradient-to-r from-indigo-500 to-indigo-900">
      
      <div className="text-sm 
       sm:text-lg 
       md:text-2xl
       lg:text-2xl
       xl:text-2xl
       2xl:text-2xl
      font-semibold text-white">Next.JS <sup className="text-white text-xs">13.4</sup></div>        
     
      
      <div className="flex items-center space-x-4 text-xs text-white">
        <Link href="/" className="button  border-transparent hover:border-blue-600 hover:bg-transparent hover:text-yellow-500">
          Home
        </Link>
        <Link href="/product/all" className="button  border-transparent hover:border-blue-600 hover:bg-transparent hover:text-yellow-500">
          Products
        </Link>
        <Link href="/cart/1" className="button  border-transparent hover:border-blue-600 hover:bg-transparent hover:text-yellow-500">
          Cart
        </Link>
        <Link href="/user" className="button  border-transparent hover:border-blue-600 hover:bg-transparent hover:text-yellow-500">
          Users
        </Link>
        <div className="">
        <Image src="https://storybook7.blob.core.windows.net/images/signature.jpg" width={130} height={250} />
        </div>
      </div>
     
    </header>
  );
}

export default Header;