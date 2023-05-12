import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useProduct () {
    const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products`, fetcher)
   
    return {
      products: data,
      isLoading,
      isError: error
    }
  }