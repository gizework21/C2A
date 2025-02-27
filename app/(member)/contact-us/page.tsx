import { PagesBreadcrumb } from "@/components/breadcrumb";
import { ContactContentUs, ContactUsForm } from "@/components/contact-us";
import { Container } from "@/components/wrappers";
import {
  IconFacebookFooter,
  IconInstagramFooter,
  IconTwitterFooter,
} from "@/lib";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const icons = [IconTwitterFooter, IconInstagramFooter, IconFacebookFooter];
  return (
    <Container>
      <PagesBreadcrumb
        title={"Contact Us"}
        links={[{ text: "Contact Us", href: "/contact-us" }]}
      />
      <div className="self-center my-8   ">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-kwhite-default rounded-md shadow-md">
          <div className="p-4">
            <div className="relative flex flex-col h-full justify-between bg-gradient-to-br from-kblack-default to-kaccent px-10 text-kwhite-default rounded-[10px] shadow-lg py-10 overflow-hidden">
              <div className="absolute size-[100px] lg:size-[200px] bg-kblack-circle -bottom-10 -right-10 rounded-full " />
              <div className="absolute size-[60px] lg:size-[120px] bg-[#484848] bottom-3 right-3  lg:bottom-20 lg:right-20 rounded-full bg-opacity-20 " />
              <div>
                <p className="font-semibold text-[28px] poppins">
                  Contact Information
                </p>
                <p className="text-kwhite-gray font-[18px] poppins">
                  Say something to start a live chat!
                </p>
              </div>
              <div className="space-y-6 my-4 z-50">
                <ContactContentUs
                  icon={<Phone color="white" size={25} />}
                  content="+1012 3456 789"
                />
                <ContactContentUs
                  icon={<Mail color="white" size={25} />}
                  content="demo@gmail.com"
                />
                <ContactContentUs
                  icon={<MapPin color="white" size={25} />}
                  content="132 Dartmouth Street Boston, Massachusetts 02156 United States"
                />
              </div>
              <div className="flex gap-4 my-2">
                {icons.map((icon, index) => {
                  return (
                    <Image
                      key={index}
                      src={icon}
                      alt={icon + index}
                      height={20}
                      width={20}
                      className="object-cover"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full p-4">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
