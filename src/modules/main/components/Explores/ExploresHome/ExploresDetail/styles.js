import {StyleSheet} from 'react-native';
import color from '../../../../../../constants/Colour';

const styles = StyleSheet.create({
  imageView: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mainImage: {
    width: '100%',
    height: 200,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
  listImages: {
    padding: 30,
    height: 200,
  },
  imageItem: {
    height: '100%',
    width: 150,
    marginHorizontal: 5,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  description: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 30,
  },
  button: {
    backgroundColor: `${color.PRIMARY}`,
    borderRadius: 999,
    padding: 10,
  },
});
export default styles;
