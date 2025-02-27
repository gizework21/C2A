import { ReactNode } from "react";

export interface FooterIconProps {
  href: string;
  icon: string;
  name: string;
}

export interface FooterSocialIconProps {
  href: string;
  icon: ReactNode;
}

export interface FooterTextProps {
  href: string;
  name: string;
}

export const companyInfo: FooterTextProps[] = [
  { href: "about-us", name: "About Kegeberew E-Commerce " },
  { href: "#", name: "Social Responsibility" },
  { href: "#", name: "Affiliate" },
  { href: "#", name: "Fashion Blogger" },
];
export const helpAndSupport: FooterTextProps[] = [
  { href: "#", name: "Shipping Info" },
  { href: "#", name: "Returns" },
  { href: "#", name: "How to Order" },
  { href: "#", name: "How to Track" },
];

export const customerCare: FooterTextProps[] = [
  { href: "contact-us", name: "Contact Us" },
  { href: "#", name: "Payment" },
  { href: "#", name: "Bonus Point" },
  { href: "#", name: "Notices" },
];
