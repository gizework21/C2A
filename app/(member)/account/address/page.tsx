import { C2AButton, LinkButton } from "@/components/buttons";
import { GetUserContactDetailDocument } from "@/graphql/account/address.generated";
import Link from "next/link";
import { getServerClient } from "@/lib/server-client";
interface Address {
  addressId: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  isDefault: boolean;
  phone: string;
}

const Page = async () => {
  const client = await getServerClient();
  const { data } = await client.query(GetUserContactDetailDocument, {});
  console.log(data);

  if (data?.getUserContactDetail?.length === 0 || !data?.getUserContactDetail) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold inter text-[20px] max-w-2xl">Address</h1>
        <div className="flex flex-col items-center gap-4">
          <p className="text-kgray-default inter">
            You don't have any address yet.
          </p>
          <LinkButton href="/account/address/add">Add Address</LinkButton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="font-semibold inter text-[20px] max-w-2xl">Address</h1>

        {data?.getUserContactDetail?.map((address) => (
          <AddressCard
            key={address?.addressId}
            data={{
              addressId: address?.addressId ?? "",
              street1: address?.street1 ?? "",
              street2: address?.street2 ?? "",
              city: address?.city ?? "",
              state: address?.state ?? "",
              country: address?.country ?? "",
              zipcode: address?.zipcode ?? "",
              isDefault: address?.isDefault ?? false,
              phone: address?.phone ?? "",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

interface AddressCardProps {
  data: Address;
}

const AddressCard = async ({ data }: AddressCardProps) => {
  const { street1, phone, country, addressId } = data;

  return (
    <div className="flex w-full items-center justify-between max-w-2xl border p-3 rounded-[8px]">
      <div className="space-y-2 text-kgray-default inter ">
        <p className="font-semibold">Living Address</p>
        <p>{street1}</p>
        <p>{phone}</p>
        <p>{country}</p>
      </div>
      <div className="flex flex-col w-32 gap-2">
        <Link
          className="flex items-center justify-center border border-kaccent rounded-md p-1"
          href={{
            pathname: `/account/address/edit/${addressId}`,
            query: {
              addressId: data?.addressId ?? "",
              street1: data?.street1 ?? "",
              street2: data?.street2 ?? "",
              city: data?.city ?? "",
              state: data?.state ?? "",
              country: data?.country ?? "",
              zipcode: data?.zipcode ?? "",
              isDefault: data?.isDefault ?? false,
              phone: data?.phone ?? "",
            },
          }}
        >
          Edit
        </Link>

        <C2AButton variant="outline" className="text-red-500" size="sm">
          Remove
        </C2AButton>
      </div>
    </div>
  );
};
