"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import Image from "next/image";

const products = [
  {
    id: "#5089",
    name: "Samsung s9",
    description: "Samsung s8 64GB 4GB RAM 12MP Camera 5.8 inch display",
    price: "$599.00",
    sold: 1,
    alertQuantity: 2,
    image:
      "https://images.unsplash.com/photo-1507955987999-df4864ee80d4?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: "#5089",
    name: "Samsung s8",
    description: "Samsung s8 64GB 4GB RAM 12MP Camera 5.8 inch display",
    price: "$599.00",
    sold: 1,
    alertQuantity: 2,
    image:
      "https://images.unsplash.com/photo-1507955987999-df4864ee80d4?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: "#5089",
    name: "Samsung s10",
    description: "Samsung s8 64GB 4GB RAM 12MP Camera 5.8 inch display",
    price: "$599.00",
    sold: 1,
    alertQuantity: 2,
    image:
      "https://images.unsplash.com/photo-1507955987999-df4864ee80d4?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const VendorStockAlert = () => {
  return (
    <div className="bg-white my-4">
      <h1 className="text-[20px] font-semibold montserrat text-kborder-default p-4">
        Stock Alert
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order id</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Sold</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {products.map((product) => (
            <TableRow key={product.name} className="w-full">
              <TableCell>{product.id}</TableCell>

              <TableCell className="flex flex-col md:flex-row  gap-2 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="size-[80px] object-cover rounded-md"
                />

                <div className="w-full">
                  <p className="font-semibold text-[12px]">{product.name}</p>
                  <p className="text-[14px]">{product.description}</p>
                </div>
              </TableCell>
              <TableCell>{product.sold}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell className="text-right">
                {product.alertQuantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
