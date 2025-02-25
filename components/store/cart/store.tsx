import { create } from 'zustand'

type Store = {
  totalCart: number
  setTotalCart: () => void
}

export const useStore = create<Store>()((set) => ({
  totalCart: 0,
  setTotalCart: () => set((state) => ({ totalCart: state.totalCart + 1 })),
}))
