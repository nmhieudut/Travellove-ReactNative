import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {getFoods} from '../../../../../../services/foods';
import {Rating} from 'react-native-elements';
import Loading from '../../../../../../components/Loading';
import {Chip} from 'react-native-paper';
import Like from '../../../../../../components/Like';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function index(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const navigation = useNavigation();
  console.log('Selected Services:', selectedServices);
  const _id = props.id;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFubGUiLCJpYXQiOjE2MDYyNzY1NDMsImV4cCI6MTYzNzgxMjU0M30.9DWbvEsgmKO237PGtY0j4Tm7R_XMaCUdQyPhkgJnPFU';
  console.log('foods', data);
  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      setData(await getFoods(_id, token));
      setLoading(false);
    };
    fetchFoods();
  }, []);
  const handleRefresh = () => {
    setFetching(true);
    setData([]);
    const fetchFoods = async () => {
      setData(await getFoods(_id, token));
      setFetching(false);
    };
    fetchFoods();
  };
  const addServices = ({item, checked}) => {
    const newItems = [...selectedServices];
    if (checked) {
      newItems.push(item);
      setSelectedServices(newItems);
    } else {
      var newUncheckedItems = newItems.filter((e) => e.id !== item.id);
      setSelectedServices(newUncheckedItems);
    }
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate('FoodDetail', {
            placeId: _id,
            foodId: item._id,
          })
        }>
        <Image style={styles.foodImg} source={{uri: item.mainimg}} />
        <View style={styles.info}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {item.name.trim()}
          </Text>
          <Text style={{fontSize: 12, color: 'grey'}} numberOfLines={1}>
            {item.address}
          </Text>
          <View style={styles.ratingArea}>
            <Rating
              style={styles.rating}
              imageSize={14}
              readonly
              startingValue={item.star_rating}
            />
            <Text> {item.star_rating}</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Chip icon="currency-usd">{item.price} VND</Chip>
          </View>
        </View>
        <View style={styles.likeArea}>
          <Like
            item={item}
            onSelected={({item, checked}) => {
              addServices({item, checked});
            }}
          />
        </View>
      </TouchableOpacity>
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
