"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DiscountProductDataTableRowActions } from "./discount-product-data-table-row-actions";
import { Checkbox } from "@/components/ui";
import { IVendorProductTable } from "@/lib";
import { DataTableColumnHeader } from "@/components/data-table";
import { useDiscount } from "@/hooks/use-discount";

export const DiscountProductColumns: ColumnDef<IVendorProductTable>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      );
    },
    cell: ({ row }) => {
      const disount = useDiscount();

      const selected = disount.products.some(
        (item) => item.id.toString() === row.original.id
      );

      const image = row.original.imageUrl;

      return (
        <Checkbox
          checked={selected ?? row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
            disount.addProduct({
              id: row.getValue("id"),
              imageUrl: image ?? "",
              name: row.getValue("name"),
            });
          }}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product name" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product name" />
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
    accessorKey: "publishedOn",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Published on" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("publishedOn")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
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
    cell: ({ row }) => <DiscountProductDataTableRowActions row={row} />,
  },
];
