"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProductDataTableRowActions } from "./product-data-table-row-actions";
import { IVendorProductTable } from "@/lib";

export const ProductColumns: ColumnDef<IVendorProductTable>[] = [
  {
    accessorKey: "name",
    header: () => <p>Product name</p>,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "publishedOn",
    header: () => <p>Publishe on</p>,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("publishedOn")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <p>Price</p>,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("price")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    header: () => <p>Actions</p>,
    cell: ({ row }) => <ProductDataTableRowActions row={row} />,
  },
];
