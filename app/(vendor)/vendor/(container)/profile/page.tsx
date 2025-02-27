import { CircularLoading } from "@/components/loading";
import { GetVendorProfileDocument } from "@/graphql/vendor/profile/profile.generated";
import { Logo } from "@/lib";
import { getServerClient } from "@/lib/server-client";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const Page = async () => {
  const client = await getServerClient();
  const { data } = await client.query(GetVendorProfileDocument, {});

  if (!data)
    return (
      <div className="grid place-content-center h-screen">
        <CircularLoading />
      </div>
    );

  return (
    <Suspense fallback={<CircularLoading />}>
      <div className="flex flex-col justify-center w-full h-screen items-center">
        <div className="bg-white p-4 border rounded-md w-full max-w-2xl">
          <div className="border p-4 space-y-6 w-full ">
            <div className="space-y-2">
              <div className="flex justify-between">
                <h1 className="font-medium ">Personal Information</h1>
                <Link
                  href={{
                    pathname: "/vendor/profile/edit",
                    query: data.vendorData?.user,
                  }}
                >
                  <Edit size={24} />
                </Link>
              </div>

              <Image
                src={
                  data.vendorData?.user.profilePic
                    ? process.env.NEXT_PUBLIC_IMAGE_URL ||
                      "" + data.vendorData?.user.profilePic
                    : Logo
                }
                alt="logo"
                width={500}
                height={500}
                className="size-[90px] rounded-full object-cover object-center"
              />
            </div>

            <div className="flex gap-6">
              <div className="space-y-4">
                <ProfileHeaderView
                  title="First name"
                  subTitle={data.vendorData?.user.firstName ?? ""}
                />

                <ProfileHeaderView
                  title="Phone number"
                  subTitle={data.vendorData?.user.phone ?? ""}
                />

                <ProfileHeaderView
                  title="Gender"
                  subTitle={
                    data.vendorData?.user.gender === "M" ? "Male" : "Female"
                  }
                />
              </div>

              <div className="space-y-4">
                <ProfileHeaderView
                  title="Last name"
                  subTitle={data.vendorData?.user.lastName ?? ""}
                />

                <ProfileHeaderView
                  title="Email"
                  subTitle={data.vendorData?.user.email ?? ""}
                />
              </div>
            </div>
          </div>

          <div className="border p-4 space-y-2 my-6 w-full">
            <div className="flex justify-between">
              <h1 className="font-medium ">Address</h1>
              <Link
                href={{
                  pathname: "/vendor/profile/edit/address",
                  query: {
                    location: data.vendorData?.location,
                    subCity: data.vendorData?.subCity,
                    country: data.vendorData?.country,
                    woreda: data.vendorData?.woreda,
                  },
                }}
              >
                <Edit size={24} />
              </Link>
            </div>

            <div className="flex gap-6">
              <div className="space-y-4">
                <ProfileHeaderView
                  title="Country"
                  subTitle={data.vendorData?.country ?? ""}
                />
                <ProfileHeaderView
                  title="Woreda"
                  subTitle={data.vendorData?.woreda ?? ""}
                />
              </div>

              <div className="space-y-4">
                <ProfileHeaderView
                  title="City"
                  subTitle={data.vendorData?.subCity ?? ""}
                />
                <ProfileHeaderView
                  title="Street"
                  subTitle={data.vendorData?.location ?? ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;

interface ProfileHeaderViewProps {
  title: string;
  subTitle: string;
}

const ProfileHeaderView = ({ title, subTitle }: ProfileHeaderViewProps) => {
  return (
    <div className="space-y-1">
      <h1 className="text-kgray-default font-bold text-[12px] inter">
        {title.toUpperCase()}
      </h1>
      <p className="text-[15px] text-kgray-default ">{subTitle}</p>
    </div>
  );
};
