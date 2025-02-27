import { Card, CardContent, CardHeader } from "@/components/ui";
import { Logo } from "@/lib";
import Image from "next/image";
import Link from "next/link";

interface PopularProductCardProps {
  images: string[];
  title?: string;
  href?: string;
}

export const MostViewedCategoryCard = ({
  images,
  title,
  href,
}: PopularProductCardProps) => {
  return (
    <Card className="w-full  mx-auto border-none shadow-none ">
      <CardContent className="flex flex-col aspect-square  justify-center p-2 border-[0.3px] shadow-md rounded-xl gap-2">
        <CardHeader className="flex items-start p-2 font-bold text-[14px]">
          {title ?? "ELECTRONICS"}
        </CardHeader>
        <Link href={href ?? "#"} className="overflow-hidden rounded-lg">
          <Image
            src={images[0] ?? Logo}
            width="500"
            height="500"
            alt="Product image"
            className="min-h-[156px] max-h-[156px]  w-full object-cover rounded-lg overflow-hidden  duration-150 hover:scale-110"
          />
        </Link>

        <div className="grid grid-cols-2 place-content-center gap-2">
          <Link href={href ?? "#"} className=" overflow-hidden rounded-md">
            <Image
              loading="lazy"
              width={500}
              height={500}
              src={images[1] ?? Logo}
              alt="..."
              className="size-full object-cover min-h-[150px] max-h-[150px] rounded-md hover:scale-110 duration-150"
            />
          </Link>
          <Link href={href ?? "#"} className="overflow-hidden rounded-md">
            <Image
              loading="lazy"
              width={500}
              height={500}
              src={images[2] ?? Logo}
              alt="..."
              className="size-full object-cover min-h-[150px] max-h-[150px] rounded-md hover:scale-110 duration-150"
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
