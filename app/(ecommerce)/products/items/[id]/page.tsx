import ProductDetailItemPage from "./main"
export default async function ProductsItemsPage({ params }: { params: any }) {
  const { id } = await params
  return <ProductDetailItemPage id={id} />
}