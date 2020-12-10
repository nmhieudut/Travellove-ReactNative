import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import color from '../../constants/Colour';
import {Rating} from 'react-native-elements';
import {Button, Avatar} from 'react-native-paper';
import ImageView from 'react-native-image-view';
import Loading from '../../components/Loading';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Ionicons';
import {getHotelDetail} from '../../services/hotels';
import {useNavigation} from '@react-navigation/native';
import {getCommentsByHotel} from '../../services/comments';
export default function HotelDetail(props) {
  const placeId = props.route.params.placeId;
  const hotelId = props.route.params.hotelId;
  const navigation = useNavigation();
  const comments = [
    {
      id: 1,
      name: 'Con di Nui thanh',
      content:
        'Ahuhudsadasdsadddsadsdasdsadsadasdsadasddsdadasiuhduashdiudsadsadsadsadsdsa',
      avatar:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/126195911_1059921951099787_6759447979467808539_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=aJZGp7RXjMcAX9I5Xe1&_nc_ht=scontent.fsgn2-4.fna&oh=cd2451e99ceb7b409735312a73c9c30d&oe=5FF6A83C',
    },
    {
      id: 1,
      name: 'Con di Nui thanh',
      content:
        'Ahuhudsadasdsadddsadsdasdsadsadasdsadasddsdadasiuhduashdiudsadsadsadsadsdsa',
      avatar:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/126195911_1059921951099787_6759447979467808539_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=aJZGp7RXjMcAX9I5Xe1&_nc_ht=scontent.fsgn2-4.fna&oh=cd2451e99ceb7b409735312a73c9c30d&oe=5FF6A83C',
    },
    {
      id: 1,
      name: 'Con di Nui thanh',
      content:
        'Ahuhudsadasdsadddsadsdasdsadsadasdsadasddsdadasiuhduashdiudsadsadsadsadsdsa',
      avatar:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/126195911_1059921951099787_6759447979467808539_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=aJZGp7RXjMcAX9I5Xe1&_nc_ht=scontent.fsgn2-4.fna&oh=cd2451e99ceb7b409735312a73c9c30d&oe=5FF6A83C',
    },
    {
      id: 1,
      name: 'Con di Nui thanh',
      content:
        'Ahuhudsadasdsadddsadsdasdsadsadasdsadasddsdadasiuhduashdiudsadsadsadsadsdsa',
      avatar:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/126195911_1059921951099787_6759447979467808539_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=aJZGp7RXjMcAX9I5Xe1&_nc_ht=scontent.fsgn2-4.fna&oh=cd2451e99ceb7b409735312a73c9c30d&oe=5FF6A83C',
    },
    {
      id: 1,
      name: 'Con di Nui thanh',
      content:
        'Ahuhudsadasdsadddsadsdasdsadsadasdsadasddsdadasiuhduashdiudsadsadsadsadsdsa',
      avatar:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/126195911_1059921951099787_6759447979467808539_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=aJZGp7RXjMcAX9I5Xe1&_nc_ht=scontent.fsgn2-4.fna&oh=cd2451e99ceb7b409735312a73c9c30d&oe=5FF6A83C',
    },
  ];

  const [data, setData] = useState(null);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const imageSource =
    data &&
    data.images.map((item) => {
      return {
        source: {
          uri: item,
        },
      };
    });
  console.log('image', imageSource);
  console.log('hotel detail', data);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFubGUiLCJpYXQiOjE2MDYyNzY1NDMsImV4cCI6MTYzNzgxMjU0M30.9DWbvEsgmKO237PGtY0j4Tm7R_XMaCUdQyPhkgJnPFU';

  useEffect(() => {
    const fetchHotelDetail = async () => {
      setData(await getHotelDetail(placeId, hotelId, token));
    };
    fetchHotelDetail();
  }, []);

  const fixedHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 10,
        }}>
        <Icon
          name="arrowleft"
          style={{
            color: 'white',
            fontSize: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderForeground = () => (
    <>
      {data && (
        <View
          style={{
            height: 300,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={{
              uri: data.mainimg,
            }}
          />
        </View>
      )}
    </>
  );
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
  const renderComments = ({item}) => {
    return (
      <View style={styles.commentItem}>
        <View>
          <Avatar.Image size={50} source={{uri: item.avatar}} />
        </View>
        <View style={styles.commentContent}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
          <Text>{item.content}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <>
        <ParallaxScrollView
          backgroundColor="#fafafa"
          contentBackgroundColor="white"
          parallaxHeaderHeight={300}
          renderFixedHeader={fixedHeader}
          stickyHeaderHeight={50}
          renderForeground={renderForeground}>
          {data ? (
            <View style={styles.content}>
              <View style={styles.name}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {data.name}
                </Text>
                <View style={styles.ratingArea}>
                  <Rating
                    imageSize={20}
                    readonly
                    startingValue={data.star_rating}
                  />
                  <Text> {data.star_rating}</Text>
                </View>
              </View>
              <Text style={{margin: 5, color: 'grey'}}>{data.address}</Text>
              <View style={styles.description}>
                <Text style={{color: 'grey', fontSize: 16}}>
                  {data.description}
                </Text>
              </View>
              <View style={styles.listImages}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data.images}
                  keyExtractor={(item, i) => `${i}`}
                  renderItem={renderItem}
                />
              </View>
              <ImageView
                images={imageSource}
                imageIndex={imageIndex}
                isVisible={isImageViewVisible}
                onClose={() => setIsImageViewVisible(false)}
              />
              <View style={styles.commentArea}>
                <View style={styles.title}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Comments
                  </Text>
                </View>
                <View style={styles.commentList}>
                  <FlatList
                    style={{marginTop: 10}}
                    vertical
                    showsVerticalScrollIndicator
                    data={comments}
                    renderItem={renderComments}
                    keyExtractor={(item, i) => `${i}`}
                  />
                  <View style={styles.inputArea}>
                    <View>
                      <Avatar.Image size={50} />
                    </View>
                    <View style={styles.commentInputArea}>
                      <TextInput
                        style={styles.commentInput}
                        placeholder="Comment..."
                      />
                      <TouchableOpacity
                        style={{marginLeft: 10}}
                        onPress={() => console.log('Press')}>
                        <FIcon name="send-sharp" size={24} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <Loading />
          )}
        </ParallaxScrollView>
      </>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    paddingHorizontal: 5,
    marginTop: 10,
  },
  listImages: {
    paddingVertical: 30,
    height: 200,
  },
  imageItem: {
    height: '100%',
    width: 150,
    marginHorizontal: 5,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  commentArea: {
    padding: 5,
    width: '100%',
  },
  commentItem: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentContent: {
    marginLeft: 20,
    width: '100%',
  },
  inputArea: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInputArea: {
    marginLeft: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor: '#eeeeee',
    width: '90%',
  },
});
