import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {getPlaceById} from '../../../../../../services/places';
import {Rating} from 'react-native-elements';
import ImageView from 'react-native-image-view';
import {Button} from 'react-native-paper';
import Loading from '../../../../../../components/Loading';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function index(props) {
  const [detail, setDetail] = useState(null);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const navigation = useNavigation();
  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  const token = loggedInUser && loggedInUser.token;

  const imageSource =
    detail &&
    detail.images.map((item) => {
      return {
        source: {
          uri: item,
        },
      };
    });
  useEffect(() => {
    const fetchPlaceDetail = async () => {
      const res = await getPlaceById(props.placeId, token);
      setDetail(res);
    };
    fetchPlaceDetail();
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.imageItem}
        onPress={() => {
          setImageIndex(item.index);
          setIsImageViewVisible(true);
        }}>
        <Image style={styles.imageContainer} source={{uri: item.item}} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      {detail ? (
        <>
          <ScrollView style={styles.mainView}>
            <View style={styles.imageView}>
              <Image style={styles.mainImage} source={{uri: detail.mainimg}} />
            </View>
            <View style={styles.titleView}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                {detail.name}
              </Text>
              <Text style={{fontSize: 20}}>{detail.country}</Text>
              <View style={styles.ratingArea}>
                <Text style={{marginVertical: 5}}>
                  Rating: <Text style={{color: 'orange'}}>{detail.star}</Text> /
                  5
                </Text>
                <Rating
                  imageSize={20}
                  readonly
                  startingValue={Number(detail.star)}
                />
              </View>
            </View>
            <View style={styles.listImages}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={detail.images}
                keyExtractor={(item, i) => `${i}`}
                renderItem={renderItem}
              />
            </View>
            <View style={styles.description}>
              <Text
                style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>
                Description
              </Text>
              <Text style={{fontSize: 18}}>{detail.description}</Text>
            </View>
            <ImageView
              images={imageSource}
              imageIndex={imageIndex}
              isVisible={isImageViewVisible}
              onClose={() => setIsImageViewVisible(false)}
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              color="white"
              style={styles.button}
              onPress={() => {
                navigation.navigate('Trips', {
                  placeId: detail._id,
                  placeName: detail.name,
                });
              }}>
              DISCOVER IT
            </Button>
          </View>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
