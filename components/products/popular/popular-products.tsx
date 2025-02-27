import Link from "next/link";
import { PopularProductCards } from "./popular-produt-card";
import { Title } from "@/components/title";
import { AllBannersQuery } from "@/graphql/landing/landing.generated";
import { getImageUrl } from "@/lib";

interface PopularProductsProps {
  data: AllBannersQuery | undefined;
}
export const PopularProducts = ({ data }: PopularProductsProps) => {
  if (data?.popularProducts?.objects?.length === 0)
    return (
      <div className="flex justify-center py-3">Popular product not found</div>
    );

  return (
    <div>
      <Title title={"PopularProduct"} />
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {data?.popularProducts?.objects?.map((product, index) => {
          const url = getImageUrl(
            product?.images[product.images.length - 1].imageUrl ?? ""
          );
          return (
            <Link href={`/product/${product?.productId}`} key={index}>
              <PopularProductCards
                title={product?.productName}
                category={product?.category.title}
                image={url}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
