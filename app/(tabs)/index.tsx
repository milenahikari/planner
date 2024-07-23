import { useState } from "react";
import { Text, View } from "react-native";

import { getDayOfWeekDay, getDaysOfMonthWithWeekDay, getMonth } from "@/src/utils/getDaysOfMonthWithWeekDay";
import { Base } from "@/src/templates/Base";
import { Button } from "@/src/components/Button";

export default function Index() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);
  const [selectedDay, setSelectedDay] = useState(0);
  
  function handleSelectToday() {
    setSelectedDate(today);
  }

  return (
    <Base header={
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center">
          <Text className='font-poppinsBold text-xl color-gray-900'>{today.getDate()}</Text>
          
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
      <View/>
    </Base>
  );
}