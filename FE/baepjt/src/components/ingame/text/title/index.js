import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function IngameTextTitle(props) {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{props.episode} {props.name} 여기 들어갑니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 27,
    margin: 8,
  },
});

export default IngameTextTitle;
