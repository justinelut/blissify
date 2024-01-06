import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LampCeiling } from "lucide-react";

export function CarouselMulti() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 14 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-1/12 md:basis-1/12 lg:basis-1/12  w-full mx-10 items-center"
          >
            <div className="p-1">
              <div>
                <div className="flex flex-col aspect-square items-center justify-center">
                  <span className="text-3xl font-semibold">
                    <LampCeiling />
                  </span>
                  <h3> Condo</h3>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
