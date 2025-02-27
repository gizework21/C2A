"use client";

import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui";
import { ArrowRight, Ellipsis } from "lucide-react";
import { LinkButton } from "@/components/buttons";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function CustomerOrderDataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const id = row.getValue("id");
  return (
    <LinkButton
      href={`/account/orders/${id}`}
      className="flex gap-2"
      variant="ghost"
    >
      <p>View details</p> <ArrowRight />{" "}
    </LinkButton>
  );
}