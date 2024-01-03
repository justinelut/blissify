/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x54CBHoPxS2
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Editor } from "@/dashboard/editor";
import { Pencil } from "lucide-react";

export default function ListedProperties() {
  return (
    <Card className=" bg-white dark:bg-slate-950 rounded-xl shadow-md ">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            alt="Property Image"
            className="h-48 w-full object-cover md:w-36 md:h-full md:object-cover"
            height="300"
            src="/assets/featured.jpg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
        <div className="p-2">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Luxury Villa
            </CardTitle>
            <CardDescription className="text-gray-500">
              $3,500,000
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Located in the heart of Beverly Hills.
            </p>
            <p className="text-gray-500 mt-2">Property ID: 123456</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center mt-6">
            <Button size="sm" variant="outline">
              <HeartIcon className="w-4 h-4 mr-2" />
              Favorite
            </Button>
            
            <Editor text="Edit" buttonclass=""  Icon={<Pencil size={16} className="mr-2" />} />
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

function HeartIcon(props: any) {
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
  );
}
