import { PagesBreadcrumb } from "@/components/breadcrumb";
import { CircularLoading } from "@/components/loading";

import {
  ProductDetailImageCarousel,
  ProductDetailRatingView,
  ProductDetailSpecification,
  ProductDetailColorPicker,
  ProductDetailStoragePicker,
  ProductDetailCart,
  SuggestedProductsView,
  ProductDetailTab,
} from "@/components/products";
import { Container } from "@/components/wrappers";
import { GetProductDocument } from "@/graphql/product/products.generated";
import { getServerClient } from "@/lib/server-client";
import { ProductDetailSearchParams } from "@/types/product";
import Link from "next/link";
import { Suspense } from "react";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const selectedColor = (searchParams.color || "121069") as string;
  const selectedSize = searchParams.size?.toString() || "lg";
  const selectedStorage = (searchParams.storage || "128GB") as string;
  const selectedQuantity = (searchParams.quantity || "1") as string;

  const searchParam: ProductDetailSearchParams = {
    color: selectedColor,
    size: selectedSize,
    storage: selectedStorage,
    quantity: selectedQuantity,
  };

  const client = await getServerClient();

  const { data, error } = await client.query(GetProductDocument, {
    productId: params.id,
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data?.GetProduct) {
    return (
      <div className="flex justify-center py-3">Product detail not found</div>
    );
  }

  const product = data?.GetProduct;

  return (
    <div>
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
          {
            href: "/product/1",
            text: "I phone 15",
          },
        ]}
        gradient={false}
      />

      <Container className="my-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-2 gap-4">
          <ProductDetailImageCarousel data={data} />

          <div className="md:flex space-y-10 md:space-y-0">
            <div className="px-4 md:px-6 space-y-3 w-full">
              <div key={product?.productId}>
                <h1 className="font-semibold text-[26px] poppins text-kblack-review">
                  {product?.productName}
                </h1>

                <div className="flex gap-2">
                  <p className="text-semibold text-[16px] poppins text-kgray-default">
                    {product?.discountPercent}
                  </p>

                  <p className="text-semibold text-[16px] poppins line-through text-kgray-text">
                    {product?.price}
                  </p>
                </div>

                <ProductDetailRatingView rating={product?.rating ?? 0} />

                <div>
                  <p className="inter text-[16px] font-semibold">
                    Overview Description
                  </p>

                  <span className="text-kblack text-[12px]">
                    {product?.description}
                  </span>
                </div>

                {/* <ProductDetailSpecification /> */}

                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex flex-col gap-2">
                    <ProductDetailColorPicker href={searchParam} />

                    <ProductDetailStoragePicker href={searchParam} />

                    <div>
                      {product?.variants?.map((variant) => (
                        <div key={variant?.id}>
                          <p>Available unit {variant?.availableUnit}</p>
                          <p>Color {variant?.color?.name}</p>
                          <p>Size {variant?.size}</p>
                          <p>Weight {variant?.weight}</p>
                        </div>
                      ))}
                    </div>

                    <ProductDetailCart
                      href={searchParam}
                      product={{
                        id: parseInt(product?.productId ?? ""),
                        name: product?.productName ?? "",
                        price: product?.price ?? 0,
                        rating: product?.rating ?? 0,
                        image: product?.images[0].imageUrl ?? "",
                      }}
                    />
                  </div>

                  <div className="w-full m-2">
                    <div className="bg-white border-[1px] border-gray-100 flex flex-col gap-5 p-4 rounded ">
                      <div className="flex flex-col gap-2">
                        <p className="inter text-[16px] font-semibold">
                          Seller Information
                        </p>

                        <span className="text-kblack text-[12px] font-semibold">
                          Store Name :{" "}
                          <Link
                            href={`/store/${product?.vendor.user.username}`}
                            className="font-normal text-[#D7A022] underline"
                          >
                            {product?.vendor.storeName}
                          </Link>
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="inter text-[16px] font-semibold">
                          Store Performance
                        </p>

                        <span className="text-kblack text-[12px] font-semibold  ">
                          Quality: <span className="font-normal">Standard</span>
                        </span>

                        <span className="text-kblack text-[12px] font-semibold ">
                          Rate:{" "}
                          <span className="font-normal">
                            {product?.vendor.customerRating}
                          </span>
                        </span>

                        <span className="text-kblack text-[12px] font-semibold ">
                          Delivery:{" "}
                          <span className="font-normal">with in a week</span>
                        </span>

                        <span className="text-kblack text-[12px] font-semibold ">
                          Warranty: <span className="font-normal">6 month</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <ProductDetailDeliveryAndWarranty /> */}
          </div>
        </div>
        <Suspense fallback={<CircularLoading />}>
          <SuggestedProductsView productId={data?.GetProduct.productId} />
        </Suspense>

        <div className="my-10 lg:mx-6">
          <ProductDetailTab productId={parseInt(params.id)} />
        </div>
      </Container>
    </div>
  );
};

export default Page;
