import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  OnChangeFn,
  PaginationState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
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
}
export default function DataTable<TData, TValue>({
  columns,
  data,
  totalPages,
  pagination,
  setPagination,
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
      );
    }
    return table.getRowModel().rows.map((row) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
        {row.getVisibleCells().map((cell) => {
          return (
            <TableCell key={cell.id} className="p-2">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          );
        })}
      </TableRow>
    ));
  }
  return (
    <>
      <div className="rounded-md flex overflow-auto border col-span-2">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={`p-2 bg-slate-200 text-gray-900 dark:bg-gray-700 dark:text-slate-50 font-bold`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
      </div>
      {/* <DataTablePagination table={table} /> */}
    </>
  );
}