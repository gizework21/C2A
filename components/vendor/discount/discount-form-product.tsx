import { useDiscount } from "@/hooks/use-discount";
import { getImageUrl } from "@/lib";
import { X } from "lucide-react";
import Image from "next/image";

export const DiscountFormProduct = () => {
  const discount = useDiscount();
  return (
    <div className="flex gap-4 overflow-auto">
      {discount.products.map((item) => {
        return (
          <div
            className="size-[72px] border flex flex-col items-center text-start relative"
            key={item.id}
          >
            <Image
              src={getImageUrl(item.imageUrl ?? "")}
              width={500}
              height={500}
              alt="Discount"
              className="object-cover size-[50px] "
            />

            <p className="text-[12px] line-clamp-1">{item.name}</p>
            <button
              className="absolute top-0 right-0 text-xs"
              onClick={() => discount.addProduct(item)}
            >
              <X size={8} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
