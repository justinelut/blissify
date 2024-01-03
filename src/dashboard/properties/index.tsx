import Listing from "@/dashboard/properties/listing";
import DesktopNav from "@/dashboard/desktopnav";

export default function Properties() {
  return (
    <>
      <div className="sticky top-0 dark:bg-slate-950">
        <DesktopNav>
          <div className="flex flex-row gap-6">
            <div>Publish</div>
            <div>Push Settings</div>
          </div>
        </DesktopNav>
      </div>

     
        <Listing />
     
    </>
  );
}
