import { LinkButton } from "@/components/buttons";
import { Landmark } from "lucide-react";

const Page = () => {
  return (
    <div className="space-y-3 pt-10">
      <p className="text-[24px] font-semibold">Payment information</p>

      <div className="pt-8 space-y-3">
        <Landmark size={64} />
        {ItemsData.map((item, index) => (
          <Items key={index} title={item.title} value={item.value} />
        ))}
      </div>

      <div className="pt-10">
        <LinkButton href="/vendor/payment/add">Request to change</LinkButton>
      </div>
    </div>
  );
};

export default Page;

const ItemsData: IItems[] = [
  {
    title: "Name",
    value: "John Doe",
  },
  {
    title: "Bank",
    value: "CBE",
  },
  {
    title: "Account",
    value: "10000000000",
  },
  {
    title: "Vat number",
    value: "100000",
  },
  {
    title: "Schedule Payout",
    value: "Every week",
  },
];

interface IItems {
  title: string;
  value: string;
}

const Items = ({ title, value }: IItems) => {
  return (
    <div>
      <strong>{title}</strong>: {value}
    </div>
  );
};
