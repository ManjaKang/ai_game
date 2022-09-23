import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ChapterText(props) {
  return (
    <View>
      <Text style={styles.text}>{props.name}</Text>
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

export default ChapterText;
