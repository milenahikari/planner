import { ReactNode } from "react";
import { SafeAreaView, View } from "react-native";

type BaseProps = {
  header: ReactNode;
  children: ReactNode;
}
export function Base({ header, children }: BaseProps) {
  return <SafeAreaView className="bg-gray-100 flex-1">
    <View className="bg-gray-100 max-h-28 pt-6 px-5 pb-5">
      {header}
    </View>

    <View className="bg-gray-50 flex-1 rounded-t-3xl pt-4 px-5">
      {children}
    </View>
  </SafeAreaView>
}