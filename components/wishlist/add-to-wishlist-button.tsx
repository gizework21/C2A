"use client";

import {
  AddToWishListAction,
  RemoveFromWishListAction,
} from "@/lib/actions/wishlist/wishlist";
import { Heart } from "lucide-react";
import { useState, useTransition } from "react";

export const AddToWishlistButton = ({ productId }: { productId: string }) => {
  const [isPending, startTransition] = useTransition();
  const [wishlist, setWishlist] = useState<string | undefined>(undefined);

  const onSubmit = async () => {
    startTransition(() => {
      if (wishlist !== productId) {
        setWishlist(productId);
        AddToWishListAction({
          productId,
        });
      } else {
        setWishlist("");
        RemoveFromWishListAction({
          productId,
        });
      }
    });
  };

  return (
    <form action={() => onSubmit()} className="m-0 p-0">
      <button className="bg-kgold-light p-1 md:p-2 rounded-md border border-accent border-opacity-45 hover:bg-kblack-default/90 duration-150">
        {wishlist !== productId ? (
          <Heart size={20} color="#D7A022" />
        ) : (
          <Heart fill="#D7A022" size={20} color="#D7A022" />
        )}
      </button>
    </form>
  );
};
