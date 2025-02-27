import { Product } from "@/types/product";
import { toast } from "@/components/ui";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  removeAllItems: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === data.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
          toast({ title: "Item quantity increased", variant: "success" });
        } else {
          set({ items: [...currentItems, { ...data, quantity: 1 }] });
          toast({ title: "Item added to cart", variant: "success" });
        }
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast({ title: "Item removed from cart", variant: "success" });
      },
      removeAllItems: () => {
        set({ items: [] });
        toast({ title: "All items removed from cart", variant: "success" });
      },
      updateQuantity: (id: number, quantity: number) => {
        if (quantity < 1) {
          toast({
            description: "Quantity must be at least 1",
            variant: "warning",
          });
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
        toast({ title: "Item quantity updated", variant: "success" });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
