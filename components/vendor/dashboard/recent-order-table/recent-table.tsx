"use client";

import { DataTable } from "@/components/data-table";
import { RecentColumns } from "./recent-columns";
import { RecentTaskDataTableToolbar } from "./recent-data-table-toolbar";
import { useDataTableCustom } from "@/hooks/use-data-table";

import { Recent } from "@/lib/";
import { LinkButton } from "@/components/buttons";

const recent: Recent[] = [
  {
    id: "TASK8782",
    customer: "John Doe",
    date: "2021-09-12",
    paymentStatus: "in progress",
    price: "$20.4K",
    status: "Canceled",
  },
  {
    id: "TASK8783",
    customer: "Jane Doe",
    date: "2021-09-12",
    paymentStatus: "in progress",
    price: "$20.4K",
    status: "Delivered",
  },
  {
    id: "TASK8784",
    customer: "John Doe",
    date: "2021-09-12",
    paymentStatus: "in progress",
    price: "$20.4K",
    status: "In progress",
  },
  {
    id: "TASK8785",
    customer: "Jane Doe",
    date: "2021-09-12",
    paymentStatus: "in progress",
    price: "$20.4K",
    status: "Delivered",
  },
];

export const RecentOrderTable = () => {
  const { table } = useDataTableCustom({
    data: recent,
    columns: RecentColumns,
    pageCount: 1,
  });

  return (
    <div className="border p-2 my-6 space-y-3">
      <h1 className="font-bold text-[20px]">Recent order</h1>
      <DataTable
        columns={RecentColumns}
        dataTableToolBar={<RecentTaskDataTableToolbar table={table} />}
        table={table}
        pagination={false}
      />
      <div className="flex justify-end">
        <LinkButton href="#" variant="outline">
          View more
        </LinkButton>
      </div>
    </div>
  );
};
