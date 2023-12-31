//Generated by WriteToUsemodeldeletedialog_ts - useModelDeleteDialog.ts
import { StateDeletePayload } from "@/interfaces/StateInterfaces";
import { create } from "zustand";

type State = {
  recordsToDelete: string[];
  setRecordsToDelete: (recordsToDelete: string[]) => void;
  isDialogLoading: boolean;
  setIsDialogLoading: (isDialogLoading: boolean) => void;
  mutate?: (payload: StateDeletePayload) => void;
  setMutate: (mutate: (payload: StateDeletePayload) => void) => void;
};

// Create your store, which includes both state and (optionally) actions
const useStateDeleteDialog = create<State>((set) => ({
  recordsToDelete: [],
  setRecordsToDelete: (recordsToDelete) => set({ recordsToDelete }),
  isDialogLoading: false,
  setIsDialogLoading: (isDialogLoading) => set({ isDialogLoading }),
  setMutate: (mutate) => set({ mutate }),
}));

export { useStateDeleteDialog };
