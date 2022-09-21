import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function IngameTextTitle(props) {
  return (
    <View style={styles.title}>
      <Text style={styles.textchapter}> chapter1. {props.episode}</Text>
      <Text style={styles.textepisode}> episode1. {props.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textchapter: {
    fontSize: 50,
    margin: 8,
    fontFamily: 'HeirofLightRegular',
  },
  textepisode: {
    fontSize: 30,
    fontFamily: 'AssetLight',
  },
});

export default IngameTextTitle;
