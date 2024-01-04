import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BlockEditor from "@/dashboard/blockeditor/blockeditor";

export default function BuildingForm() {
  const [isChecked, setIsChecked] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const [data, setData] = useState();

  const handleCardClick = () => {
    setIsChecked(!isChecked);
    setIsSelected(!isSelected);
  };

  const handleCardChange = () => {
    console.log(isSelected)
    setIsSelected(!isSelected);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="mb-4 border-b pb-4 sticky top-0 bg-white dark:bg-slate-950 w-full p-6">
        <h2 className="font-bold text-2xl mb-2">Create Property</h2>
        <p className="font-bold text-gray-500">Enter property details.</p>
      </div>

      <div className="w-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-8 gap-6">
          <div className="space-y-2">
            <Label htmlFor="building-name">Building Name</Label>
            <Input id="building-name" placeholder="Enter building name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter location" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="floors">Number of Floors</Label>
            <Input
              id="floors"
              placeholder="Enter number of floors"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="houses">Number of Houses</Label>
            <Input
              id="houses"
              placeholder="Enter number of houses"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label>Amenities</Label>
            <div className="flex flex-col gap-2">
              <label
                className={`border rounded-lg p-4 cursor-pointer ${
                  isChecked ? "bg-slate-800 text-white" : "bg-slate-200"
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="mr-4 w-10 h-10 bg-slate-800"
                  />

                  <div>
                    {/* Add your content here */}
                    <h3 className="text-lg font-semibold">Checkbox Card</h3>
                    <p className="text-sm">Click to toggle checkbox</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-type">Property Type</Label>
            <Select>
              <SelectTrigger id="property-type">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Property Description</Label>
            <BlockEditor
              data={data}
              onChange={(data) => console.log(data)}
              editorblock="editorjs"
            />
          </div>
          <div className="space-y-2">
            <Label>Pets Allowed</Label>
            <RadioGroup
              className="flex justify-between items-center gap-2"
              defaultValue="no"
              id="pets"
              onValueChange={handleCardChange}
            >
              <label
                className={`border rounded-lg p-4 cursor-pointer flex-1 ${
                  isSelected
                    ? "border-2 border-slate-800 text-green-500"
                    : "bg-gray-200"
                }`}

                
              >
                <div className="flex flex-row">
                  <RadioGroupItem
                    value="pets-allowed"
                    className="mr-2 w-6 h-6 text-green-500"
                  />

                  <div>
                    {/* Add your content here */}
                    <h3 className="text-lg font-semibold">Yes</h3>
                    <p className="text-sm">Pets allowed</p>
                  </div>
                </div>
              </label>
              <label
                className={`border rounded-lg p-4 cursor-pointer flex-1 ${
                  isSelected ? "border-2 border-slate-800 text-green-500" : "bg-gray-200"
                }`}

               
              >
                <div className="flex items-center">
                  <RadioGroupItem
                    value="pets-not-allowed"
                    className="mr-2 w-6 h-6 text-green-500"
                  />

                  <div>
                    {/* Add your content here */}
                    <h3 className="text-lg font-semibold">No</h3>
                    <p className="text-sm">Pets not allowed</p>
                  </div>
                </div>
              </label>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Security Features</Label>
            <div className="flex flex-col gap-2">
              <label
                className={`border rounded-lg p-4 cursor-pointer ${
                  isChecked ? "bg-slate-800 text-white" : "bg-slate-200"
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="mr-4 w-10 h-10 bg-slate-800"
                  />

                  <div>
                    {/* Add your content here */}
                    <h3 className="text-lg font-semibold">Cctv</h3>
                    <p className="text-sm">Click to toggle checkbox</p>
                  </div>
                </div>
              </label>
              <label
                className={`border rounded-lg p-4 cursor-pointer ${
                  isChecked ? "bg-slate-800 text-white" : "bg-slate-200"
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="mr-4 w-10 h-10 bg-slate-800"
                  />

                  <div>
                    {/* Add your content here */}
                    <h3 className="text-lg font-semibold">Security guard</h3>
                    <p className="text-sm">Click to toggle checkbox</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <Button className="ml-auto w-full sticky bottom-0">Save</Button>
      </div>
    </>
  );
}
