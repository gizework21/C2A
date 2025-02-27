"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { BannerDisplayContent } from "./home-banner-content";
import { HomeBannerIndicator } from "../indicators";
import { AllBannersQuery } from "@/graphql/landing/landing.generated";

interface HomeBannerCardProps {
  data: AllBannersQuery | undefined;
}

export const HomeBannerCard = ({ data }: HomeBannerCardProps) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      renderIndicator={HomeBannerIndicator}
      showThumbs={false}
      interval={3000}
      className="bg-kwhite"
    >
      {data?.allBanners?.banners?.map((banner) => {
        const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL as string;
        const imageUrl = `${baseUrl}${banner?.image}`;

        return (
          <div key={banner?.id}>
            <Image
              priority
              width="500"
              height="500"
              src={imageUrl}
              alt={banner?.id ?? ""}
              className="w-full h-[300px] md:h-[600px] object-cover"
            />
            <BannerDisplayContent
              title={banner?.title ?? ""}
              description={banner?.description ?? ""}
            />
          </div>
        );
      })}
    </Carousel>
  );
};
