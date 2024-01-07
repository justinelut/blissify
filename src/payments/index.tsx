import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Payments() {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardChange = () => {
    console.log(isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <div className="container mx-auto py-10">
        <div className="flex flex-row gap-6"><ArrowLeft /><h3>Blissify Rent</h3></div>
      
      <div className="grid grid-col grid-cols-1 md:grid-cols-2 mt-10 px-20 gap-8">
        <div>
          <h3>Welcome to blissify Justine</h3>
          <h1>Select your blissify plan</h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-2 flex flex-col gap-10">
          <Label className="text-lg">Choose subscription model</Label>
          <RadioGroup
            className="flex flex-col gap-4"
            defaultValue="no"
            id="pets"
            onValueChange={handleCardChange}
          >
            <div
              className={`border rounded-lg p-4 cursor-pointer flex-1 ${
                isSelected ? "border-2 border-green-500" : "bg-white"
              }`}
              onClick={handleCardChange}
            >
              <div className="flex flex-row gap-10">
                <RadioGroupItem
                  value="pets-not-allowed"
                  className="mr-2 w-6 h-6 text-green-500 border-green-500"
                  checked={isSelected}
                />

                <div className="flex flex-row gap-10">
                  <div>
                    <h3 className="text-lg font-semibold">Free tier</h3>
                    <p className="text-sm">
                      For the new subscriber on the platform who just
                      wants basic listings
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Ksh 500 / mo.</h3>
                   
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`border rounded-lg p-4 cursor-pointer flex-1 ${
                isSelected ? "border-2 border-green-500" : "bg-white"
              }`}
              onClick={handleCardChange}
            >
              <div className="flex flex-row gap-10">
                <RadioGroupItem
                  value="pets-not-allowed"
                  className="mr-2 w-6 h-6 text-green-500 border-green-500"
                  checked={isSelected}
                />

                <div className="flex flex-row gap-10">
                  <div>
                    <h3 className="text-lg font-semibold">Standard</h3>
                    <p className="text-sm">
                      For the new subscriber on the platform who just
                      wants basic listings
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Ksh 500 / mo.</h3>
                   
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`border rounded-lg p-4 cursor-pointer flex-1 ${
                isSelected ? "border-2 border-green-500" : "bg-white"
              }`}
              onClick={handleCardChange}
            >
              <div className="flex flex-row gap-10">
                <RadioGroupItem
                  value="pets-not-allowed"
                  className="mr-2 w-6 h-6 text-green-500 border-green-500"
                  checked={isSelected}
                />

                <div className="flex flex-row gap-10">
                  <div>
                    <h3 className="text-lg font-semibold">Pro</h3>
                    <p className="text-sm">
                      For the new subscriber on the platform who just
                      wants basic listings
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Ksh 500 / mo.</h3>
                   
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-green-500 text-white font-bold">Continue</Button>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
