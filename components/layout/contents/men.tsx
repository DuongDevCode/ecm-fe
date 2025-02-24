'use client'
import { useQuery } from "@tanstack/react-query"
import API from "@/config/api"
import BreadcrumbCustom from "@/components/BreadcrumbCustom"
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
      <BreadcrumbCustom props={{
        title: 'Men',
        url: '/products/men'
      }} />
      <div className="w-full h-full bg-white">{sex}</div>
    </>
    
  )
}