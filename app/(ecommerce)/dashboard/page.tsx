'use client'
import LogoBanner from "@/components/Logo/logoBannerEcm"
import styles from '@/styles/styles.module.css'
import FooterPage from "@/components/layout/Footer"
import { useQuery } from "@tanstack/react-query"
import API from "@/config/api"
import { getCurrencyFormat } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
export default function DashboardPage() {
  const classBtnContent = 'text-sm bg-black text-white hover:underline hover:bg-[#006e52] py-2 px-4 rounded-sm'
  const classPCustom = 'text-gray-600 text-sm py-3'

  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(API.PRODUCTS.GET_LIST.replace('/:id', '')).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return <div className="flex justify-center items-center text-sky-500 mt-24 text-xl">
    Please wait loading ...
  </div>

  if (error) return <div className="text-red-500">An error has occurred: {error.message}</div>

  return (
    <>
      <div className="min-h-[500px] flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #aad3ff, #0056b3)'
      }}>
        <div className="text-block-widget p-8">
          <LogoBanner />
        </div>
        <div className="flex text-left p-5 flex-col">
          <h1 className="text-3xl text-white font-bold font-sans">Your Heading Here</h1>
          <p className="text-sm text-white my-5 mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies sodales mi, at ornare elit semper ac.</p>
          <button className="inline-block text-sm bg-white text-[#0056b3] rounded-md font-bold w-28 h-11">
            SHOP NOW
          </button>
        </div>
      </div>
      {/* -----CONTENT----- */}
      <div className="grid grid-cols-3 gap-8 px-14 m-auto mt-8 max-w-[1200px]">
        <div className="leading-7">
          <h3 className="font-bold">Kids shoes collection</h3>
          <p className={classPCustom}>
            Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
          </p>
          <div className="w-full text-left">
            <button className={classBtnContent}>Shop kids</button>
          </div>
        </div>

        <div className="leading-7">
          <h3 className="font-bold">Women shoes collection</h3>
          <p className={classPCustom}>
            Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
          </p>
          <div className="w-full text-left">
            <button className={classBtnContent}>Shop women</button>
          </div>
        </div>

        <div className="leading-7">
          <h3 className="font-bold">Men shoes collection</h3>
          <p className={classPCustom}>
            Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
          </p>
          <div className="w-full text-left">
            <button className={classBtnContent}>Shop men</button>
          </div>
        </div>
      </div>
      <div className="pt-12 px-[55px] max-w-[1200px] m-auto">
        <div>
          <h3 className="mt-12 mb-12 text-center uppercase h5 tracking-widest">Featured Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {
              (data && data.length) && data?.map((item: any, idx: number) => (
                <div key={idx} className="listing-tem">
                  <a href={`/products/detail/${item.id}`} className={`${styles['product-thumbnail-listing']}`}>
                    <Image src={item.image_url ? item.image_url : null} alt={item.name} width={100} height={100} objectFit="cover" className="w-full h-full" />
                  </a>
                  <div className={`${styles['product-name']} product-list-name mt-4 mb-1`}>
                    <a href={`/products/detail/${item.id}`} className="font-bold hover:underline h5 hover:text-sky-500">{item.name}</a>
                  </div>
                  <div className="product-price-listing">
                    <div>
                      <span className="sale-price font-semibold">{getCurrencyFormat(item.price)}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  )
}