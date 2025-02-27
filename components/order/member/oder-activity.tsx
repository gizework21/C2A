import { ReactNode } from 'react';

interface OrderActivityProps {
  title: string;
  date: string;
  icon: ReactNode;
}

export const OrderActivity = ({ title, date, icon }: OrderActivityProps) => {
  return (
    <div className="flex gap-4 items-center p-2 ">
      <div className="size-[48px] flex items-center justify-center bg-[#EAF6FE] border border-cyan-200/60 rounded-sm">
        {icon}
      </div>

      <div>
        <p className="text-[14px]">{title}</p>

        <p className="text-[#77878F] text-[14px]">{date}</p>
      </div>
    </div>
  );
};
