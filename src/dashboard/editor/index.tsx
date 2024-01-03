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
import { ReactElement, ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface EditorProps {
    text: string;
    buttonclass: string;
    Icon: ReactElement;
    children?:ReactNode
  }

export function Editor({text, buttonclass, Icon, children}:EditorProps) {

    const navigate = useNavigate();
    const handleEditClick = () => {
        const itemId = "93572597493794"; // Replace this with the actual item ID
        navigate(`#/editor/${itemId}`);
      };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={handleEditClick} className={`${buttonclass}`}>{Icon}<span className="hidden lg:block md:block">{text}</span></Button>
      </SheetTrigger>
      <SheetContent className="w-[100vw] lg:min-w-[60vw] md:min-w-[40vw] overflow-y-auto p-0">
         {children}
      </SheetContent>
    </Sheet>
  )
}
