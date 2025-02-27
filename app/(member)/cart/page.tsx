import {
  CartFooter,
  CartTableDesktopView,
  CartTableMobileView,
} from "@/components/cart";
import { CircularLoading } from "@/components/loading";
import { MyCartDocument } from "@/graphql/cart/cart.generated";
import { getServerClient } from "@/lib/server-client";
import { ShoppingCart } from "lucide-react";

const Page = async () => {
  const client = await getServerClient();
  const { data, error } = await client.query(MyCartDocument, {});

  if (!data) return <CircularLoading />;

  if (error) {
    return (
      <div className="flex justify-center py-2">Error loading cart data</div>
    );
  }

  if (data.myCart?.length === 0) {
    return <div className="flex justify-center py-2">Your cart is empty</div>;
  }

  const cartItems =
    (data.myCart &&
      data.myCart[0]?.cartItems?.map((item) => ({
        id: item?.product?.productId || "",
        name: item?.product?.productName || "",
        price: item?.product?.price || 0,
        quantity: item?.quantity || 0,
        total: (item?.product?.price || 0) * (item?.quantity || 0),
        image:
          item?.product?.images[item?.product?.images.length - 1]?.imageUrl ||
          "",
      }))) ||
    [];

  const totalPrice = (data.myCart && data.myCart[0]?.totalPrice) || 0;

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 my-10">
      <div className="flex items-center justify-center gap-4">
        <h1 className="font-semibold text-[26px]">Cart</h1>
        <ShoppingCart size={24} />
      </div>

      <CartTableDesktopView data={cartItems} />

      <CartTableMobileView data={cartItems} />

      <CartFooter cartItems={cartItems} totalPrice={totalPrice} />
    </div>
  );
};

export default Page;
