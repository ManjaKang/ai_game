import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function IngameTextTitle(props) {
  return (
    <View style={styles.title}>
      <Text style={styles.textchapter}> Episode 1. {props.episode}</Text>
      <Text style={styles.textepisode}>
        Chapter {props.order}. {props.name}
      </Text>
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
    color: 'white',
  },
  textepisode: {
    fontSize: 30,
    fontFamily: 'AssetLight',
    color: 'white',
  },
});

export default IngameTextTitle;
