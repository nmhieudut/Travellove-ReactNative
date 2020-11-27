import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function index() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Explorer List</Text>
      <ActivityIndicator />
      <Text>Loading</Text>
    </View>
  );
}
