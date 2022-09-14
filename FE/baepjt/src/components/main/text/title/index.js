import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MainTextTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Criminal In Pic</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  text: {
    fontSize: 60,
    color: 'white',
    // 텍스트 가운데 정렬
    textAlign: 'center',
  },
});
export default MainTextTitle;
