import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Like({item, onSelected}) {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {
        let c = !checked;
        setChecked(c);
        onSelected({item: item, checked: c});
      }}>
      <Icon
        name="heart"
        size={20}
        style={{color: checked ? '#ff6666' : 'black'}}
      />
    </TouchableOpacity>
  );
}
