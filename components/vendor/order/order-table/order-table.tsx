"use client";

import { DataTable } from "@/components/data-table";
import { OrderColumns } from "./order-columns";
import { OrderTaskDataTableToolbar } from "./order-data-table-toolbar";
import { useDataTableCustom } from "@/hooks/use-data-table";
import { useQuery } from "@urql/next";
import { useMemo } from "react";
import { venderOrders } from "@/lib";
import { GetMyOrdersDocument } from "@/graphql/vendor/order/order.generated";

export const OrderTable = () => {
  const [result] = useQuery({
    query: GetMyOrdersDocument,
  });

  const { data, fetching, error } = result;

  const orders: venderOrders[] = useMemo(() => {
    return (
      data?.getMyOrders?.orders?.map((order) => ({
        id: order?.id || "",
        customer: order?.user?.firstName || "",
        status: order?.status || "",
        product: order?.items[0].product?.productName || "",
        price: order?.items[0].price || "",
        date: new Date(order?.createdAt).toLocaleDateString() || "",
      })) || []
    );
  }, [data]);

  const { table } = useDataTableCustom({
    data: orders,
    columns: OrderColumns,
    pageCount: 1,
  });

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="border p-2 my-6 space-y-3">
      <h1 className="font-bold text-[20px]">Order</h1>
      <DataTable
        columns={OrderColumns}
        dataTableToolBar={<OrderTaskDataTableToolbar table={table} />}
        table={table}
      />
    </div>
  );
};
