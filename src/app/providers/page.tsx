//Generated by WriteToModelsPage - Model Page Sidebar
import React from "react";
import ProviderFilterForm from "@/components/providers/ProviderFilterForm";
import ProviderTable from "@/components/providers/ProviderTable";

export const metadata = {
  title: "Providers",
};

const Providers: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 w-full px-4 mx-auto text-sm lg:px-0 main-height-less-footer">
      <div className="flex flex-col flex-1 w-[760px] mx-auto gap-4 p-4 border rounded-sm border-border">
        <h1 className="text-2xl font-bold">Providers</h1>
        <div className="flex">
          <ProviderFilterForm />
        </div>
        <div className="flex flex-col flex-1 ">
          <ProviderTable />
        </div>
      </div>
    </div>
  );
};

export default Providers;
