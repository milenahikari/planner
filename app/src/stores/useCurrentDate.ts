import { create } from "zustand";

type CurrentDateProps = {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
};

export const useCurrentDate = create<CurrentDateProps>((set) => ({
  currentDate: new Date(),
  setCurrentDate: (date: Date) => set({ currentDate: date }),
}));
