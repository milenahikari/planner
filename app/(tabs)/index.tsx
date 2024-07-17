import { Platform, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='font-poppinsBold text-lg color-green-50'>Tab One</Text>
      <Text style={{
        fontFamily: Platform.select({
          android: 'Poppins_500Medium',
          ios: 'Poppins-Medium',
        })
      }}>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}