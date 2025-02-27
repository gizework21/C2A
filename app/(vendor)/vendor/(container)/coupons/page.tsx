import { CouponsCard } from "@/components/coupons";
import VendorCoupons from "@/components/coupons/vendor-coupons";
import { GetVendorCouponsDocument } from "@/graphql/vendor/coupons/coupon.generated";
import { getServerClient } from "@/lib/server-client";
import Link from "next/link";

const Page = async () => {
  const client = await getServerClient();

  const { data } = await client.query(GetVendorCouponsDocument, {});

  return (
    <div className="space-y-4">
      <h1 className="font-semibold text-[24px] my-6">My Coupons</h1>

      <div className="flex w-full justify-end">
        <Link
          href="/vendor/coupons/add"
          className="bg-kaccent px-4 py-2  text-white rounded-md"
        >
          Add Counpons
        </Link>
      </div>

      <VendorCoupons data={data} />
    </div>
  );
};

export default Page;
