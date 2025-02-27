"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
const chartData = [
  { date: "2024-01-01", desktop: 100, mobile: 150 },
  { date: "2024-01-02", desktop: 140, mobile: 180 },
  { date: "2024-01-03", desktop: 180, mobile: 120 },
  { date: "2024-01-04", desktop: 220, mobile: 260 },
  { date: "2024-01-05", desktop: 260, mobile: 290 },
  { date: "2024-01-06", desktop: 300, mobile: 340 },

  { date: "2024-02-07", desktop: 340, mobile: 180 },
  { date: "2024-02-08", desktop: 380, mobile: 320 },
  { date: "2024-02-09", desktop: 360, mobile: 110 },
  { date: "2024-02-10", desktop: 340, mobile: 190 },
  { date: "2024-02-11", desktop: 320, mobile: 350 },
  { date: "2024-02-12", desktop: 300, mobile: 210 },

  { date: "2024-03-13", desktop: 280, mobile: 380 },
  { date: "2024-03-14", desktop: 260, mobile: 220 },
  { date: "2024-03-15", desktop: 240, mobile: 170 },
  { date: "2024-03-16", desktop: 220, mobile: 190 },
  { date: "2024-03-17", desktop: 200, mobile: 360 },
  { date: "2024-03-18", desktop: 180, mobile: 410 },
  { date: "2024-03-19", desktop: 160, mobile: 180 },

  { date: "2024-04-20", desktop: 140, mobile: 150 },
  { date: "2024-04-21", desktop: 120, mobile: 200 },
  { date: "2024-04-22", desktop: 100, mobile: 170 },
  { date: "2024-04-23", desktop: 130, mobile: 230 },
  { date: "2024-04-24", desktop: 160, mobile: 290 },
  { date: "2024-04-25", desktop: 190, mobile: 250 },
  { date: "2024-04-26", desktop: 220, mobile: 130 },

  { date: "2024-05-27", desktop: 250, mobile: 420 },
  { date: "2024-05-28", desktop: 230, mobile: 180 },
  { date: "2024-05-29", desktop: 210, mobile: 240 },
  { date: "2024-05-30", desktop: 190, mobile: 380 },
  { date: "2024-05-01", desktop: 170, mobile: 220 },
  { date: "2024-05-02", desktop: 150, mobile: 310 },

  { date: "2024-06-03", desktop: 180, mobile: 190 },
  { date: "2024-06-04", desktop: 210, mobile: 420 },
  { date: "2024-06-05", desktop: 240, mobile: 390 },
  { date: "2024-06-06", desktop: 270, mobile: 520 },
  { date: "2024-06-07", desktop: 300, mobile: 300 },
  { date: "2024-06-08", desktop: 149, mobile: 210 },
  { date: "2024-06-09", desktop: 227, mobile: 180 },

  { date: "2024-07-10", desktop: 293, mobile: 330 },
  { date: "2024-07-11", desktop: 335, mobile: 270 },
  { date: "2024-07-12", desktop: 197, mobile: 240 },
  { date: "2024-07-13", desktop: 197, mobile: 160 },
  { date: "2024-07-14", desktop: 448, mobile: 490 },
  { date: "2024-07-15", desktop: 473, mobile: 380 },

  { date: "2024-08-16", desktop: 338, mobile: 400 },
  { date: "2024-08-17", desktop: 499, mobile: 420 },
  { date: "2024-08-18", desktop: 315, mobile: 350 },
  { date: "2024-08-19", desktop: 235, mobile: 180 },
  { date: "2024-08-20", desktop: 177, mobile: 230 },
  { date: "2024-08-21", desktop: 82, mobile: 140 },
  { date: "2024-08-22", desktop: 81, mobile: 120 },

  { date: "2024-09-23", desktop: 252, mobile: 290 },
  { date: "2024-09-24", desktop: 294, mobile: 220 },
  { date: "2024-09-25", desktop: 201, mobile: 250 },
  { date: "2024-09-26", desktop: 213, mobile: 170 },
  { date: "2024-09-27", desktop: 420, mobile: 460 },
  { date: "2024-09-28", desktop: 233, mobile: 190 },
  { date: "2024-09-29", desktop: 78, mobile: 130 },

  { date: "2024-10-30", desktop: 340, mobile: 280 },
  { date: "2024-10-31", desktop: 178, mobile: 230 },
  { date: "2024-10-01", desktop: 178, mobile: 200 },
  { date: "2024-10-02", desktop: 470, mobile: 410 },
  { date: "2024-10-03", desktop: 103, mobile: 160 },
  { date: "2024-10-04", desktop: 439, mobile: 380 },
  { date: "2024-10-05", desktop: 88, mobile: 140 },

  { date: "2024-11-06", desktop: 294, mobile: 250 },
  { date: "2024-11-07", desktop: 323, mobile: 370 },
  { date: "2024-11-08", desktop: 385, mobile: 320 },
  { date: "2024-11-09", desktop: 438, mobile: 480 },
  { date: "2024-11-10", desktop: 155, mobile: 200 },
  { date: "2024-11-11", desktop: 92, mobile: 150 },
  { date: "2024-11-12", desktop: 492, mobile: 420 },

  { date: "2024-12-13", desktop: 81, mobile: 130 },
  { date: "2024-12-14", desktop: 426, mobile: 380 },
  { date: "2024-12-15", desktop: 307, mobile: 350 },
  { date: "2024-12-16", desktop: 371, mobile: 310 },
  { date: "2024-12-17", desktop: 475, mobile: 520 },
  { date: "2024-12-18", desktop: 107, mobile: 170 },
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

export function RevenueChart() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center space-y-0 border-b p-0 sm:flex-row">
        <div className="flex items-center justify-between w-full p-2">
          <CardTitle>Revenue</CardTitle>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0  text-kgray-default max-w-max m-4">
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
          className="aspect-auto h-[380px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
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
                  className="w-[150px]"
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

            <Bar
              dataKey={"desktop"}
              fill={`#09A20F`}
              radius={[10, 10, 0, 0]}
              stackId={"a"}
              overflow={"hidden"}
            />
            <Bar
              dataKey={"mobile"}
              fill={`#09A20F`}
              radius={[10, 10, 0, 0]}
              stackId={"a"}
              shape={<CustomBar marginBottom={-6} radius={[10, 10, 0, 0]} />}
              className="opacity-40"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const CustomBar = (props: any) => {
  const { fill, x, y, width, height, marginBottom = 0 } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height - marginBottom}
      fill={fill}
      rx={3}
      ry={3}
      z={0}
    />
  );
};
