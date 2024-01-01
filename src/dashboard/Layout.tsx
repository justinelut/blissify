// Importing all created components
import SidePanel from "@/dashboard/sidepanel/sidepanel";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-row">
      {/* Attaching all file components */}
      <SidePanel />
      <Outlet />
    </div>
  );
};

export default Layout;
