import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import LoginNavigator from './LoginNavigator';
import MainNavigator from './MainNavigator';
import SearchScreen from './SearchScreen';
import FoodDetail from './DetailScreen/FoodDetail';
import HotelDetail from './DetailScreen/HotelDetail';
import PlaceDetail from './DetailScreen/PlaceDetail';

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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
      <Stack.Screen name="HotelDetail" component={HotelDetail} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
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
