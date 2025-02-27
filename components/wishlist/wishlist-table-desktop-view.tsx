import Image from "next/image";
import { GetWishListQuery } from "@/graphql/wishlist/wishlist.generated";
import { C2ADialog } from "../dialog";
import RemoveFromWishList from "./remove-from-eish-list";
import { DialogClose } from "../ui";
import { ShoppingCart, Trash2 } from "lucide-react";
import { AddToCartBtn } from "../cart";

interface TableDesktopViewProps {
  data: GetWishListQuery;
}

export const TableDesktopView = ({ data }: TableDesktopViewProps) => {
  return (
    <table className="hidden md:table w-full">
      <thead className="shadow-sm">
        <tr>
          <th className="p-3 text-start poppins">Product</th>
          <th className="p-3 text-start poppins">Price</th>
          <th className="p-3 text-start poppins">Stock status</th>
          <th className="p-3 text-start poppins">Add to cart</th>
          <th className="p-3 text-start poppins">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.getWishlist?.map((product, index) => (
          <tr key={index}>
            <td className="border-b-2 p-3">
              <div className="flex items-center justify-start gap-2">
                <Image
                  src={
                    (process.env.NEXT_PUBLIC_IMAGE_URL as string) +
                    product?.productImages?.[product.productImages.length - 1]
                      ?.imageUrl
                  }
                  width={500}
                  height={500}
                  alt={product?.product.productName ?? ""}
                  className="aspect-[16/12] w-[70px] h-[65px] object-cover rounded-sm"
                />
                <p>{product?.product.productName}</p>
              </div>
            </td>
            <td className="border-b-2 p-3">${product?.product.price}</td>
            <td
              // className={`${
              //   product.stock ? 'text-kgreen-default' : 'text-kred-default'
              // } border-b-2 p-3 font-semibold`}

              className="border-b-2 p-3 font-semibold"
            >
              {product?.product.availableUnit ? "In stock" : "Out of stock"}
            </td>
            <td className="border-b-2 p-3">
              <AddToCartBtn
                product={{
                  id: parseInt(product?.product.productId ?? ""),
                  name: product?.product.productName.toString() ?? "",
                  price: product?.product.price ?? 0,
                  image:
                    process.env.NEXT_PUBLIC_IMAGE_URL ??
                    "" +
                      product?.productImages?.[
                        product?.productImages.length - 1
                      ]?.imageUrl ??
                    "",
                  rating: 0,
                }}
                icon={<ShoppingCart size={20} />}
                className="flex gap-2  py-2 rounded-lg border border-kaccent px-0 mx-0 "
              />
              {/* <Button
                variant="outline"
                className="flex gap-2  py-2 rounded-lg border border-kaccent px-4"
              >
                <span>Add</span>
                <BsCart size={20} />
              </Button> */}
            </td>
            <td className="border-b-2 p-3">
              <C2ADialog
                title={"Are you sure"}
                button={
                  <button className="bg-kpurple-main px-4 py-2 rounded-lg">
                    <Trash2 color="EA0000" size={24} />
                  </button>
                }
              >
                <DialogClose>
                  <RemoveFromWishList
                    productId={product?.product.productId ?? ""}
                  />
                </DialogClose>
              </C2ADialog>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
