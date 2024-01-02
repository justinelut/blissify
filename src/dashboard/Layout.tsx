// Importing all created components
import SidePanel from "@/dashboard/sidepanel/sidepanel";
import { Outlet } from "react-router-dom";
import MobileMenu from "@/dashboard/mobilenav/";

const Layout: React.FC = () => {
  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-row">
      {/* Attaching all file components */}
      <SidePanel />
      <Outlet />
      <MobileMenu />
    </div>
  );
};

export default Layout;
