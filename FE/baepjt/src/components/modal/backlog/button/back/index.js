import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
function ModalBacklogButtonBack(props) {
  return (
    <View style={styles.button}>
      <Icon
        name="backspace-outline"
        size={30}
        onPress={() => props.setter(false)}
        color="white"></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalBacklogButtonBack;
