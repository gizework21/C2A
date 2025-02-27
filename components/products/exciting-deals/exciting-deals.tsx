import { ExcitingDealsCarousel } from "@/components/carousel";
import { CircularLoading } from "@/components/loading";
import { AllBannersQuery } from "@/graphql/landing/landing.generated";
import { Suspense } from "react";

interface ExcitingDealsProps {
  data: AllBannersQuery | undefined;
}

export const ExcitingDeals = async ({ data }: ExcitingDealsProps) => {
  if (data?.excitingDeals?.objects?.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <p>No exciting deals found</p>
      </div>
    );
  }

  if (!data) return <CircularLoading />;

  return (
    <Suspense fallback={<CircularLoading />}>
      <ExcitingDealsCarousel data={data} />
    </Suspense>
  );
};
