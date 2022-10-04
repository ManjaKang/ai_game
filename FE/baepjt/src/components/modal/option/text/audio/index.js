import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function ModalOptionTextAudio(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '1%',
  },
  text: {
    color: 'black',
    fontFamily: 'AssetBold',
    fontSize: 20,
  },
});

export default ModalOptionTextAudio;
