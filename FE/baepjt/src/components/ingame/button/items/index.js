import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function IngameButtonItems(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.setter(true)}>
      <Icon style={styles.icon} name="file-tray-full" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "rgba(192,192,192,0.4)",
    // width: "80%",
    borderColor: 'rgba(192,192,192,1)',
    borderWidth: 1,
    height: '18%',
    marginTop: '10%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 64,
  },
});

export default IngameButtonItems;
