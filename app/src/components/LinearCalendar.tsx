type LinearCalendarProps = {

}

export function LinearCalendar({ }: LinearCalendarProps) {
  return (
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
  );
}