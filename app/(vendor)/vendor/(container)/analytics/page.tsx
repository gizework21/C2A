import { C2AButton } from "@/components/buttons";
import {
  MarketGrowthChart,
  RevenueChart,
  SalesTrendsPieChart,
  TopSallingProductsTable,
  WeeklyTrends,
} from "@/components/vendor";
import { cn } from "@/lib";
import { Calendar } from "lucide-react";

const Page = () => {
  return (
    <div>
      <h1 className="montserrat font-bold text-[22px] py-6">
        Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <RevenueChart />
        </div>
        <div className="space-y-2">
          <MarketGrowthChart />
          <WeeklyTrends />
        </div>
      </div>

      <div className="border rounded-[36px] p-6 mt-4 bg-white">
        <div className="flex justify-between items-center ">
          <h1>Sales Trends</h1>

          <div className="flex flex-wrap items-center gap-2">
            <C2AButton variant="outline">
              <Calendar />
            </C2AButton>

            <C2AButton variant="outline">Week</C2AButton>
            <C2AButton variant="outline">Month</C2AButton>
            <C2AButton>Year</C2AButton>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row  items-center justify-between  px-2 py-6">
          <SalesTrendsPieChart />
          <div className="min-w-[50%] space-y-4">
            {SalesTrendsData.map((data, idx) => (
              <SalesTrendsView key={idx} data={data} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 mt-6 rounded-[10px]">
        <TopSallingProductsTable />
      </div>
    </div>
  );
};

export default Page;

const SalesTrendsData: SalesTrendsData[] = [
  {
    label: "Iphone 15 pro max",
    percentage: 38.6,
    color: "#D7A022",
  },
  {
    label: "Airpod pro 3",
    percentage: 22.5,
    color: "#134E9F",
  },
  {
    label: "Samsung galaxy S24 ultra",
    percentage: 30.8,
    color: "#0E6C12",
  },
  {
    label: "Other",
    percentage: 8.1,
    color: "#5B839F",
  },
];

interface SalesTrendsData {
  label: string;
  percentage: number;
  color: string;
}

interface SalesTrendsViewProps {
  data: SalesTrendsData;
}

const SalesTrendsView = ({ data }: SalesTrendsViewProps) => {
  const { label, percentage, color } = data;
  return (
    <div className="flex justify-between gap-4">
      <div className="flex items-center gap-2">
        <span
          className={cn("size-[14px] rounded-full ", `bg-[${color}]`)}
        ></span>
        <h1 className="md:text-[22px]">{label}</h1>
      </div>
      <p className="md:text-[22px]">{percentage}</p>
    </div>
  );
};
