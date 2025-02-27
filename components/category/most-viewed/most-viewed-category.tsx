import { encodeUrlFormat } from "@/lib";
import { Title } from "@/components/title";
import { MostViewedCategoryCard } from "./most-viewed-category-card";
import { AllBannersQuery } from "@/graphql/landing/landing.generated";

interface MostViewedCategoriesProps {
  data: AllBannersQuery | undefined;
}

export const MostViewedCategories = ({ data }: MostViewedCategoriesProps) => {
  if (data?.mostViewedCategories?.length === 0)
    return (
      <div className="flex justify-center py-3">
        Most view category not found
      </div>
    );

  return (
    <div>
      <Title title={"Most Viewed Categories"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.mostViewedCategories?.map((category, index) => {
          const reversedImageList = category?.products?.[0]?.images?.reverse();
          const images = reversedImageList?.map(
            (image) =>
              (process.env.NEXT_PUBLIC_IMAGE_URL as string) + image.imageUrl
          );
          const url = encodeUrlFormat(category?.title ?? "");

          return (
            <div key={index}>
              <MostViewedCategoryCard
                images={images ?? []}
                title={category?.title}
                href={`category/${url}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
