'use client'
import LogoBanner from "@/components/LogoBanner"
export default function DashboardPage() {
  const classBtnContent = 'text-sm bg-black text-white hover:underline hover:bg-[#006e52] py-2 px-4 rounded-sm transition-all duration-300 ease-in-out'
  const classPCustom = 'text-gray-600 text-sm'
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
      <div className="grid grid-cols-3 mt-12 gap-8 px-14">
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
    </>
  )
}