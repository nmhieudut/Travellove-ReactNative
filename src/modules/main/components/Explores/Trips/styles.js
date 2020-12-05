import {StyleSheet} from 'react-native';
import color from '../../../../../constants/Colour';
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    backgroundColor: `${color.PRIMARY}`,
    paddingHorizontal: 10,
  },
  goBack: {
    flex: 1,
  },
  title: {
    flex: 2,
  },
});
export default styles;
