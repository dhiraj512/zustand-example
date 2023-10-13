export const codes: { [key: string]: string } = {
	javascript: `import { create } from "zustand";
    
const useBearStore = create((set) => ({
    bear: 0,
    increase: () => set((state) => ({ bear: state.bear + 1 })),
    removeAllBears: () => set({ bear: 0 }),
}));
    
function BearCounter() {
    const { bear, increase, removeAllBears } = useBearStore();
    return (
        <div>
            <h1>{bear}</h1>
            <button onClick={increase}>increase</button>
            <button onClick={removeAllBears}>remove all Bear</button>
        </div>
    );
}
    
export default BearCounter;`,

	typescript: `import { create } from "zustand";

interface StoreType {
	bear: number;
	increase: () => void;
	removeAllBears: () => void;
}

const useStore = create<StoreType>((set) => ({
	bear: 1,
	increase: () => set((state) => ({ bear: state.bear + 1 })),
	removeAllBears: () => set({ bear: 0 }),
}));

function BearCounter() {
	const { bear, increase, removeAllBears } = useStore();
	return (
		<div>
			<h1>{bear}</h1>
			<button onClick={increase}>increase</button>
			<button onClick={removeAllBears}>remove All Bears</button>
		</div>
	);
}
export default BearCounter;`,
};
