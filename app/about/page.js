
export default function About() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black border border-red-600">
        <section className="flex flex-col space-y-10  border border-blue-400">
          <h1 className="text-3xl font-bold text-center dark:text-white">About</h1>
          <div className="border-solid border-2 px-3">
            This is test This is test This is test This is test This is test This is test 
            This is test This is test This is test This is test This is test This is test
            This is test This is test This is test 
            This is test This is test This is test This is test This is test This is test 
            This is test This is test This is test This is test This is test This is test
            This is test This is test This is test 
            This is test This is test This is test This is test This is test This is test 
            This is test This is test This is test This is test This is test This is test
            This is test This is test This is test 
            This is test This is test This is test This is test This is test This is test 
            This is test This is test This is test This is test This is test This is test
            This is test This is test This is test 
          </div>
          <div className="columns-3 border-solid border-solid border-2 divide-x">
            <p>Well, let me tell you something, ...</p>
            <p>Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
        </div>
       
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col space-y-1 border border-blue-300">
            <div className="bg-slate-200">01</div>
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