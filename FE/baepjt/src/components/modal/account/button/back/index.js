import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
function ModalAccountButtonBack(props) {
  return (
    <View style={styles.button}>
      <Icon
        name="close-circle-outline"
        size={30}
        color={'orange'}
        onPress={() => props.setter(false)}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 10,
    right: 10,
    position: 'absolute',
  },
});

export default ModalAccountButtonBack;
