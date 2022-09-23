import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

function ModalCharacter(props) {
  const imageUri = props.data[props.state].character[0];
  const propsstate = props.state;
  return <Image source={imageUri} style={styles.image}></Image>;

  // propsstate != '' ? (
  //   <Image source={imageUri} style={styles.image}></Image>
  // ) : null;
}

const styles = StyleSheet.create({
  image: {
    width: '60%',
    height: '100%',
    position: 'absolute',
    top: '2%',
    left: '2%',
  },
});
export default ModalCharacter;
