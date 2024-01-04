import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChromeIcon, ComputerIcon } from "lucide-react";

export default function Signup() {
  return (
    <div>
         <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
      </div>
      <div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-signup">Email</Label>
            <Input id="email-signup" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-signup">Password</Label>
            <Input id="password-signup" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </div>
        <Separator className="my-8" />
        <div className="flex space-x-4">
          <Button className="flex-1 flex items-center justify-center" variant="outline">
            <ChromeIcon className="mr-2" />
            Sign up with Google
          </Button>
          <Button className="flex-1 flex items-center justify-center" variant="outline">
            <ComputerIcon className="mr-2" />
            Sign up with Microsoft
          </Button>
        </div>
      </div>
    </div>
  )
}
