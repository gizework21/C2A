import {
  BookUser,
  Circle,
  Heart,
  ListOrdered,
  LogOut,
  Settings,
  Truck,
  User,
} from "lucide-react";

import { AccountSidebarItem } from "@/types/account";

export const AccountSideBarContent: AccountSidebarItem[] = [
  {
    title: "Orders",
    icon: <ListOrdered size={20} />,
    href: "/account/orders",
  },

  {
    title: "Track order",
    icon: <Truck size={20} />,
    href: "/account/track-order",
  },
  {
    title: "Coupons",
    icon: <Circle size={20} />,
    href: "/account/coupons",
  },
  {
    title: "Profile",
    icon: <User size={20} />,
    href: "/account/profile",
  },
  {
    title: "Address",
    icon: <BookUser size={20} />,
    href: "/account/address",
  },

  {
    title: "Settings",
    icon: <Settings size={20} />,
    href: "/account/settings",
  },
  {
    title: "Logout",
    icon: <LogOut size={20} />,
    href: "/account/logout",
  },
];
