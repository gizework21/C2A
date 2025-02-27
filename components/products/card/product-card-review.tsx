import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { CardContent } from "@/components/ui";
import { cn } from "@/lib";
import { ShowRatingStar } from "@/components/rating";
import { AddToWishlistButton } from "@/components/wishlist";
import { Share2 } from "lucide-react";
import { AddToCartBtn } from "@/components/cart";
import { DiscountTag } from "@/components/products";

interface ProductReview extends Product {
  discount?: number;
}

interface ProductCardProps {
  product: ProductReview;
  className?: string;
  auth?: boolean;
  discount?: number;
}

export const ProductCardReview = ({
  product,
  className,
  discount,
}: ProductCardProps) => {
  return (
    <CardContent
      className={cn(
        "w-full max-w-sm mx-auto h-[290px] md:h-[360px] shadow-md p-0 md:p-1 rounded-[10px] border-[0.5px] border-kaccent/50 relative",
        className
      )}
    >
      <CardContent className="flex aspect-auto items-center justify-center p-2 rounded-lg overflow-hidden relative">
        <Link
          href={`/product/${product.id}`}
          className="overflow-hidden rounded-lg w-full"
        >
          <Image
            src={product.image}
            width="500"
            height="500"
            alt="Product image"
            className="w-full h-[180px] md:h-[236px] object-cover rounded-lg transition-transform duration-150 overflow-hidden hover:scale-110"
          />
        </Link>
        {discount && <DiscountTag />}
      </CardContent>

      <CardContent className="px-2 space-y-1 md:space-y-2">
        <p className="font-bold line-clamp-1 text-[14px] montserrat">
          {product.name}
        </p>
        <div className="flex gap-2 items-center">
          <ShowRatingStar rating={product.rating} />
          <span className="text-gray-300 text-[9px]">(No review yet)</span>
        </div>
        <p className="font-extrabold montserrat text-[14px] md:text-[20px]">
          ${product.price}
        </p>
      </CardContent>
    </CardContent>
  );
};
