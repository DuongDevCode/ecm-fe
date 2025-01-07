import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  countPage: number;
  totalCount: number;
}

export function DataTablePagination<TData>({
  table,
  countPage,
  totalCount,
}: DataTablePaginationProps<TData>) {
  const [pageIn, setPageIn] = useState(() => {
    return table.getState().pagination.pageIndex + 1;
  });

  const handleChangePageIn = (e: any) => {
    setPageIn(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      if (pageIn && pageIn > 0) {
        if (pageIn > table.getPageCount()) {
          table.setPageIndex(table.getPageCount());
          setPageIn(table.getPageCount());
        } else {
          table.setPageIndex(Math.ceil(pageIn) - 1);
          setPageIn(Math.ceil(pageIn));
        }
      } else {
        table.setPageIndex(0);
        setPageIn(1);
      }
    }
  };

  return (
    <footer className="flex justify-between items-center">
      <p>
        Hiển thị <span className="font-semibold">{countPage}</span> bản ghi /
        tổng số <span className="font-semibold">{totalCount}</span> bản ghi
      </p>
      <div className="flex items-center justify-between px-2 h-[45px]">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Số bản ghi / trang:</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
              // disabled={true}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-center text-sm font-medium gap-2">
            <Input
              value={pageIn}
              type="number"
              onChange={handleChangePageIn}
              onKeyDown={handleEnter}
              className="h-7 w-[80px]"
              min={1}
              max={table.getPageCount()}
            />{" "}
            / {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Chuyển tới trang đầu</span>
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Chuyển tới trang trước</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Chuyển tới trang tiếp theo</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Chuyển tới trang cuối</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
