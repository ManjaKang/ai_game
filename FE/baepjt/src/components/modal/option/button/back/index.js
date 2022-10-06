import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
function ModalOptionButtonBack(props) {
  return (
    <View style={styles.button}>
      <Icon
        name="close-circle-outline"
        size={30}
        color="orange"
        onPress={() => props.setter(false)}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '5%',
    right: '2%',
  },
});

export default ModalOptionButtonBack;
