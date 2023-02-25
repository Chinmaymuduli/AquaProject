import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login} from '../../screens';
import {PublicRoutesTypes} from '../../types/AllRoutes';

const Stack = createNativeStackNavigator<PublicRoutesTypes>();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#000',
        headerBackTitleVisible: false,
        // headerTitleStyle: {fontFamily: 'Montserrat-Bold'},
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
