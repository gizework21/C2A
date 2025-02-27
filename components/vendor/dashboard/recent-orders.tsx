"use client";

import { C2ADropdown } from "@/components/dropdown";
import { C2AInput } from "@/components/input";
import { ChevronDown, Search } from "lucide-react";

export const RecentOrders = () => {
  return (
    <div className="bg-white my-4">
      <h1 className="text-[20px] font-semibold montserrat text-kborder-default p-2">
        Recent Orders
      </h1>
      <div className="flex items-center my-4 gap-4">
        <div className="flex max-w-sm items-center border px-2 rounded-md m-2">
          <C2AInput placeholder="Search" />
          <Search />
        </div>

        <C2ADropdown
          buttonName={"Status"}
          content={VendorOrderStatusDropDown}
          btnClassName="border px-2"
        />
      </div>
    </div>
  );
};

const VendorOrderStatusDropDown = {
  title: "Status",
  endIcon: <ChevronDown size={16} />,
  items: [
    { name: "Pending" },
    { name: "Success" },
    { name: "Failed" },
    { name: "All" },
  ],
};
