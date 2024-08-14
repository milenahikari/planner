import { Text, View } from "react-native";

import { Base } from "@/app/src/templates/Base";
import { Button } from "@/app/src/components/Button";
import { ScheduleItem } from "@/app/src/components/ScheduleItem";
import { LinearCalendar } from "@/app/src/components/LinearCalendar";

import { useSelectedDate } from "@/app/src/stores/useSelectedDate";
import { useCurrentDate } from "@/app/src/stores/useCurrentDate";
import { getDayOfWeekDay, getMonth } from "@/app/src/utils/getDaysOfMonthWithWeekDay";

import { data } from "@/app/mock";

export default function Index() {
  const { currentDate, date, day, month, year } = useCurrentDate();
  const { setSelectedDate} = useSelectedDate();


  return (
    <Base header={
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center">
          <Text className='font-poppinsMedium text-xl color-gray-900'>{date}</Text>
          
          <View className="ml-2">
            <Text className='font-poppinsMedium text-sm color-gray-200'>{getDayOfWeekDay(day)}</Text>
            <Text className='font-poppinsMedium text-sm color-gray-200'>{`${getMonth(month)} ${year}`}</Text>
          </View>

        </View>

        <View className="w-20">
          <Button label="Hoje" onPress={() =>setSelectedDate(currentDate)}/>
        </View>
      </View>
    }>
      <View>
        <LinearCalendar/>
      </View>

      <View className="mx-1">
        <View className="flex-row mt-5">
          <Text className="text-gray-200 font-poppinsMedium text-sm mr-9">Horário</Text>
          <Text className="text-gray-200 font-poppinsMedium text-sm">Curso</Text>
        </View>

        {data.schedules.map(schedule => (
          <ScheduleItem key={schedule.id} schedule={schedule} />
        ))}
      </View>
    </Base>
  );
}