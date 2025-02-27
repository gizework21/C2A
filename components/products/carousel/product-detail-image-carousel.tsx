"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
} from "@/components/ui";
import { GetProductQuery } from "@/graphql/product/products.generated";
import { ProductsImageType } from "@/graphql/types.generated";
import { getImageUrl } from "@/lib";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IImages {
  __typename?: ProductsImageType | string;
  id: string;
  imageUrl?: string | null;
}
interface ProductDetailImageCarouselProps {
  data: GetProductQuery | undefined;
}
export const ProductDetailImageCarousel = ({
  data,
}: ProductDetailImageCarouselProps) => {
  const images = data?.GetProduct?.images;
  const imageArray = Array.isArray(images) ? images : images ? [images] : [];
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<IImages>(imageArray[0]);

  useEffect(() => {
    thumbnailApi?.on("scroll", (index) => {
      const selected = index.selectedScrollSnap();
      setSelectedImage(imageArray[selected]);
    });

    return () => {
      thumbnailApi?.destroy();
    };
  }, [thumbnailApi]);

  return (
    <div>
      <Carousel className="w-full  max-w-[548px]" setApi={setThumbnailApi}>
        <CarouselContent>
          {data?.GetProduct?.images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <div className="relative h-[300px] lg:h-[548px] overflow-hidden">
                    <Image
                      src={getImageUrl(item.imageUrl ?? "")}
                      alt={item.imageUrl ?? ""}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full transition-transform duration-150 group-hover:scale-105"
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-lg hover:bg-kaccent hover:text-white size-[40px]">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-lg hover:bg-kaccent hover:text-white size-[40px]">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>

      <div className="flex gap-2 overflow-scroll max-w-[548px] scrollbar-hide">
        {data?.GetProduct?.images.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => {
              thumbnailApi?.scrollTo(index);
            }}
          >
            <Card className="w-[120px] h-[90px] border-none">
              <Image
                src={getImageUrl(item.imageUrl ?? "")}
                alt={item.imageUrl ?? ""}
                width={500}
                height={500}
                className={`${
                  selectedImage === item ? "border border-kaccent" : ""
                }
                  object-cover w-full h-full transition-transform duration-150 group-hover:scale-105`}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
