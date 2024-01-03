import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function Building() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCardClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="flex flex-col w-full lg:w-1/2 md:w-1/2">


        <label
          className={`border rounded-lg p-4 cursor-pointer ${
            isChecked ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={handleCardClick}
        >
          <div className="flex items-center">
            <Checkbox checked={isChecked} className="mr-4 w-10 h-10" />

            <div>
              {/* Add your content here */}
              <h3 className="text-lg font-semibold">Checkbox Card</h3>
              <p className="text-sm">Click to toggle checkbox</p>
            </div>
          </div>
        </label>

        <Textarea
          placeholder="Building name"
          className="text-3xl font-extrabold border-none resize-none overflow-hidden focus:border-none focus:ring-0 p-0 mt-6 rounded-none"
        />
        <label className="mb-2">County</label>
        <Input
          type="text"
          placeholder="County"
          className="mt-6 rounded-none"
        />
         <label className="mb-2">Sub County</label>
        <Input
          type="text"
          placeholder="Subcounty"
          className="mt-6 rounded-none"
        />
        <Input
          type="text"
          placeholder="Subcounty"
          className="mt-6 rounded-none"
        />
        <Input
          type="text"
          placeholder="Subcounty"
          className="mt-6 rounded-none"
        />
        <Input
          type="text"
          placeholder="Subcounty"
          className="mt-6 rounded-none"
        />
        <Input
          type="text"
          placeholder="Subcounty"
          className="mt-6 rounded-none"
        />
        <Input
          type="text"
          placeholder="Location"
          className="mt-6 rounded-none"
        />
        <Input
          type="text"
          placeholder="Location"
          className="mt-6 rounded-none"
        />
        <Input
          type="text"
          placeholder="Location"
          className="mt-6 rounded-none"
        />
      </div>
    </>
  );
}
