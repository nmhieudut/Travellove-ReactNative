import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import LoginNavigator from './LoginNavigator';
import MainNavigator from './MainNavigator';
import SearchScreen from './SearchScreen';
import FoodDetail from './DetailScreen/FoodDetail';
import HotelDetail from './DetailScreen/HotelDetail';
import AsyncStorage from '@react-native-community/async-storage';
import PlaceDetail from './DetailScreen/PlaceDetail';
import FavoriteScreen from './MainNavigator/FavoriteScreen';
import SplashScreen from './SplashScreen';
import {cacheUserAction} from '../modules/auth/action';
const Stack = createStackNavigator();
const AuthenticationStackNavigator = () => {
  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();
  const [splashLoading, setSplashLoading] = useState(true);
  useEffect(() => {
    async function checkCache() {
      const cachedUser = await AsyncStorage.getItem('loggedInUser');
      if (!loggedInUser) {
        dispatch(cacheUserAction(JSON.parse(cachedUser)));
      }
    }
    checkCache();
  }, [error, loggedInUser]);

  useEffect(() => {
    setTimeout(() => setSplashLoading(false), 2000);
  }, []);

  if (splashLoading) {
    return <SplashScreen />;
  } else {
    if (!loggedInUser) {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
        </Stack.Navigator>
      );
    }

    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="HotelDetail" component={HotelDetail} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      </Stack.Navigator>
    );
  }
};
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
}
