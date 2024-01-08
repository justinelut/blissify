import { Heart, Share } from "lucide-react";

export default function SingleProperty() {
  return (
    <div className="mx-6 md:max-w-7xl md:mx-auto py-16">
      <div className="flex flex-row items-center justify-between">
        <div><h4 className="font-semibold text-2xl">The Mabati Mansion</h4></div>
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
    </div>
  );
}
