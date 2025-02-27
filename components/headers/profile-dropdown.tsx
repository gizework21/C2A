"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { C2AButton, LinkButton } from "../buttons";
import { useState } from "react";
import { User } from "lucide-react";
import { LogoutButton } from "../auth";
import { useSession } from "next-auth/react";

export function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const session = useSession();

  const isVendor = session.data?.user.role === "SALES";

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <C2AButton variant="outline" size="icon" className="rounded-full">
          <User />
        </C2AButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LinkButton
              href="/account"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Profile
            </LinkButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LinkButton
              href={isVendor ? "/vendor/dashboard" : "/signup"}
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {isVendor ? "Go to vendor" : "Become a vendor"}
            </LinkButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
