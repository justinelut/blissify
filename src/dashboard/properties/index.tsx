import { Building } from "@/dashboard/properties/building";

export default function Properties() {
  return (
    <>
      <div className="pb-4 mb-4 border-b border-gray-200 w-full  flex flex-row justify-between">
        <h2>Properties</h2>

        <div className="flex flex-row gap-6">
          <div>Publish</div>
          <div>Push Settings</div>
        </div>
      </div>
      <Building />
    </>
  );
}
