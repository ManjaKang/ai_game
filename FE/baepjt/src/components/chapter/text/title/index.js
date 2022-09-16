import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ChapterText(props) {
  console.log("chaptertext",props)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
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

export default ChapterText;
