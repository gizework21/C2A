import { PagesBreadcrumb } from "@/components/breadcrumb";
import { SideBarFilterProduct } from "@/components/filter";
import { CircularLoading } from "@/components/loading";
import { ProductCard } from "@/components/products/card";
import { GetCategoryByNameDocument } from "@/graphql/categories/categories.generated";
import { decodeUrlFormat, ProductPageSearchParams } from "@/lib";
import { getServerClient } from "@/lib/server-client";
import { Suspense } from "react";

const Page = async ({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { brand, maxPrice, minPrice, rating, color } = searchParams;

  const searchParam: ProductPageSearchParams = {
    brand,
    maxPrice,
    minPrice,
    rating,
    color,
  };

  const category = decodeUrlFormat(params.categoryId);

  const client = await getServerClient();

  const { data, error } = await client.query(GetCategoryByNameDocument, {
    category,
  });

  if (error) return <p>{error.message}</p>;

  if (!data) return <CircularLoading />;

  return (
    <>
      <PagesBreadcrumb
        title={"Phone"}
        links={[
          {
            href: "/",
            text: "Home",
          },
          {
            href: "/product/1",
            text: "Product",
          },
        ]}
      />

      <div className="flex py-4">
        <SideBarFilterProduct searchParams={searchParam} />

        <Suspense fallback={<CircularLoading />}>
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-2 lg:gap-4 px-2 md:px-4 w-full">
            {data.getCategoryByName?.map(
              (product) =>
                product &&
                product.products &&
                product.products.length > 0 && (
                  <ProductCard
                    key={product?.products?.[0]?.productId}
                    product={{
                      id: parseInt(product?.products?.[0]?.productId ?? ""),
                      price: parseInt(
                        product?.products?.[0]?.price as unknown as string
                      ),
                      name: product?.products?.[0]?.productName ?? "",
                      rating:
                        parseInt(
                          product?.products?.[0]?.rating as unknown as string
                        ) ?? 0,
                      image:
                        (process.env.NEXT_PUBLIC_IMAGE_URL as string) +
                        product?.products?.[0]?.images[
                          product?.products?.[0]?.images.length - 1
                        ].imageUrl,
                    }}
                  />
                )
            )}
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Page;
