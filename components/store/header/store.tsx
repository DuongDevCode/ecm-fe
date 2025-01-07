import {create} from "zustand";

export const useStore = create((set) => ({
  isUser: '',
  onSet: (value: string) => set({isUser: value}),
  onRemove: () => set({isUser: ''}),
}))
