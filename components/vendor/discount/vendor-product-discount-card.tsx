import { C2AButton } from "@/components/buttons";
import { ShowRatingStar } from "@/components/rating";
import { GetAllDealsQuery } from "@/graphql/deals/deals.generated";
import { getImageUrl } from "@/lib";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface VendorProductDiscountProductsProps {
  data: GetAllDealsQuery;
}

export const VendorProductDiscountProducts = ({
  data,
}: VendorProductDiscountProductsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
      {data.allDeals?.objects?.map((product) => {
        const price = product?.product?.length && product.product[0].price;
        const disCount =
          product?.product.length &&
          (product.product[0].price * (product.discountPercent / 100)).toFixed(
            2
          );

        const total = (price ?? 0) + Number(disCount ?? 0);

        return (
          <Link
            className="flex flex-col justify-center p-3 md:p-4 border-[.5px] border-kaccent rounded-[10px] shadow-sm w-full  gap-2 relative"
            key={product?.id}
            href={`/product/${product?.id}`}
          >
            <Image
              height={500}
              width={500}
              src={getImageUrl(
                product?.product[0]?.images[
                  product?.product[0].images.length - 1
                ].imageUrl ?? ""
              )}
              alt="phone"
              className="object-cover w-full h-[234px] rounded-[8px]"
            />

            <p className="montserrat font-bold text-[14px] montserrat truncate">
              {product?.product?.length && product?.product[0].productName}
            </p>

            <ShowRatingStar rating={0} />

            <div className="flex justify-between items-center">
              <div className="flex gap-4 montserrat text-sm md:text-[20px]">
                <p className="line-through text-gray-500">${total}</p>
                <p>{product?.product?.length && price}</p>
              </div>

              <button className="text-kaccent">
                <Edit size={18} />
              </button>
            </div>

            <div className="absolute top-2 right-2">
              <C2AButton
                className="bg-gradient-to-b from-[#FD0000] to-[#552828] size-auto font-bold text-[14px] montserrat rounded-sm px-2"
                size="sm"
              >
                {product?.discountPercent}% off
              </C2AButton>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
