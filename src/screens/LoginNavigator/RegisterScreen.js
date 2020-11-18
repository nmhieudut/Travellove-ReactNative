import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextInput, Button} from 'react-native-paper';
import mainImage from '../../assets/image.jpg';
import color from '../../constants/Colour';
const heightScr = Dimensions.get('screen').height;

export default function Auth({navigation}) {
  return (
    <ScrollView>
      <TouchableOpacity activeOpacity={1} style={styles.container}>
        <ImageBackground source={mainImage} style={styles.image}>
          <View style={styles.backIcon}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Icon name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.welcome}>
            <View style={styles.welcomeContent}>
              <Text style={styles.title}>REGISTER</Text>
              <Text style={styles.des}>A More Rewarding Way To Travel</Text>
            </View>
          </View>
          <View style={styles.formArea}>
            <View style={styles.inputText}>
              <TextInput
                style={styles.text}
                label="Username"
                theme={{
                  colors: {
                    primary: `${color.PRIMARY}`,
                    underlineColor: 'transparent',
                  },
                }}
              />
            </View>
            <View style={styles.inputText}>
              <TextInput
                style={styles.text}
                label="Password"
                secureTextEntry
                theme={{
                  colors: {
                    primary: `${color.PRIMARY}`,
                    underlineColor: 'transparent',
                  },
                }}
              />
            </View>
            <View style={styles.inputText}>
              <TextInput
                style={styles.text}
                label="Re-enter Password"
                secureTextEntry
                theme={{
                  colors: {
                    primary: `${color.PRIMARY}`,
                    underlineColor: 'transparent',
                  },
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button style={styles.loginButton} color="white" mode="flat">
                REGISTER
              </Button>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Have met Tanle yet ?</Text>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.registerButton}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  backIcon: {
    position: 'absolute',
    height: 60,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    height: '75%',
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center',
    height: heightScr / 4,
  },
  welcomeContent: {
    marginTop: 40,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 42,
    fontWeight: 'bold',
    color: 'black',
  },
  des: {
    fontSize: 20,
    color: 'black',
  },
  formArea: {
    padding: 30,
    paddingTop: 10,
    borderRadius: 30,
    margin: 30,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 7,
  },
  inputText: {
    marginVertical: 15,
  },
  text: {
    backgroundColor: 'white',
  },
  loginButtonContainer: {
    width: '100%',
  },
  buttonContainer: {
    marginVertical: 14,
  },
  loginButton: {
    backgroundColor: `${color.PRIMARY}`,
    borderRadius: 999,
    paddingVertical: 10,
  },
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerText: {
    fontSize: 12,
  },
  register: {
    marginLeft: 10,
  },
  registerButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: `${color.PRIMARY}`,
  },
});
