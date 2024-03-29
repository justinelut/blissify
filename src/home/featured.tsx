import CarouselLayout from "@/components/customui/carousellayout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import PropertyCard from "@/home/propertycard";

export default function Featured() {
  return (
    <div className="bg-white">
      <div className="py-40 md:py-16 lg:py-16 px-4 sm:px-6 md:px-32 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-red-200 to-red-100 flex flex-col lg:flex-row col-span-2 p-8 rounded-lg">
            <div className="flex-1 flex flex-col space-y-4 ">
              <div className="text-sm uppercase tracking-wide text-gray-500">
                Websites + Marketing
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Create your website.
              </h2>
              <Button className="w-40 bg-black text-white">
                Start for Free
              </Button>
              <p className="text-xs text-gray-500">
                No charge, no obligation, nothing to cancel.**
              </p>
            </div>
            <div className="flex-1">
              <CarouselLayout>
                <CarouselItem>
                  <AspectRatio ratio={11 / 12} className="bg-muted">
                    <PropertyCard image="/assets/featured.jpg"/>
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={11 / 12} className="bg-muted">
                    <PropertyCard image="/assets/featured.jpg"/>
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={11 / 12} className="bg-muted">
                    <PropertyCard image="/assets/featured.jpg"/>
                  </AspectRatio>
                </CarouselItem>
              </CarouselLayout>
            </div>
          </div>
          <div className="flex flex-col bg-black text-white p-8 space-y-4 rounded-lg w-full">
            <div className="text-sm uppercase tracking-wide">Domain Names</div>
            <h2 className="text-3xl font-bold">
              Grab a .com for £6.84*/1st yr.
            </h2>
            <p className="text-xs">
              2-year purchase required. Additional year(s) £17.82*
            </p>
            <Button className="bg-white text-black">Find Your Domain</Button>
            <p className="text-xs">
              Domains include free privacy protection forever*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
