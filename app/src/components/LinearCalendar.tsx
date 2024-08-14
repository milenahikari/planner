import { FlatList, Text, TouchableOpacity } from "react-native";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { useSelectedDate } from "../stores/useSelectedDate";
import { getDaysOfMonthWithWeekDay } from "../utils/getDaysOfMonthWithWeekDay";
import { useCurrentDate } from "../stores/useCurrentDate";

import colors from "@/colors";

const cardStyles = cva([
  'w-12',
  'rounded-xl',
  'items-center',
  'mr-2',
  'py-3'
], {
  variants: {
    isSelected: {
      true: 'bg-orange-100',
      false: 'bg-gray-50'
    }
  }
});

const textStyles = cva([], {
  variants: {
    type: {
      title: 'text-xs font-poppinsMedium color-gray-200',
      detail: 'text-md font-poppinsBold color-gray-900'
    },
    isSelected: {
      true: 'color-gray-100',
    },
  }
});

export function LinearCalendar() {
  const { currentDate } = useCurrentDate();
  const { selectedDate, selectedDay, setSelectedDate } = useSelectedDate();
  const daysOfMonth = getDaysOfMonthWithWeekDay(selectedDate ?? currentDate);

  return (
    <FlatList
      data={daysOfMonth}
      renderItem={({ item: currentDay }) => (
        <TouchableOpacity
          onPress={() => setSelectedDate(currentDay.date)}
          className={twMerge(cardStyles({ isSelected: selectedDay === currentDay.day }))}>
          <Text className={twMerge(textStyles({ isSelected: selectedDay === currentDay.day, type: 'title' }))}>{currentDay.weekday}</Text>
          <Text className={twMerge(textStyles({ isSelected: selectedDay === currentDay.day, type: 'detail' }))}>{currentDay.day}</Text>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        borderBottomWidth: 2,
        borderBottomColor: colors.gray[100],
        paddingBottom: 12
      }}
    />
  );
}