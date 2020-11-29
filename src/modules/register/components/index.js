import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextInput, Button, RadioButton} from 'react-native-paper';
import styles from './styles';
import DatePicker from 'react-native-datepicker';
import mainImage from '../../../assets/image.jpg';
import color from '../../../constants/Colour';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../action';

// YUP
const registerSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Password is required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long')
    .required('Name is required'),
});
export default function Register() {
  // hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // redux store
  const loading = useSelector((state) => state.registerReducer.loading);
  const success = useSelector((state) => state.registerReducer.success);
  console.log('loading:', loading, 'success', success);
  useEffect(() => {
    if (success) {
      ToastAndroid.show('Registered successfully !', ToastAndroid.SHORT);
      navigation.navigate('LoginScreen');
    }
  }, [success]);
  const signUp = (values) => {
    console.log(values);
    dispatch(registerAction(values));
  };
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
          <Formik
            initialValues={{
              email: '',
              name: '',
              password: '',
              gender: 'male',
              birthday: '2016-05-15',
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => signUp(values)}>
            {({handleChange, handleSubmit, values, errors}) => (
              <View style={styles.formArea}>
                <View style={styles.inputText}>
                  <TextInput
                    style={styles.text}
                    label="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    theme={{
                      colors: {
                        primary: `${color.PRIMARY}`,
                        underlineColor: 'transparent',
                      },
                    }}
                  />
                  {errors.email && (
                    <Text style={{color: 'red'}}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.inputText}>
                  <TextInput
                    style={styles.text}
                    label="Password"
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange('password')}
                    theme={{
                      colors: {
                        primary: `${color.PRIMARY}`,
                        underlineColor: 'transparent',
                      },
                    }}
                  />
                  {errors.password && (
                    <Text style={{color: 'red'}}>{errors.password}</Text>
                  )}
                </View>
                <View style={styles.inputText}>
                  <TextInput
                    style={styles.text}
                    label="Name"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    theme={{
                      colors: {
                        primary: `${color.PRIMARY}`,
                        underlineColor: 'transparent',
                      },
                    }}
                  />
                  {errors.name && (
                    <Text style={{color: 'red'}}>{errors.name}</Text>
                  )}
                </View>
                <View style={styles.inputGender}>
                  <View>
                    <Text
                      style={{
                        fontWeight: '700',
                      }}>
                      Gender:{' '}
                    </Text>
                  </View>
                  <RadioButton.Group
                    onValueChange={handleChange('gender')}
                    value={values.gender}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{color: 'grey'}}>Male</Text>
                      <RadioButton value="Male" color={color.PRIMARY} />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{color: 'grey'}}>Female</Text>
                      <RadioButton value="Female" color={color.PRIMARY} />
                    </View>
                  </RadioButton.Group>
                </View>
                {errors.gender && (
                  <Text style={{color: 'red'}}>{errors.gender}</Text>
                )}
                <View style={styles.inputGender}>
                  <View>
                    <Text
                      style={{
                        fontWeight: '700',
                      }}>
                      Date of birth:{' '}
                    </Text>
                  </View>
                  <DatePicker
                    style={{width: 200}}
                    date={values.birthday}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="1900-05-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                    }}
                    onDateChange={handleChange('birthday')}
                  />
                  {errors.birthday && (
                    <Text style={{color: 'red'}}>{errors.birthday}</Text>
                  )}
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={handleSubmit}
                    loading={loading}
                    disabled={loading}
                    style={styles.loginButton}
                    color="white"
                    mode="flat">
                    {loading ? 'Registering' : 'Register'}
                  </Button>
                </View>
              </View>
            )}
          </Formik>
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
