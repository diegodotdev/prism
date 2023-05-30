import { create } from "zustand";

interface MenuStore {
  menuState: boolean;
  handleMenuState: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  menuState: false,
  handleMenuState: () => set((state) => ({ menuState: !state.menuState })),
}));
