import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {getHotels} from '../../../../../../services/hotels';
import {Rating} from 'react-native-elements';
import Loading from '../../../../../../components/Loading';
import Like from '../../../../../../components/Like';
import styles from './styles';

export default function index(props) {
  const [data, setData] = useState([
    {
      name: 'Nha tro Tan Le',
      minPrice: 300000,
      maxPrice: 500000,
      mainimg:
        'https://www.imglegacyhotel.com/wp-content/uploads/2018/10/legacy-hotel-23.jpg',
      discount: 15,
      description: 'Hotel nhu con cac',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const _id = props.id;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFubGUiLCJpYXQiOjE2MDYyNzY1NDMsImV4cCI6MTYzNzgxMjU0M30.9DWbvEsgmKO237PGtY0j4Tm7R_XMaCUdQyPhkgJnPFU';
  console.log('hotels', data);
  console.log('Selected Services:', selectedServices);

  useEffect(() => {
    // const fetchHotels = async () => {
    //   setLoading(true);
    //   setData(await getHotels(_id, token));
    //   setLoading(false);
    // };
    // fetchHotels();
  }, []);
  const handleRefresh = () => {
    // setFetching(true);
    // setData([]);
    // const fetchHotels = async () => {
    //   setData(await getHotels(_id, token));
    //   setFetching(false);
    // };
    // fetchHotels();
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
      <View>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={{uri: item.mainimg}} />
          <View style={styles.info}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              {item.name.toUpperCase()}
            </Text>
            <Text>
              {item.minPrice} - {item.maxPrice}
            </Text>
          </View>
          <View style={styles.discountTag}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              -{item.discount}%
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        refreshing={fetching}
        onRefresh={handleRefresh}
        renderItem={renderItem}
        keyExtractor={(item, i) => `${i}`}
      />
    </View>
  );
}
