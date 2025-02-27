"use client";

import { useCart } from "@/hooks";
import { CartResponse } from "@/types/cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "urql";
import { RemoveFromCartDocument } from "@/graphql/cart/cart.generated";
import { Button, toast } from "../ui";
import { useRouter } from "next/navigation";

interface ICartTableDesktopViewProps {
  data: CartResponse[];
}

export const CartTableDesktopView: React.FC<ICartTableDesktopViewProps> = ({
  data,
}) => {
  const cart = useCart();
  const router = useRouter();
  const [removeFromCartResult, removeFromCart] = useMutation(
    RemoveFromCartDocument
  );

  const { fetching, error } = removeFromCartResult;

  const cartData = data ?? cart.items;

  const handleRemoveFromCart = async (productId: number) => {
    await removeFromCart({
      productId: productId,
    });

    if (!error) {
      router.refresh();
    }

    toast({
      title: "Product removed from cart",
      variant: "success",
    });
  };

  if (cartData.length < 1) {
    return <div>No items in cart</div>;
  }

  return (
    <div className="w-full hidden md:block">
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-white text-black border-b border-gray-200">
          <tr>
            <th className="p-4 text-left font-semibold">Product</th>
            <th className="p-4 text-left font-semibold">Price</th>
            <th className="p-4 text-left font-semibold">Quantity</th>
            <th className="p-4 text-left font-semibold">Total</th>
            <th className="p-4 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {cartData.map((product, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="p-4 flex items-center gap-4">
                <Image
                  src={process.env.NEXT_PUBLIC_IMAGE_URL + product.image}
                  width={70}
                  height={70}
                  alt={product.name}
                  className="object-cover rounded-lg shadow-sm"
                />
                <Link
                  href={`/product/${product.id}`}
                  className="text-black hover:underline"
                >
                  {product.name}
                </Link>
              </td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">
                <input
                  type="number"
                  className="outline-none border rounded-lg px-3 py-1 w-24 text-center transition-colors duration-200 focus:border-black"
                  value={product.quantity}
                  min={1}
                  onChange={(val) => {
                    const newQuantity = Math.max(1, parseInt(val.target.value));
                    cart.updateQuantity(parseInt(product.id), newQuantity);
                  }}
                />
              </td>
              <td className="p-4">
                <p>${product.total}</p>
              </td>
              <td className="p-4">
                <Button
                  disabled={fetching}
                  className="bg-red-600 text-white p-2 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-red-700 active:bg-red-800 active:scale-95"
                  onClick={() => handleRemoveFromCart(parseInt(product.id))}
                >
                  <Trash color="white" size={24} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
