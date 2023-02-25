import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PublicRoutesTypes = {
  Login: undefined;
};

export type BottomTabsTypes = {};
export type PrivateRoutesTypes = {};

export type PublicNavigationProps =
  NativeStackNavigationProp<PublicRoutesTypes>;
export type PrivateNavigationProps =
  NativeStackNavigationProp<PrivateRoutesTypes>;
