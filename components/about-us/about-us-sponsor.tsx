import { SponsorProps } from "@/types/about-us";

export const AboutUsSponsors = ({
  title: count,
  subTitle: totalProjects,
  description,
}: SponsorProps) => {
  return (
    <div className="flex flex-col text-center justify-center items-center max-w-sm poppins">
      <p className="text-gradient font-bold text-[48px]">{count}</p>
      <p className="text-[20px] font-semibold">{totalProjects}</p>
      <p className="text-kgray-text">{description}</p>
    </div>
  );
};
