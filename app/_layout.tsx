import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen';

import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [loaded, error] = useFonts({
    poppinsRegular: Poppins_400Regular,
    poppinsMedium: Poppins_500Medium,
    poppinsBold: Poppins_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor: '#E5E5E5'
      }
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    </Stack>
  );
}