import { create } from "zustand";
import { StoreState } from "./interfaces";

export const useStore = create<StoreState>((set) => ({
  showMenu: false,
  setShowMenu: (showMenu) => set(() => ({ showMenu: showMenu })),
}));
