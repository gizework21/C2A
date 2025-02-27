"use client";

import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import { IVendorProductTable } from "@/lib";

interface DataTableRowActionsProps {
  row: Row<IVendorProductTable>;
}

export function ProductDataTableRowActions({ row }: DataTableRowActionsProps) {
  const router = useRouter();
  const id = row.original.id;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <Ellipsis className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={() => router.push(`/vendor/product/${id}`)}>
          View
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
