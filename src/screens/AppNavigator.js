import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import LoginNavigator from './LoginNavigator';
import MainNavigator from './MainNavigator';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();
const AuthenticationStackNavigator = () => {
  // const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  // if (!loggedInUser) {
  //   return (
  //     <Stack.Navigator screenOptions={{headerShown: false}}>
  //       <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
  //     </Stack.Navigator>
  //   );
  // }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainNavigator"
        options={{headerShown: false}}
        component={MainNavigator}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
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
