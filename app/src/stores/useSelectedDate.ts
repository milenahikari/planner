import { create } from "zustand";

type SelecteDateProps = {
  selectedDate: Date;
  selectedDay: number;
  setSelectedDate: (date: Date) => void;
};

export const useSelectedDate = create<SelecteDateProps>((set) => ({
  selectedDate: new Date(),
  selectedDay: new Date().getDate(),
  setSelectedDate: (date: Date) => set({
    selectedDate: date,
    selectedDay: date.getDate()
  })
}));
