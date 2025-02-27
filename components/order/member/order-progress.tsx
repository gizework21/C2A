import { cn } from "@/lib";
import { Check } from "lucide-react";
import { ReactNode } from "react";

interface ProgressProps {
  title: string;
  icon: ReactNode;
  last?: boolean;
  done: boolean;
  time: string;
}

export const OrderProgress = ({
  title,
  icon,
  last = false,
  done = false,
  time,
}: ProgressProps) => {
  return (
    <div className="flex flex-col items-center space-y-1 w-full">
      <p className="text-sm mb-2">{title}</p>
      <div className="flex items-center space-x-3 w-full">
        <div
          className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center",
            done ? "bg-green-500" : "bg-kgray-progressBg"
          )}
        >
          {done && <Check size={12} color="white" />}
        </div>

        {!last && (
          <div
            className={cn(
              "flex-1 h-0.5",
              done ? "bg-green-500" : "bg-kgray-progressBg"
            )}
          />
        )}
      </div>
      <div className="flex flex-col items-center space-y-1 mt-2">
        {icon}
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};
