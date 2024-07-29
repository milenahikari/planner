import { create } from "zustand";

export const useSelectedDate = create((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date: string) => set({ selectedDate: date }),
}));
