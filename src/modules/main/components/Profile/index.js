import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import color from '../../../../constants/Colour';
import {useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '../../../auth/action';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
export default function index() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  const user = loggedInUser && loggedInUser.user;

  const onLogout = () => {
    dispatch(logoutAction());
    AsyncStorage.clear();
  };

  return (
    <ScrollView>
      {user && (
        <>
          <View style={styles.avatarArea}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={{uri: user.avatar}} />
            </View>
          </View>
          <View style={styles.infoArea}>
            <View style={styles.infoChild}>
              <FIcon name="user" size={24} />
              <View style={styles.infoText}>
                <Text style={styles.title}>User Name</Text>
                <Text style={styles.content}>{user.name}</Text>
              </View>
            </View>
            <View style={styles.infoChild}>
              <EIcon name="mail" size={24} />
              <View style={styles.infoText}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.content}>{user.email}</Text>
              </View>
            </View>
            <View style={styles.infoChild}>
              <FIcon name="birthday-cake" size={24} color="black" />
              <View style={styles.infoText}>
                <Text style={styles.title}>Birthday</Text>
                <Text style={styles.content}>
                  {moment(user.birthday).format('YYYY-MM-DD')}
                </Text>
              </View>
            </View>
            <View style={styles.infoChild}>
              <FIcon
                name={user.gender === 'Female' ? 'female' : 'male'}
                size={24}
              />
              <View style={styles.infoText}>
                <Text style={styles.title}>Gender</Text>
                <Text style={styles.content}>{user.gender}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={{color: 'white'}}>LOG OUT</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}
