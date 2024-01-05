import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

const CarouselLayout: React.FC<CarouselProps> = ({ children }) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselLayout;
