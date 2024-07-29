import React from 'react';
import { Tabs } from 'expo-router';

import { TabBarIcon } from '@/app/src/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarStyle: { height: 94, paddingBottom: 10 }}}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon tab='index' isFocused={focused} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="newSchedule"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon tab='schedule' isFocused={focused} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
