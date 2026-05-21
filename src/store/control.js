import { create } from "zustand";

const useControlStore = create((set) => ({
  wifi: true,
  bluetooth: false,
  airdrop: false,
  darkMode: false,
  brightness: 100,
  volume: 50,
  isOpen: false,

  toggle: (key) =>
    set((state) => ({ [key]: !state[key] })),

  setBrightness: (value) => set({ brightness: value }),
  setVolume: (value) => set({ volume: value }),

  /* 🔥 THIS IS THE IMPORTANT ONE */
  togglePanel: () =>
    set((state) => ({ isOpen: !state.isOpen })),
}));

export default useControlStore;