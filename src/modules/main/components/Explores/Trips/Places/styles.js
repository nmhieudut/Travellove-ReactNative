import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    height: 150,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  placeImg: {
    width: 110,
    height: 110,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  info: {
    marginHorizontal: 20,
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
    height: 30,
  },
});
export default styles;
