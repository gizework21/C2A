"use client";

import { Table } from "@tanstack/react-table";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { OrderProductDataTableViewOptions } from "./order-report-data-table-view-options";
import { OrderReport } from "@/lib";
import { Search, X } from "lucide-react";

interface DataTableToolbarProps {
  table: Table<OrderReport>;
}

export function OrderProductTaskDataTableToolbar({
  table,
}: DataTableToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <div className="flex border outline-none items-center">
            <Input
              placeholder="Search"
              value={
                (table.getColumn("title")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
              className="h-8 w-[150px] lg:w-[250px] outline-none  border-none"
            />
            <Search className="text-xl  pr-3 w-fit text-gray-500 cursor-pointer" />
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

          <Status />

          <Time />
        </div>

        <OrderProductDataTableViewOptions table={table} />
      </div>

      <div className="w-full font-bold text-[22px]  mt-4 mb-9 flex justify-center items-center">
        Store name
      </div>
    </div>
  );
}

const Status = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status :All</SelectLabel>
          <SelectItem value="delivered">Delivered</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="shipped">Shipped</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const Time = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Time" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time :All</SelectLabel>
          <SelectItem value="am">PM</SelectItem>
          <SelectItem value="pm">PM</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
