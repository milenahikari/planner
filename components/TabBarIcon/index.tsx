import { View } from 'react-native';

import colors from '@/colors';

import HomeSvg from '@/assets/icons/tabs/home.svg';
import ScheduleSvg from '@/assets/icons/tabs/schedule.svg';

type TabBarButtonProps = {
  tab: 'index' | 'schedule';
  isFocused: boolean;
};

export function TabBarIcon({ tab, isFocused }: TabBarButtonProps) {
  const icons = {
    index: (color: string) => <HomeSvg width={24} height={24} fill={color} />,
    schedule: (color: string) => <ScheduleSvg width={24} height={24} fill={color} />,
  };

  const color = isFocused ? colors.orange[50] : colors.gray[500];

  return (
    <>
      {icons[tab](color)}
      {isFocused && <View style={{ width: 4, height: 4, backgroundColor: colors.orange[50], borderRadius: 2, marginTop: 5 }} />}
    </>
  );
}
