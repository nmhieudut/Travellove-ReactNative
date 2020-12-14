import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import color from '../../constants/Colour';
import {Rating} from 'react-native-elements';
import {Button, Avatar} from 'react-native-paper';
import ImageView from 'react-native-image-view';
import Loading from '../../components/Loading';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Ionicons';
import {getBestPlaceDetail, likedPlaces} from '../../services/bestPlaces';
import {useNavigation} from '@react-navigation/native';
import {getCommentsByStuff, postCommentsByStuff} from '../../services/comments';
import {useSelector} from 'react-redux';

export default function PlaceDetail(props) {
  const placeId = props.route.params.placeId;
  const bestPlaceId = props.route.params.bestPlaceId;
  const navigation = useNavigation();

  const [content, setContent] = useState('');
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  const imageSource =
    data &&
    data.images.map((item) => {
      return {
        source: {
          uri: item,
        },
      };
    });
  const token = loggedInUser && loggedInUser.token;
  const userId = loggedInUser.user._id;

  useEffect(() => {
    const fetchBestPlaceDetail = async () => {
      setData(await getBestPlaceDetail(placeId, bestPlaceId, token));
    };
    fetchBestPlaceDetail();
    return () => setData([]);
  }, []);
  useEffect(() => {
    const fetchCommentsByFood = async () => {
      setComments(await getCommentsByStuff(bestPlaceId, token));
    };
    fetchCommentsByFood();
  }, [comments]);

  useEffect(() => {
    if (data) {
      const found = data.users.filter((user) => user === userId);
      if (found.length > 0) {
        setIsLiked(true);
      }
    }
  }, [data]);
  const cmtContent = async () => {
    if (content.trim() !== '') {
      setCommentLoading(true);
      await postCommentsByStuff(userId, bestPlaceId, token, content);
      setCommentLoading(false);
      setContent('');
    } else ToastAndroid.show('Text something... !', ToastAndroid.SHORT);
  };
  const removeLike = async () => {
    if (data) {
      if (isLiked) {
        const likeUsers = data.users.filter((user) => user !== userId);
        if (await likedPlaces(bestPlaceId, likeUsers, token)) {
          setIsLiked(false);
          ToastAndroid.show('Remove successfully', ToastAndroid.SHORT);
        }
      } else {
        const likeUsers = [];
        likeUsers.push(userId);
        if (await likedPlaces(bestPlaceId, likeUsers, token)) {
          setIsLiked(true);
          ToastAndroid.show('Add to favorite successfully', ToastAndroid.SHORT);
        }
      }
    }
  };
  const fixedHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: `${color.PRIMARY}`,
        }}>
        <TouchableOpacity
          style={{width: 60, paddingLeft: 10}}
          onPress={() => navigation.goBack()}>
          <Icon
            name="arrowleft"
            style={{
              color: '#ffffff',
              fontSize: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 60, paddingLeft: 10}}
          onPress={removeLike}>
          <Icon
            name="heart"
            style={{
              color: isLiked ? 'red' : '#ffffff',
              fontSize: 20,
            }}
          />
        </TouchableOpacity>
      </View>
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
          <Avatar.Image size={50} source={{uri: item.user.avatar}} />
        </View>
        <View style={styles.commentContent}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {item.user.name}
          </Text>
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
                    data={comments}
                    renderItem={renderComments}
                    keyExtractor={(item, i) => `${i}`}
                  />
                  <View style={styles.inputArea}>
                    <View>
                      <Avatar.Image
                        size={50}
                        source={{uri: loggedInUser.user.avatar}}
                      />
                    </View>
                    <View style={styles.commentInputArea}>
                      <TextInput
                        style={styles.commentInput}
                        placeholder="Comment..."
                        value={content}
                        onChangeText={(text) => setContent(text)}
                      />
                      {!commentLoading ? (
                        <TouchableOpacity
                          style={{marginLeft: 10}}
                          onPress={cmtContent}>
                          <FIcon name="send-sharp" size={24} />
                        </TouchableOpacity>
                      ) : (
                        <ActivityIndicator style={{marginLeft: 10}} />
                      )}
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
    margin: 5,
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
