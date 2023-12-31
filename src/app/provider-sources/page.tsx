//Generated by WriteToModelsPage - Model Page Sidebar
import React from "react";
import ProviderSourceFilterForm from "@/components/provider-sources/ProviderSourceFilterForm";
import ProviderSourceTable from "@/components/provider-sources/ProviderSourceTable";

export const metadata = {
  title: "Provider Sources",
};

const ProviderSources: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 w-full px-4 mx-auto text-sm lg:px-0 main-height-less-footer">
      <div className="flex flex-col flex-1 w-[740px] mx-auto gap-4 p-4 border rounded-sm border-border">
        <h1 className="text-2xl font-bold">Provider Sources</h1>
        <div className="flex">
          <ProviderSourceFilterForm />
        </div>
        <div className="flex flex-col flex-1 ">
          <ProviderSourceTable />
        </div>
      </div>
    </div>
  );
};

export default ProviderSources;
