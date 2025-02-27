import { C2AButton } from "@/components/buttons";
import { C2ADialog } from "@/components/dialog";
import { StoreForm } from "@/components/vendor";
import { Container } from "@/components/wrappers";
import { SupplierDocument } from "@/graphql/vendor/store/vendorStore.generated";
import { getServerVenorId } from "@/lib/helpers";
import { getServerClient } from "@/lib/server-client";
import { Pencil } from "lucide-react";
import Image from "next/image";

const page = async () => {
  const vendorId = await getServerVenorId();
  const client = await getServerClient();

  const { data } = await client.query(SupplierDocument, {
    id: vendorId?.vendorData?.id,
  });

  const DetailItemData: DetailItemProps[] = [
    {
      title: "Store name",
      value: data?.supplier?.storeName || "N/A",
    },
    {
      title: "Country",
      value: data?.supplier?.country || "N/A",
    },
    {
      title: "Region",
      value: data?.supplier?.region || "N/A",
    },
    {
      title: "Subcity",
      value: data?.supplier?.subCity || "N/A",
    },
    {
      title: "Location",
      value: data?.supplier?.location || "N/A",
    },
    {
      title: "Wereda",
      value: data?.supplier?.woreda || "N/A",
    },
  ];

  const DetailItemData2: DetailItemProps[] = [
    {
      title: "Reference Code",
      value: data?.supplier?.referenceCode || "N/A",
    },
    {
      title: "tin number",
      value: data?.supplier?.tinNumber || "N/A",
    },
    {
      title: "Email",
      value: data?.supplier?.email || "N/A",
    },
    {
      title: "Phone number",
      value: data?.supplier?.phone || "N/A",
    },
    {
      title: "support phone number",
      value: data?.supplier?.supportPhone || "N/A",
    },
    {
      title: "Trade Name",
      value: data?.supplier?.storeName || "N/A",
    },
  ];

  interface DetailItemProps {
    title: string;
    value: string;
  }

  const DetailItem = ({ title, value }: DetailItemProps) => {
    return (
      <>
        <p className="text-kblack-text">{title}</p>
        <p className="text-kgray-light">{value}</p>
      </>
    );
  };

  return (
    <div>
      <div className="h-[300px] w-full relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1677846526184-86a9d87b5394?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5ub3VuY2V8ZW58MHx8MHx8fDA%3D"
          alt="store image"
          width={500}
          height={500}
          className="object-cover w-full h-[300px]"
        />
        <Image
          src="https://images.unsplash.com/photo-1690719189466-660b50ab5519?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1hY2RvbmFsZHN8ZW58MHx8MHx8fDA%3D"
          alt="store image"
          width={500}
          height={500}
          className="object-cover size-[200px] absolute -bottom-[32%] left-10 border shadow-md"
        />

        <div className="absolute right-2 top-4  md:top-[80%]  flex gap-4 ">
          <C2AButton>Edit Banner</C2AButton>
          <C2AButton>Edit Logo</C2AButton>
        </div>

        <div className="hidden md:block text-[24px] montserrat font-bold md:ml-[32%] lg:ml-[36%]  xl:ml-[20%]  mt-4">
          Store name
        </div>
      </div>

      <div className="md:hidden text-[24px] montserrat font-bold mt-32 px-4">
        Store name
      </div>

      <Container className="md:mt-32">
        <div className="border">
          <div className="flex items-center justify-between border p-4 bg-[#f2f2f2]">
            <p className="font-bold">Overview</p>

            <C2ADialog
              title=""
              variant="ghost"
              icon={<Pencil size={32} />}
              headerText="Edit Store Information"
            >
              <div className="p-4">
                <StoreForm vendorId={vendorId?.vendorData?.id} data={data} />
              </div>
            </C2ADialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 p-4 ">
            <div>
              {DetailItemData.map((item, index) => (
                <div key={index} className="mb-4">
                  <DetailItem title={item.title} value={item.value} />
                </div>
              ))}
            </div>

            <div>
              {DetailItemData2.map((item, index) => (
                <div key={index} className="mb-4">
                  <DetailItem title={item.title} value={item.value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
