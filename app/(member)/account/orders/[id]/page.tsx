import { ReactNode, Suspense } from "react";
import { Container } from "@/components/wrappers";
import {
  OrderProgress,
  OrderActivity,
  OrderProductsTable,
  OrderFooter,
} from "@/components/order";
import {
  ArrowLeft,
  CheckCheck,
  CircleUser,
  ContainerIcon,
  Notebook,
  NotepadText,
  PackageCheck,
  Truck,
} from "lucide-react";
import { getServerClient } from "@/lib/server-client";
import { GetOrderByIdDocument } from "@/graphql/vendor/order/getOrder-ByID.generated";
import { CircularLoading } from "@/components/loading";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const client = await getServerClient();

  const { data } = await client.query(GetOrderByIdDocument, {
    orderId: id,
  });

  if (!data?.GetOrderById || !data.GetOrderById[0]) {
    return <div>Order not found.</div>;
  }

  const dateStr = data?.GetOrderById[0]?.createdAt;
  const date = new Date(dateStr);

  const readableDate = date.toLocaleString();

  return (
    <Suspense fallback={<CircularLoading />}>
      <div className="border">
        <div className="border flex gap-2 items-center p-3">
          <ArrowLeft />
          <p>ORDER DETAILS</p>
        </div>

        <Container className="space-y-4 border-b pb-4">
          <div className="flex justify-between p-4 bg-kaccent/10 border border-kaccent rounded-sm mt-4">
            <div className="text-[14px] text-green-light">
              <p className="text-[20px]">#{data?.GetOrderById[0]?.id}</p>
              <p className="">
                {data?.GetOrderById[0]?.items?.length} Products . Order Placed{" "}
                {readableDate}
              </p>
            </div>
            <h1 className="font-semibold text-[28px]">
              {data?.GetOrderById[0]?.totalAmount}
            </h1>
          </div>

          <p className="text-[14px] text-green-light">
            Order expected arrival 23 Jan, 2021
          </p>

          <div className="flex w-full">
            {OrderProgressData.map((data, index) => (
              <OrderProgress
                key={index}
                title={data.title}
                icon={data.icon}
                done={data.done}
                last={data.last}
                time={""}
              />
            ))}
          </div>
        </Container>

        <Container className="py-4">
          <div>
            <p>Order Activity</p>

            {OrderActivityData.map((data, index) => (
              <OrderActivity
                key={index}
                title={data.title}
                date={data.date}
                icon={data.icon}
              />
            ))}
          </div>
        </Container>

        <OrderProductsTable data={data} />

        <Container className="grid grid-cols-1 md:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x py-4 border-t">
          {OrderFooterData.map((data, index) => (
            <OrderFooter
              key={index}
              title={data.title}
              name={data.name}
              address={data.address}
              phone={data.phone}
              email={data.email}
            />
          ))}
        </Container>
      </div>
    </Suspense>
  );
};

export default Page;

interface IOrderFooter {
  title: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

const OrderFooterData: IOrderFooter[] = [
  {
    title: "Billing Address",
    name: "Kevin Gilbert",
    address:
      "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh",
    phone: "+1-202-555-0118",
    email: "kevin.gilbert@gmail.com",
  },
  {
    title: "Billing Address",
    name: "Kevin Gilbert",
    address:
      "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh",
    phone: "+1-202-555-0118",
    email: "kevin.gilbert@gmail.com",
  },
  {
    title: "Order Notes",
    name: "Kevin Gilbert",
    address:
      "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh",
    phone: "+1-202-555-0118",
    email: "kevin.gilbert@gmail.com",
  },
];

interface IOrderActivity {
  title: string;
  date: string;
  icon: ReactNode;
}

const OrderActivityData: IOrderActivity[] = [
  {
    title:
      "Your order has been delivered. Thank you for shopping at China2Africa!",
    date: "17 Jan, 2021 at 7:32 PM",
    icon: <CheckCheck size={24} />,
  },
  {
    title: "Our delivery",
    date: "23 Jan, 2021 at 2:00 PM",
    icon: <CircleUser size={24} />,
  },
  {
    title: "Your order has been confirmed.",
    date: "19 Jan, 2021 at 2:61 PM",
    icon: <NotepadText size={24} />,
  },
];

interface IOrderProgress {
  title: string;
  icon: ReactNode;
  last?: boolean;
  done: boolean;
}

const OrderProgressData: IOrderProgress[] = [
  {
    title: "Order Placed",
    icon: <Notebook size={32} />,
    done: true,
  },
  {
    title: "Shipped",
    icon: <ContainerIcon size={32} />,
    done: false,
  },
  {
    title: "Out for delivery",
    icon: <Truck size={32} />,
    done: false,
  },
  {
    title: "Delivered",
    icon: <PackageCheck size={32} />,
    done: false,
    last: true,
  },
];
