//Generated by WriteToModeltable_tsx - ModelTable.tsx
"use client";
//Generated by GeneratePageFile
import React, { useEffect, useState } from "react";
import { getAxiosParams } from "@/utils/utilities";
import { usePriorityStore } from "@/hooks/priorities/usePriorityStore";
import {
  PriorityFormikInitialValues,
  PrioritySearchParams,
  PriorityUpdatePayload,
  GetPrioritiesResponse,
  PriorityDeletePayload
} from "@/interfaces/PriorityInterfaces";
import axiosClient from "@/utils/api";
import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { DEFAULT_LIMIT } from "@/utils/constants";
import { useURL } from "@/hooks/useURL";
import { Formik } from "formik";
import { PriorityArraySchema } from "@/schema/PrioritySchema";
import { toast } from "@/hooks/use-toast";
import {
  DEFAULT_FILTERS,
  DEFAULT_FORM_VALUE,
  DEFAULT_SORT_BY,
} from "@/utils/constants/PriorityConstants";
import { usePriorityDeleteDialog } from "@/hooks/priorities/usePriorityDeleteDialog";
import PriorityFormArray from "@/components/priorities/PriorityFormArray";

const PriorityTable: React.FC = () => {
  const { query } = useURL<PrioritySearchParams>();
  const queryClient = useQueryClient();

  ///Local States
  const [mounted, setMounted] = useState(false);

  //SearchParams Variables
  //Generated by GetAllSearchParamsBySeqModel
const q = query["q"] || ""
  const sort = query["sort"] || DEFAULT_SORT_BY;
  const limit = query["limit"] || DEFAULT_LIMIT;

  //Page constants
  const DEFAULT_PRIORITY = DEFAULT_FORM_VALUE;

  //Store Variables
  const {
    recordCount,
    setRecordCount,
    lastPage,
    setLastPage,
    setPage,
    fetchCount,
    setFetchCount,
    resetRowSelection,
    currentData,
    setCurrentData,
    setIsUpdating,
  } = usePriorityStore();

  const [setRecordsToDelete, setIsDialogLoading, setMutate] =
    usePriorityDeleteDialog((state) => [
      state.setRecordsToDelete,
      state.setIsDialogLoading,
      state.setMutate,
    ]);

  //API Functions
  const getPriorities = async ({ pageParam = "" }) => {
    //First argument is the queries from the form, second one is so that the queries can be turned into the desired shape while the defaultFilters will be the searchParams not included from the from
    const axiosParams = getAxiosParams({//Generated by GetAllFilterQueryNameBySeqModel
q}, DEFAULT_FILTERS, {
      cursor: pageParam,
      limit,
      sort,
      fetchCount: fetchCount.toString(),
    }) as Partial<PrioritySearchParams>;

    const { data } = await axiosClient.get<GetPrioritiesResponse>(`priorities`, {
      params: axiosParams,
    });

    return data;
  };

  const updatePriorities = async (payload: PriorityUpdatePayload) => {
    const { data } = await axiosClient({
      url: "priorities/multi",
      method: "post",
      data: payload,
    }) as { data: { recordsCreated: number } };

    return data;
  };

  const deletePriorities = async (payload: PriorityDeletePayload) => {
    const { data } = (await axiosClient({
      url: "priorities",
      method: "delete",
      data: payload,
    })) as { data: { recordsDeleted: number } };

    return data;
  };

  //API Functions end here

  //Tanstacks
  const { refetch } = useInfiniteQuery(["priorities"], getPriorities, {
    keepPreviousData: true,
    getNextPageParam: (lastPage) => lastPage.cursor ?? undefined,
    onSuccess: (data) => {
      const dataPageLength = data.pages.length;
      const dataLastPageRowCount = data.pages[dataPageLength - 1].count;

      if (fetchCount) {
  setLastPage(1);
  setPage(1);
  setCurrentData([
    ...data.pages[0].rows.map((item, index) => ({
      ...item,
      index,
      touched: false,
    })),
    {
      ...DEFAULT_PRIORITY,
      index: data.pages[dataPageLength - 1].rows.length,
    },
  ]);
} else {
  if (dataPageLength > lastPage) {
    setLastPage(dataPageLength);
    setPage(dataPageLength);
    setCurrentData([
      ...data.pages[dataPageLength - 1].rows.map((item, index) => ({
        ...item,
        index,
        touched: false,
      })),
      {
        ...DEFAULT_PRIORITY,
        index: data.pages[dataPageLength - 1].rows.length,
      },
    ]);
  } else {
    setLastPage(1);
    setPage(1);
    setCurrentData([
      ...data.pages[0].rows.map((item, index) => ({
        ...item,
        index,
        touched: false,
      })),
      {
        ...DEFAULT_PRIORITY,
        index: data.pages[dataPageLength - 1].rows.length,
      },
    ]);
  }
}



      if (dataLastPageRowCount !== undefined) {
        setFetchCount(false);
        setRecordCount(dataLastPageRowCount);
      }
    },
    enabled: mounted, staleTime: Infinity,
  });

  //Generated by GetMutationSnippets
type MutationData = { recordsCreated?: number; recordsDeleted?: number };
  const useHandleMutation = (
    mutationFunction: (payload: any) => Promise<MutationData>,
    successCallback: (data: MutationData) => string,
    updateRecordCountCallback: (
      recordCount: number,
      data: MutationData
    ) => number
  ) => {
    const { mutate } = useMutation(mutationFunction, {
      onMutate: () => {
        setIsDialogLoading(true);
        setIsUpdating(true);
      },
      onSuccess: (data) => {
        toast({
          description: successCallback(data),
          variant: "success",
          duration: 2000,
        });
        resetRowSelection();
        setRecordCount(updateRecordCountCallback(recordCount, data));
        sliceQueryDataAndRefetch(0);
      },
      onError: (error) => {
        const responseText =
          //@ts-ignore
          error?.response?.statusText || "Something went wrong with the app";
        toast({
          description: responseText,
          variant: "destructive",
          duration: 2000,
        });
      },
      onSettled: () => {
        setIsDialogLoading(false);
        setIsUpdating(false);
        setRecordsToDelete([]);
      },
    });

    return mutate;
  };

  // Usage for deletePriorityMutation
  const deletePriorityMutation = useHandleMutation(
    deletePriorities,
    (data) => {
      return "Priority(s) deleted successfully";
    },
    (recordCount, data) => {
      return recordCount - (data.recordsDeleted || 0);
    }
  );

  // Usage for updatePriorities
  const updatePrioritiesMutation = useHandleMutation(
    updatePriorities,
    (data) => {
      return "Priority list updated successfully";
    },
    (recordCount, data) => {
      return (
        recordCount + (data.recordsCreated || 0) - (data.recordsDeleted || 0)
      );
    }
  );

  //Transformations
  const sliceQueryDataAndRefetch = (idx: number) => {
    queryClient.setQueryData(
      ["priorities"],
      (data: InfiniteData<GetPrioritiesResponse> | undefined) => {
        return data
          ? {
              pages: data.pages.slice(0, idx + 1),
              pageParams: data.pageParams.slice(0, idx + 1),
            }
          : undefined;
      }
    );
    refetch();
  };

  //Client Actions
  const handleSubmit = async (values: PriorityFormikInitialValues) => {
    //The reference is the index of the row
    const PrioritiesToBeSubmitted = values.Priorities.filter((item) => item.touched);

    if (PrioritiesToBeSubmitted.length > 0) {
      const payload: PriorityUpdatePayload = {
        Priorities: PrioritiesToBeSubmitted,
      };

      updatePrioritiesMutation(payload);
    }
  };

  useEffect(() => {
    setMounted(true);
    setMutate(deletePriorityMutation);
  }, []);

  useEffect(() => {
    if (mounted) {
      sliceQueryDataAndRefetch(0);
    }
  }, [limit, sort, //Generated by GetAllFilterQueryNameBySeqModel
q]);

  return (
    <Formik
      initialValues={{
        Priorities: currentData,
      }}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validationSchema={PriorityArraySchema}
      validateOnChange={false}
    >
      {(formik) => <PriorityFormArray formik={formik} />}
    </Formik>
  );
};

export default PriorityTable;
