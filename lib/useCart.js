import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useCart (id) {
    const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/carts/user/${id}`, fetcher)
   
    return {
      cart: data,
      isCartLoading: isLoading,
      isCartError: error
    }
  }