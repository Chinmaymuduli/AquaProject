import React from 'react';
import {NativeBaseProvider, Box, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
