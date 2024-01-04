
import { Button } from "@/components/ui/button";
import { Editor } from "@/dashboard/editor";
import { Pencil } from "lucide-react";

export default function ListedProperties() {
  return (
    <div className=" bg-white dark:bg-slate-950 rounded-xl shadow-md p-4 border">
      <div className="md:flex">
        <div className="p-2">
          <div>
            <h3 className="text-xl font-semibold">
              Luxury Villa
            </h3>
            <p className="text-gray-500">
              $3,500,000
            </p>
          </div>
          <div>
            <p className="text-gray-500">
              Located in the heart of Beverly Hills.
            </p>
            <p className="text-gray-500 mt-2">Property ID: 123456</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Button size="sm" variant="outline">
              <HeartIcon className="w-4 h-4 mr-2" />
              Favorite
            </Button>
            
            <Editor text="Edit" buttonclass=""  Icon={<Pencil size={16} className="mr-2" />} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
