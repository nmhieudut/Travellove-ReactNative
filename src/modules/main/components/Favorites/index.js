import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {ButtonGroup} from 'react-native-elements';
import Loading from '../../../../components/Loading';
import color from '../../../../constants/Colour';
import {getFavorites} from '../../../../services/favorites';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function index() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  const token = loggedInUser && loggedInUser.token;
  const userId = loggedInUser && loggedInUser.user._id;
  const buttons = ['Places', 'Foods', 'Hotels'];

  const fetchData = async () => {
    setLoading(true);
    const res = await getFavorites(userId, token);
    setData(res);
    setFilterData(data[selectedIndex]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    return () => setData([]);
  }, []);
  const updateIndex = (s) => {
    setSelectedIndex(s);
    setFilterData(data[s]);
  };

  const handleRefresh = () => {
    setFetching(true);
    setData([]);
    fetchData();
    updateIndex(selectedIndex);
    setFetching(false);
  };

  const navigateToDetail = ({item}) => {
    if (selectedIndex === 0) {
      return navigation.navigate('PlaceDetail', {
        placeId: item.placeId,
        bestPlaceId: item._id,
      });
    } else if (selectedIndex === 1) {
      return navigation.navigate('FoodDetail', {
        placeId: item.placeId,
        foodId: item._id,
      });
    } else if (selectedIndex === 2) {
      return navigation.navigate('HotelDetail', {
        placeId: item.placeId,
        hotelId: item._id,
      });
    }
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigateToDetail({item})}>
        <Image style={styles.img} source={{uri: item.mainimg}} />
        <View style={styles.info}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{fontSize: 12, color: 'grey'}} numberOfLines={1}>
            {item.address}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Saved
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          textStyle={{fontSize: 18}}
          selectedButtonStyle={{
            backgroundColor: `${color.PRIMARY}`,
          }}
        />
      </View>
      {selectedIndex === null && (
        <View
          style={{
            justifyContent: 'center',
            height: '50%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24}}>Choose a upper filter</Text>
        </View>
      )}
      {selectedIndex !== null && filterData.length === 0 ? (
        <View
          style={{
            justifyContent: 'center',
            height: '50%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24}}>No favorites</Text>
        </View>
      ) : null}
      <View style={styles.listItems}>
        {!loading ? (
          <FlatList
            data={filterData}
            refreshing={fetching}
            onRefresh={handleRefresh}
            renderItem={renderItem}
            keyExtractor={(item, i) => `${i}`}
          />
        ) : (
          <Loading />
        )}
      </View>
    </View>
  );
}
