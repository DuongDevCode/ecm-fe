import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  OnChangeFn,
  PaginationState,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "../users/data-table-pagination";
import DataTableToolbar from "../users/data-table-toolbar";
interface PaginationProps {
  pageIndex: number;
  pageSize: number;
}

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  totalPages: number | undefined;
  pagination: PaginationProps;
  setPagination: OnChangeFn<PaginationState>;
  totalElements: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  totalPages,
  pagination,
  setPagination,
  totalElements
}: Props<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    id: false,
  });

  const table = useReactTable({
    data,
    columns,
    pageCount: totalPages ?? -1,
    state: {
      pagination,
      columnVisibility,
    },
    onPaginationChange: setPagination,
    enableRowSelection: true,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  function renderTableBody() {
    if (table.getRowModel().rows.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-16 text-center">
            Không có dữ liệu.
          </TableCell>
        </TableRow>
      )
    }
    return table.getRowModel().rows.map((row) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
        {row.getVisibleCells().map((cell) => {
          return (
            <TableCell key={cell.id} className={`p-2 !align-top ${fixedRow(cell.id)}`}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          );
        })}
      </TableRow>
    ))
  }

  return (
    <>
      {/* <DataTableToolbar /> */}
      <div className="rounded-md flex border overflow-auto">
        <Table>
          <TableHeader className="z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`${classHeader(
                        header.id
                      ) + ' ' + fixedRow(header.id)} p-2 text-gray-900 dark:bg-gray-700 dark:text-slate-50 font-bold`}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} countPage={data?.length} totalCount={totalElements} />
    </>
  )
}

const fixedRow = (idRow: string) => {
  if (idRow.includes("actions")) {
    return "sticky right-0 opacity-95 bg-muted";
  }
  return "";
}

export const classHeader = (header: string) => {
  if (header === "id" || header === "actions") {
    return "min-w-[80px] opacity-95 bg-muted";
  }
  if (header === "fromAccId") {
    return "min-w-[160px] bg-slate-200";
  }
  return "min-w-[130px] bg-slate-200";
};