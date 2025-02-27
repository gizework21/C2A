import { CircularLoading } from "@/components/loading";
import { CustomerOrderTable } from "@/components/order";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<CircularLoading />}>
        <CustomerOrderTable />;
      </Suspense>
    </div>
  );
};

export default Page;
