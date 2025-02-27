"use client";

import Image from "next/image";

import { useCart } from "../../hooks";
import { Link, Trash2 } from "lucide-react";
import { CartResponse } from "@/types/cart";
import { useSession } from "next-auth/react";

interface CartTableMobileViewProps {
  data: CartResponse[];
}

export const CartTableMobileView = ({ data }: CartTableMobileViewProps) => {
  const session = useSession();
  const cart = useCart();

  if (cart.items.length < 1) {
    return (
      <div className="block md:hidden items-center justify-center w-full">
        <p className="text-center">No items in cart</p>
      </div>
    );
  }

  return (
    <div className="block md:hidden w-full ">
      {cart.items.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-start w-full gap-4 border my-2 px-2"
        >
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Product</p>
            <div className="flex items-center gap-4">
              <Image
                src={product.image}
                width={70}
                height={65}
                alt={product.name}
                className="hidden md:block aspect-[16/12] object-cover rounded-sm"
              />
              <Link
                href={`/product/${product.id}`}
                className="text-black truncate"
              >
                {product.name}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Price</p>
            <p>${product.price}</p>
          </div>
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Quantity</p>
            <input
              type="number"
              className="outline-none border  px-2 py-1 rounded-xl w-16"
              value={product.quantity}
              min={1}
              onChange={(val) => {
                if (session) {
                  console.log(val);
                } else {
                  const newQuantity = Math.max(1, parseInt(val.target.value));
                  cart.updateQuantity(product.id, newQuantity);
                }
              }}
            />
          </div>
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Total</p>
            <p>${product.price * product.quantity}</p>
          </div>
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Actions</p>
            <button
              className="bg-kpurple-main px-4 py-2 rounded-lg"
              onClick={() => {
                cart.removeItem(product.id);
              }}
            >
              <Trash2 color="red" size={24} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
