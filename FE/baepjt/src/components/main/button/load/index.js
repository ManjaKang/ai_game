import React from "react";
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

const ImageURI = {uri:"./"}
function MainButtonLoad() {
  return (
    <View style={styles.button}>
      <Button
      title="Load"
      color="rgba(100,200,200,0.6)"
      onPress={() => Alert.alert('불러오기 누름!')} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
  }
});
export default MainButtonLoad;
