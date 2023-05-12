
import User from "@/components/User";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default async function Userserver() {
   
  const res = await fetch("https://fakestoreapi.com/users");
  const data = await res.json();
 

  return (
    <div>
       <div className="text-lg font-bold text-blue-500">React Server Component 
      
        </div>
          <div className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8  dark:bg-black">
            {data.map((user) => (
              <User key={user.username} user={user} loading={false}/>
            ))}
          </div>
       
    </div>
  );
}