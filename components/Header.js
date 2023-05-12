import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      
      <div className="text-4xl font-semibold text-blue-950">Next.JS <span className="text-amber-400">13.4</span> Demo</div>        
     
      
      <div className="flex items-center space-x-24 text-sm">
        <Link href="/" className="button  border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Home
        </Link>
        <Link href="/product/all" className="button  border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Products
        </Link>
        <Link href="/cart" className="button  border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Cart
        </Link>
        <Link href="/user" className="button  border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Users
        </Link>
      </div>
     
    </header>
  );
}

export default Header;