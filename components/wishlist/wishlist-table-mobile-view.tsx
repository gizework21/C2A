import Image from "next/image";
import { GetWishListQuery } from "@/graphql/wishlist/wishlist.generated";
import { C2ADialog } from "../dialog";
import { DialogClose } from "../ui";
import RemoveFromWishList from "./remove-from-eish-list";
import { ShoppingCart, Trash2 } from "lucide-react";
import { AddToCartBtn } from "../cart";

interface TableMobileViewProps {
  data: GetWishListQuery;
}
export const TableMobileView = ({ data }: TableMobileViewProps) => {
  return (
    <div className="block md:hidden w-full">
      {data.getWishlist?.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-start w-full gap-4 border my-2 px-2"
        >
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Product</p>
            <div className="flex items-center gap-4">
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
          </div>
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Price</p>
            <p>${product?.product.price}</p>
          </div>
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Stock status</p>
            <p
            // className={`${
            //   product.stock ? 'text-kgreen-default' : 'text-kred-default'
            // } font-semibold`}
            >
              {product?.product.availableUnit ? "In stock" : "Out of stock"}
            </p>
          </div>
          <div className="flex items-center gap-4 justify-between w-full border-b py-2 ">
            <p className="poppins">Add to cart</p>
            <AddToCartBtn
              product={{
                id: parseInt(product?.product.productId ?? ""),
                name: product?.product.productName.toString() ?? "",
                price: product?.product.price ?? 0,
                image:
                  process.env.NEXT_PUBLIC_IMAGE_URL ??
                  "" +
                    product?.productImages?.[product?.productImages.length - 1]
                      ?.imageUrl ??
                  "",
                rating: 0,
              }}
              icon={<ShoppingCart size={20} />}
              className="flex gap-2  py-2 rounded-lg border border-kaccent px-0 mx-0 max-w-[33%] "
            />

            {/* <button className="flex gap-2  py-2 rounded-lg border border-kaccent px-4">
              <span>Add</span>
              <BsCart size={20} />
            </button> */}
          </div>
          <div className="flex items-center gap-4 justify-between w-full border-b py-2">
            <p className="poppins">Actions</p>
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
          </div>
        </div>
      ))}
    </div>
  );
};
