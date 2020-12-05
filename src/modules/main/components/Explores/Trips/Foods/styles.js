import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  foodImg: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 125,
    height: '100%',
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
