import { Button } from "@/components/ui/button";
import DesktopNav from "@/dashboard/desktopnav";
import ListedProperties from "@/dashboard/properties/properties";
import { Plus } from "lucide-react";

export default function Properties() {
  return (
    <>
      <div className="sticky top-0 dark:bg-slate-950">
        <DesktopNav>
          <div className="flex flex-row gap-6 justify-between">
            <div className="font-extrabold text-3xl">Properties</div>
            <div className="font-extrabold text-3xl"><Button className="font-bold"><Plus className="mr-2" /><span className="hidden lg:block md:block">New property</span></Button></div>
          </div>
        </DesktopNav>
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <ListedProperties />
        <ListedProperties />
        <ListedProperties />
        <ListedProperties />
        </div>
        
     
       
     
    </>
  );
}
