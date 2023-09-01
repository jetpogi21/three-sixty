//Generated by GetuseModelListts - useModelList.ts
"use client";
import { GetStagesResponse } from "@/interfaces/StageInterfaces";
import { StageSearchParams } from "@/interfaces/StageInterfaces";
import { BasicModel } from "@/interfaces/GeneralInterfaces";
import axiosClient from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const getStages = async () => {
  const { data } = await axiosClient.get<GetStagesResponse>(`stages`, {
    params: {
      fetchCount: "false",
      simpleOnly: "true",
    } as Partial<StageSearchParams>,
  });

  return data.rows.map((item) => ({
    id: item.id,
    name: item.name,
  }));
};

interface UseListProps {
  placeholderData?: BasicModel[];
}

const useStageList = (prop?: UseListProps) => {
  //local states
  const [mounted, setMounted] = useState(false);

  const _ = useQuery({
    queryKey: ["stage-list"],
    queryFn: getStages,
    enabled: mounted,
    placeholderData: prop?.placeholderData,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return _;
};

export default useStageList;