import { Title } from "@/components/title";
import { getImageUrl } from "@/lib";
import { ProductCard } from "../card";
import { getServerClient } from "@/lib/server-client";
import { GetRelatedProductsDocument } from "@/graphql/product/products.generated";

interface SuggestedProductsViewProps {
  productId: string | undefined;
}

export const SuggestedProductsView = async ({
  productId,
}: SuggestedProductsViewProps) => {
  const client = await getServerClient();

  const { data } = await client.query(GetRelatedProductsDocument, {
    productId: productId ?? "",
  });

  if (data?.getRelatedProducts?.length === 0) {
    return (
      <p className="text-center font-light py-10">Related products not found</p>
    );
  }

  return (
    <div>
      <Title title="You may also like" />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 overflow-x-scroll no-scrollbar">
        {data?.getRelatedProducts?.map((product) => {
          return (
            <ProductCard
              key={product?.productName}
              product={{
                id: parseInt(product?.productId ?? ""),
                name: product?.productName ?? "",
                price: product?.price ?? 0,
                rating: product?.rating ?? 0,
                image: getImageUrl(
                  product?.images[product.images.length - 1].imageUrl ?? ""
                ),
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
