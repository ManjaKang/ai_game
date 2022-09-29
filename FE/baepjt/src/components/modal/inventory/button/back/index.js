import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ModalInventoryButtonBack(props) {
  return (
    <View style={styles.button}>
      <Icon
        name="backspace-outline"
        size={30}
        color="white"
        onPress={() => props.setter(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '5%',
    right: '3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalInventoryButtonBack;
