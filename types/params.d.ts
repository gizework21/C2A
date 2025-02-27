export type ProductPageSearchParams = {
  [key: string]: string | string[] | undefined;
  brand?: string | string[] | undefined;
  maxPrice?: string | string[] | undefined;
  minPrice?: string | string[] | undefined;
  rating?: string | string[] | undefined;
  color?: string | string[] | undefined;
};
