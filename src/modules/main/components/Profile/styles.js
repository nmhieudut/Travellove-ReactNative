import {StyleSheet, Dimensions} from 'react-native';
import color from '../../../../constants/Colour';

const heightScr = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  avatarArea: {
    height: heightScr / 3,
    backgroundColor: `${color.PRIMARY}`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: 'white',
  },
  avatar: {
    width: '99%',
    height: '99%',
    borderRadius: 999,
  },
  infoArea: {
    paddingVertical: 20,
  },
  infoChild: {
    backgroundColor: 'white',
    borderRadius: 999,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
  },
  infoText: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    color: '#9e9e9e',
  },
  logoutButton: {
    backgroundColor: `${color.PRIMARY}`,
    marginHorizontal: 25,
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
  },
});
export default styles;
