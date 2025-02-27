import { CatagoriesBrand } from "@/types/product";
import { ShowRatingStar } from "../rating";
import Link from "next/link";
import { ProductPageSearchParams, updateUrlParams } from "@/lib";
import { Title } from "../title";
import { C2ACheckbox } from "../checkbox";

interface C2AFilterProps {
  title: TTitles;
  catagories: CatagoriesBrand[];
  rating?: boolean;
  href: ProductPageSearchParams;
}

type TTitles = "Price" | "Brands" | "Product Rating";

export const C2AFilter = ({
  title,
  catagories,
  rating,
  href,
}: C2AFilterProps) => {
  return (
    <>
      <Title title={title} />
      <div className="max-h-[200px] overflow-y-scroll">
        {catagories.map((catagory) => {
          let checked = false;

          if (href.brand && title === "Brands") {
            if (!href.brand) return;

            checked =
              href.brand === catagory.name.toLowerCase() ||
              (Array.isArray(href.brand) &&
                href.brand.includes(catagory.name.toLowerCase()));
          }

          if (href.rating && title === "Product Rating") {
            if (!href.rating) return;

            checked =
              href.rating === catagory.name.toLowerCase() ||
              (Array.isArray(href.rating) &&
                href.rating.includes(catagory.name.toLowerCase()));
          }

          if (href.maxPrice && href.minPrice && title === "Price") {
            const price = `$ ${href.minPrice}-${href.maxPrice}`;
            if (catagory.name === price) checked = true;
          }

          return (
            <div
              key={catagory.id}
              className="p-2 flex w-full justify-between px-4"
            >
              {rating ? (
                <ShowRatingStar rating={parseInt(catagory.name)} />
              ) : (
                <p className="line-clamp-1 text-sm text-kgray-text">
                  {catagory.name}
                </p>
              )}

              <Link
                replace={true}
                scroll={false}
                href={updateUrlParams({
                  title:
                    title === "Brands"
                      ? "brand"
                      : title === "Product Rating"
                      ? "rating"
                      : title === "Price"
                      ? "price"
                      : "",
                  value: catagory.name.toLowerCase(),
                  checked,
                  href,
                })}
              >
                <C2ACheckbox id={catagory.id} checked={checked} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
