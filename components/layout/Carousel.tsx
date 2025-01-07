import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselPlugin() {
  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  )

  // const img_url_carosel = [
  //   'https://www.monocubed.com/wp-content/uploads/2022/02/reactjs-dev.png',
  //   'https://www.monocubed.com/wp-content/uploads/2021/02/angular.jpg',
  //   'https://www.monocubed.com/wp-content/uploads/2020/10/mb-vue-js.jpg',
  //   'https://www.monocubed.com/wp-content/uploads/2020/10/mb-ember.jpg',
  //   'https://www.monocubed.com/wp-content/uploads/2020/10/mb-jquery.jpg'
  // ]

  return (
    <Carousel
      // plugins={[plugin.current]}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      opts={{
        align: 'start',
        // dragFree: true,
        // watchDrag: false,
        loop: true
      }}
      className="w-full bg-gray-200"
      orientation="horizontal"
    >
      <CarouselContent>
        {
          Array.from({ length: 5 }).map((_, index: number) =>
            <CarouselItem key={index} className='flex items-center'>
                <Card>
                  <CardContent className="flex aspect-square justify-center items-center p-6 w-full">
                    <Image src='/imgs/404-page-not-found.svg' alt="img_carosel" width={100} height={100} style={{width: '100%'}} priority />
                  </CardContent>
                </Card>
            </CarouselItem>
          )
        }
      </CarouselContent>
      <CarouselPrevious className='absolute left-[2rem] top-1/2 transform -translate-y-1/2 z-10' />
      <CarouselNext className='absolute right-[2rem] top-1/2 transform -translate-y-1/2 z-10' />
    </Carousel>
  )
}
