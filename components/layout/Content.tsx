'use client'
import Image from "next/image";
import { CarouselPlugin } from "./Carousel";

export default function ContentPage() {
   
    return (
        <section>
            <CarouselPlugin />
            {/* <div className="w-full h-80 bg-gray-200 flex justify-center items-center opacity-50 border-b border-b-gray-400">
                <Image src={'https://nextjs.org/icons/next.svg'} alt="banner" width={100} height={100} priority />
            </div> */}
        </section>
    );
}
