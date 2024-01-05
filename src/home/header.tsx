import {Link} from "@tanstack/react-router"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
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
              <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center px-4 py-2">
        <div className="flex w-full max-w-3xl items-center space-x-2 rounded-full bg-gray-100 p-3">
          <Input className="flex-grow bg-transparent mr-2" placeholder="Search destinations" type="text" />
          <Button className="bg-red-500 text-white">Search</Button>
        </div>
        <div className="flex w-full max-w-3xl justify-between py-4">
          <Input className="flex-grow" placeholder="Where" />
          <Input className="flex-grow" placeholder="Check in" />
          <Input className="flex-grow" placeholder="Check out" />
          <Input className="flex-grow" placeholder="Who" />
        </div>
        <div className="flex w-full max-w-3xl overflow-x-auto py-2">
          <div className="flex space-x-4" />
        </div>
        <div className="flex w-full max-w-3xl justify-end space-x-2 py-2">
          <Button variant="outline">Filters</Button>
          <div className="flex items-center space-x-2">
            <Switch id="total-before-taxes" />
            <Label htmlFor="total-before-taxes">Display total before taxes</Label>
          </div>
        </div>
      </div>
    </div>
  )
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
  )
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
  )
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
  )
}
