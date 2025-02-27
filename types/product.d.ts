export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export type ProductPageSearchParams = {
  [key: string]: string | string[] | undefined;
  brand?: string;
  maxPrice?: string;
  minPrice?: string;
  rating?: string;
  color?: string;
};

export interface CatagoriesBrand {
  readonly name: string;
  readonly id: string;
}

export type ProductDetailSearchParams = {
  color?: string;
  size?: string;
  storage?: string;
  quantity?: string;
};
