"use client";

import { ColumnDef } from "@tanstack/react-table";
import { cn, OrderReport } from "@/lib";
import { DataTableColumnHeader } from "@/components/data-table";
export const OrderProductColumns: ColumnDef<OrderReport>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ORDER ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">#{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CUSTOMER" />
    ),
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
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PRODUCT" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "label",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DATE & TIME" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("label")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PRICE" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium mr-1">
            {row.getValue("priority")}
          </span>
          ETB
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="FULFILLMENT STATUS" />
    ),
    cell: ({ row }: { row: any }) => {
      const status = row.getValue("status");

      let statusColorClass = "";
      switch (status) {
        case "delivered":
          statusColorClass = "text-[#09AA0F]"; // Green color for delivered
          break;
        case "canceled":
          statusColorClass = "text-[#C75F00] ";
          break;

        case "shipped":
          statusColorClass = "text-[#D1C90C]"; // Blue color for shipped
          break;
        case "processing":
          statusColorClass = "text-[#DF6CF5]"; // Yellow color for processing
          break;
        default:
          statusColorClass = "text-gray-600"; // Default color for other statuses
          break;
      }

      return (
        <div className="flex space-x-2">
          <span
            className={cn(
              "max-w-[500px] truncate font-medium ",
              statusColorClass
            )}
          >
            {status}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
];
