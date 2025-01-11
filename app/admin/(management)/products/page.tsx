'use client'
import { DataTable } from "@/components/table/common/data-table";
import {
  useQuery
} from '@tanstack/react-query'
import API from "@/config/api";
import { columns } from "@/components/table/products/data-table-columns";
import { useState, useMemo } from "react";
import { SquarePlusIcon, UserCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import AddProductButton from "@/components/table/products/actions/Add";
export default function ProductsPage() {
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
    queryKey: ['products'],
    queryFn: () =>
      fetch(API.PRODUCTS.GET_LIST).then(async (res) => {
        const data = await res.json()
        data.data.forEach((item: any, idx: number) =>{
          item['rowIndex'] = (idx + pageIndex * pageSize) + 1
        })
        return data
      }),
  })

  if (isPending) return <div className="flex justify-center items-center text-sky-500">Loading...</div>

  if (error) return <div className="text-red-500">An error has occurred: {error.message}</div>
  
  return (
    <div className="p-2">
      <section className="flex justify-between mb-4 items-center">
        <h1 className="font-semibold flex items-center">
          <UserCircle2 className="h-6 w-6 mr-2" /> Products list
        </h1>
        <AddProductButton />
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