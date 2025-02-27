import {
  Sheet,
  SheetContent,
  SheetTrigger,
  DialogDescription,
  DialogTitle,
  Button,
} from "@/components/ui";

import { cn } from "@/lib";
import { AlignJustify } from "lucide-react";

interface C2ADrawerProps {
  className?: string;
  children?: React.ReactNode;
}

export const C2ADrawer = ({ className, children }: C2ADrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn(className)}>
        <Button variant="ghost" size="icon">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <DialogTitle></DialogTitle>
      <SheetContent className="overflow-y-scroll scrollbar-hide">
        {children}
        <DialogDescription></DialogDescription>
      </SheetContent>
    </Sheet>
  );
};
