import { Layers } from "lucide-react";
import { MobileNav } from "@/dashboard/mobilenav/navigation";

export default function MobileMenu() {
  return (
    <div className="grid grid-cols-4 place-items-center ">
      
      <div className="flex flex-col justify-center items-center">
        <Layers size={16} />
        <h3 className="text-sm">More</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Layers size={16} />
        <h3 className="text-sm">More</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Layers size={16} />
        <h3 className="text-sm">More</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <MobileNav />
        <h3 className="text-sm">More</h3>
      </div>
    </div>
  );
}
