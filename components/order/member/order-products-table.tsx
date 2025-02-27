import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { GetOrderByIdQuery } from "@/graphql/vendor/order/getOrder-ByID.generated";
import { getImageUrl } from "@/lib";
import clsx from "clsx";

import Image from "next/image";

interface ProductsOrderData {
  data: GetOrderByIdQuery | undefined;
}

export const OrderProductsTable = ({ data }: ProductsOrderData) => {
  if (!data?.GetOrderById || !data.GetOrderById[0]) {
    return <div>order product not found.</div>;
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#F2F4F5] border border-[#E4E7E9]">
          <TableHead className="w-[100px]">PRODUCTS</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>QUANTITY</TableHead>
          <TableHead className="text-right">status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full">
        {data?.GetOrderById[0]?.items?.map((product) => (
          <TableRow key={product?.product?.productName} className="w-full">
            <TableCell className="w-full">
              <div className="flex flex-col md:flex-row  gap-2 w-full">
                {product?.product?.images[0]?.imageUrl ? (
                  <Image
                    src={getImageUrl(
                      product?.product?.images[0]?.imageUrl ?? ""
                    )}
                    alt={product?.product?.productName}
                    width={500}
                    height={500}
                    className="size-[80px] object-cover rounded-md"
                  />
                ) : (
                  "NO IMAGE FOUND"
                )}

                <div className="w-full">
                  <p className="font-semibold text-[12px]">
                    {product?.product?.productName}
                  </p>
                  <p className="text-[14px]">{product?.product?.description}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell className="text-right">
              <span
                style={{
                  backgroundColor:
                    product?.product?.status === "PENDING"
                      ? "#d7a022"
                      : product?.product?.status === "APPROVED"
                      ? "green"
                      : "transparent",
                  borderRadius: "5px",
                  padding: "2px 6px",
                  color: "white",
                }}
              >
                {product?.product?.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
