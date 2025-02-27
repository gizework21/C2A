"use client";

import { Table } from "@tanstack/react-table";

import { CustomerOrderDataTableViewOptions } from "./customer-order-data-table-view-options";
import { UserOrderSchema } from "@/lib/schemas/order/order";

interface DataTableToolbarProps {
  table: Table<UserOrderSchema>;
}

export function CustomerOrderTaskDataTableToolbar({
  table,
}: DataTableToolbarProps) {
  return <CustomerOrderDataTableViewOptions table={table} />;
}
