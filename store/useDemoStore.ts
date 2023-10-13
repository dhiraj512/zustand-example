import { create } from "zustand";

interface DemoStoreType {
	bear: number;
	increase: () => void;
	decrease: () => void;
	removeAllBears: () => void;
}

export const useDemoStore = create<DemoStoreType>((set) => ({
	bear: 1,
	increase: () => set((state) => ({ bear: state.bear + 1 })),
	decrease: () => set((state) => ({ bear: state.bear - 1 })),
	removeAllBears: () => set({ bear: 0 }),
}));
