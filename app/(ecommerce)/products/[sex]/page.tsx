import CategoriesPage from "@/components/layout/contents/men"
export default async function SexProductsPage({ params }: { params: any }) { 
  const { sex } = await params
  return <CategoriesPage sex={sex} />
}