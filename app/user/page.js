
import Userclient from "@/components/Userclient";
import Userserver from "@/components/Userserver";

export default function UserPage() { 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-48 bg-white">
      <section className="flex flex-col space-y-2 ">
      <h3 className="text-3xl font-bold text-center dark:text-white">Users</h3>
        
        
        <div class="grid grid-cols-2 gap-4">
        <div ><Userclient /></div>
        <div ><Userserver /></div>
        </div>
      </section>
    </main>
  );
}
