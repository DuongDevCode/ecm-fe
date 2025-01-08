'use client'
import { DataTable } from "@/components/table/users/data-table";
import {
  useQuery
} from '@tanstack/react-query'
import API from "@/config/api";
import { columns } from "@/components/table/users/data-table-columns";
import { useState, useMemo } from "react";
export default function UserPage() {

  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 20
  })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  )

  const { isPending, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch(API.USER.GET_LIST).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return <div className="flex justify-center items-center text-sky-500">Loading...</div>

  if (error) return <div className="text-red-500">An error has occurred: {error.message}</div>
  
  return (
    <div className="p-2">
      <h1 className="font-semibold">Danh sách thông tin User</h1>
      <DataTable
        columns={columns}
        data={data.data}
        totalPages={data.totalElements}
        pagination={pagination}
        setPagination={setPagination}
        totalElements={data.totalElements}
      />
    </div>
  );
}