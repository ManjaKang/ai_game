import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function EpisodeText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>에피소드 선택하기</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },

  text: {
    fontSize: 60,
    // font: ,
    color: 'rgba(200,100,100,1)',
    textAlign: 'center',
  },
});

export default EpisodeText;
