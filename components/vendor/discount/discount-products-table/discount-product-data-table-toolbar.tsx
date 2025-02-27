"use client";

import { Table } from "@tanstack/react-table";

import { DiscountProductDataTableViewOptions } from "./discount-product-data-table-view-options";
import { IVendorProductTable } from "@/lib";

interface DataTableToolbarProps {
  table: Table<IVendorProductTable>;
}

export function DiscountProductTaskDataTableToolbar({
  table,
}: DataTableToolbarProps) {
  return <DiscountProductDataTableViewOptions table={table} />;
}
