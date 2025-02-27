import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
} from "@/components/ui";
import { cn } from "@/lib";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface C2ADropdownProps {
  buttonName: string;
  content: C2ADropdownContent;
  className?: string;
  btnClassName?: string;
}

export interface C2ADropdownContent {
  title: string;
  items: KtsDropdownContentItem[];
}

export interface KtsDropdownContentItem {
  name: string;
}

export const C2ADropdown = ({
  buttonName,
  content,
  className,
  btnClassName,
}: C2ADropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn(className)}>
        <Button
          variant="outline"
          className={cn(
            "px-4 py-2 flex items-center justify-between focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 hover:bg-kaccent/10",
            btnClassName
          )}
        >
          {buttonName}
          <ChevronDown size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{content.title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {content.items.map((item) => (
            <DropdownMenuItem key={item.name}>
              <span>{item.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
