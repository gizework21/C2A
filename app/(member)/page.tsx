import { DiscountBanner, HomeBannerCard } from "@/components/banner";
import { FeaturedCategories } from "@/components/category";
import { MostViewedCategories } from "@/components/category/most-viewed";
import { CustomerFeedback } from "@/components/customer-feed-back";
import { JoinUs } from "@/components/join-us";
import { PopularProducts, ExcitingDeals } from "@/components/products";
import { Sponsors } from "@/components/sponsors";
import { Container } from "@/components/wrappers";
import { WhyYouChooseUs } from "@/components/wycu";
import { AllBannersDocument } from "@/graphql/landing/landing.generated";
import { getServerClient } from "@/lib/server-client";
import session from "@/lib/session";

export default async function Home() {
  const auth = await session();

  const client = await getServerClient();

  const { data, error } = await client.query(AllBannersDocument, {});

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <main>
      <HomeBannerCard data={data} />
      <Container>
        <Sponsors />
        <PopularProducts data={data} />
        <MostViewedCategories data={data} />
      </Container>
      <DiscountBanner />
      <Container>
        <ExcitingDeals data={data} />
        <FeaturedCategories data={data} />
        <WhyYouChooseUs />
      </Container>
      {!auth && <JoinUs />}
      <Container>
        <CustomerFeedback />
        <Sponsors />
      </Container>
    </main>
  );
}
