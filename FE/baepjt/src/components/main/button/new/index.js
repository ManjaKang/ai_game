import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function MainButtonNew({shouldShow, showtohidden}) {
  const navigation = useNavigation();
  const onClick = () => {
    console.log(shouldShow, 'child에서 print');
    showtohidden(!shouldShow);
  };
  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={{color: 'black', fontSize: 30}}>NEW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 180,
    backgroundColor: 'rgba(255,255,0,0.7)',
    borderRadius: 40,
  },
});
export default MainButtonNew;
