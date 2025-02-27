"use client";

import { StockColumns } from "./stock-columns";
import { useDataTableCustom } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table";
import { Stock } from "@/lib";
import { StockTaskDataTableToolbar } from "./stock-data-table-toolbar";
import { LinkButton } from "@/components/buttons";

const stocks: Stock[] = [
  {
    id: "TASK8782",
    product: "Iphone 15 pro max",
    sold: "12",
    price: "$1.4K",
    alertQuantity: "10",
  },
  {
    id: "TASK8783",
    product: "Samsung Galaxy S21",
    sold: "10",
    price: "$1.2K",
    alertQuantity: "15",
  },
  {
    id: "TASK8784",
    product: "OnePlus 9 Pro",
    sold: "8",
    price: "$1.1K",
    alertQuantity: "20",
  },
  {
    id: "TASK8785",
    product: "Google Pixel 6 Pro",
    sold: "5",
    price: "$1.0K",
    alertQuantity: "25",
  },
];

export const StockTable = () => {
  const { table } = useDataTableCustom({
    data: stocks,
    columns: StockColumns,
    pageCount: 1,
  });

  return (
    <div className="border p-2 my-6 space-y-3">
      <h1 className="font-bold text-[20px]">Stock Alert</h1>

      <DataTable
        columns={StockColumns}
        dataTableToolBar={<StockTaskDataTableToolbar table={table} />}
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
