//Generated by WriteToModeltable_tsx - ModelTable.tsx
"use client";
//Generated by GeneratePageFile
import React, { useEffect, useState } from "react";
import { getAxiosParams } from "@/utils/utilities";
import { useProviderSourceStore } from "@/hooks/provider-sources/useProviderSourceStore";
import {
  ProviderSourceFormikInitialValues,
  ProviderSourceSearchParams,
  ProviderSourceUpdatePayload,
  GetProviderSourcesResponse,
  ProviderSourceDeletePayload
} from "@/interfaces/ProviderSourceInterfaces";
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
import { ProviderSourceArraySchema } from "@/schema/ProviderSourceSchema";
import { toast } from "@/hooks/use-toast";
import {
  DEFAULT_FILTERS,
  DEFAULT_FORM_VALUE,
  DEFAULT_SORT_BY,
} from "@/utils/constants/ProviderSourceConstants";
import { useProviderSourceDeleteDialog } from "@/hooks/provider-sources/useProviderSourceDeleteDialog";
import ProviderSourceFormArray from "@/components/provider-sources/ProviderSourceFormArray";

const ProviderSourceTable: React.FC = () => {
  const { query } = useURL<ProviderSourceSearchParams>();
  const queryClient = useQueryClient();

  ///Local States
  const [mounted, setMounted] = useState(false);

  //SearchParams Variables
  //Generated by GetAllSearchParamsBySeqModel
const q = query["q"] || ""
  const sort = query["sort"] || DEFAULT_SORT_BY;
  const limit = query["limit"] || DEFAULT_LIMIT;

  //Page constants
  const DEFAULT_PROVIDERSOURCE = DEFAULT_FORM_VALUE;

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
  } = useProviderSourceStore();

  const [setRecordsToDelete, setIsDialogLoading, setMutate] =
    useProviderSourceDeleteDialog((state) => [
      state.setRecordsToDelete,
      state.setIsDialogLoading,
      state.setMutate,
    ]);

  //API Functions
  const getProviderSources = async ({ pageParam = "" }) => {
    //First argument is the queries from the form, second one is so that the queries can be turned into the desired shape while the defaultFilters will be the searchParams not included from the from
    const axiosParams = getAxiosParams({//Generated by GetAllFilterQueryNameBySeqModel
q}, DEFAULT_FILTERS, {
      cursor: pageParam,
      limit,
      sort,
      fetchCount: fetchCount.toString(),
    }) as Partial<ProviderSourceSearchParams>;

    const { data } = await axiosClient.get<GetProviderSourcesResponse>(`provider-sources`, {
      params: axiosParams,
    });

    return data;
  };

  const updateProviderSources = async (payload: ProviderSourceUpdatePayload) => {
    const { data } = await axiosClient({
      url: "provider-sources/multi",
      method: "post",
      data: payload,
    }) as { data: { recordsCreated: number } };

    return data;
  };

  const deleteProviderSources = async (payload: ProviderSourceDeletePayload) => {
    const { data } = (await axiosClient({
      url: "provider-sources",
      method: "delete",
      data: payload,
    })) as { data: { recordsDeleted: number } };

    return data;
  };

  //API Functions end here

  //Tanstacks
  const { refetch } = useInfiniteQuery(["providerSources"], getProviderSources, {
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
      ...DEFAULT_PROVIDERSOURCE,
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
        ...DEFAULT_PROVIDERSOURCE,
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
        ...DEFAULT_PROVIDERSOURCE,
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

  // Usage for deleteProviderSourceMutation
  const deleteProviderSourceMutation = useHandleMutation(
    deleteProviderSources,
    (data) => {
      return "Provider Source(s) deleted successfully";
    },
    (recordCount, data) => {
      return recordCount - (data.recordsDeleted || 0);
    }
  );

  // Usage for updateProviderSources
  const updateProviderSourcesMutation = useHandleMutation(
    updateProviderSources,
    (data) => {
      return "Provider Source list updated successfully";
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
      ["providerSources"],
      (data: InfiniteData<GetProviderSourcesResponse> | undefined) => {
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
  const handleSubmit = async (values: ProviderSourceFormikInitialValues) => {
    //The reference is the index of the row
    const ProviderSourcesToBeSubmitted = values.ProviderSources.filter((item) => item.touched);

    if (ProviderSourcesToBeSubmitted.length > 0) {
      const payload: ProviderSourceUpdatePayload = {
        ProviderSources: ProviderSourcesToBeSubmitted,
      };

      updateProviderSourcesMutation(payload);
    }
  };

  useEffect(() => {
    setMounted(true);
    setMutate(deleteProviderSourceMutation);
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
        ProviderSources: currentData,
      }}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validationSchema={ProviderSourceArraySchema}
      validateOnChange={false}
    >
      {(formik) => <ProviderSourceFormArray formik={formik} />}
    </Formik>
  );
};

export default ProviderSourceTable;
