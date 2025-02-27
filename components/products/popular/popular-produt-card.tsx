import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import Image from "next/image";

interface PopularProductCardProps {
  title?: string;
  category?: string;
  image?: string;
}

export const PopularProductCards = ({
  title,
  category,
  image,
}: PopularProductCardProps) => {
  return (
    <Card className="w-full max-w-sm mx-auto border-none shadow-none">
      <CardContent className="flex aspect-square items-center justify-center p-2 border-[0.3px] shadow-md rounded-xl">
        <div className="overflow-hidden rounded-md">
          <Image
            src={image ?? ""}
            width="500"
            height="500"
            alt="Product image"
            className="aspect-square object-cover rounded-lg overflow-hidden hover:scale-110 duration-150"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-3 px-0">
        <div className="text-black text-sm md:text-base font-bold md:font-extrabold capitalize truncate text-ellipsis overflow-hidden w-full">
          {title}
        </div>
        <div className="electronics  text-kgray-text text-xs md:text-sm font-semibold truncate  uppercase text-ellipsis overflow-hidden w-full">
          {category}
        </div>
      </CardFooter>
    </Card>
  );
};
