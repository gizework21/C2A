import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeftRight,
  CreditCard,
  FolderKanban,
  LayoutDashboard,
  ListOrdered,
  Lock,
  MessageSquare,
  Puzzle,
  Store,
  TicketPercent,
  User,
} from "lucide-react";

import { LogoWhite } from "@/lib";
interface SideBarProps {
  children: React.ReactNode;
}

interface SidebarItem {
  href: string;
  title: string;
  icon: React.ReactNode;
}

const SideBarData: SidebarItem[] = [
  {
    href: "/vendor/2fa",
    title: "2FA",
    icon: <Lock size={18} />,
  },
  {
    href: "/vendor/chat",
    title: "Chat",
    icon: <MessageSquare size={18} />,
  },
  {
    href: "/vendor/coupons",
    title: "Coupons",
    icon: <Puzzle size={18} />,
  },
  {
    href: "/vendor/dashboard",
    title: "Dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    href: "/vendor/discount",
    title: "Discount",
    icon: <TicketPercent size={18} />,
  },
  {
    href: "/vendor/order",
    title: "Orders",
    icon: <ListOrdered size={18} />,
  },
  {
    href: "/vendor/payment",
    title: "Payment",
    icon: <CreditCard size={18} />,
  },
  {
    href: "/vendor/product",
    title: "Products",
    icon: <FolderKanban size={18} />,
  },
  {
    href: "/vendor/profile",
    title: "Profile",
    icon: <User size={18} />,
  },
  {
    href: "/vendor/store",
    title: "Store",
    icon: <Store size={18} />,
  },
  {
    href: "/vendor/transactions",
    title: "Transactions",
    icon: <ArrowLeftRight size={18} />,
  },
];

export const Sidebar = ({ children }: SideBarProps) => {
  return (
    <div className="flex h-full">
      <div className="hidden lg:block bg-vendor-mainBg h-screen">
        <div className="flex items-center text-white gap-2 p-2">
          <Link href="/">
            <Image
              priority
              src={LogoWhite}
              alt="kegeberew logo"
              height={200}
              width={200}
              className="object-contain size-full pl-2"
            />
          </Link>
        </div>
        <div className="w-[250px] px-3">
          <div className="text-white space-y-4">
            {SideBarData.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className=" px-2 flex items-center gap-2 py-2 hover:bg-kaccent transition-colors duration-150 rounded-md"
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};
