import { GetVendorCouponsQuery } from "@/graphql/vendor/coupons/coupon.generated";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  DropdownMenuItem,
} from "@/components/ui";
import Link from "next/link";
import { SimpleC2ADropdown } from "../dropdown";
import { ArrowRight, Copy, MoreHorizontal } from "lucide-react";

interface VendorCouponsProps {
  data: GetVendorCouponsQuery | undefined;
}
const VendorCoupons = ({ data }: VendorCouponsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
      {data?.coupons?.map((coupon) => {
        return (
          <Card className="py-4 px-8 border border-kaccent">
            <CardHeader>
              <div className="flex items-center justify-between">
                <p className="font-bold text-[28px] text-red-500 p-0 py-4">
                  {coupon?.discountPercent}
                </p>

                <SimpleC2ADropdown
                  button={<MoreHorizontal className="size-3" />}
                >
                  <DropdownMenuItem>View</DropdownMenuItem>
                </SimpleC2ADropdown>
              </div>
            </CardHeader>
            <CardTitle className="font-bold text-[20px]">
              FOR WHOLE ORDER
            </CardTitle>
            <CardContent className="p-0 m-0 my-3">
              <div className="flex justify-between my-3">
                <h2 className="font-semibold text-kwhite-placeholderText">
                  Code:
                </h2>
                <h2 className="font-semibold">{coupon?.code}</h2>
                <>
                  <div className="flex gap-2 items-center">
                    <Copy size={24} /> Copy
                  </div>
                  <Link
                    href=""
                    className="flex gap-2 items-center text-kaccent"
                  >
                    <ArrowRight size={24} />
                    Apply
                  </Link>
                </>
              </div>
              <div>
                <ul className="list-inside">
                  <li>
                    {coupon?.startDate} – {coupon?.endDate}
                  </li>
                  <li>For all products.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default VendorCoupons;
