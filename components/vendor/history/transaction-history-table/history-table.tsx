"use client";

import { DataTable } from "@/components/data-table";
import { HistoryColumns } from "./history-columns";
import { HistoryTaskDataTableToolbar } from "./history-data-table-toolbar";
import { useDataTableCustom } from "@/hooks/use-data-table";

import { History } from "@/lib/";

const history: History[] = [
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Pending",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Successful",
  },
  {
    id: "#5089",
    action: "Refund",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Pending",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Successful",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Canceled",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Shipped",
  },
  {
    id: "#5089",
    action: "Refund",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Shipped",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Pending",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Pending",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Successful",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Successful",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Successful",
  },
  {
    id: "#5089",
    action: "Refund",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Shipped",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Shipped",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Successful",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Pending",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Shipped",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Shipped",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Pending",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Successful",
  },
  {
    id: "#5089",
    action: "Payout",
    product: "Iphone 15pro max...",
    date: "6 April, 12:56 PM",
    amount: "7000 ETB",
    status: "Pending",
  },
];

export const TransactionHistoryTable = () => {
  const { table } = useDataTableCustom({
    data: history,
    columns: HistoryColumns,
    pageCount: 1,
  });

  return (
    <div className="border p-2 my-6 space-y-3">
      <h1 className="font-bold text-[20px]">Transaction History</h1>
      <DataTable
        columns={HistoryColumns}
        dataTableToolBar={<HistoryTaskDataTableToolbar table={table} />}
        table={table}
      />
    </div>
  );
};
