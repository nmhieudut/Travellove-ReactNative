import {StyleSheet} from 'react-native';
import color from '../../../../constants/Colour';
const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${color.PRIMARY}`,
  },
  buttonGroup: {
    padding: 0,
    margin: 0,
  },
  listItems: {
    justifyContent: 'center',
    height: '85%',
  },
  item: {
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  img: {
    width: 110,
    height: 110,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  info: {
    marginHorizontal: 10,
    marginTop: 20,
    flex: 3,
  },
  ratingArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rating: {
    margin: 0,
    padding: 0,
  },
  likeArea: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
});
export default styles;
