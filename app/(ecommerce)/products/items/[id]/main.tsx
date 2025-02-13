'use client'
import { useQuery } from "@tanstack/react-query"
import API from "@/config/api"
import { cn } from "@/lib/utils"
import Image from "next/image"
export default function ProductDetailItemPage(
  {id}: {id: string}
) {
  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(API.PRODUCTS.GET_LIST.replaceAll(':id', id)).then((res) =>
        res.json(),
      ),
  })
  if (isPending) return <div className="flex justify-center items-center text-sky-500 mt-24 text-xl">
    Please wait loading 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin")}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  </div>

  if (error) return <div className="text-red-500">An error has occurred: {error.message}</div>
  
  return(
    <div className="flex items-center justify-center border rounded-md">
      <div>
        <Image src={data.image_url} alt={data.name} width={100} height={100} />
      </div>
      <div>
        <ul>
          <li>Name: {data.name}</li>
          <li>Description: {data.description}</li>
          <li>Price: {data.price}</li>
          <li>Quantity: {data.quantity}</li>
          <li>Status: {data.status ? 'Đang bán' : 'Ngừng bán'}</li>
        </ul>
      </div>
    </div>
  )
}