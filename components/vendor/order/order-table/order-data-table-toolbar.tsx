"use client";

import { Table } from "@tanstack/react-table";

import { Button, Input } from "@/components/ui";
import { OrderDataTableViewOptions } from "./order-data-table-view-options";
import { venderOrders } from "@/lib";
import { X } from "lucide-react";

interface DataTableToolbarProps {
  table: Table<venderOrders>;
}

export function OrderTaskDataTableToolbar({ table }: DataTableToolbarProps) {
  return <OrderDataTableViewOptions table={table} />;
}
