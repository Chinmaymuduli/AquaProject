import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {BottomTabsTypes} from 'src/types/AllRoutes';
import {Private} from 'screens';
import {COLORS} from 'styles';

const Tab = createBottomTabNavigator<BottomTabsTypes>();

export default function BottomTabs() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {fontFamily: 'Montserrat-Bold'},
          tabBarActiveTintColor: COLORS.primary,
        }}>
        <Tab.Screen
          name={'Home'}
          component={Private.Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name={'Jobs'}
          component={Private.Jobs}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="briefcase" color={color} size={size} />
            ),
            tabBarLabel: 'Jobs',
          }}
        />
        <Tab.Screen
          name={'Account'}
          component={Private.Account}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={size} />
            ),
            tabBarLabel: 'Account',
          }}
        />
      </Tab.Navigator>
    </>
  );
}
