import React from 'react';
import {Text} from 'react-native';

export default function MyText(props) {
  const defaultStyle = {
    fontFamily: 'ProductSans-Regular',
  };
  return (
    <>
      <Text style={[defaultStyle, props.childStyle && props.childStyle]}>
        {props.children}
      </Text>
    </>
  );
}
