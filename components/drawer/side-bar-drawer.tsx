"use client";

import { C2ADrawer } from "./c2a-drawer";
import { usePathname, useSearchParams } from "next/navigation";
import { C2AFilter, FilterByColor } from "../filter";
import { CatagoriesBrand, ProductPageSearchParams } from "@/types/product";
import { ScrollArea } from "@/components/ui";
import Link from "next/link";
import { DollarSign, Heart, Languages } from "lucide-react";
import { C2ADropdown } from "../dropdown";
import { CurrencyDropdownContent, LanguageDropdownContent, Logo } from "@/lib";
import Image from "next/image";
import { CategoryDropdownHeaderMobile } from "../headers";
import { Suspense } from "react";
import { CircularLoading } from "../loading";

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

export const SideBarDrawer = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const categoryRoute = paths.includes("category");

  const searchParams = useSearchParams();

  const searchParam: ProductPageSearchParams = {
    brand: searchParams.getAll("brand").toString(),
    maxPrice: searchParams.get("maxPrice") ?? "",
    minPrice: searchParams.get("minPrice") ?? "",
    color: searchParams.getAll("color").toString(),
    rating: searchParams.getAll("rating").toString(),
  };

  return (
    <C2ADrawer className="lg:hidden">
      <Image src={Logo} alt={"logo"} height={500} width={500} />
      <div className="space-y-4 mt-6">
        <Link href="/wishlist" className="flex gap-6">
          {" "}
          <Heart />
          <p>Favorites</p>
        </Link>

        <div className="flex items-center gap-2 ">
          <Languages />
          <C2ADropdown
            buttonName={"En"}
            content={LanguageDropdownContent}
            className="hidden lg:flex border-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <DollarSign />
          <C2ADropdown
            buttonName={"USD"}
            content={CurrencyDropdownContent}
            className="hidden md:flex border-none"
          />
        </div>
        <Suspense fallback={<CircularLoading />}>
          <CategoryDropdownHeaderMobile />
        </Suspense>
      </div>
      {categoryRoute && (
        <ScrollArea className="h-screen scrollbar-hide mb-6">
          {/* filter by brand */}
          <C2AFilter href={searchParam} title="Brands" catagories={brands} />

          {/* filter by price */}
          <C2AFilter href={searchParam} title="Price" catagories={price} />

          {/* filter by rating */}
          <C2AFilter
            href={searchParam}
            title="Product Rating"
            catagories={rating}
            rating
          />

          {/* filter by color */}
          <FilterByColor href={searchParam} />
        </ScrollArea>
      )}
    </C2ADrawer>
  );
};
