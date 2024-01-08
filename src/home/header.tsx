import { Link } from "@tanstack/react-router";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";
import { CarouselMulti } from "@/components/customui/corouselmulti";
import { HotelIcon, MenuIcon, Search } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchvalue, setSearchValue] = useState<string>();
  const propertiesDiv = useRef<HTMLDivElement>(null);

  const searchProperties = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
      {/* <div className={`${isScrolled ? 'hidden transition-all duration-300 ease-in-out': 'text-center border-b sticky py-6 top-0 w-full transition-all duration-300 ease-in-out z-50 bg-gray-100 underline' }`}>
            Learn about Guest Favorites, the most loved homes on Airbnb
          </div> */}

      <div
        className={`${
          isScrolled
            ? "bg-white text-black shadow-lg flex flex-col justify-between p-4 py-6 px-4 sm:px-4 md:px-32 lg:px-36"
            : "bg-white text-black flex flex-col  justify-between p-4"
        } transition-all duration-300 ease-in-out fixed left-0 right-0 z-50 p-4  py-1 px-6 md:px-32 lg:px-36`}
      >
        <header className={`flex flex-col lg:flex-row lg:justify-between`}>
          <div className="flex items-center space-x-4 ">
            <HotelIcon className="text-red-500 h-8 w-8" />
          </div>

          <div className="flex flex-col items-center z-50">
            {!isScrolled && (
              <div className="flex flex-row items-center space-x-4 transition-all duration-10000 ease-in-out mt-10">
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
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* <GlobeIcon className="text-gray-500 h-6 w-6" /> */}
            <div className="flex items-center space-x-1 border p-2 rounded-full">
              <MenuIcon className="text-gray-500 h-3 w-3" />
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
        <div className="flex align-middle justify-center transition-all duration-500 ease-in-out">
          <div
            className={`${
              isScrolled
                ? "transition-all duration-10000 ease-in-out -mt-14 w-1/3"
                : "transition-all duration-10000 ease-in-out w-2/4 mt-4"
            } flex items-center rounded-full transition-all duration-5000 ease-in-out`}
          >
            <Input
              className={`flex-grow bg-transparent rounded-full ${
                !isScrolled ? "-mr-24" : " -mr-12"
              } border-0 focus-visible:ring-transparent focus-visible:rounded-full bg-gray-200 p-6`}
              placeholder="Search destinations"
              type="text"
              value={searchvalue}
              onChange={searchProperties}
            />
            <button
              className={`bg-red-500 text-white rounded-full p-2 ${
                !isScrolled && "px-4"
              }`}
            >
              {isScrolled ? <Search /> : "Search"}
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="flex w-full items-center rounded-full ml-12 mr-12">
            <CarouselMulti />
          </div>
        </div>
      </div>
    </>
  );
}
