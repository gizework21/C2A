import { create } from "zustand";

interface Products {
  id: number;
  imageUrl: string;
  name: string;
}

interface Discount {
  products: Products[];
  addProduct: (product: Products) => void;
}

export const useDiscount = create<Discount>((set, get) => ({
  products: [],
  addProduct: (product: Products) => {
    const currentItems = get().products;
    const existingItem = currentItems.find((item) => item.id === product.id);
    if (!existingItem) {
      set({ products: [...get().products, product] });
    } else {
      set({
        products: get().products.filter((item) => item.id !== product.id),
      });
    }
  },
}));
