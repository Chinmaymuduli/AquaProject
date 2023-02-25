import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PublicRoutesTypes = {
  Login: undefined;
};

export type BottomTabsTypes = {};
export type PrivateRoutesTypes = {
  HomeScreen: undefined;
};

export type PublicNavigationProps =
  NativeStackNavigationProp<PublicRoutesTypes>;
export type PrivateNavigationProps =
  NativeStackNavigationProp<PrivateRoutesTypes>;
