import Featured from "@/home/featured";
import PropertyCard from "@/home/propertycard";


export default function Home() {
  return (
    <div>
        <Featured />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 mb-10">
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
