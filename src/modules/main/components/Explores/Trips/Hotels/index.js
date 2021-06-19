import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {getHotels} from '../../../../../../services/hotels';
import {Rating} from 'react-native-elements';
import {Chip} from 'react-native-paper';
import Loading from '../../../../../../components/Loading';
import Like from '../../../../../../components/Like';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function index(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const navigation = useNavigation();
  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  const _id = props.id;
  const token = loggedInUser && loggedInUser.token;

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      setData(await getHotels(_id, token));
      setLoading(false);
    };
    fetchHotels();
  }, []);

  const handleRefresh = () => {
    setFetching(true);
    setData([]);
    const fetchHotels = async () => {
      setData(await getHotels(_id, token));
      setFetching(false);
    };
    fetchHotels();
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate('HotelDetail', {
              placeId: _id,
              hotelId: item._id,
            })
          }>
          <Image style={styles.image} source={{uri: item.mainimg}} />
          <View style={styles.info}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {item.name.toUpperCase()}
            </Text>
            <Text style={{fontSize: 14, color: 'grey'}} numberOfLines={1}>
              {item.address}
            </Text>
            <View style={styles.ratingArea}>
              <Rating
                style={styles.rating}
                imageSize={14}
                readonly
                startingValue={Number(item.star)}
              />
              <Text> {item.star}</Text>
            </View>
            <View style={{marginBottom: 15}}>
              <Text numberOfLines={2}>{item.description}</Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Chip icon="currency-usd">
                {item.min_price} - {item.max_price} VND
              </Chip>
            </View>
          </View>
          {item.discount !== 0 && (
            <View style={styles.discountTag}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                -{item.discount}%
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {!loading ? (
        <FlatList
          data={data}
          refreshing={fetching}
          onRefresh={handleRefresh}
          renderItem={renderItem}
          keyExtractor={(item, i) => `${i}`}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
