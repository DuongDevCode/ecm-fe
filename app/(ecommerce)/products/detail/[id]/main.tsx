"use client";
import { useQuery } from "@tanstack/react-query";
import API from "@/config/api";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { getCurrencyFormat } from "@/lib/utils";
import Breadcrumb from "@/components/ui/breadcrumb";
import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { useStore } from "@/components/store/cart/store";
import cat from '@/public/cat.jpg'
import dog from '@/public/dog.jpg'

const breadcrumbItems = [
  { title: "Home", link: "/dashboard" },
  { title: "Mountain", link: "" },
];

interface IType {
  size: string
  color: string
  count: string
}

const detailFake = [
  {
    img: cat,
    id: 1
  },
  {
    img: dog,
    id: 2
  }
]

export default function ProductDetailItemPage({ id }: { id: string }) {
  const { setTotalCart } = useStore()
  const classBtn = "border p-2 hover:border-[#006e52] hover:text-[#006e52] hover:bg-white cursor-pointer outline-none";
  const [itemImg, setItemImg] = useState<StaticImageData>(cat)
  const [type, setType] = useState<IType>({
    size: "M",
    color: "Black",
    count: '1',
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
        <div className="grid grid-row-1 gap-y-2 gap-x-2 pr-4">
          <div className="flex justify-end">
            <Image
              alt="Vercel logo"
              src={itemImg}
              width={200}
              height={200}
              style={{
                maxWidth: "auto",
                height: "auto",
              }}
              layout="intrinsic"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-end gap-3">
            {
              detailFake?.map((key, idx) => 
                <button 
                  key={idx} 
                  id={`item-${idx}`}
                  value={key.id}
                  onClick={(e: any) => setItemImg(key.img)}
                >
                  <Image
                    alt="Vercel logo"
                    src={key.img}
                    width={65}
                    height={65}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                    layout="intrinsic"
                    loading="lazy"
                  />
                </button>
              )
            }
          </div>
        </div>
        <div className="grid grid-row-1 gap-y-2 max-w-[300px]">
          <h1 className="text-5xl">Animal</h1>
          <p>{getCurrencyFormat(300000000*Number(type.count))}</p>
          <p>Sku: NJC48508</p>
          <ul className="list-disc pl-4">
            <li>
              <span className="font-semibold">Brand:</span> Natural
            </li>
          </ul>
          <div className="grid grid-cols-3 gap-x-2">
            {["M", "L", "XL"].map((item, idx) => (
              <input
                key={idx}
                className={`${classBtn} ${
                  item == type.size && "bg-[#006e52] text-white"
                }`
                }
                type="button"
                value={item}
                title={item}
                onClick={(e: any) => setType({...type, size: e.target.value})}
              />                
            ))}
          </div>
          <div className="grid grid-cols-3 gap-x-2">
            {["Black", "White"].map((item, idx) => (
              <input
                key={idx}
                className={`${classBtn} ${
                  item == type.color && "bg-[#006e52] text-white"
                }`}
                type="button"
                value={item}
                title={item}
                onClick={(e: any) => setType({...type, color: e.target.value})}
              />
            ))}
          </div>
          <input
            className="border p-2 w-20"
            type="number"
            min={1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType({...type, count: e.target.value})}
            value={type.count}
          />
          <button className="hover:text-orange-500 flex items-center border p-2 hover:border-orange-500" onClick={setTotalCart}>
            <ShoppingCartIcon className="w-5 h-5 mr-2" />
            Add to cart
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat mi eget elit elementum, id pulvinar tellus eleifend.
          </p>
        </div>
      </div>
    </div>
  );
}
