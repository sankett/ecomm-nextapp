
export default function TestPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white  border border-red-600">
        <section className="flex flex-col space-y-10  border border-blue-400 w-500">
          <h1 className="text-3xl font-bold text-center ">Test</h1>
          <div className="border-solid border-2 px-3">
          text goes here..text goes here..text goes here..text goes here..text goes here..
          </div>
          
       
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-15 w-10">text goes here..</div>
                <div className="flex-1 space-y-6 py-1">
                <div className="h-15 bg-slate-200 rounded">text goes here..</div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                    <div className="h-15 bg-slate-200 rounded col-span-2">text goes here</div>
                    <div className="h-15 bg-slate-200 rounded col-span-1">text goes here</div>
                    </div>
                    <div className="h-15 bg-slate-200 rounded">text goes here...</div>
                </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col space-y-1 border border-blue-300">
            <div className="bg-slate-200">text goes here..</div>
            <div className="bg-slate-200">02</div>
            <div className="bg-slate-200">03</div>
        </div>

        <div className="columns-3 border border-blue-300">
            <div className="bg-slate-200">01</div>
            <div className="bg-slate-200">02</div>
            <div className="bg-slate-200">03</div>
        </div>
       
        </section>      
        
      </main>
    )
}