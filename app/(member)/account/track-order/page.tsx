import { PagesBreadcrumb } from "@/components/breadcrumb";
import { C2AButton } from "@/components/buttons";
import { C2AInput } from "@/components/input";
import Image from "next/image";

const breadcrumbLinks = [
  { href: "/", text: "Home" },
  { href: "/account", text: "Account" },
  { href: "/order-track", text: "Order Track" },
];

const TrackOrder = () => {
  return (
    <>
      <PagesBreadcrumb title="" links={breadcrumbLinks} gradient={false} />

      <div className="flex flex-col justify-center items-center space-y-6 mt-20">
        <h1 className="text-3xl font-bold">Track your Order</h1>
        <h2 className="text-xl">Enter your Order Tracking Number</h2>
        <C2AInput
          type="password"
          placeholder="Enter tracking number"
          className="max-w-sm border border-gray-300 rounded-md p-2"
        />
        <C2AButton variant="default" size="default">
          Track Now
        </C2AButton>
        <Image
          src="/images/order-track.png"
          alt="Order Track Image"
          height={500}
          width={500}
          className="mt-4"
        />
      </div>
    </>
  );
};

export default TrackOrder;
