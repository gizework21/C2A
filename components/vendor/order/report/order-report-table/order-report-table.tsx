"use client";

import { OrderProductColumns } from "./order-report-columns";
import { useDataTableCustom } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table";
import { OrderProductTaskDataTableToolbar } from "./order-report-data-table-toolbar";
import { OrderReport } from "@/lib";
import { C2AButton } from "@/components/buttons";
const orderReports: OrderReport[] = [
  {
    id: "8783",
    title: "I phone XS",
    name: "mike poul",
    status: "delivered",
    label: "8 jun, 08:39 AM",
    priority: "2000",
  },
  {
    id: "7878",
    title: "I phone XS",
    name: "mike poul",
    status: "canceled",
    label: "8 jun, 08:39 AM",
    priority: "2000",
  },
  {
    id: "7839",
    title: "I phone XS",
    name: "mike poul",
    status: "shipped",
    label: "5 jun, 10:34 AM",
    priority: "8000",
  },
  {
    id: "5562",
    title: "I phone XS",
    name: "mike poul",
    status: "delivered",
    label: "6 April, 12:56 PM",
    priority: "2000",
  },
  {
    id: "8686",
    title: "I phone XS",
    name: "mike poul",
    status: "canceled",
    label: "6 April, 12:56 PM",
    priority: "2000",
  },
  {
    id: "1280",
    title: "I phone XS",
    name: "mike poul",
    status: "canceled",
    label: "5 jun, 10:34 AM",
    priority: "8000",
  },
  {
    id: "7262",
    title: "I phone XS",
    name: "mike poul",
    status: "delivered",
    label: "6 April, 12:56 PM",
    priority: "8000",
  },
  {
    id: "1138",
    title: "I phone XS",
    name: "mike poul",
    status: "processing",
    label: "6 April, 12:56 PM",
    priority: "2000",
  },
  {
    id: "7184",
    title: "I phone XS",
    name: "mike poul",
    status: "canceled",
    label: "6 April, 12:56 PM",
    priority: "6000",
  },
];

export const OrderReportTable = () => {
  const { table } = useDataTableCustom({
    data: orderReports,
    columns: OrderProductColumns,
    pageCount: 1,
  });

  return (
    <div className="bg-white p-4 my-6">
      <DataTable
        columns={OrderProductColumns}
        dataTableToolBar={<OrderProductTaskDataTableToolbar table={table} />}
        table={table}
      />

      <C2AButton className="mt-12" title="Download pdf">
        Download PDF
      </C2AButton>
    </div>
  );
};
