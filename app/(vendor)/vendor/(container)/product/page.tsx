import { LinkButton } from "@/components/buttons";
import { CircularLoading } from "@/components/loading";
import { ProductTable, VendorHeader } from "@/components/vendor";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <VendorHeader title={"Products"} />

      <div className="flex justify-end my-4">
        <LinkButton href="/vendor/product/add">Add Products</LinkButton>
      </div>

      <Suspense fallback={<CircularLoading />}>
        <ProductTable />
      </Suspense>
    </>
  );
};

export default Page;
