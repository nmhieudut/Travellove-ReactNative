import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import mainImage from '../../../assets/image.jpg';
import color from '../../../constants/Colour';
import {loginAction} from '../action';

const heightScr = Dimensions.get('screen').height;

export default function Auth({navigation}) {
  //redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  const error = useSelector((state) => state.authReducer.error);
  const registeredUser = useSelector(
    (state) => state.registerReducer.registeredUser,
  );

  //state
  const [email, setEmail] = useState(
    registeredUser ? registeredUser.data.user.email : '',
  );
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
    } else if (loggedInUser) {
      AsyncStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    }
  }, [error, loggedInUser]);

  const onLogin = () => {
    dispatch(loginAction(email, password));
  };
  return (
    <ScrollView>
      <TouchableOpacity activeOpacity={1} style={styles.container}>
        <ImageBackground source={mainImage} style={styles.image}>
          <View style={styles.welcome}>
            <View style={styles.welcomeContent}>
              <Text style={styles.title}>WELCOME</Text>
              <Text style={styles.des}>A More Rewarding Way To Travel</Text>
            </View>
          </View>
          <View style={styles.formArea}>
            <View style={styles.inputText}>
              <TextInput
                style={styles.text}
                label="Email"
                onChangeText={(text) => setEmail(text)}
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
                onChangeText={(text) => setPassword(text)}
                theme={{
                  colors: {
                    primary: `${color.PRIMARY}`,
                    underlineColor: 'transparent',
                  },
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.loginButton}
                color="white"
                mode="flat"
                disabled={loading}
                loading={loading}
                onPress={onLogin}>
                LOGIN
              </Button>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Let's meet Tanle first!</Text>
        <TouchableOpacity
          style={styles.register}
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text style={styles.registerButton}>JOIN NOW !</Text>
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
  image: {
    flex: 1,
    height: '75%',
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center',
    height: heightScr / 3,
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
    marginTop: 20,
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
