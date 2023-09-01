//Generated by WriteToModelmulticreatedeletedialog_tsx - ModelMultiCreateDeleteDialog.tsx
"use client";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { useProviderSourceDeleteDialog } from "@/hooks/provider-sources/useProviderSourceDeleteDialog";
import {
  PLURALIZED_VERBOSE_MODEL_NAME,
  VERBOSE_MODEL_NAME,
} from "@/utils/constants/ProviderSourceConstants";
import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ProviderSourceDeletePayload } from "@/interfaces/ProviderSourceInterfaces";
import axiosClient from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { useProviderSourceStore } from "@/hooks/provider-sources/useProviderSourceStore";

export function ProviderSourceMultiCreateDeleteDialog() {
  const [mounted, setMounted] = useState(false);
    const [
    isDialogLoading,
    recordsToDelete,
    setRecordsToDelete,
    setIsDialogLoading,
    mutate,
  ] = useProviderSourceDeleteDialog((state) => [
    state.isDialogLoading,
    state.recordsToDelete,
    state.setRecordsToDelete,
    state.setIsDialogLoading,
    state.mutate,
  ]);

  const [currentData, resetRowSelection, setCurrentData] = useProviderSourceStore((state) => [
    state.currentData,
    state.resetRowSelection,
    state.setCurrentData,
  ]);

  const deleteProviderSources = async (payload: ProviderSourceDeletePayload) => {
    const { data } = (await axiosClient({
      url: "provider-sources",
      method: "delete",
      data: payload,
    })) as { data: { recordsDeleted: number } };

    return data;
  };

  //state transformation
  const open = recordsToDelete.length > 0;
  const s = recordsToDelete.length > 1 ? "s" : "";
  const caption =
    recordsToDelete.length > 1 ? PLURALIZED_VERBOSE_MODEL_NAME
      : VERBOSE_MODEL_NAME;

  const mutateProviderSource = () => {
    mutate && mutate({ deletedProviderSources: recordsToDelete });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogPrimitive.Close
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            onClick={() => setRecordsToDelete([])}
            disabled={isDialogLoading}
          >
            <X className="w-4 h-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
          <DialogHeader>
            <DialogTitle>{`Delete ${caption}`}</DialogTitle>
            <DialogDescription>
              {`This will permanently delete the selected record${s}.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              size="sm"
              variant={"destructive"}
              isLoading={isDialogLoading}
              onClick={() => {
                mutateProviderSource();
              }}
            >
              Proceed
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => {
                setRecordsToDelete([]);
              }}
              disabled={isDialogLoading}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  );
}