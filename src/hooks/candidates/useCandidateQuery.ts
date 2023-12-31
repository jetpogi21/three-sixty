//Generated by WriteToUsemodelquery_ts - useModelQuery.ts
import {
  CandidateFormUpdatePayload,
  CandidateModel,
} from "@/interfaces/CandidateInterfaces";
import axiosClient from "@/utils/api";
import { PRIMARY_KEY } from "@/utils/constants/CandidateConstants";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";

const BASE_URL = "candidates";

type IndexAndID = {
  index: number;
  id: number | string;
};

type Response = {
  id?: number | string;
  slug?: string;

  //Generated by GetAllRelatedIDSimple
  //Generated by GetRelatedIDSimple - GetRelatedIDSimple
  CandidateStatus: {
    statusID: number;
    id: number | string;
  }[];
};

const updateCandidate = async (
  payload: CandidateFormUpdatePayload,
  id: string | number
) => {
  const { data } = await axiosClient({
    url: BASE_URL + "/" + id,
    method: "put",
    data: payload,
  });

  return data as Response;
};

const addCandidate = async (payload: CandidateFormUpdatePayload) => {
  const { data } = await axiosClient({
    url: BASE_URL,
    method: "post",
    data: payload,
  });

  return data as Response;
};

export const getCandidate = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const { data } = await axiosClient.get<CandidateModel>(
    `${BASE_URL}/${queryKey[1]}`
  );
  return data;
};

const addOrUpdateCandidate = (payload: CandidateFormUpdatePayload) => {
  if (payload[PRIMARY_KEY]) {
    return updateCandidate(payload, payload[PRIMARY_KEY]);
  } else {
    return addCandidate(payload);
  }
};

export const useCandidateQuery = (
  slug: string,
  options?: Parameters<typeof useQuery>[2]
) => {
  const candidateMutation = useMutation(addOrUpdateCandidate);

  const candidateQuery = useQuery(
    ["candidate", slug],
    getCandidate,
    //@ts-ignore
    options
  ) as UseQueryResult<CandidateModel, any>;

  return { candidateMutation, candidateQuery };
};
