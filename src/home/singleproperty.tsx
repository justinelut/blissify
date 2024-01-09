import { Heart, Share } from "lucide-react";

export default function SingleProperty() {
  return (
    <>
      <div className="sticky top-0 py-10 bg-gray-200"></div>
      <div className="mx-6 md:max-w-7xl md:mx-auto py-16">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h4 className="font-semibold text-2xl">The Mabati Mansion</h4>
          </div>
          <div className="flex gap-4">
            <Share />
            <Heart />
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

        <div className="flex">
          <div className="flex-grow w-2/3 bg-green-500 overflow-y-auto">
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
            <h3>Entire place in Naivasha, Kenya</h3>
            <h2>2 guests1 bedroom1 bed1 bath</h2>
          </div>
          <div className="flex-grow w-1/3 bg-red-500 max-h-40 sticky top-[14vh] justify-end">
            <div className="shadow-xl top-0">
              <h3>Ksh 400</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
