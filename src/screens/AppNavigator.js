import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginNavigator from './LoginNavigator/index';
// import * as routes from '../routes';
const Stack = createStackNavigator();
const AuthenticationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
    </Stack.Navigator>
  );
};
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
}
