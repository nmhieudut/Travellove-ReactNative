import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../../auth/action';
export default function index() {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Logout" onPress={onLogout}></Button>
    </View>
  );
}
