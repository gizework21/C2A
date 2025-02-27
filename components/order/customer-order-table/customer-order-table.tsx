"use client";

import { DataTable } from "@/components/data-table";
import { CustomerOrderColumns } from "./customer-order-columns";
import { CustomerOrderTaskDataTableToolbar } from "./customer-order-data-table-toolbar";
import { useDataTableCustom } from "@/hooks/use-data-table";
import { useQuery } from "@urql/next";
import { useMemo } from "react";
import { GetCustomerOrdersDocument } from "@/graphql/order/order.generated";
import { UserOrderSchema } from "@/lib/schemas/order/order";
import { Container } from "@/components/wrappers";
import { useSearchParams } from "next/navigation";
import { CircularLoading } from "@/components/loading";

export const CustomerOrderTable = () => {
  const searchParam = useSearchParams();
  const page = searchParam.get("page");
  const per_page = searchParam.get("per_page");

  const [result] = useQuery({
    query: GetCustomerOrdersDocument,
    variables: {
      page: parseInt(page as string) ?? 1,
      perPage: parseInt(per_page as string) ?? 10,
    },
  });

  const { data, fetching, error } = result;

  const orders: UserOrderSchema[] = useMemo(() => {
    return (
      data?.getUserOrders?.objects?.map((order) => ({
        id: order?.id || "",
        status: order?.status || "",
        date: new Date(order?.createdAt).toLocaleDateString() || "",
        total: order?.totalAmount || "",
      })) || []
    );
  }, []);

  const { table } = useDataTableCustom({
    rowCount: data?.getUserOrders?.totalObjects ?? 0,
    pageCount: data?.getUserOrders?.pages ?? 1,
    data: orders,
    columns: CustomerOrderColumns,
  });

  if (fetching) return <CircularLoading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <DataTable
        columns={CustomerOrderColumns}
        dataTableToolBar={<CustomerOrderTaskDataTableToolbar table={table} />}
        table={table}
      />
    </Container>
  );
};
