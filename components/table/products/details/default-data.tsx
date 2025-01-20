'use client';
import { use, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import API from "@/config/api";
import { dataDetailsProducts } from "./data";
import DetailPage from "./page";
export default function DataFieldItemsProducts({
  params
}: {
  params: string
}) {

  const mutation = useMutation({
    mutationFn: async () => {
      if (params == 'new') return dataDetailsProducts
      else {
        const res = await fetch(API.PRODUCTS.GET_LIST);
        const data = await res.json();
        return data;
      }
    },
    onSuccess(data) {
      return data
    },
    onError(error) {
      return error
    }
  });

  useEffect(() => {
    mutation.mutateAsync()
  },[])

  if (mutation.isPending) return <div className="flex justify-center items-center text-sky-500">Loading...</div>

  if (mutation.isError) return <div className="text-red-500">An error has occurred: {mutation.error.message}</div>
  
  if (mutation.isSuccess)
    return <DetailPage data={mutation.data} />
}