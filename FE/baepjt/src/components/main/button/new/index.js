import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

function MainButtonNew() {
  return (
    <View style={styles.button}>
      <Button
      title="New"
      color="rgba(255,255,0,0.7)"
      onPress={() => Alert.alert('새 게임 누름!')} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
  }
});
export default MainButtonNew;
