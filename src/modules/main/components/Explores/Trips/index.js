import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabView, TabBar} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import color from '../../../../../constants/Colour';
import Foods from './Foods';
import Places from './Places';
import Hotels from './Hotels';

const initialLayout = {width: Dimensions.get('window').width, borderWidth: 1};

export default function index(props) {
  const navigation = useNavigation();
  const _id = props.route.params.placeId;
  const _placeName = props.route.params.placeName;
  console.log('trips', _id, props.route.params.placeName);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Best Places'},
    {key: 'second', title: 'Foods'},
    {key: 'third', title: 'Hotels'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <Places id={_id} />;
      case 'second':
        return <Foods id={_id} />;
      case 'third':
        return <Hotels id={_id} />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({route, focused}) => (
        <Text style={{color: 'white', margin: 4, fontSize: 16}}>
          {route.title.toUpperCase()}
        </Text>
      )}
      indicatorStyle={{backgroundColor: 'white', height: 5}}
      style={{
        backgroundColor: `${color.PRIMARY}`,
        fontColor: `${color.PRIMARY}`,
      }}
    />
  );
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            {_placeName.toUpperCase()}
          </Text>
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}
