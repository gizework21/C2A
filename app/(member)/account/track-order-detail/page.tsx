import { FC } from "react";
import { PagesBreadcrumb } from "@/components/breadcrumb";
import { OrderProgress } from "@/components/order";

import Image from "next/image";
import { CircleCheck, Package, PackageOpen, Truck } from "lucide-react";

interface BreadcrumbLink {
  href: string;
  text: string;
}

interface OrderSummaryProps {
  label: string;
  value: string;
}

const breadcrumbLinks: BreadcrumbLink[] = [
  { href: "/", text: "Home" },
  { href: "/account", text: "Account" },
  { href: "/profile", text: "Profile" },
];

const TrackOrderDetail: FC = () => {
  return (
    <>
      <PagesBreadcrumb
        title="Track your Order"
        links={breadcrumbLinks}
        gradient={false}
      />

      <h1 className="text-2xl font-bold mb-8 text-center">Track your Order</h1>
      <div className="flex flex-col space-y-4 mt-4 max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4">
          <OrderProgress
            title="Order Confirmed"
            icon={<CircleCheck size={24} />}
            done={true}
            time="Wed, Apr 13 10:00 AM"
          />
          <OrderProgress
            title="Shipped"
            icon={<Package size={24} />}
            done={true}
            time="Wed, Apr 13 10:00 AM"
          />
          <OrderProgress
            title="Out for Delivery"
            icon={<Truck size={24} />}
            done={false}
            time="Wed, Apr 13 10:00 AM"
          />
          <OrderProgress
            title="Delivered"
            icon={<PackageOpen size={24} />}
            last={true}
            done={false}
            time="Wed, Apr 13 10:00 AM"
          />
        </div>

        <div className="flex justify-start sm:space-x-6">
          <OrderSummary label="Order ID:" value="1234567890" />
          <OrderSummary
            label="Delivery Address:"
            value="123 Main St, Anytown, USA"
          />
          <OrderSummary label="Estimated Date:" value="Wed, Apr 20 10:00 AM" />
        </div>

        <h2 className="text-2xl pb-0 pt-8 w-full text-left max-w-4xl">
          Recent Orders
        </h2>
        <a
          href="#"
          className="block pb-8 pt-8 w-full text-right max-w-4xl text-blue-500 underline"
        >
          View all
        </a>
        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0">
          {[1, 2, 3].map((index) => (
            <OrderDetails key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const OrderSummary: FC<OrderSummaryProps> = ({ label, value }) => (
  <div className="flex-1">
    <p className="font-bold text-sm sm:text-base">{label}</p>
    <p className="text-sm sm:text-base">{value}</p>
  </div>
);

const OrderDetails: FC = () => (
  <div className="flex-1 border rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-between">
    <div className="flex flex-col space-y-2 pb-3">
      <div className="flex items-center space-x-2">
        <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
          Order ID:
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">12345678</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex">
          <Image
            height={500}
            width={500}
            src="/images/order-detail.png"
            alt="Image"
            className="w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-20 object-cover rounded-lg border-2 border-black"
          />
          <div className="flex flex-col">
            <p className="text-xs sm:text-sm">Afro Hoodle</p>
            <a href="#" className="text-xs sm:text-sm text-blue-500 underline">
              Show Details
            </a>
          </div>
        </div>
      </div>
    </div>
    <p className="text-xs sm:text-sm md:text-base pt-2">Estimated Time</p>
    <p className="text-xs sm:text-sm md:text-base pt-2">
      Production Due in 5 days
    </p>
    <h6 className="text-xs sm:text-sm md:text-base  pt-2">Vendor</h6>
    <div className="flex items-center space-x-2 pt-3">
      <Image
        height={500}
        width={500}
        src="/images/order-detail.png"
        alt="Vendor"
        className="size-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-cover rounded-full"
      />
      <p className="text-xs sm:text-sm">Ezedin Ahmed</p>
    </div>
    <div>
      <p className="text-xs sm:text-sm pt-3">Apr,14,2024</p>
    </div>
  </div>
);

export default TrackOrderDetail;
