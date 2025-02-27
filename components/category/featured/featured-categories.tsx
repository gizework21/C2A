import { encodeUrlFormat } from "@/lib";
import { Title } from "@/components/title";
import { MostViewedCategoryCard } from "../most-viewed";
import { AllBannersQuery } from "@/graphql/landing/landing.generated";

interface FeaturedCategoriesProps {
  data: AllBannersQuery | undefined;
}

export const FeaturedCategories = async ({ data }: FeaturedCategoriesProps) => {
  if (data?.featuredCategories?.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <p>No featured categories found</p>
      </div>
    );
  }
  return (
    <div>
      <Title title={"Featured Categories"} />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 my-4">
          {data?.featuredCategories?.map((category, index) => {
            const reversedImageList =
              category?.products?.[0]?.images?.reverse();

            const images = reversedImageList?.map(
              (image) =>
                (process.env.NEXT_PUBLIC_IMAGE_URL as string) + image.imageUrl
            );
            const url = encodeUrlFormat(category?.title ?? "");

            return (
              <MostViewedCategoryCard
                key={index}
                images={images ?? []}
                href={`category/${url}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
