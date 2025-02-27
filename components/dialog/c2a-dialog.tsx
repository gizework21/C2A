"use client";

import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui";
import { ReactNode } from "react";
import { C2AButton } from "../buttons";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface C2ADialogProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  headerText?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  button?: ReactNode;
}

export const C2ADialog = ({
  title,
  children,
  className,
  icon,
  headerText,
  variant = "outline",
  button,
}: C2ADialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {button ?? (
          <C2AButton variant={variant} className={className}>
            {icon && <span>{icon}</span>}
            {title}
          </C2AButton>
        )}
      </DialogTrigger>
      <DialogContent
        className={
          "lg:max-w-lg overflow-y-scroll max-h-screen scrollbar-hide border-none"
        }
      >
        <VisuallyHidden.Root>
          <DialogTitle className={"p-3 font-bold montserrat text-[24px]"}>
            {headerText}
          </DialogTitle>
        </VisuallyHidden.Root>

        <DialogDescription className="p-0 m-0"></DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
};
