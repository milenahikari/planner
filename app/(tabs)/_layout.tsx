import React from 'react';
import { Tabs } from 'expo-router';

import { TabBarIcon } from '@/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon tab='index' isFocused={focused} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon tab='schedule' isFocused={focused} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
