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

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
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