import {create} from "zustand";

export const useStoreLoading = create((set) => ({
  isLoading: false,
  onSet: (value: boolean) => set({isLoading: value}),
  onRemove: () => set({isLoading: false}),
}))
