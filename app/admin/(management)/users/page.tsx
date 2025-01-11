'use client'
import { DataTable } from "@/components/table/common/data-table";
import {
  useQuery
} from '@tanstack/react-query'
import API from "@/config/api";
import { columns } from "@/components/table/users/data-table-columns";
import { useState, useMemo } from "react";
import { SquarePlusIcon, UserCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
export default function UserPage() {
  const router = useRouter()
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
      <section className="flex justify-between mb-4 items-center">
        <h1 className="font-semibold flex items-center">
          <UserCircle2 className="h-6 w-6 mr-2" /> User list information
        </h1>
        <button className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md px-2 py-1" onClick={() => router.push('/admin/register')}>
          <SquarePlusIcon className="h-4 w-4" />
        </button>
      </section>
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