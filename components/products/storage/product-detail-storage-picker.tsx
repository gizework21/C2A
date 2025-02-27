import { ProductDetailSearchParams } from "@/types/product";
import { cn } from "@/lib";
import Link from "next/link";

interface ICapacity {
  capacity: string;
}

interface CapacityButtonProps {
  storage: string;
  href: ProductDetailSearchParams;
}

const storage: ICapacity[] = [
  { capacity: "128GB" },
  { capacity: "256GB" },
  { capacity: "512GB" },
  { capacity: "1TB" },
];

interface ProductDetailStoragePickerProps {
  href: ProductDetailSearchParams;
}

export const ProductDetailStoragePicker = ({
  href,
}: ProductDetailStoragePickerProps) => {
  return (
    <>
      <p className="inter text-[16px] font-semibold ">Select Capacity</p>
      <div className="flex gap-2 ">
        {storage.map((capacity, index) => (
          <CapacityButton storage={capacity.capacity} key={index} href={href} />
        ))}
      </div>
    </>
  );
};

const CapacityButton = ({ storage, href }: CapacityButtonProps) => {
  return (
    <div className="group transition-all duration-150 p-0">
      <Link
        replace={true}
        scroll={false}
        href={"?" + new URLSearchParams({ ...href, storage }).toString()}
      >
        <p
          className={cn(
            "border-2 px-3 py-1 rounded-md hover:border-kaccent",
            storage === href.storage && "border-kaccent"
          )}
        >
          {storage}
        </p>
      </Link>
      <div
        className={`${
          href.storage === storage ? "bg-kaccent" : "bg-kwhite-background"
        } h-[2px] mt-2  group-hover:bg-kaccent w-auto `}
      />
    </div>
  );
};
