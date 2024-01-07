import Featured from "@/home/featured";
import PropertyCard from "@/home/propertycard";
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Home() {
  const [listref] = useAutoAnimate<HTMLDivElement>()

  return (
    <div>
        <Featured />
        <div ref={listref} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 md:px-32 lg:px-36 gap-4 mb-10">
          <PropertyCard image="/assets/featured.jpg" />
          <PropertyCard image="/assets/featured.jpg" />
          <PropertyCard image="/assets/featured.jpg" />
          <PropertyCard image="/assets/featured.jpg" />
          <PropertyCard image="/assets/featured.jpg" />
          <PropertyCard image="/assets/featured.jpg" />
          <PropertyCard image="/assets/featured.jpg" />
          <PropertyCard image="/assets/featured.jpg" />
        </div>
    </div>
  )
}
