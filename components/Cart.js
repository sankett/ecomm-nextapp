
import Image from 'next/image'
import Link from "next/link";

export default function Cart({ product, isLoading= false }) {
    const blur = isLoading ? "scale-100 blur-[2px] grayscale-0" : ""
    return (
        <Link 
        href={`/product/detail/${isLoading ? "" : product.id}`}
        className="h-46 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
        >  
          <div className="relative max-h-72 flex-1">
          {!isLoading && <Image
            src={product.image}
            alt={product.title}    
            width={190}   
            height={100}              
          /> }
          {isLoading && <Image
            src={'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'}
            alt={'title'}    
            layout='fill'
            className="scale-110 blur-sm grayscale object-contain duration-700 ease-in-out group-hover:opacity-75"   
          /> }
          </div>
          <div className="items-center justify-between mt-4 mb-1">
            <p className={`w-44 text-sm font-semibold ${blur}`}>{isLoading ? "Loading.." : product.title} </p>
            <p className={`text-sm ${blur}`}>Price: {isLoading ? "Loading.." : product.price} </p>
            <p className={`text-sm ${blur}`}>Quantity: {isLoading ? "Loading.." : product.quantity}</p>
            <p className={`text-sm ${blur}`}>Total: {isLoading ? "Loading.." : product.quantity * product.price} </p>
          </div>

         

        </Link>
    )
}