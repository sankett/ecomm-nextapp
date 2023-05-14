
import Userclient from "@/components/Userclient";
import Userserver from "@/components/Userserver";

export default function UserPage() { 
  console.log("Users age goe here..")
  return (
    <main className="flex bg-white w-full  px-4 pt-16">
      <section className="flex flex-col space-y-2 ">
      <h3 className="text-2xl font-bold text-center ">Users</h3>
        
        
        <div class="grid grid-cols-2 gap-4">
        <div ><Userclient /></div>
        <div ><Userserver /></div>
        </div>
      </section>
    </main>
  );
}
