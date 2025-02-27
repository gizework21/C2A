"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Title } from "../title";

import {
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { getImageUrl, Logo } from "@/lib";
import { AllBannersQuery } from "@/graphql/landing/landing.generated";

interface ExcitingDealsCarouselProps {
  data: AllBannersQuery | undefined;
}

export const ExcitingDealsCarousel = ({ data }: ExcitingDealsCarouselProps) => {
  return (
    <div>
      <Title title={"Exciting Deals"} />
      <div className="relative w-full mx-auto">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {data?.excitingDeals?.objects?.map((product, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/5" key={index}>
                <Card className="relative group overflow-hidden rounded-lg shadow-lg">
                  <Link
                    href={`product/${
                      product?.product.length && product?.product[0].productId
                    }`}
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">View</span>
                  </Link>
                  <div className="relative h-[270px] overflow-hidden">
                    <Image
                      src={
                        (product?.product?.length ?? 0) > 0
                          ? getImageUrl(
                              product?.product[0].images[
                                product.product[0].images?.length - 1
                              ]?.imageUrl ?? ""
                            )
                          : Logo
                      }
                      alt="Card Image"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full transition-transform duration-150 group-hover:scale-105"
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-lg hover:bg-kaccent hover:text-white ">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-lg hover:bg-kaccent hover:text-white ">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};
