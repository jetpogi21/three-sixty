//Generated by WriteToModelsPage - Model Page Sidebar
import React from "react";
import CandidateFilterForm from "@/components/candidates/CandidateFilterForm";
import CandidateTable from "@/components/candidates/CandidateTable";

export const metadata = {
  title: "Candidates",
};

const Candidates: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 w-full px-4 mx-auto text-sm lg:px-0 main-height-less-footer">
      <div className="flex flex-col flex-1 w-full mx-auto gap-4 p-4 border rounded-sm border-border">
        <h1 className="text-2xl font-bold">Candidates</h1>
        <div className="flex">
          <CandidateFilterForm />
        </div>
        <div className="flex flex-col flex-1 ">
          <CandidateTable />
        </div>
      </div>
    </div>
  );
};

export default Candidates;
