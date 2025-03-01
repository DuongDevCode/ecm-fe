import ProductDetailItemPage from "./main";
export default async function ProductsItemsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = (await params).id;
  return <ProductDetailItemPage id={productId} />;
}
