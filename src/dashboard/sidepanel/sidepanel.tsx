import { ModeToggle } from "@/components/darktheme/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {Settings} from 'lucide-react'
import {Link} from 'react-router-dom'
import { ProfileToggle } from "@/dashboard/sidepanel/ProfileToggle";
import SideMenu from "./SideMenu";
export default function SidePanel() {
  return (
    <div className="text-blue text-3xl border-r border-gray-300 h-screen lg:w-1/5 md:w-3/4 sm:w-3/4 w-full p-4 flex flex-col">
      <div className="flex flex-row gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>Side panel</div>
      </div>

      <div className="flex-grow">
          <SideMenu />
      </div>

      <div className="mt-auto mb-10 flex flex-row justify-between">
        {/* This div will be positioned at the bottom */}
        <div className="">
          {" "}
          <ProfileToggle />
        </div>

        <div className="flex flex-row justify-between items-center gap-4">
            <Link to='/dashboard/settings'> <Settings /></Link>
            <ModeToggle />
        </div>
      </div>
    </div>
  );
}
