import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui";
import { MoreHorizontal } from "lucide-react";
import { ReactNode } from "react";
import { C2AButton } from "../buttons";

interface SimpleC2ADropdownProps {
  button?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const SimpleC2ADropdown = ({
  button,
  children,
  className,
}: SimpleC2ADropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        {button ?? (
          <C2AButton variant="ghost" className="h-8 w-8 p-0" size="sm">
            <MoreHorizontal className="size-3" />
          </C2AButton>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" childrenw-fll>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
