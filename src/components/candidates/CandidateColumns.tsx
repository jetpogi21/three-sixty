//Generated by WriteToModelcolumns_tsx - ModelColumns.tsx
"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/Checkbox";
import { DataTableColumnHeader } from "@/components/ui/DataTable/DataTableColumnHeader";
import { EditableTableCell } from "@/components/ui/DataTable/EditableTableCell";
import { CandidateModel } from "@/interfaces/CandidateInterfaces";
import { DeleteRowColumn } from "@/components/ui/DataTable/DeleteRowColumn";
import { Check, X } from "lucide-react";
import { format } from "date-fns";

//Generated by GetModelRowActionsImport - GetModelRowActionsImport
import { CandidateRowActions } from "@/components/candidates/CandidateRowActions";

export const CandidateColumns: ColumnDef<CandidateModel>[] = [
  {
    id: "select",
    header: ({ table }) => {
      const toggleSelectAllRow = table.options.meta?.toggleSelectAllRow;
      return (
<div className="flex justify-center w-full">
        <Checkbox
          tabIndex={-1}
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={() => {
            toggleSelectAllRow && toggleSelectAllRow();
          }}
          aria-label="Select all"
        />
</div>
      );
    },
    cell: ({ row, table }) => {
      const toggleRow = table.options.meta?.toggleRow;
      return (
<div className="flex justify-center">
        <Checkbox
          tabIndex={-1}
          checked={row.getIsSelected()}
          onCheckedChange={() => {
            toggleRow && toggleRow(row.index);
          }}
          aria-label="Select row"
        />
</div>
      );
    },
  },
  //Generated by GetAllTableFieldCellInputBySeqModel
//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "candidateName",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Candidate Name"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Candidate Name",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "source",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Source"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Source",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "candidateStateID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Candidate State"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.stateList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.State.name
      )
},
  meta: {
    type: "ComboBox", label:"Candidate State",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "providerID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Provider"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.providerList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.Provider.name
      )
},
  meta: {
    type: "ComboBox", label:"Provider",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "providerStateID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Provider State"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "ComboBox", label:"Provider State",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "providerOffice",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Provider Office"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Provider Office",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "providerSourceID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Provider Source"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.providerSourceList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.ProviderSource.name
      )
},
  meta: {
    type: "ComboBox", label:"Provider Source",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "providerTypeID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Provider Type"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.providerTypeList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.ProviderType.name
      )
},
  meta: {
    type: "ComboBox", label:"Provider Type",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "providerContactName",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Provider Contact Name"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Provider Contact Name",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "providerEmail",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Provider Email"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Provider Email",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "providerContactNumber",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Provider Contact Number"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Provider Contact Number",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "email",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Email"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Email",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "employer",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Employer"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Employer",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "employerOfficeID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Employer Office"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.employerOfficeList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.EmployerOffice.name
      )
},
  meta: {
    type: "ComboBox", label:"Employer Office",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "employerStateID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Employer State"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "ComboBox", label:"Employer State",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "employerCandidateID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Employer Candidate ID"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Employer Candidate ID",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "employerCandidateOwner",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Employer Candidate Owner"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Employer Candidate Owner",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "groupSiteID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Group Site"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.groupSiteList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.GroupSite.name
      )
},
  meta: {
    type: "ComboBox", label:"Group Site",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "divisionID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Division"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.divisionList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.Division.name
      )
},
  meta: {
    type: "ComboBox", label:"Division",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "wageSubsidyAmount",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Wage Subsidy Amount"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Currency", label:"Wage Subsidy Amount",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "benchmarkHours",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Benchmark Hours"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Decimal", label:"Benchmark Hours",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "startDate",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Start Date"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        format(new Date(cell.getValue()), "MM/dd/yyyy, EEE")
      )
},
  meta: {
    type: "Date", label:"Start Date",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "statusID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Status"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "ComboBox", label:"Status",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "stageID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Stage"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.stageList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.Stage.name
      )
},
  meta: {
    type: "ComboBox", label:"Stage",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "outcomeReminder",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Outcome Reminder"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Outcome Reminder",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "payslipStatus",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Payslip Status"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Payslip Status",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "priorityID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Priority"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.priorityList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.Priority.name
      )
},
  meta: {
    type: "ComboBox", label:"Priority",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "placementSent",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Placement Sent"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue() ? (
        <Check className="w-4 h-4 text-success" />
      ) : (
        <X className="w-4 h-4 text-destructive" />
      )
      )
},
  meta: {
    type: "Switch", label:"Placement Sent",alignment: "center",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "placementStatusID",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Placement Status"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} options={cell.table.options.meta?.options?.placementStatusList || []}/>
      ) : (
        //@ts-ignore
        cell.row.original.PlacementStatus.name
      )
},
  meta: {
    type: "ComboBox", label:"Placement Status",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "archive",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Archive"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue() ? (
        <Check className="w-4 h-4 text-success" />
      ) : (
        <X className="w-4 h-4 text-destructive" />
      )
      )
},
  meta: {
    type: "Switch", label:"Archive",alignment: "center",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "invoiced",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Invoiced"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue() ? (
        <Check className="w-4 h-4 text-success" />
      ) : (
        <X className="w-4 h-4 text-destructive" />
      )
      )
},
  meta: {
    type: "Switch", label:"Invoiced",alignment: "center",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "invoiceNumber",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Invoice Number"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Invoice Number",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "enquiryDate",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Enquiry Date"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        format(new Date(cell.getValue()), "MM/dd/yyyy, EEE")
      )
},
  meta: {
    type: "Date", label:"Enquiry Date",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "enquiryType",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Enquiry Type"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Text", label:"Enquiry Type",
  },
enableSorting: true
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "wSAgreement",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="WS Agreement"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "FileInput", label:"WS Agreement",
  },
enableSorting: false
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "wSSchedule",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="WS Schedule"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "FileInput", label:"WS Schedule",
  },
enableSorting: false
},//Generated by GetTableFieldCellInput - Editable Table Cell
{
  accessorKey: "notes",
  header: ({ column }) => (
    <DataTableColumnHeader
     
      column={column}
      title="Notes"
    />
  ),
  cell: (cell) => {
 return cell.table.options.meta?.editable ? (
        <EditableTableCell cell={cell} />
      ) : (
        //@ts-ignore
        cell.getValue()
      )
},
  meta: {
    type: "Textarea", label:"Notes",
  },
enableSorting: false
},
  {
    id: "actions",
    //cell component generated by GetActionCell
    cell: (cell) => <CandidateRowActions cell={cell} />,
  },
];