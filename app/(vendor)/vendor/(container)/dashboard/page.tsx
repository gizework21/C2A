import { CircularLoading } from "@/components/loading";
import {
  OrderTable,
  // RecentOrderTable,
  StockTable,
  VendorDashboardCard,
  VendorHeader,
} from "@/components/vendor";
import { GetVendorSupplierDashboardDocument } from "@/graphql/vendor/vendor.generated";
import { getServerClient } from "@/lib/server-client";
import session from "@/lib/session";
import { Suspense } from "react";

const Page = async () => {
  const auth = await session();

  const client = await getServerClient();

  const { data } = await client.query(GetVendorSupplierDashboardDocument, {});

  const datas = [
    {
      name: "Canceled orders",
      data: data?.vendorDashboardSummery?.canceledOrders,
    },
    { name: "Categories", data: data?.vendorDashboardSummery?.categories },
    {
      name: "Deleted Products",
      data: data?.vendorDashboardSummery?.deletedProducts,
    },
    {
      name: "Pending Orders",
      data: data?.vendorDashboardSummery?.pendingOrders,
    },
    {
      name: "Delivered Orders",
      data: data?.vendorDashboardSummery?.deliveredOrders,
    },
    { name: "Products", data: data?.vendorDashboardSummery?.products },
    {
      name: "Returned Orders",
      data: data?.vendorDashboardSummery?.returnedOrders,
    },
    { name: "Promotions", data: data?.vendorDashboardSummery?.promotions },
    {
      name: "Shipped orders",
      data: data?.vendorDashboardSummery?.shippedOrders,
    },
    {
      name: "Sold out products",
      data: data?.vendorDashboardSummery?.soldOutProducts,
    },
    { name: "Total money", data: data?.vendorDashboardSummery?.totalMoney },
  ];

  return (
    <Suspense fallback={<CircularLoading />}>
      <VendorHeader
        title={"Hello, " + auth?.user.firstName + " " + auth?.user.lastName}
      />

      <div className="flex justify-between w-full gap-6 overflow-x-scroll no-scrollbar">
        <div className="flex flex-nowrap gap-6 w-full">
          {datas.map((item) => (
            <VendorDashboardCard
              key={item.name}
              title={item.name}
              price={item.data?.toString() ?? "0"}
              subTitle={item.name}
            />
          ))}
        </div>
      </div>

      {/* <RecentOrderTable /> */}

      <Suspense fallback={<CircularLoading />}>
        <OrderTable />
      </Suspense>

      <StockTable />
    </Suspense>
  );
};

export default Page;
