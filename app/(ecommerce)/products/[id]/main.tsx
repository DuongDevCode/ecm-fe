"use client";
// import { useQuery } from "@tanstack/react-query";
// import API from "@/config/api";
// import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { getCurrencyFormat } from "@/lib/utils";
import Breadcrumb from "@/components/ui/breadcrumb";
import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import mountain from "@/public/mountains.jpg";
import mountainRotate from "@/public/mountains_rotate.jpg";
import Images from "@/components/catalog/product/item/Images";
import Name from "@/components/catalog/product/item/Name";
import AddToCart from "@/components/catalog/product/item/Cart";
import image_json_data from '@/app/(ecommerce)/products/[id]/images.json'
import { ITypeProdSchema } from "@/components/catalog/product/item/type/schema";
import SizeColorProdItem from "@/components/catalog/product/item/SizeColor";

const breadcrumbItems = [
  { title: "Mountain", link: "" },
];

export default function ProductDetailItemPage({ id }: { id: string }) {
  const classBtn =
    "border p-2 hover:border-[#006e52] hover:text-[#006e52] hover:bg-white cursor-pointer outline-none";
  const [itemImg, setItemImg] = useState<StaticImageData>(mountain);
  const [type, setType] = useState<ITypeProdSchema>({
    size: "",
    color: "",
    count: "1",
  });
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () =>
  //     fetch(API.PRODUCTS.GET_LIST.replaceAll(':id', id)).then((res) =>
  //       res.json(),
  //     ),
  // })
  // if (isPending) return <div className="flex justify-center items-center text-sky-500 mt-24 text-xl">
  //   Please wait loading
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     stroke="currentColor"
  //     strokeWidth="2"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     className={cn("animate-spin")}
  //   >
  //     <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  //   </svg>
  // </div>

  // if (error) return <div className="text-red-500">An error has occurred: {error.message}</div>

  return (
    <div className="w-full flex flex-col justify-center px-4 py-2">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
        <Images
          product={{
            image: image_json_data.image,
            gallery: image_json_data.gallery,
          }}
        />
        <div className="flex flex-col gap-y-2 max-w-md">
          <Name name='Landscape painting' />
          <p>{getCurrencyFormat(300000000 * Number(type.count))}</p>
          <p>Sku: NJC48508</p>
          <ul className="list-disc pl-4">
            <li>
              <span className="font-semibold">Brand:</span> Natural
            </li>
          </ul>
          <SizeColorProdItem 
            props={{
              classBtn:classBtn,
              type:type,
              setType: setType
            }}
          />
          <input
            className="border p-2 w-20"
            type="number"
            min={1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setType({ ...type, count: e.target.value })
            }
            value={type.count}
          />
          <AddToCart id_item_prod={id} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat mi eget elit elementum, id pulvinar tellus eleifend.
          </p>
        </div>
      </div>
    </div>
  );
}
