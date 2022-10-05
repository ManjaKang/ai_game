import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

function IngameButtonSkip(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        console.log('skip 버튼 누름', props);
        props.orderSkip();
      }}>
      <Text style={styles.text}>skip</Text>
      <Icon name="play-forward-sharp" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: '100%',
    aspectRatio: 1,
    position: 'absolute',
    right: 2,
  },
  text: {
    color: 'white',
  },
});

export default IngameButtonSkip;
