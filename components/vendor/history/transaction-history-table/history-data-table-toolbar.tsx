"use client";

import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button, Input } from "@/components/ui";
import { HistoryDataTableViewOptions } from "./history-data-table-view-options";
import { History } from "@/lib";
import { Search, X } from "lucide-react";

interface DataTableToolbarProps {
  table: Table<History>;
}

export function HistoryTaskDataTableToolbar({ table }: DataTableToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="flex gap-5">
          <span className="flex items-center">
            <Input
              placeholder="Search..."
              value={
                (table.getColumn("product")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("product")?.setFilterValue(event.target.value)
              }
              className="h-8 w-[150px] lg:w-[250px] border-none shadow-sm"
            />

            <Search size={20} className="-ml-8 text-[#A8B1BE]" />
          </span>

          <Select>
            <SelectTrigger className="w-[150px] h-8 text-[#A8B1BE] bg-white border-none outline-none rounded-md shadow-sm focus:border-none focus:ring-0">
              <SelectValue placeholder="Status : All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="successful">Successful</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <HistoryDataTableViewOptions table={table} />
    </div>
  );
}
