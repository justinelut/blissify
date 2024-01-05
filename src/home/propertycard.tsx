import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-[379px] rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                alt="Guest house"
                className="w-full h-auto"
                height="250"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "379/250",
                  objectFit: "cover",
                }}
                width="379"
              />
            </div>
            <div className="carousel-item">
              <img
                alt="Guest house"
                className="w-full h-auto"
                height="250"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "379/250",
                  objectFit: "cover",
                }}
                width="379"
              />
            </div>
            <div className="carousel-item">
              <img
                alt="Guest house"
                className="w-full h-auto"
                height="250"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "379/250",
                  objectFit: "cover",
                }}
                width="379"
              />
            </div>
          </div>
          <div className="carousel-indicators flex justify-center space-x-2 absolute bottom-4">
            <span className="indicator bg-white w-2 h-2 rounded-full" />
            <span className="indicator bg-white w-2 h-2 rounded-full opacity-50" />
            <span className="indicator bg-white w-2 h-2 rounded-full opacity-50" />
          </div>
        </div>
        <Button className="absolute top-4 left-4 bg-white py-1 px-3 text-xs font-semibold uppercase tracking-wide rounded-full shadow">
          Guest favorite
        </Button>
        <Button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          <HeartIcon className="text-gray-700" />
        </Button>
      </div>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Lakonia, Greece</h3>
          <div className="flex items-center">
            <StarIcon className="text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-600 ml-1">4.81</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">Built in the 19th century</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">Jan 5 – 12</p>
          <p className="text-lg font-semibold">$176 night</p>
        </div>
      </CardContent>
    </Card>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
