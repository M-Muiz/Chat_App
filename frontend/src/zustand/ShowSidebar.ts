import { create } from "zustand";

type MyStore = {
    show: boolean;
    toggleShow: () => void;
};

const useShowSidebar = create<MyStore>((set) => ({
    show: false,
    toggleShow: () => set((state) => ({ show: !state.show})),
}))


export default useShowSidebar;