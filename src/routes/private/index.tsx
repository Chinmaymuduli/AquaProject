import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens';
import {PrivateRoutesTypes} from '../../types/AllRoutes';

const Stack = createNativeStackNavigator<PrivateRoutesTypes>();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#000',
        headerBackTitleVisible: false,
        headerTitleStyle: {fontFamily: 'Montserrat-Bold'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
