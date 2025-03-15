import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductNoThumbnail from "@/components/common/ProductNoThumbnail";

function Current({ image }: { image: {
  single: string, // StaticImageData,
  alt: string
  thumb: string
} | null }) {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    setHeight(document.getElementById("product-current-image")?.offsetWidth);
  }, []);

  return (
    <div
      id="product-current-image"
      style={{ background: "#f6f6f6" }}
      className="product-image product-single-page-image flex justify-center items-center border"
    >
      {image && (
        <Image 
          src={image?.single} 
          alt={image?.alt} 
          className="self-center" 
          width={500}
          height={500}
          style={{
            maxWidth:'100%',
            height: 'auto'
          }}
          loading="lazy"
        />
      )}
      {!image && <ProductNoThumbnail width={250} height={250} />}
    </div>
  );
}

export default function Images({
  product,
}: {
  product: { image: {
    single: string, //StaticImageData,
    alt: string,
    thumb: string
  }; gallery: any[] };
}) {
  const { image, gallery } = product;
  const [current, setCurrent] = useState(image);
  const [thumbs, setThumbs] = useState(gallery);

  useEffect(() => {
    setCurrent(image);
    setThumbs(() => {
      const gls = [...gallery];
      if (image) {
        gls.unshift(image);
      }
      return gls;
    });
  }, []);

  return (
    <div className="product-single-media mx-3">
      <Current image={current} />
      <ul className="more-view-thumbnail product-gallery mt-8 grid grid-cols-4 gap-4">
        {thumbs.map((i, j) => (
          <li key={j} className="flex justify-center items-center">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setCurrent({ ...i });
              }}
            >
              <Image
                className="border hover:border-sky-500"
                src={i.thumb}
                alt="thumbnail_img"
                width={100}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                loading="lazy"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
