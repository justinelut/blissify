import DesktopNav from "@/dashboard/desktopnav";
import ListedProperties from "@/dashboard/properties/properties";
import { Plus } from "lucide-react";
import { Editor } from "@/dashboard/editor";
import BuildingForm from "@/dashboard/properties/buildingform";

export default function Properties() {
  return (
    <>
      <div className="sticky top-0 dark:bg-slate-950">
        <DesktopNav>
          <div className="flex flex-row gap-6 justify-between">
            <div className="font-extrabold text-3xl">Properties</div>
            <div className="font-extrabold text-3xl">
              {" "}
              <Editor
                text="New property"
                buttonclass="bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                Icon={<Plus size={16} className="mr-2 lg:mr-0 md:mr-0" />}
              >
                <BuildingForm />
              </Editor>
            </div>
          </div>
        </DesktopNav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ListedProperties />
        <ListedProperties />
        <ListedProperties />
        <ListedProperties />
        <ListedProperties />
        <ListedProperties />
      </div>
    </>
  );
}
