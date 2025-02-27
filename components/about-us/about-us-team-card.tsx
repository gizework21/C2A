import { AboutUsTeamCardProps } from "@/types/about-us";
import Image from "next/image";

export const AboutUsTeamCard = ({
  name,
  role,
  description,
  imageUrl,
}: AboutUsTeamCardProps) => {
  return (
    <div className="flex bg-kwhite-default p-2 gap-3 rounded-lg mx-2 lg:mx-10 shadow-md">
      <div className="rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={"About Us"}
          width={500}
          height={500}
          className="h-[153px] w-[181px] object-cover rounded-lg hover:scale-105 transition-transform duration-150 ease-in-out"
        />
      </div>
      <div>
        <p className="poppins font-semibold text-[20px]">{name}</p>
        <p className="poppins font-semibold text-[16px] text-kaccent">{role}</p>
        <p className="poppins text-[16px] text-kgray-text">{description}</p>
      </div>
    </div>
  );
};
