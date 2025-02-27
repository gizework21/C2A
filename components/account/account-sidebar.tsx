"use client";

import { AccountSideBarContent, getImageUrl, Logo } from "../../lib";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "../auth";
import { useSession } from "next-auth/react";

export const AccountSidebar = () => {
  const session = useSession();
  const pathname = usePathname();

  return (
    <div className="min-w-[20%] bg-white space-y-4 py-4 hidden lg:block h-full px-6">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={getImageUrl(session.data?.user.image ?? "") ?? Logo}
          alt="logo"
          width={500}
          height={500}
          className="size-[70px] rounded-full object-cover"
        />
        <h1 className="inter font-semibold text-[20px]">
          {session.data?.user.firstName} {session.data?.user.lastName}
        </h1>

        <div className="py-10 space-y-3 w-full">
          {AccountSideBarContent.map((item, index) => {
            if (item.title === "Logout") {
              return <LogoutButton key={index} />;
            }
            return (
              <Link
                href={item.href}
                key={index}
                className={cn(
                  "flex items-center gap-2 justify-start w-full p-2 rounded-r-[10px]",
                  pathname === item.href ? "bg-kaccent text-white" : ""
                )}
              >
                {item.icon}
                <p className="text-[18px] font-medium inter">{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
