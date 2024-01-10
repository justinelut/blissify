import { Card } from "@/components/ui/card";
import { Heart, Share, Sparkles, Star } from "lucide-react";
import { CalendarForm } from "@/home/calender";
import { SelectForm } from "./formselect";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SingleProperty() {
  return (
    <>
      <div className="sticky top-0 py-10 bg-white border-b"></div>
      <div className="mx-6 md:max-w-7xl md:mx-auto py-16">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h4 className="font-semibold text-2xl">The Mabati Mansion</h4>
          </div>
          <div className="flex gap-4">
            <Share size={18} /> <p className="text-sm -ml-2">Share</p>
            <Heart size={18} /> <p className="text-sm -ml-2">Save</p>
          </div>
        </div>

        <div className="hidden lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 py-6">
          <div className="h-full">
            <img src="/assets/featured.jpg" className="rounded-l-lg" />
          </div>
          <div className="grid grid-cols-2 gap-2 ml-2">
            <img src="/assets/featured.jpg" />

            <img src="/assets/featured.jpg" className="rounded-r-lg" />

            <img src="/assets/featured.jpg" />

            <img src="/assets/featured.jpg" className="rounded-r-lg" />
          </div>
        </div>

        <div className="flex gap-10 items-start">
          <div className="flex-grow w-2/3 overflow-y-auto">
            <h1 className="text-3xl font-bold sticky">
              Farm stay in Stellenbosch , South Africa
            </h1>
            <h3>Entire place in Naivasha, Kenya</h3>
            <Card className="flex justify-between py-2 px-6 mt-4 items-center gap-10">
              <Sparkles size={36} />
              <h3 className="p-8">
                One of the most loved homes on blissify, according to guests{" "}
              </h3>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold">5.0</h3>
                <div className="flex flex-row justify-between">
                  <Star size={14} />
                  <Star size={14} />
                  <Star size={14} />
                  <Star size={14} />
                  <Star size={14} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">111</p>
                <div className="flex flex-row justify-between text-xs">
                  Reviews
                </div>
              </div>
            </Card>

            <Card className="flex justify-start p-6 mt-4 gap-4 items-center border-0 border-b rounded-none">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="font-bold text-md">Hosted by Justine</h3>
                <p className="text-sm">2 Years renting</p>
              </div>
            </Card>

            <div className="flex flex-col">
            <Card className="flex justify-start p-6 mt-4 gap-4 items-center border-0 border-b rounded-none">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="font-bold text-md">Hosted by Justine</h3>
                <p className="text-sm">2 Years renting</p>
              </div>
            </Card>
            <Card className="flex justify-start p-6 mt-4 gap-4 items-center border-0 border-b rounded-none">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="font-bold text-md">Hosted by Justine</h3>
                <p className="text-sm">2 Years renting</p>
              </div>
            </Card>
            <Card className="flex justify-start p-6 mt-4 gap-4 items-center border-0 border-b rounded-none">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="font-bold text-md">Hosted by Justine</h3>
                <p className="text-sm">2 Years renting</p>
              </div>
            </Card>
            </div>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
            <Card className="flex justify-between p-6 mt-4">
              <Sparkles />
            </Card>
          </div>
          <Card className="flex-grow-0 w-1/3 flex-shrink grid-cols- sticky top-[14vh] justify-end p-6 shadow-xl">
            <div className="top-0">
              <h3 className="font-semibold text-2xl">Ksh 400</h3>
              <p>Total before taxes</p>

              <div className="flex flex-col rounded-lg mt-4">
                <div className="flex w-full justify-between">
                  <CalendarForm />
                  <CalendarForm />
                </div>
                <div className="w-full">
                  <SelectForm />
                </div>

                <Button className="bg-green-500 p-4 mt-4 font-bold text-md h-12">
                  Reserve
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
