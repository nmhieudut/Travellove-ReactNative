import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    marginVertical: 20,
  },
  searchContainer: {
    margin: 10,
  },
  searchBar: {
    borderRadius: 999,
  },
  item: {
    margin: 5,
    borderRadius: 12,
  },
  underline: {
    height: 2,
    backgroundColor: 'black',
    width: '55%',
  },
  imageItem: {
    width: 150,
    height: 100,
    borderRadius: 12,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: '#616161',
    width: 150,
    height: 100,
  },
  textOverlay: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
    width: 150,
    height: 100,
  },
  bestPlaceList: {
    paddingVertical: 10,
    height: 130,
  },
  placeItem: {
    width: '100%',
    height: 250,
    marginVertical: 10,
    borderRadius: 20,
  },
  placeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  placeOverlay: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    top: 125,
    backgroundColor: 'white',
    width: 300,
    height: 100,
    paddingLeft: 20,
  },
});
export default styles;
