

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


export type MoreStackParamList = {
  Settings: { userId: string };
  Profile: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  More: NavigatorScreenParams<MoreStackParamList>;
};

export type SettingsProps = NativeStackScreenProps<
  MoreStackParamList,
  'Settings'
>;

export type HomeNavProp = BottomTabNavigationProp<
  RootTabParamList,
  'Home'
>;