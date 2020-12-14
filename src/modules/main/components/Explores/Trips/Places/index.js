import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {getBestPlaces} from '../../../../../../services/bestPlaces';
import {Rating} from 'react-native-elements';
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

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate('PlaceDetail', {
            placeId: _id,
            bestPlaceId: item._id,
          })
        }>
        <Image
          resizeMode="cover"
          style={styles.placeImg}
          source={{uri: item.mainimg}}
        />
        <View style={styles.info}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.name}</Text>
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
          <View style={{marginTop: 20}}>
            <Text numberOfLines={3} style={{color: 'grey'}}>
              {item.description}
            </Text>
          </View>
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
