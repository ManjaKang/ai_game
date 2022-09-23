import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ModalInventoryButtonBack(props) {
  return (
    <View style={styles.container}>
      <Icon
        name="close-circle-outline"
        size={30}
        color="orange"
        onPress={() => props.setter(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 100,
    height: '10%',
    top: 10,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalInventoryButtonBack;
