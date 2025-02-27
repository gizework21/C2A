"use client";

import { Cell, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "Iphone 15 pro max", visitors: 175, fill: "#D7A022" },
  { browser: "Airpod pro 3", visitors: 100, fill: "#134E9F" },
  {
    browser: "Samsung galaxy S24 ultra",
    visitors: 74,
    fill: "#0E6C12",
  },
  { browser: "other", visitors: 30, fill: "#5B839F" },
];

const chartConfig = {
  visitors: {
    label: "Slaes Trends",
  },
  chrome: {
    label: "Iphone 15 pro max",
    color: "#D7A022",
  },
  safari: {
    label: "Airpod pro 3",
    color: "#134E9F",
  },
  firefox: {
    label: "Samsung galaxy S24 ultra",
    color: "#0E6C12",
  },

  other: {
    label: "Other",
    color: "#5B839F",
  },
} satisfies ChartConfig;

export function SalesTrendsPieChart() {
  return (
    <section className="flex flex-col">
      <div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square size-[300px]"
        >
          <PieChart>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#D7A022", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#95701D", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#09AA0F", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#0E6C12", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#0068F7", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#1B4176", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#A8C5DA", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#5B839F", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={54}
              paddingAngle={5}
              cornerRadius={10}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`url(#grad${index + 1})`} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </section>
  );
}
