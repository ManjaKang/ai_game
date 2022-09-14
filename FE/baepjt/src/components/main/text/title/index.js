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
    marginTop: 300,
  },
  text: {
    fontSize: 60,
    // font: ,
    color: 'rgba(200,100,100,1)',
    textAlign: 'center',
  },
});
export default MainTextTitle;
