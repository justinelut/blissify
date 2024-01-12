import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

const CarouselLayout: React.FC<CarouselProps> = ({ children }) => {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious className="bg-transparent" />
      <CarouselNext className="bg-transparent" />
    </Carousel>
  );
};

export default CarouselLayout;
