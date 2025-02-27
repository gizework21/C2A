import { CircularLoading } from "@/components/loading";
import { ProductCard } from "@/components/products";
import { Container } from "@/components/wrappers";
import { SearchProductsDocument } from "@/graphql/search/search.generated";
import { getServerClient } from "@/lib/server-client";
import { Suspense } from "react";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  const client = await getServerClient();

  const { data, error } = await client.query(SearchProductsDocument, {
    search: query,
  });

  if (error) return <div>Error: {error.message}</div>;

  if (data?.searchProducts?.objects?.length === 0)
    return (
      <div className="flex items-center justify-center h-screen font-bold text-2xl">
        No products found
      </div>
    );

  return (
    <Container>
      <Suspense fallback={<CircularLoading />}>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-2 lg:gap-4 px-2 md:px-4 w-full">
          {data?.searchProducts?.objects?.map(
            (product) =>
              product && (
                <ProductCard
                  key={product?.productId}
                  product={{
                    id: parseInt(product?.productId ?? ""),
                    price: parseInt(product?.price as unknown as string),
                    name: product?.productName ?? "",
                    rating: parseInt(product?.rating as unknown as string) ?? 0,
                    image:
                      (process.env.NEXT_PUBLIC_IMAGE_URL as string) +
                      product?.images[product?.images.length - 1].imageUrl,
                  }}
                />
              )
          )}
        </div>
      </Suspense>
    </Container>
  );
}
