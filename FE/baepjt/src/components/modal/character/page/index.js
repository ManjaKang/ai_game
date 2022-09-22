import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

function ModalCharacter(props) {
  console.log(props.state);
  const propsstate = props.state;
  return propsstate != '' ? (
    <Image source={props.state} style={styles.image}></Image>
  ) : null;
}

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    borderColor: 'red',
    borderWidth: 2,
  },
});
export default ModalCharacter;
