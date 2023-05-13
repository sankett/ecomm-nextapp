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
        <div className="text-sm font-bold text-emerald-500">React Client Component 
       
        </div>
        {error && <div>An error has occurred.</div>}
       
        {isLoading && (
          <div className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-3">
            {tempData.map((user) => (
              <User key={user}  loading={true} />
            ))}
          </div>
        )}
        {data && (
          <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-3">
            {data.map((user) => (
              <User key={user.username} user={user} loading={false} />
            ))}
          </div>
        )}
    </div>
  );
}