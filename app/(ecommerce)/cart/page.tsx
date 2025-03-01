"use client";
import Breadcrumb from "@/components/ui/breadcrumb";
import DataTable from "@/components/table/frontStore/cart/data-table";
import { columns } from "@/components/table/frontStore/cart/data-table-columns";
import { useEffect, useMemo, useState } from "react";
import { PaginationState } from "@tanstack/react-table";
import datas from "@/components/table/frontStore/cart/data.json";
import { Button } from "@/components/ui/button";
import { getCurrencyFormat } from "@/lib/utils";
// import { ITypeColTableSchema, ITypeColTable } from "@/components/table/frontStore/cart/schema";

const breadcrumbItems = [{ title: "Cart", link: "" }];

function Summary({totalPrice}: {totalPrice: number}) {
  return(
    <section className="col-span-1">
      <h1>Order summary</h1>
      <div className="w-full grid grid-cols-2">
        <label>Sub total:</label>
        <span>${getCurrencyFormat(totalPrice).replace('₫', '')}</span>
        <label className="font-semibold">Total:</label>
        <span>${getCurrencyFormat(totalPrice).replace('₫', '')}</span>
      </div>
      <p className="italic">(Inclusive of tax $0.00)</p>
      <Button variant={'default'}>Checkout</Button>
    </section>
  )
}

function Table({
  data
}: {
  data: any[]
}) {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );
  return (
    <DataTable
      columns={columns}
      data={data ?? []}
      totalPages={0}
      pagination={pagination}
      setPagination={setPagination}
    />
  );
}

export default function Page() {
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    if (datas) {
      const result = datas.reduce(function (acc, obj) { return acc + obj.lineTotalInclTax.value; }, 0);
      setTotal(result)
    }
  }, [])

  return (
    <div className="w-full flex flex-col justify-center px-4 py-2">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 mt-2">
        <Table data={datas} />
        <Summary totalPrice={total} />
      </div>
    </div>
  );
}


