import React from 'react';
import {Button, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
function ModalAccountButtonLogout() {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.text}>
          {' '}
          <Icon size={35} name="log-out" />
          로그아웃
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AssetLight',
    color: 'black',
    fontSize: 30,
  },
});

export default ModalAccountButtonLogout;
