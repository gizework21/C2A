import { C2AInput } from "@/components/input";
import { cn } from "@/lib";
import { Check, Paperclip, SendHorizonal } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <p className="text-[24px] font-semibold">Chat</p>

      <div className="flex gap-6 bg-white p-6 rounded-[10px] my-6">
        <div className="space-y-4 border rounded-md p-4">
          <p className="text-[20px]">Messages</p>
          <C2AInput placeholder="Search chat" className="border" />

          {[...Array(8)].map((_, i) => (
            <VendorChatCard key={i} />
          ))}
        </div>
        <div className="w-full relative">
          <div className="flex p-3 border items-center  gap-4 rounded-md">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
              alt="chat"
              width={500}
              height={500}
              className="object-cover size-[40px] rounded-full"
            />
            <p className="font-bold">John wick</p>
          </div>

          <VendorPrivateChatCard isSender={false} />
          <VendorPrivateChatCard isSender={true} />
          <VendorPrivateChatCard isSender={false} />
          <VendorPrivateChatCard isSender={true} />

          <div className="absolute bottom-0 w-full ">
            <div className="flex border border-kaccent rounded-[10px]">
              <C2AInput
                placeholder="Write message"
                className="rounded-[10px]"
              />
              <div className="flex items-center gap-3 px-2">
                <Paperclip />
                <SendHorizonal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const VendorChatCard = () => {
  return (
    <div className="flex gap-6 justify-between bg-white shadow-md p-4 rounded-[10px] max-w-md">
      <div className="flex gap-4">
        <Image
          src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
          alt="chat"
          width={500}
          height={500}
          className="object-cover size-[40px] rounded-full"
        />

        <div>
          <p className="text-[14px]">John Wick</p>
          <p className="line-clamp-1 text-kgray-light text-[12px]">
            Good Morning Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Sequi, hic! Inventore aut ex necessitatibus rem mollitia
            corrupti, hic id temporibus ducimus sit maxime exercitationem ea, ut
            obcaecati qui odio porro.
          </p>
        </div>
      </div>

      <div>
        <p className="text-[12px]">SUN</p>
        <Check color="#07A403" size={16} />
      </div>
    </div>
  );
};

interface VendorPrivateChatCardProps {
  isSender: boolean;
}

const VendorPrivateChatCard = ({ isSender }: VendorPrivateChatCardProps) => {
  return (
    <div className="my-6">
      <div
        className={cn(
          "flex gap-4 items-center",
          isSender && "flex-row-reverse"
        )}
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
          alt="chat"
          width={500}
          height={500}
          className="object-cover size-[40px] rounded-full"
        />

        <div className="space-y-1">
          <div
            className={cn(
              "max-w-sm border border-kaccent rounded-[10px] p-4",
              isSender && "bg-kaccent text-white"
            )}
          >
            <p>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s,
            </p>
          </div>

          <div className={cn(isSender && "flex justify-end")}>
            <p>8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};
