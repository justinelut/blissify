import { Outlet } from "@tanstack/react-router";
import Header from "@/home/header";
import Footer from "@/home/footer";

const HomeLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="pt-44">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
