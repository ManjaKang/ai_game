import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function EpisodeText() {
  return (
    <View>
      <Text style={styles.text}>μνΌμλ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'HeirofLightRegular',
  },
});

export default EpisodeText;
