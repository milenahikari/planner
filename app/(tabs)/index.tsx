import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { parse } from "date-fns";

import { getDayOfWeekDay, getDaysOfMonthWithWeekDay, getMonth } from "@/app/src/utils/getDaysOfMonthWithWeekDay";
import { Base } from "@/app/src/templates/Base";
import { Button } from "@/app/src/components/Button";
import colors from "@/colors";
import { useSelectedDate } from "../src/stores/useSelectedDate";
import { useCurrentDate } from "../src/stores/useCurrentDate";

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
        <View className="flex-row my-5">
          <Text className="text-gray-200 font-poppinsMedium text-sm mr-9">Horário</Text>
          <Text className="text-gray-200 font-poppinsMedium text-sm">Curso</Text>
        </View>

        <View className="flex-row">
          <View className="w-2/12 border-0 border-r-2 border-gray-100">
            <Text className="text-gray-900 font-poppinsBold text-md">11:35</Text>
            <Text className="text-gray-200 font-poppinsMedium text-sm">13:05</Text>
          </View>
          
          <View className="w-10/12 bg-green-100 rounded-2xl mx-4 p-4">
            <Text className="text-gray-50 font-poppinsBold text-md">Matemática</Text>
            <Text className="text-gray-50 font-poppinsMedium text-xs">Teste descricao</Text>
          </View>
        </View>
      </View>
    </Base>
  );
}