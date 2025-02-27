import { CircularLoading } from "@/components/loading";
import { DiscountProductTable, DiscountForm } from "@/components/vendor";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold">Add Discount</h1>

      <Suspense fallback={<CircularLoading />}>
        <DiscountProductTable />
      </Suspense>

      <DiscountForm />
    </div>
  );
};

export default Page;
