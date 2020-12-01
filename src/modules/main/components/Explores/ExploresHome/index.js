import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import Loading from '../../../../../components/Loading';
import {Avatar} from 'react-native-paper';
import {getPlaces} from '../../../../../services/places';
import styles from './styles';
import {Modalize} from 'react-native-modalize';
import ExploresDetail from './ExploresDetail';

const heightScr = Dimensions.get('window').height;

export default function index() {
  const [data, setData] = useState([]);
  const [placeId, setPlaceId] = useState('');
  const [fetching, setFetching] = useState(false);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFubGUiLCJpYXQiOjE2MDYyNzY1NDMsImV4cCI6MTYzNzgxMjU0M30.9DWbvEsgmKO237PGtY0j4Tm7R_XMaCUdQyPhkgJnPFU';
  console.log('data', data);

  const modalizeRef = useRef(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      setData(await getPlaces(token));
    };
    fetchPlaces();
  }, []);
  const handleRefresh = () => {
    setFetching(true);
    setData([]);
    const fetchPlaces = async () => {
      setData(await getPlaces(token));
      setFetching(false);
    };
    fetchPlaces();
  };
  // open bottom sheet
  const onOpen = (_id) => {
    setPlaceId(_id);
    modalizeRef.current.open();
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.imageItem}
          source={{
            uri: item.mainimg
              ? item.mainimg
              : 'https://image.freepik.com/free-vector/flat-color-location-icon-paper-map_52465-148.jpg',
          }}
        />
        <View style={styles.overlay}></View>
        <View style={styles.textOverlay}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {item.name.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  };
  const renderPlaces = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.placeItem}
        onPress={() => onOpen(item._id)}>
        <Image
          style={styles.placeImage}
          source={{
            uri: item.mainimg
              ? item.mainimg
              : 'https://image.freepik.com/free-vector/flat-color-location-icon-paper-map_52465-148.jpg',
          }}
        />
        <View style={styles.placeOverlay}>
          <View>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.name}</Text>
            <Text>{item.country}</Text>
          </View>
          <View>
            <Avatar.Text
              style={{
                backgroundColor: '#ffca28',
              }}
              size={46}
              label={item.star}
              labelStyle={{fontSize: 20}}
              color="white"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontSize: 34, fontWeight: 'bold'}}>Explore</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a destination"
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
      </View>
      <View style={styles.bestPlaceList}>
        {data.length > 0 ? (
          <FlatList
            horizontal
            data={data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={renderItem}
          />
        ) : (
          <Loading />
        )}
      </View>
      <View style={styles.title}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Popular Destinations
        </Text>
        <View style={styles.underline}></View>
      </View>
      <View
        style={{
          height: heightScr / 2.1,
          flex: data.length === 0 ? 1 : 0,
          justifyContent: data.length === 0 ? 'center' : 'flex-start',
        }}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            refreshing={fetching}
            onRefresh={handleRefresh}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `${index}`}
            renderItem={renderPlaces}
          />
        ) : (
          <Loading />
        )}
      </View>
      <Modalize snapPoint={600} ref={modalizeRef}>
        <ExploresDetail placeId={placeId} />
      </Modalize>
    </View>
  );
}
