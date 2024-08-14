import { create } from "zustand";

type CurrentDateProps = {
  currentDate: Date;
  date: number;
  day: number;
  month: number;
  year: number;
};

const currentDate = new Date()

export const useCurrentDate = create<CurrentDateProps>((set) => ({
  currentDate,
  date: currentDate.getDate(),
  day: currentDate.getDay(),
  month: currentDate.getMonth(),
  year: currentDate.getFullYear(),
}));
