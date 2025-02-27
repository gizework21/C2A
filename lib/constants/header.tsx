import { NavContentProps } from "@/types/header";
import { C2ADropdownContent } from "@/components/dropdown";
import {
  CircleDollarSign,
  Heart,
  Languages,
  ShoppingCart,
  UserCircle,
} from "lucide-react";

export class HeaderNames {
  static readonly USD = "USD";
  static readonly EN = "EN";
  static readonly Favorites = "Favorites";
  static readonly Cart = "Cart";
  static readonly Login = "Login";
}

export const navigationContents: NavContentProps[] = [
  {
    icon: <Heart size={24} />,
    alt: "favorite icon",
    title: HeaderNames.Favorites,
    href: "/wishlist",
  },
  {
    icon: <ShoppingCart size={24} />,
    alt: "cart icon",
    title: HeaderNames.Cart,
    href: "/cart",
  },
  {
    icon: <CircleDollarSign size={24} />,
    alt: "currency icon",
    title: HeaderNames.USD,
    href: "#",
  },
  {
    icon: <UserCircle size={24} />,
    alt: "account icon",
    title: HeaderNames.Login,
    href: "#",
  },
  {
    icon: <Languages size={24} />,
    alt: "language icon",
    title: HeaderNames.EN,
    href: "#",
  },
];

export const CurrencyDropdownContent: C2ADropdownContent = {
  title: "Currency",
  items: [{ name: "USD" }, { name: "ETB" }, { name: "EUR" }, { name: "GBP" }],
};

export const LanguageDropdownContent: C2ADropdownContent = {
  title: "Language",
  items: [{ name: "EN" }, { name: "AM" }, { name: "OR" }, { name: "FR" }],
};
