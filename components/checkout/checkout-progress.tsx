import { Check } from "lucide-react";
import { ReactNode } from "react";

interface CheckoutProgressProps {
  child: ReactNode;
  title: string;
  isDone: boolean;
}

export const CheckoutProgress = ({
  child,
  title,
  isDone,
}: CheckoutProgressProps) => {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <div
          className={`${
            isDone ? "bg-kgreen-default" : " "
          } size-10 rounded-full bg-kgray-icon flex items-center justify-center text-white`}
        >
          {isDone ? <Check /> : child}
        </div>
        <p
          className={`${
            isDone ? "text-kgreen-default inter font-semibold" : ""
          }`}
        >
          {title}
        </p>
      </div>

      <div
        className={`${
          isDone ? "bg-kgreen-default animated-fill" : "bg-kgray-hr"
        } mt-4 h-[2px] `}
      />
    </div>
  );
};
