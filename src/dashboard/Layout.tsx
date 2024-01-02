// Importing all created components
import SidePanel from "@/dashboard/sidepanel/sidepanel";
import { Outlet } from "react-router-dom";
import MobileMenu from "@/dashboard/mobilenav/";

const Layout: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="lg:flex lg:flex-row md:flex md:flex-row h-full">
        {/* Attaching all file components */}
        <SidePanel />
        <div className="flex flex-col flex-grow p-4">
          <Outlet />
        </div>
      </div>
      <div className="lg:hidden md:hidden fixed bottom-0 left-0 right-0 px-2 py-4 border-t border-gray-200">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Layout;
