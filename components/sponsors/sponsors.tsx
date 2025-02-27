import { Title } from "../title";
import { SponsorCard } from "./sponsor-card";

export const Sponsors = () => {
  return (
    <div>
      <Title title={"Sponsored Ads"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SponsorCard
          title={"New Huawei P60"}
          description={"Shop now and get the latest phone now"}
          image={"/images/sponsors/sponsor.png"}
          alt={"sponsor 1"}
          className={"text-white "}
          imageClassName="h-[320px]"
        />
        <div className="grid grid-rows-2 gap-4">
          <SponsorCard
            title={"New Huawei P60"}
            description={"Shop now and get the latest phone now"}
            image={"/images/sponsors/sponsor1.png"}
            alt={"sponsor 2"}
            className={"text-white"}
            imageClassName="h-[150px]"
          />
          <SponsorCard
            title={"New Huawei P60"}
            description={"Shop now and get the latest phone now"}
            image={"/images/sponsors/sponsor2.png"}
            alt={"sponsor 3"}
            className={"text-white"}
            imageClassName="h-[150px]"
          />
        </div>
      </div>
    </div>
  );
};
