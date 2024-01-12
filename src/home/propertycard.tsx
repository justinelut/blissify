import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAnimate, useInView, usePresence } from "framer-motion";
import { HeartIcon, StarIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface PropertyProps {
  image: string;
}

export default function PropertyCard({ image }: PropertyProps) {
  const [scope, animate] = useAnimate();
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    if(isHovered){
    const enterAnimation = async () => {
      await animate("#leftright", { opacity: 1, x: 0 }, { duration: 1, ease: "easeInOut" });
    };
    enterAnimation();
  }
  }, [isHovered]);
  return (
    <div
      ref={scope}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-full rounded-lg overflow-hidden p-2"
    >
      <div className="relative">
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Carousel className="w-full max-w-lg rounded-lg">
                <CarouselContent className="rounded-lg">
                  <CarouselItem>
                    <img
                      alt="Guest house"
                      className="w-full h-full rounded-lg"
                      src={image}
                      style={{
                        aspectRatio: "240/250",
                        objectFit: "cover",
                      }}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="Guest house"
                      className="w-full h-full rounded-lg"
                      src={image}
                      style={{
                        aspectRatio: "240/250",
                        objectFit: "cover",
                      }}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="Guest house"
                      className="w-full h-full rounded-lg"
                      src={image}
                      style={{
                        aspectRatio: "240/250",
                        objectFit: "cover",
                      }}
                    />
                  </CarouselItem>
                </CarouselContent>
                {isHovered ? (
                  <div id="leftright">
                    {" "}
                    <CarouselPrevious className="ml-16 bg-gray-100" />
                    <CarouselNext className="mr-16 bg-gray-100" />
                  </div>
                ) : (
                  ""
                )}
              </Carousel>
            </div>
          </div>
          <div className="carousel-indicators flex justify-center space-x-2 absolute bottom-4 p-4">
            <span className="indicator bg-white w-2 h-2 rounded-full" />
            <span className="indicator bg-white w-2 h-2 rounded-full opacity-50" />
            <span className="indicator bg-white w-2 h-2 rounded-full opacity-50" />
          </div>
        </div>
        <Button className="absolute top-4 left-4 py-1 px-3 text-xs font-semibold uppercase tracking-wide rounded-full shadow">
          Guest favorite
        </Button>
        <Button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          <HeartIcon className="text-gray-700" />
        </Button>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2 mt-4">
          <h3 className="text-lg font-semibold">Nakuru, Kenya</h3>
          <div className="flex items-center">
            <StarIcon className="text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-600 ml-1">
              4.81
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600">Built in the 19th century</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">Jan 5 – 12</p>
          <p className="text-lg font-semibold">Ksh 176 night</p>
        </div>
      </div>
    </div>
  );
}
