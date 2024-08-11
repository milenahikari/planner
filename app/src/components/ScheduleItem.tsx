import { Text, View } from "react-native";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ScheduleItemProps = {
  schedule: {
    startDate: string;
    endDate?: string;
    title: string;
    description?: string;
    isNextSchedule: boolean;
  }
}

const hourStyles = cva([], {
  variants: {
    startDate: {
      true: 'text-gray-900 font-poppinsBold text-md',
      false: 'text-gray-200 font-poppinsMedium text-sm',
    }
  }
});

const cardStyles = cva([
  'w-10/12', 'rounded-2xl', 'mx-4', ' p-4', 'my-4'
], {
  variants: {
    isNextSchedule: {
      true: 'bg-green-100',
      false: 'bg-gray-100',
    }
  }
});

const textStyles = cva([], {
  variants: {
    isNextSchedule: {
      true: 'text-gray-50',
      false: 'text-gray-900',
    },
    text: {
      title: 'font-poppinsBold text-md',
      description: 'font-poppinsMedium text-xs'
    }
  }
});

export function ScheduleItem({ schedule }: ScheduleItemProps) {
  return (
    <View className="flex-row">
      <View className="w-2/12 border-0 border-r-2 py-4 border-gray-100">
        <Text className={twMerge(hourStyles({ startDate: true }))}>{schedule.startDate}</Text>
        {!!schedule?.endDate && <Text className={twMerge(hourStyles({ startDate: false }))}>{schedule.endDate}</Text>}
      </View>
      
      <View className={twMerge(cardStyles({ isNextSchedule: schedule.isNextSchedule }))}>
        <Text className={twMerge(textStyles({ isNextSchedule: schedule.isNextSchedule, text: 'title' }))}>{schedule.title}</Text>
        {!!schedule?.description && <Text className={twMerge(textStyles({ isNextSchedule: schedule.isNextSchedule, text: 'description' }))}>{schedule.description}</Text>}
      </View>
    </View>
  );
}