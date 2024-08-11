import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { parse } from "date-fns";

import { getDayOfWeekDay, getDaysOfMonthWithWeekDay, getMonth } from "@/app/src/utils/getDaysOfMonthWithWeekDay";
import { Base } from "@/app/src/templates/Base";
import { Button } from "@/app/src/components/Button";
import colors from "@/colors";
import { useSelectedDate } from "../src/stores/useSelectedDate";
import { useCurrentDate } from "../src/stores/useCurrentDate";
import { ScheduleItem } from "../src/components/ScheduleItem";

export default function Index() {
  const today = new Date();
  const { selectedDate, setSelectedDate} = useSelectedDate();
  const { currentDate } = useCurrentDate();
  const [selectedDay, setSelectedDay] = useState(0);

  const daysOfMonth = getDaysOfMonthWithWeekDay(selectedDate ?? today);

  function handleSelectDay(currentDate: string) {
    setSelectedDate(parse(currentDate, 'dd/MM/yyyy', today));
  }
  
  function handleSelectToday() {
    setSelectedDate(today);
  }
  
  useEffect(() => {
    setSelectedDay(selectedDate?.getDate() ?? 0);
  }, [selectedDate]);

  return (
    <Base header={
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center">
          <Text className='font-poppinsMedium text-xl color-gray-900'>{today.getDate()}</Text>
          
          <View className="ml-2">
            <Text className='font-poppinsMedium text-sm color-gray-200'>{getDayOfWeekDay(today.getDay())}</Text>
            <Text className='font-poppinsMedium text-sm color-gray-200'>{`${getMonth(today.getMonth())} ${today.getFullYear()}`}</Text>
          </View>

        </View>

        <View className="w-20">
          <Button label="Hoje" onPress={handleSelectToday}/>
        </View>
      </View>
    }>
      <View>
        <FlatList
          data={daysOfMonth}
          renderItem={({ item: currentDay }) => (
            <TouchableOpacity
              onPress={() => handleSelectDay(currentDay.date)}
              className={`${selectedDay === currentDay.day ? "bg-orange-100" : "bg-gray-50"} w-12 rounded-xl items-center mr-2 py-3`}>
              <Text className={`${selectedDay === currentDay.day? "color-gray-100" : "color-gray-200"} font-poppinsMedium text-xs`}>{currentDay.weekday}</Text>
              <Text className={`${selectedDay === currentDay.day? "color-gray-100" : "color-gray-900"} font-poppinsBold text-md`}>{currentDay.day}</Text>
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
      </View>

      <View className="mx-1">
        <View className="flex-row mt-5">
          <Text className="text-gray-200 font-poppinsMedium text-sm mr-9">Horário</Text>
          <Text className="text-gray-200 font-poppinsMedium text-sm">Curso</Text>
        </View>

        <ScheduleItem schedule={{startDate: "09:00", endDate: "10:00", title: "Ciência da Computação", description: 'Teste de descricao', isNextSchedule: true}} />
        <ScheduleItem schedule={{startDate: "09:00", endDate: "10:00", title: "Ciência da Computação", description: 'Teste de descricao', isNextSchedule: false}} />
      </View>
    </Base>
  );
}