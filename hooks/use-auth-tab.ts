import { create } from "zustand";

interface AuthTab {
  activeTab: "login" | "register";
  setActiveTab: (tab: "login" | "register") => void;
  getCurrentTab: () => "login" | "register";
}

export const useAuthTab = create<AuthTab>((set, get) => ({
  activeTab: "login",
  setActiveTab: (tab: "login" | "register") => set({ activeTab: tab }),
  getCurrentTab: () => get().activeTab,
}));
