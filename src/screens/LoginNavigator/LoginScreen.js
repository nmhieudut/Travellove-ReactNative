import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import mainImage from '../../assets/image.jpg';

const heightScr = Dimensions.get('screen').height;
const widthScr = Dimensions.get('screen').width;
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground style={styles.backgroundImage} source={mainImage}> */}
      <View styles={styles.welcome}>
        <Text styles={styles.title}>Welcome</Text>
      </View>
      <View styles={styles.formArea}>
        <Text>Form</Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '75%',
    opacity: 0.7,
  },
  welcome: {
    height: heightScr / 3,
    backgroundColor: 'red',
  },
  title: {
    marginTop: 30,
    backgroundColor: 'red',
  },
  formArea: {
    flex: 4,
  },
});
