import { View } from 'react-native';

import HomeSvg from '@/assets/icons/tabs/home.svg';
import ScheduleSvg from '@/assets/icons/tabs/schedule.svg';

type TabBarButtonProps = {
  tab: 'index' | 'schedule'
  isFocused: boolean;
}

export function TabBarIcon({ tab, isFocused }: TabBarButtonProps) {
  const icons = {
    index: (color: string) => <HomeSvg width={24} height={24} fill={color} />,
    schedule: (color: string) => <ScheduleSvg width={24} height={24} fill={color} />,
  };

  function getIconColor(isFocused: boolean) {
    return isFocused ? '#FF7648' : '#B0B0B0';
  }
  
  const color = getIconColor(isFocused);

  return icons[tab](color)
}