import * as React from "react";
import { Minus, Plus, Layers, XSquare, X } from "lucide-react";
import { ModeToggle } from "@/components/darktheme/ModeToggle";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function MobileNav() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Layers size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm px-4 border-b border-gray-300 pb-2">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between p-2 border rounded-lg py-10 px-4 bg-red-500 mt-4">
              <div className="flex-1">item 1</div>
              <div className="flex-1">item 1</div>
              <div className="flex-1">item 1</div>
            </div>
            <div className="flex flex-row justify-between p-2 border rounded-lg py-10 px-4 bg-green-400 mt-4">
              <div className="flex-1">item 1</div>
              <div className="flex-1">item 1</div>
              <div className="flex-1">item 1</div>
            </div>
            <div className="flex flex-row justify-between p-2 border rounded-lg py-10 px-4 bg-blue-400 mt-4">
              <div className="flex-1">item 1</div>
              <div className="flex-1">item 1</div>
              <div className="flex-1">item 1</div>
            </div>
            <div className="flex flex-row justify-between p-2 border rounded-lg py-10 px-4 bg-slate-400 mt-4">
              <div className="flex-1">item 1</div>
              <div className="flex-1">item 1</div>
              <div className="flex-1">item 1</div>
            </div>

            <div className="flex flex-row justify-between p-2 border rounded-lg py-2 mt-4">
              <DrawerFooter>
                <DrawerClose asChild>
                  <ModeToggle />
                </DrawerClose>
              </DrawerFooter>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">
                    <X />
                  </Button>
                </DrawerClose>
              </DrawerFooter>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">
                    <X />
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
