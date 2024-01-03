import { Skeleton } from "@/components/ui/skeleton";


export function Loader() {
  return (

    <div className="lg:flex lg:flex-row justify-between items-center border-b pb-2 mt-4">
      <div>
        <h3 className="mt-10 scroll-m-20 pb-2 text-sm font-semibold tracking-tight transition-colors first:mt-0 truncate w-full">
        <Skeleton className="h-4 w-[1000px]" />
        </h3>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <div className="text-red-500 text-xs font-bold"><Skeleton className="h-4 w-10" /></div>
            <div className="text-red-500 text-xs font-bold"><Skeleton className="h-4 w-10" /></div>
          </div>
          <div className="lg:hidden md:hidden text-sm text-green-400">
            <button><Skeleton className="h-4 w-6" /></button>
          </div>
        </div>
      </div>
     
      <Skeleton className="h-4 w-6 hidden lg:block" />
  
    </div>
  );
}
