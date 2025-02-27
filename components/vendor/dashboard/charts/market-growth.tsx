"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
const chartData = [
  { date: "2024-01-01", desktop: 40, mobile: 150 },

  { date: "2024-02-07", desktop: 80, mobile: 180 },

  { date: "2024-03-13", desktop: 120, mobile: 380 },

  { date: "2024-04-20", desktop: 160, mobile: 150 },

  { date: "2024-05-27", desktop: 200, mobile: 420 },

  { date: "2024-06-03", desktop: 240, mobile: 190 },

  { date: "2024-07-10", desktop: 280, mobile: 330 },

  { date: "2024-08-16", desktop: 320, mobile: 400 },

  { date: "2024-09-23", desktop: 360, mobile: 290 },

  { date: "2024-10-30", desktop: 400, mobile: 280 },

  { date: "2024-11-06", desktop: 360, mobile: 250 },

  { date: "2024-12-13", desktop: 320, mobile: 130 },

  { date: "2024-01-01", desktop: 280, mobile: 150 },

  { date: "2024-02-07", desktop: 240, mobile: 180 },

  { date: "2024-03-13", desktop: 200, mobile: 380 },

  { date: "2024-04-20", desktop: 160, mobile: 150 },

  { date: "2024-05-27", desktop: 120, mobile: 420 },

  { date: "2024-06-03", desktop: 80, mobile: 190 },

  { date: "2024-07-10", desktop: 40, mobile: 330 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "#09A20F",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function MarketGrowthChart() {
  const [focusBar, setFocusBar] = React.useState<number | undefined>(undefined);

  return (
    <Card>
      <CardHeader className="flex flex-col items-center space-y-0 border-b p-0 sm:flex-row">
        <div className="flex items-center justify-between w-full p-2">
          <CardTitle>Market Growth</CardTitle>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0  text-kgray-default max-w-max">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Choose</SelectLabel>
                <SelectItem value="revenue">Revenue</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[160px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            onMouseMove={(state) => {
              if (state.isTooltipActive) {
                setFocusBar(state.activeTooltipIndex);
              } else {
                setFocusBar(undefined);
              }
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  //   day: "numeric",
                });
              }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-full"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />

            <Bar dataKey={"desktop"} fill={`#D6D8DE`} radius={[10, 10, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={focusBar === index ? "#d7a024" : "#D6D8DE"}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
