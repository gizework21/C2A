"use client";

import { Product } from "@/types/product";
import { cn } from "@/lib";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { AddToCartListAction } from "@/lib/actions/cart";
import { useCart } from "@/hooks";
import { toast } from "../ui";
import { useSession } from "next-auth/react";

interface AddToCartBtnProps {
  product: Product;
  icon?: React.ReactNode;
  className?: string;
  auth?: boolean;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}

export const AddToCartBtn = ({
  product,
  icon,
  className,
  variant,
}: AddToCartBtnProps) => {
  const cart = useCart();
  const session = useSession();
  const [isPending, startTransition] = useTransition();

  const onSubmit = async () => {
    if (session) {
      startTransition(() => {
        AddToCartListAction({
          productId: product.id,
          quantity: 1,
        }).then((res) => {
          if (res.error) {
            toast({
              title: "Failed adding to cart",
              variant: "destructive",
            });
          }

          if (res.success) {
            toast({
              title: `${product.name} added to cart`,
              variant: "success",
            });
          }
        });
      });
    } else {
      cart.addItem(product);
    }
  };

  return (
    <Button
      className={cn(
        "bg-kaccent/10 text-kaccent hover:bg-kblack-default/90 w-full px-2 text-sm md:text-base gap-2",
        className
      )}
      onClick={() => onSubmit()}
      disabled={isPending}
      variant={variant}
    >
      Add to cart
      {icon && icon}
    </Button>
  );
};
