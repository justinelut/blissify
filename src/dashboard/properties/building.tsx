import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Building() {
  return (
    <div className="flex flex-col mx-2 justify-center items-center lg:w-1/2 md:w-1/2">
      <Textarea
        placeholder="Building Name"
        className="text-3xl font-extrabold border-none resize-none overflow-hidden focus:border-none focus:ring-0 p-0 mt-6 rounded-none"
      />
      <Input type="text" placeholder="Location" className="mt-6 rounded-none"/>
      <Input type="text" placeholder="Location" className="mt-6 rounded-none"/>
      <Input type="text" placeholder="Location" className="mt-6 rounded-none"/>
      <Input type="text" placeholder="Location" className="mt-6 rounded-none"/>
      <Input type="text" placeholder="Location" className="mt-6 rounded-none"/>
    </div>
  );
}
