// Importing all created components
import SidePanel from "@/dashboard/sidepanel/sidepanel";
import { ReactNode } from "react";

// Define the props for the Layout component
interface LayoutProps {
  children: ReactNode;
}

// Pass the child props with TypeScript typings
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row">
      {/* Attaching all file components */}
      <SidePanel />
      {children}
    </div>
  );
};

export default Layout;
