"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import User from "@/components/User";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Userclient() {
  const [tempData] = useState([1,2,3,4,5,6,7,8,9,10])
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/users",
    fetcher
  );

  return (
    <div>
        <div className="text-lg font-bold text-emerald-500">React Client Component 
        <span className="text-xs pl-2">(using <Link href="https://swr.vercel.app/" className="underline text-blue-900">SWR</Link>) </span>
        </div>
        {error && <div>An error has occurred.</div>}
       
        {isLoading && (
          <div className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8  dark:bg-black">
            {tempData.map((user) => (
              <User  loading={true} />
            ))}
          </div>
        )}
        {data && (
          <div className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8   dark:bg-black">
            {data.map((user) => (
              <User user={user} loading={false} />
            ))}
          </div>
        )}
    </div>
  );
}