import Header from "@/home/header";
import Footer from "@/home/footer";
import { ReactNode } from "react";

interface ReactChildren {
  children: ReactNode;
}

const HomeLayout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pt-44">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;


