import { Input, Label } from "@/components/ui";
import { GetUserProfileDocument } from "@/graphql/account/profile.generated";
import Image from "next/image";
import Link from "next/link";
import { Edit } from "lucide-react";
import { CircularLoading } from "@/components/loading";
import { getServerClient } from "@/lib/server-client";

const Page = async () => {
  const client = await getServerClient();
  const { data } = await client.query(GetUserProfileDocument, {});

  if (!data) return <CircularLoading />;

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center w-full ">
        <h1 className="text-[24px] font-semibold">My Profile</h1>

        <div className="flex flex-col w-full items-center justify-center border max-w-2xl my-4 py-4 rounded-[8px]">
          <div className="flex items-center justify-between w-full max-w-xl py-3">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
              width={500}
              height={500}
              className="size-[45px] rounded-full object-cover"
            />
            <Link href="/account/profile/edit">
              <Edit size={24} />
            </Link>
          </div>
          <div className="w-full max-w-xl">
            <Label>First name</Label>
            <Input
              className="w-full my-2"
              disabled={true}
              value={data?.getMe?.firstName || ""}
            />
            <Label>Last name</Label>
            <Input
              className="w-full my-2"
              disabled={true}
              value={data?.getMe?.lastName || ""}
            />
            <Label>Phone number</Label>
            <Input
              className="w-full my-2"
              disabled={true}
              value={data?.getMe?.phone || ""}
            />
            <Label>Email</Label>
            <Input
              className="w-full my-2"
              disabled={true}
              value={data?.getMe?.email || ""}
            />
            <Label>Gender</Label>
            <div className="flex gap-3 my-2">
              <div className="rounded-full bg-kaccent size-[24px] flex items-center justify-center">
                <div className="rounded-full bg-white size-[18px] flex items-center justify-center">
                  <div className="rounded-full bg-kaccent size-[12px]"></div>
                </div>
              </div>
              <p>{data?.getMe?.gender === "M" ? "Male" : "Female"}</p>
            </div>

            {/* <Label>Date of birth</Label>
            <Input className="w-full my-2" disabled={true} value="12-3-1998" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
