import { CircularLoading } from "@/components/loading";
import { OrderTable, VendorHeader } from "@/components/vendor";
import { Suspense } from "react";

const Order = async () => {
  return (
    <div>
      <VendorHeader title={"Orders"} />
      <Suspense fallback={<CircularLoading />}>
        <OrderTable />
      </Suspense>
    </div>
  );
};

export default Order;
