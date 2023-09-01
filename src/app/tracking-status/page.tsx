//Generated by WriteToModelsPage - Model Page Sidebar
import React from "react";
import TrackingStatusFilterForm from "@/components/tracking-status/TrackingStatusFilterForm";
import TrackingStatusTable from "@/components/tracking-status/TrackingStatusTable";

export const metadata = {
  title: "Tracking Status",
};

const TrackingStatus: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 w-full px-4 mx-auto text-sm lg:px-0 main-height-less-footer">
      <div className="flex flex-col flex-1 w-[740px] mx-auto gap-4 p-4 border rounded-sm border-border">
        <h1 className="text-2xl font-bold">Tracking Status</h1>
        <div className="flex">
          <TrackingStatusFilterForm />
        </div>
        <div className="flex flex-col flex-1 ">
          <TrackingStatusTable />
        </div>
      </div>
    </div>
  );
};

export default TrackingStatus;