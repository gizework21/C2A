import { C2AButton, LinkButton } from "../buttons";
import { CirclePlay } from "lucide-react";

export const DiscountBanner = () => {
  return (
    <div className="h-[300px] overflow-hidden my-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-no-repeat bg-cover">
      <div className="flex flex-col size-full items-center justify-center text-kwhite-default space-y-1 md:space-y-4 text-center">
        <h1 className="font-bold text-2xl lg:text-[40px]">20 % Discount</h1>
        <p className="line-clamp-2 text-sm max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-2 items-center justify-center montserrat">
          <C2AButton
            className="flex gap-2 rounded-full py-6 px-4"
            variant="outline"
          >
            <p className=" text-kaccent text-[18px] font-semibold">
              View Intro
            </p>
            <CirclePlay size={24} className="text-kaccent" />
          </C2AButton>
          <LinkButton
            href="/category/1"
            className="bg-kaccent rounded-full py-6 px-8 text-[18px] "
          >
            Explore
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
