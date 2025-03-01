'use client'
import { useQuery } from "@tanstack/react-query"
import API from "@/config/api"
export default function CategoriesPage({sex}: {sex: string}) {
  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(API.CATEGORIES.LIST).then((res) =>
        res.json(),
      ),
  })
  
  return (
    <>
      <div className="w-full h-full bg-white">{sex}</div>
    </>
    
  )
}