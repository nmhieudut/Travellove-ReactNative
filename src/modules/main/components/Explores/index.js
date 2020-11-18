import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ExploresHome from './ExploresHome';
import Trips from './Trips';
const Stack = createStackNavigator();

export default function index() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExploresHome" component={ExploresHome} />
      <Stack.Screen name="Trips" component={Trips} />
    </Stack.Navigator>
  );
}
