"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  { month: "Sun", desktop: 100 },
  { month: "Mon", desktop: 90 },
  { month: "Tus", desktop: 120 },
  { month: "Wed", desktop: 73 },
  { month: "Thu", desktop: 130 },
  { month: "Fri", desktop: 100 },
  { month: "Sat", desktop: 120 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function WeeklyTrends() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center space-y-0 border-b p-0 sm:flex-row">
        <div className="flex items-center justify-between w-full p-2">
          <CardTitle>Weekly Trends</CardTitle>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0  text-kgray-default max-w-max ">
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
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[160px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="#D7A022"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
