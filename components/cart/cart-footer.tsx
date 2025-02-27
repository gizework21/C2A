"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CartResponse } from "@/types/cart";

interface ICartFooterProps {
  cartItems: CartResponse[];
  totalPrice?: number;
}

export const CartFooter: React.FC<ICartFooterProps> = ({
  cartItems,
  totalPrice,
}) => {
  const router = useRouter();

  // Determine cart data
  const cartData = cartItems ?? [];
  const total =
    totalPrice ??
    cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const encodedCartItems = encodeURIComponent(JSON.stringify(cartData));
    const encodedTotalPrice = encodeURIComponent(total.toString());

    const queryString = `cartItems=${encodedCartItems}&totalPrice=${encodedTotalPrice}`;

    // Navigate to the checkout page with query parameters
    router.push(`/checkout/detail?${queryString}`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between w-full py-2 gap-10">
      <div className="w-full">
        <Link
          href="/"
          className="px-4 py-2 flex items-center justify-center rounded-md border border-kaccent text-kaccent poppins max-w-44"
        >
          Return to shop
        </Link>

        <div className="flex gap-2 my-4 w-full">
          <input
            type="text"
            placeholder="Enter coupon here"
            className="border outline-none px-4 py-2 rounded-sm flex-1"
          />
          <button className="px-3 py-2 flex items-center justify-center rounded-md border border-kaccent text-kaccent poppins">
            Apply coupon
          </button>
        </div>
        <div className="flex text-sm gap-4">
          <p>Don’t have any yet?</p>
          <Link href="/discount-program" className="text-kaccent">
            Check out Discount Program
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full space-y-5 border border-kaccent border-opacity-50 p-3 lg:max-w-[60%]">
          <h1 className="poppins text-[20px]">Cart Total</h1>
          <div className="flex w-full justify-between items-center border-b-[1px] border-accent border-opacity-50 border-spacing-2">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <div className="flex w-full justify-between items-center border-b-[1px] border-accent border-opacity-50 border-spacing-2">
            <p>Shipping</p>
            <p>Free</p>
          </div>

          <div className="flex w-full justify-between items-center">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="bg-kaccent text-kwhite-default rounded-md px-4 py-2 mt-4 transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};
