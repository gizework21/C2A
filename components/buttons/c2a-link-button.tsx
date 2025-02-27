/**
 * This link button component can be used in feature projects as a reusable component.
 *
 */

import { cn } from "@/lib";
import Link from "next/link";
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface LinkButtonProps extends VariantProps<typeof linkVariants> {
  href: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const linkVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-kaccent text-white hover:bg-kaccent/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-kaccent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const LinkButton = ({
  href,
  className,
  children,
  variant,
  size,
  onClick,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(linkVariants({ variant, className, size }))}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
