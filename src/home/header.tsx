import { Link } from "@tanstack/react-router";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { CarouselMulti } from "@/components/customui/corouselmulti";
import { Search } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          isScrolled
            ? "bg-white text-black shadow-lg flex flex-col  justify-between p-4 py-6 px-4 sm:px-4 lg:px-6"
            : "bg-white text-black flex flex-col  justify-between p-4"
        } transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-50 p-4  py-4 px-6 sm:px-32 lg:px-36`}
      >
        <header
          className={`${
            isScrolled
              ? " flex flex-row items-center justify-between p-4 py-6 px-4 sm:px-4 lg:px-6"
              : " flex items-center justify-between p-4"
          } transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-50 p-4 py-4 px-6 sm:px-4 lg:px-36`}
        >
          <div className="flex items-center space-x-4 ">
            <HotelIcon className="text-red-500 h-8 w-8" />
            <nav className="hidden space-x-4 md:flex">
              <Link className="text-gray-500 hover:text-gray-700" to="/">
                Stays
              </Link>
              <Link className="text-gray-500 hover:text-gray-700" to="/">
                Experiences
              </Link>
              <Link className="text-gray-500 hover:text-gray-700" to="/">
                Online Experiences
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link className="text-gray-500 hover:text-gray-700" to="/">
              Airbnb your home
            </Link>
            <GlobeIcon className="text-gray-500 h-6 w-6" />
            <div className="flex items-center space-x-1 border p-2 rounded-full">
              <MenuIcon className="text-gray-500 h-5 w-5" />
              <Avatar>
                <AvatarImage
                  alt="User avatar"
                  src="/placeholder.svg?height=32&width=32"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>


        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <div className="flex w-full flex-2 items-center rounded-full mt-20 ml-12">
            <CarouselMulti />
          </div>
          <div className="flex w-full items-center rounded-full mt-20">
            <Input
              className="flex-grow bg-transparent rounded-full -mr-10 border-0 focus-visible:ring-transparent focus-visible:rounded-full bg-gray-200"
              placeholder="Search destinations"
              type="text"
            />
            <button className="bg-red-500 text-white rounded-full p-2">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
