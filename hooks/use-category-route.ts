import { create } from "zustand";

interface Children {
  __typename?: string | undefined;
  title: string;
  id: string;
  children?: Children[];
}

interface CategoryRouter {
  children: Children[];
  history: Children[][];
  addChildren: (children: Children[]) => void;
  goBack: () => void;
}

export const useCategoryRoute = create<CategoryRouter>((set, get) => ({
  children: [],
  history: [],
  addChildren: (children) => {
    set((state) => ({
      history: [...state.history, state.children],
      children,
    }));
  },
  goBack: () => {
    set((state) => {
      const history = [...state.history];
      const previousChildren = history.pop() ?? [];
      return {
        history,
        children: previousChildren,
      };
    });
  },
}));
