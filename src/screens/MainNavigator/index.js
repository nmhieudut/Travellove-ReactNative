import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ExploresScreen from './ExploresScreen';
import FavoriteScreen from './FavoriteScreen';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../constants/Colour';
const Tab = createMaterialBottomTabNavigator();

export default function index() {
  return (
    <Tab.Navigator
      activeColor={color.PRIMARY}
      inactiveColor="black"
      shifting={false}
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="ExploresScreen"
        component={ExploresScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color}) => {
            return <Icon name="home" size={24} style={{color: color}} />;
          },
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          title: 'Favorite',
          tabBarIcon: ({focused, color}) => {
            return <Icon name="heart" size={24} style={{color: color}} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({focused, color}) => {
            return <Icon name="account" size={24} style={{color: color}} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
