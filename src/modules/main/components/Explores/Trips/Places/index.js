import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {getBestPlaces} from '../../../../../../services/bestPlaces';
import {Rating} from 'react-native-elements';
import Loading from '../../../../../../components/Loading';
import Like from '../../../../../../components/Like';
import styles from './styles';

export default function index(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  console.log('Selected Services:', selectedServices);
  const _id = props.id;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFubGUiLCJpYXQiOjE2MDYyNzY1NDMsImV4cCI6MTYzNzgxMjU0M30.9DWbvEsgmKO237PGtY0j4Tm7R_XMaCUdQyPhkgJnPFU';
  console.log('places', data);
  useEffect(() => {
    const fetchBestPlaces = async () => {
      setLoading(true);
      setData(await getBestPlaces(_id, token));
      setLoading(false);
    };
    fetchBestPlaces();
  }, []);
  const handleRefresh = () => {
    setFetching(true);
    setData([]);
    const fetchPlaces = async () => {
      setData(await getBestPlaces(_id, token));
      setFetching(false);
    };
    fetchPlaces();
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
      <TouchableOpacity style={styles.item}>
        <Image
          resizeMode="cover"
          style={styles.placeImg}
          source={{uri: item.mainimg}}
        />
        <View style={styles.info}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.name}</Text>
          <View style={styles.ratingArea}>
            <Rating
              style={styles.rating}
              imageSize={14}
              readonly
              startingValue={item.star}
            />
            <Text> {item.star}</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text numberOfLines={3} style={{color: 'grey'}}>
              {item.description}
            </Text>
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
