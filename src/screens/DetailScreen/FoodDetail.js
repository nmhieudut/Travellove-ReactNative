import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import color from '../../constants/Colour';
export default function FoodDetail() {
  const fixedHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white', // Set border width.
            fontSize: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          Back
        </Text>
      </View>
    );
  };
  return (
    <>
      <ParallaxScrollView
        backgroundColor={color.PRIMARY}
        contentBackgroundColor="white"
        parallaxHeaderHeight={300}
        renderFixedHeader={fixedHeader}
        stickyHeaderHeight={50}
        renderForeground={() => (
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
                uri:
                  'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
              }}
            />
          </View>
        )}>
        <View style={{height: 500}}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
