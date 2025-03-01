import DataFieldItemsProducts from "@/components/table/products/details/Default";
export default async function PageItems({
  params,
}: {
  params: Promise<{ action: string }>
}) {
  return <GetParamsPage params={(await params).action} />
}

function GetParamsPage({
  params
}: {
  params: string
}) {

  if (!['new', 'edit'].includes(params)) return <div className="flex justify-center items-center text-red-500 font-semibold">Not found Page!</div>

  return <DataFieldItemsProducts params={params} />
}