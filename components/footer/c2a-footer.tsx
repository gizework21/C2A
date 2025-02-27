import Link from "next/link";
import { FooterTitle } from "./footer-title";

import {
  companyInfo,
  customerCare,
  footerSocialIcons,
  helpAndSupport,
} from "./footer-costants";
import { Container } from "../wrappers/c2a-container";
import { FooterBottom } from "./footer-bottom";
import { NewsSubscription } from "./footer-news-suscription";
import { FooterText } from "./footer-text";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-kblack-review to-yellow-950 ">
      <Container>
        <div className="flex flex-wrap  md:px-0 md:flex-row justify-between py-6 gap-2">
          <div className="footer-content">
            <FooterTitle title={"COMPANY INFO"} />
            {companyInfo.map((item, index) => (
              <FooterText key={index} href={item.href} name={item.name} />
            ))}
          </div>
          <div className="footer-content">
            <FooterTitle title={"HELP & SUPPORT"} />
            {helpAndSupport.map((item, index) => (
              <FooterText key={index} href={item.href} name={item.name} />
            ))}
          </div>
          <div className="footer-content">
            <FooterTitle title={"CUSTOMER CARE"} />
            {customerCare.map((item, index) => (
              <FooterText key={index} href={item.href} name={item.name} />
            ))}
          </div>
          <div className="footer-content">
            <FooterTitle title={"SOCIALS"} />
            <div className="flex gap-2 mt-2 items-center">
              {footerSocialIcons.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Image
                    src={item.icon}
                    alt={item.icon}
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>
            <NewsSubscription />
          </div>
        </div>
        <FooterBottom />
      </Container>
    </div>
  );
};
