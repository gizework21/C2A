import Image from "next/image";

import { cn } from "@/lib";
import { SponsorsContent } from "@/types/sponsor";
import { LinkButton } from "../buttons";

export const SponsorCard = ({
  image,
  alt,
  title,
  description,
  className,
  imageClassName,
}: SponsorsContent) => {
  return (
    <div className="relative montserrat ">
      <Image
        width={500}
        height={500}
        src={image}
        alt={alt}
        className={cn("w-full object-cover rounded-md", imageClassName)}
      />
      <div className="absolute top-[10%] lg:top-[20%] left-[3%] lg:space-y-4 ">
        <div className={cn(className)}>
          <p className="lg:font-bold text-sm lg:text[24px] line-clamp-1 md:line-clamp-2">
            {title}
          </p>
          <p className="lg:font-medium text-xs md:text[12px] line-clamp-1 md:line-clamp-2">
            {description}
          </p>
        </div>
        <LinkButton
          href="/product/1"
          variant="outline"
          size="sm"
          className="rounded-full"
        >
          View Details
        </LinkButton>
      </div>
    </div>
  );
};
