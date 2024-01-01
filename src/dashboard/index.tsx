import SidePanel from "@/dashboard/sidepanel/sidepanel";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row">
        <SidePanel />
         <div className="p-8 border-b border-gray-600 w-full">Dashboard</div>
      </div>
    </>
  );
}
