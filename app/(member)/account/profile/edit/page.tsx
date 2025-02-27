import { ProfileUpdateForm } from "@/components/account";
import { CircularLoading } from "@/components/loading";
import { GetUserProfileDocument } from "@/graphql/account/profile.generated";
import { getServerClient } from "@/lib/server-client";

const Page = async () => {
  const client = await getServerClient();

  const { data } = await client.query(GetUserProfileDocument, {});

  if (!data) return <CircularLoading />;

  return <ProfileUpdateForm data={data} />;
};

export default Page;
