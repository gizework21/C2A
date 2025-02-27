import { C2AFilter } from "./c2a-filter";
import { FilterByColor } from "./filter-by-color";
import { CatagoriesBrand } from "@/types/product";
import { cn, ProductPageSearchParams } from "@/lib";
import { Filter } from "lucide-react";

const brands: CatagoriesBrand[] = [
  { name: "Apple", id: "apple" },
  { name: "Samsung", id: "samsung" },
  { name: "Tecno", id: "Tecno" },
  { name: "Huawie", id: "Huawie" },
  { name: "Nokia", id: "Nokia" },
];

const price: CatagoriesBrand[] = [
  { name: "$ 0-99.99", id: "0-99.99" },
  { name: "$ 100-199.99", id: "100-199.99" },
  { name: "$ 200-299.99", id: "200-299.99" },
  { name: "$ 300-399.99", id: "300-399.99" },
  { name: "$ 4000", id: "4000" },
];

const rating: CatagoriesBrand[] = [
  { name: "5", id: "5" },
  { name: "4", id: "4" },
  { name: "3", id: "3" },
  { name: "2", id: "2" },
  { name: "1", id: "1" },
];

interface SideBarFilterProductProps {
  searchParams: ProductPageSearchParams;
  className?: string;
}

export const SideBarFilterProduct = ({
  searchParams,
  className,
}: SideBarFilterProductProps) => {
  return (
    <div
      className={cn(
        "min-w-[20%] bg-kgray-bg ml-8 px-4 space-y-4 py-4 rounded-[10px] hidden lg:block h-full",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Filter size={20} />
        <p className="font-semibold text-xl text-kblack-text inter">FILTER</p>
      </div>
      <h1 className="font-bold text-sm text-kblack-text montserrat">
        CATEGORIES
      </h1>

      {/* filter by brand */}
      <C2AFilter href={searchParams} title="Brands" catagories={brands} />

      {/* filter by price */}
      <C2AFilter href={searchParams} title="Price" catagories={price} />

      {/* filter by rating */}
      <C2AFilter
        href={searchParams}
        title="Product Rating"
        catagories={rating}
        rating
      />

      {/* filter by color */}
      <FilterByColor href={searchParams} />
    </div>
  );
};
