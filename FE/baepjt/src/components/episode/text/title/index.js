import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function EpisodeText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>에피소드</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EpisodeText;
