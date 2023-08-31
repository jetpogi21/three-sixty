//Generated by WriteToUsemodelstore_ts - useModelStore.ts
import { TrackingStatusFormikShape } from "@/interfaces/TrackingStatusInterfaces";
import { DEFAULT_SORT_BY } from "@/utils/constants/TrackingStatusConstants";
import { RowSelectionState } from "@tanstack/react-table";
import { create } from "zustand";

type State = {
  recordCount: number;
  page: number;
  cursor: string;
  lastPage: number;
  fetchCount: boolean;
  rowSelection: RowSelectionState;
  currentData: TrackingStatusFormikShape[];
  isUpdating: boolean;
  sort: string;
  hasUpdate: boolean;
};

type Actions = {
  setRecordCount: (recordCount: number) => void;
  setPage: (page: number) => void;
  setCursor: (cursor: string) => void;
  setLastPage: (lastPage: number) => void;
  setFetchCount: (fetchCount: boolean) => void;
  setRowSelection: (idx: number) => void;
  resetRowSelection: () => void;
  setRowSelectionToAll: (idx: number) => void;
  setCurrentData: (item: TrackingStatusFormikShape[]) => void;
  setIsUpdating: (isUpdating: boolean) => void;
  setSort: (sort:string) => void;
  setHasUpdate: (hasUpdate: boolean) => void;
};

// Create your store, which includes both state and (optionally) actions
const useTrackingStatusStore = create<State & Actions>((set) => ({
  recordCount: 0,
  page: 0,
  cursor: "",
  lastPage: 0,
  fetchCount: true,
  rowSelection: {},
  deletedRows: [],
  currentData: [],
  isLoading: false,
  isFetching: false,
  isUpdating: false,
  setRecordCount: (recordCount) => set({ recordCount }),
  setPage: (page) => set({ page }),
  setCursor: (cursor) => set({ cursor }),
  setLastPage: (lastPage) => set({ lastPage }),
  setFetchCount: (fetchCount) => set({ fetchCount }),
  setRowSelection: (idx: number) =>
    set((state) => ({
      rowSelection: { ...state.rowSelection, [idx]: !state.rowSelection[idx] },
    })),
  resetRowSelection: () => set({ rowSelection: {} }),
  setRowSelectionToAll: (idx: number) => {
    const rowSelection: Record<number, boolean> = {};
    for (let index = 0; index < idx; index++) {
      rowSelection[index] = true;
    }
    return set({ rowSelection });
  },
  setCurrentData: (item) => set({ currentData: [...item] }),
  setIsUpdating: (isUpdating: boolean) => set({ isUpdating }),
  sort: DEFAULT_SORT_BY,
  setSort: (sort) => set({ sort }),
  hasUpdate: false,
  setHasUpdate: (hasUpdate) => set({ hasUpdate: hasUpdate }),
}));

export { useTrackingStatusStore };
