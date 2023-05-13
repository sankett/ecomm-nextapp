import Link from "next/link";

export default async function Categories({cat}) {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();

   
    categories.unshift("all")
  return (
   
          <div className="flex flex-row space-x-1">
          {categories.map((category) => (
                  
              <Link key={category} href={`/product/${category}`} 
              className={`py-1 rounded-md flex items-center justify-center  text-xs
              bg-indigo-500 hover:bg-indigo-900 shadow-lg w-1/5 ${category === cat ? 'bg-indigo-900 text-orange-400' : 'bg-indigo-500 text-white'}`}>
                {category}</Link>
              ))}
          </div>    
  );
}
