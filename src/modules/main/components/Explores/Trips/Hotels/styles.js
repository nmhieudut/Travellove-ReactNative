import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  item: {
    height: 300,
    margin: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    margin: 15,
  },
  discountTag: {
    position: 'absolute',
    paddingHorizontal: 30,
    alignItems: 'center',
    top: 15,
    right: -20,
    backgroundColor: 'red',
    transform: [{rotate: '45deg'}],
  },
});
export default styles;
