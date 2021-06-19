import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import icon from '../assets/icon.png';
import color from '../constants/Colour';
export default function SplashScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 200,
          height: 200,
          borderWidth: 6,
          borderRadius: 999,
          borderColor: '#eeeeee',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: '99%', height: '99%', borderRadius: 999}}
          source={icon}
        />
      </View>

      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: `${color.PRIMARY}`,
          marginTop: 20,
        }}>
        TRAVEL LOVE
      </Text>
      <ActivityIndicator style={{marginTop: 10}} />
    </View>
  );
}
