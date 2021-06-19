import {StyleSheet, Dimensions} from 'react-native';
import color from '../../../constants/Colour';

const heightScr = Dimensions.get('screen').height;
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

  formArea: {
    padding: 30,
    borderRadius: 30,
    margin: 30,
    marginTop: heightScr / 12,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 7,
  },
  inputText: {
    marginVertical: 10,
  },
  inputGender: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
export default styles;
