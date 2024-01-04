
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChromeIcon, ComputerIcon } from "lucide-react"

export default function Login() {
  return (
    <div className="mx-auto max-w-[350px] space-y-6">
   
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Log In</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your credentials to log in</p>
      </div>
      <div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-login">Email</Label>
            <Input id="email-login" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-login">Password</Label>
            <Input id="password-login" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Log In
          </Button>
        </div>
        <Separator className="my-8" />
        <div className="flex space-x-4">
          <Button className="flex-1 flex items-center justify-center" variant="outline">
            <ChromeIcon className="mr-2" />
            Log in with Google
          </Button>
          <Button className="flex-1 flex items-center justify-center" variant="outline">
            <ComputerIcon className="mr-2" />
            Log in with Microsoft
          </Button>
        </div>
      </div>
    </div>
  )
}

