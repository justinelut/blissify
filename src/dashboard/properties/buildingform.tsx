import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

export default function BuildingForm() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Create Property</CardTitle>
            <CardDescription>Enter property details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
              <Input id="floors" placeholder="Enter number of floors" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="houses">Number of Houses</Label>
              <Input id="houses" placeholder="Enter number of houses" type="number" />
            </div>
            <div className="space-y-2">
              <Label>Amenities</Label>
              <div className="flex flex-col gap-2">
                <Checkbox id="pool" name="amenities" />
                <Label className="text-sm font-normal" htmlFor="pool">
                  Pool
                </Label>
                <Checkbox id="parking" name="amenities" />
                <Label className="text-sm font-normal" htmlFor="parking">
                  Parking
                </Label>
                <Checkbox id="gym" name="amenities" />
                <Label className="text-sm font-normal" htmlFor="gym">
                  Gym
                </Label>
                <Input id="other-amenities" placeholder="Other amenities" />
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
              <Textarea className="min-h-[100px]" id="description" placeholder="Enter property description" />
            </div>
            <div className="space-y-2">
              <Label>Pets Allowed</Label>
              <RadioGroup className="flex items-center gap-2" defaultValue="no" id="pets">
                <Label className="text-sm font-normal" htmlFor="pets-yes">
                  <RadioGroupItem id="pets-yes" value="yes" />
                  Yes{"\n                          "}
                </Label>
                <Label className="text-sm font-normal" htmlFor="pets-no">
                  <RadioGroupItem id="pets-no" value="no" />
                  No{"\n                          "}
                </Label>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Security Features</Label>
              <div className="flex flex-col gap-2">
                <Checkbox id="cctv" name="security" />
                <Label className="text-sm font-normal" htmlFor="cctv">
                  CCTV
                </Label>
                <Checkbox id="guards" name="security" />
                <Label className="text-sm font-normal" htmlFor="guards">
                  Security Guards
                </Label>
                <Input id="other-features" placeholder="Other features" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Save</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

