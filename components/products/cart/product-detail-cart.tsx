"use client";

import Link from "next/link";
import { Product, ProductDetailSearchParams } from "@/types/product";
import { Button } from "@/components/ui";
import { getSession } from "next-auth/react";
import { Heart, ShoppingCart } from "lucide-react";
import { AddToCartBtn } from "@/components/cart";

interface ProductDetailCartProps {
  href: ProductDetailSearchParams;
  product: Product;
}

export const ProductDetailCart = ({
  href,
  product,
}: ProductDetailCartProps) => {
  const session = getSession();
  const qty = href.quantity || "0";
  return (
    <div className="space-y-4">
      <div className="flex">
        <div className="flex items-center justify-evenly gap-2 bg-kgold-light px-4">
          <Link
            scroll={false}
            replace={true}
            className="rounded-md px-2 bg-kwhite-default border border-kblack-default hover:bg-kaccent hover:text-white duration-150 transition-colors ease-in-out"
            href={
              "?" +
              new URLSearchParams({
                ...href,
                quantity:
                  parseInt(qty) > 1 ? (parseInt(qty) - 1).toString() : qty,
              })
            }
          >
            -
          </Link>
          <p className="poppins text-[20px]">{qty}</p>
          <Link
            scroll={false}
            replace={true}
            className="rounded-md px-2 bg-kwhite-default border border-kblack-default hover:bg-kaccent hover:text-white duration-150 transition-colors ease-in-out"
            href={
              "?" +
              new URLSearchParams({
                ...href,
                quantity: (parseInt(qty) + 1).toString(),
              })
            }
          >
            +
          </Link>
        </div>
      </div>

      <div className="flex gap-2">
        <AddToCartBtn
          product={product}
          auth={!!session}
          icon={<ShoppingCart size={20} />}
          className="bg-kaccent text-white"
        />

        <Button className="bg-kgold-light p-1 md:p-2 rounded-md border border-kaccent border-opacity-45 hover:bg-black/90">
          <Heart size={20} className="text-kaccent" />
        </Button>
      </div>
    </div>
  );
};
