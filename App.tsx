import React from 'react';
import {NativeBaseProvider, Box, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';
import {AppContextProvider} from './src/contexts';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppContextProvider>
          <Routes />
        </AppContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
