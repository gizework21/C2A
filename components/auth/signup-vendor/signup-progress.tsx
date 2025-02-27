import { CheckoutProgress } from "@/components/checkout";
import { ReactNode } from "react";

export const SignupProgress = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row gap-4 fill-mode-forwards">
      {checkoutProgress.map((progress, index) => (
        <CheckoutProgress
          key={index}
          child={progress.child}
          title={progress.title}
          isDone={progress.isDone}
        />
      ))}
    </div>
  );
};

interface ICheckoutProgress {
  child: ReactNode;
  title: string;
  isDone: boolean;
}

const checkoutProgress: ICheckoutProgress[] = [
  {
    child: <p>1</p>,
    title: "Checkout detail",
    isDone: true,
  },
  {
    child: <p>2</p>,
    title: "Payment Detail",
    isDone: false,
  },
  {
    child: <p>3</p>,
    title: "Order complete",
    isDone: false,
  },
];
