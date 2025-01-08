'use client'
import LogoBanner from "@/components/LogoBanner"
import styles from '@/styles/styles.module.css'
import FooterPage from "@/components/layout/Footer"
export default function DashboardPage() {
  const classBtnContent = 'text-sm bg-black text-white hover:underline hover:bg-[#006e52] py-2 px-4 rounded-sm'
  const classPCustom = 'text-gray-600 text-sm py-3'
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
            <div className="listing-tem">
              <div className={`${styles['product-thumbnail-listing']}`}>
                <a href="/men/nike-react-phantom-run-flyknit-2-180">
                  <img src="https://demositefiles.blob.core.windows.net/images/catalog/1742/9873/plv3335-Pink-listing.png" alt="Nike react phantom run flyknit 2" />
                </a>
              </div>
              <div className={`${styles['product-name']} product-list-name mt-4 mb-1`}>
                <a href="/men/nike-react-phantom-run-flyknit-2-180" className="font-bold hover:underline h5">
                <span>Nike react phantom run flyknit 2</span>
                </a>
              </div>
              <div className="product-price-listing">
                <div>
                  <span className="sale-price font-semibold">$718.00</span>
                </div>
              </div>
            </div>

            <div className="listing-tem">
              <div className={`${styles['product-thumbnail-listing']}`}>
                <a href="/men/nike-react-phantom-run-flyknit-2-180">
                  <img src="https://demositefiles.blob.core.windows.net/images/catalog/9381/3866/plv3878-Purple-listing.png" alt="Nike react phantom run flyknit 2" />
                </a>
              </div>
              <div className={`${styles['product-name']} product-list-name mt-4 mb-1`}>
                <a href="/men/nike-react-phantom-run-flyknit-2-180" className="font-bold hover:underline h5">
                <span>Nike react infinity run flyknit</span>
                </a>
              </div>
              <div className="product-price-listing">
                <div>
                  <span className="sale-price font-semibold">$543.00</span>
                </div>
              </div>
            </div>

            <div className="listing-tem">
              <div className={`${styles['product-thumbnail-listing']}`}>
                <a href="/men/nike-react-phantom-run-flyknit-2-180">
                  <img src="https://demositefiles.blob.core.windows.net/images/catalog/8957/6157/plv1121-White-listing.png" alt="Nike react phantom run flyknit 2" />
                </a>
              </div>
              <div className={`${styles['product-name']} product-list-name mt-4 mb-1`}>
                <a href="/men/nike-react-phantom-run-flyknit-2-180" className="font-bold hover:underline h5">
                <span>Nike court vision low</span>
                </a>
              </div>
              <div className="product-price-listing">
                <div>
                  <span className="sale-price font-semibold">$904.00</span>
                </div>
              </div>
            </div>

            <div className="listing-tem">
              <div className={`${styles['product-thumbnail-listing']}`}>
                <a href="/men/nike-react-phantom-run-flyknit-2-180">
                  <img src="https://demositefiles.blob.core.windows.net/images/catalog/2832/2828/plv7836-Blue-listing.png" alt="Nike react phantom run flyknit 2" />
                </a>
              </div>
              <div className={`${styles['product-name']} product-list-name mt-4 mb-1`}>
                <a href="/men/nike-react-phantom-run-flyknit-2-180" className="font-bold hover:underline h5">
                <span>Nike zoom fly</span>
                </a>
              </div>
              <div className="product-price-listing">
                <div>
                  <span className="sale-price font-semibold">$930.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterPage />
    </>
  )
}