import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Pencil } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export function Editor() {
    const navigate = useNavigate();
    const handleEditClick = () => {
        const itemId = "93572597493794"; // Replace this with the actual item ID
        navigate(`#/editor/${itemId}`);
      };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={handleEditClick}><Pencil size={16} className="mr-2"/>Edit</Button>
      </SheetTrigger>
      <SheetContent className="w-[100vw] lg:min-w-[60vw] md:min-w-[40vw]">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
