import { Outlet } from "@tanstack/react-router";
import Header from "@/home/header";

const HomeLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="pt-44">
      <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
