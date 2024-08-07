import { create } from "zustand";

type SelecteDateProps = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};

export const useSelectedDate = create<SelecteDateProps>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date: Date) => set({ selectedDate: date }),
}));
