import {
  IconDelivery,
  IconMoney,
  IconQuality,
  IconSecure,
  IconSupport,
} from "@/lib";
import Image from "next/image";

export interface InfoCardProps {
  title: string;
  description: string;
  icon: string;
}

export const infoCardItems: InfoCardProps[] = [
  {
    title: "Free Delivery",
    description: "Order above 1000 ETB",
    icon: IconDelivery,
  },
  {
    title: "Money-back",
    description: "30 days guarantee",
    icon: IconMoney,
  },
  {
    title: "Secure Payment",
    description: "Secured by Stripe",
    icon: IconSecure,
  },
  {
    title: "24/7 Support",
    description: "Phone and Email support",
    icon: IconSupport,
  },
  {
    title: "Best Quality",
    description: "Original product guarantied",
    icon: IconQuality,
  },
];

export const WhyYouChooseUs = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center font-bold text-[24px]">Why You Choose Us</h1>
      <div className="px-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-8 lg:gap-8">
        {infoCardItems.map((item, index) => (
          <WYCUCard
            title={item.title}
            description={item.description}
            icon={item.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const WYCUCard = ({ title, description, icon }: InfoCardProps) => {
  return (
    <div className=" flex items-center justify-center bg-kwhite w-full h-[172px]">
      <div className="flex flex-col items-center text-center  gap-2.5 ">
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
          className="object-cover"
        />
        <div className="text-black inter leading-[normal] text-[16px]">
          {title}
        </div>
        <div className="text-[#848484] inter text-[.9375rem] leading-[normal]">
          {description}
        </div>
      </div>
    </div>
  );
};
