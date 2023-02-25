import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PublicRoutes from './routes/public';
import {useAppContext} from './contexts';
import PrivateRoutes from './routes/private';

const Routes = () => {
  const {isLoggedIn} = useAppContext();
  return <>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default Routes;

const styles = StyleSheet.create({});
