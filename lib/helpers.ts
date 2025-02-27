import { ProductPageSearchParams } from "@/types/params";
import session from "./session";
import { getServerClient } from "./server-client";
import { GetVendorIdDocument } from "@/graphql/vendor/vendor.generated";

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface UpdateUrlParamProps {
  title: string;
  value: string;
  checked: boolean;
  href: ProductPageSearchParams;
}

export const updateUrlParams = ({
  title,
  value,
  checked,
  href,
}: UpdateUrlParamProps) => {
  const newParams = new URLSearchParams();

  Object.keys(href).forEach((paramKey) => {
    const paramValue = href[paramKey];
    if (paramValue) {
      if (Array.isArray(paramValue)) {
        paramValue.forEach((v) => newParams.append(paramKey, v));
      } else {
        newParams.append(paramKey, paramValue);
      }
    }
  });

  if (checked) {
    const values = newParams.getAll(title).filter((item) => item !== value);
    newParams.delete(title);
    values.forEach((item) => newParams.append(title, item));
  } else {
    if (title === "price") {
      const prices = value.split(" ")[1].split("-");
      newParams.append("maxPrice", prices[1]);
      newParams.append("minPrice", prices[0]);
    } else {
      newParams.append(title, value);
    }
  }
  return `?${newParams.toString()}`;
};

export const encodeUrlFormat = (text: string) => {
  return text
    .toString()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "and")
    .replace(/[^\w\-]+/g, "")
    .toLowerCase();
};

export const decodeUrlFormat = (text: string) => {
  return text.replace(/-/g, " ").replace(/\band\b/g, "&");
};

export const getServerVenorId = async () => {
  const client = await getServerClient();

  const { data: vendorId } = await client.query(GetVendorIdDocument, {});

  return vendorId;
};

export const getImageUrl = (image: string) => {
  return process.env.NEXT_PUBLIC_IMAGE_URL + image;
};
