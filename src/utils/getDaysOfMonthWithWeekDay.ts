import { getDate } from "date-fns";

type WeekdayProps = "Dom" | "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sab";

type WeekdayDetail = {
  date: string;
  day: number;
  weekday: WeekdayProps;
};

function getLastDayOfMonth(date: Date) {
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return nextMonth.getDate();
}

export function getDayOfWeekDay(positionOfWeekDay: number) {
  const dayOfWeek: WeekdayProps[] = [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab",
  ];

  return dayOfWeek[positionOfWeekDay];
}

export function getMonth(positionOfMonth: number) {
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  return months[positionOfMonth];
}

export function getDaysOfMonthWithWeekDay(date: Date) {
  let daysOfMonth: WeekdayDetail[] = [];

  const year = date.getFullYear();
  const month = date.getMonth();

  const lastDayOfMonth = getLastDayOfMonth(date);

  for (let day = 1; day <= lastDayOfMonth; day++) {
    const currentDate = new Date(year, month, day);
    daysOfMonth = [
      ...daysOfMonth,
      {
        date: currentDate.toLocaleDateString("pt-BR"),
        day: getDate(currentDate),
        weekday: getDayOfWeekDay(currentDate.getDay()),
      },
    ];
  }

  return daysOfMonth;
}
