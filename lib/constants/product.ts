import { Product } from "@/types/product";

export interface IProduct {
  name: string;
  price: number;
  stock: boolean;
  image: string;
}

export const products: IProduct[] = [
  {
    name: "Product 1",
    price: 100,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Product 2",
    price: 200,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Product 3",
    price: 300,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8fDA%3D",
  },
];

export type ProductPageSearchParams = {
  [key: string]: string | string[] | undefined;
  brand?: string | string[] | undefined;
  maxPrice?: string | string[] | undefined;
  minPrice?: string | string[] | undefined;
  rating?: string | string[] | undefined;
  color?: string | string[] | undefined;
};

export const productList: Product[] = [
  {
    id: 1,
    name: "Apple Iphone 15 pro 128GB",
    price: 500,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Laptop S21 128GB",
    price: 400,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Headset",
    price: 600,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 10 128GB",
    price: 300,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Realme 8 pro 128GB",
    price: 350,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1604418620232-6fa9e4be7616?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmUlMjByZWRtaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Apple Iphone 15 pro 128GB",
    price: 500,
    rating: 1,
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Samsung Galaxy S21 128GB",
    price: 400,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1611967564293-9cc64a2fd3dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lJTIwc2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "OnePlus 9 pro 128GB",
    price: 600,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1614796740292-50ae67262ff0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lcGx1c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    name: "Xiaomi Redmi Note 10 128GB",
    price: 300,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1529653762956-b0a27278529c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHhpYW1vaSUyMG5vdGUlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    name: "Realme 8 pro 128GB",
    price: 350,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob25lfGVufDB8fDB8fHww",
  },
  {
    id: 11,
    name: "Xiaomi Redmi Note 10 128GB",
    price: 300,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    name: "Realme 8 pro 128GB",
    price: 350,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1604418620232-6fa9e4be7616?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmUlMjByZWRtaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    name: "Apple Iphone 15 pro 128GB",
    price: 500,
    rating: 1,
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    name: "Samsung Galaxy S21 128GB",
    price: 400,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1611967564293-9cc64a2fd3dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lJTIwc2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
