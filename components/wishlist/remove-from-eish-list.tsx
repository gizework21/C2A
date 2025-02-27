"use client";

import { RemoveFromWishListAction } from "@/lib/actions/wishlist/wishlist";
import { useTransition } from "react";
import { C2AButton } from "../buttons";
import { useRouter } from "next/navigation";

const RemoveFromWishList = ({ productId }: { productId: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = async () => {
    startTransition(() => {
      RemoveFromWishListAction({
        productId,
      });
      router.refresh();
    });
  };

  return (
    <form action={() => onSubmit()} className="m-0 p-0 w-full space-y-3">
      <p>Are you sure do you want to remove from wishlist</p>
      <div className="flex justify-end gap-2">
        <C2AButton variant="destructive" disabled={isPending}>
          Remove
        </C2AButton>
        <C2AButton variant="outline" type="button">
          Cancel
        </C2AButton>
      </div>
    </form>
  );
};

export default RemoveFromWishList;
