import { create } from "zustand";

interface QtyState {
  qtyState: number;
  decrease: () => void;
  increase: () => void;
  reset: () => void;
}

export const useQtyStore = create<QtyState>((set) => ({
  qtyState: 1,
  decrease: () => set((state) => ({ qtyState: state.qtyState - 1 })),
  increase: () => set((state) => ({ qtyState: state.qtyState + 1 })),
  reset: () => set({ qtyState: 1 }),
}));
