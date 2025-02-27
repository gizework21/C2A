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
import { GetVendorCouponsQuery } from "@/graphql/vendor/coupons/coupon.generated";

interface CouponsCardProps {
  isVendor?: boolean;
  data?: CouponsRes;
}

interface CouponsRes {
  endDate: any;
  id: string;
  isActive: boolean;
  startDate: any;
  code: string;
  discountPercent: any;
}

export const CouponsCard = ({ isVendor, data }: CouponsCardProps) => {
  return (
    <Card className="py-4 px-8 border border-kaccent">
      <CardHeader>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[28px] text-red-500 p-0 py-4">5 % OFF</p>

          {isVendor && (
            <SimpleC2ADropdown button={<MoreHorizontal className="size-3" />}>
              <DropdownMenuItem>View</DropdownMenuItem>
            </SimpleC2ADropdown>
          )}
        </div>
      </CardHeader>
      <CardTitle className="font-bold text-[20px]">FOR WHOLE ORDER</CardTitle>
      <CardContent className="p-0 m-0 my-3">
        <div className="flex justify-between my-3">
          <h2 className="font-semibold text-kwhite-placeholderText">Code:</h2>
          <h2 className="font-semibold">Savemore123</h2>
          {!isVendor && (
            <>
              <div className="flex gap-2 items-center">
                <Copy size={24} /> Copy
              </div>
              <Link href="" className="flex gap-2 items-center text-kaccent">
                <ArrowRight size={24} />
                Apply
              </Link>
            </>
          )}
        </div>
        <div>
          <ul className="list-inside">
            <li>05/08/2021 04:00 – 09/08/2021 12:00</li>
            <li>For all products.</li>
            <li>
              Combinations: Get 20% off when you spend over $169.00 or get 15%
              off when you spend over $89.00.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
