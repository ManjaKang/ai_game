import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

function MainButtonNew({shouldShow, showtohidden}) {
  const navigation = useNavigation();
  const onClick = () => {
    console.log(shouldShow, 'child에서 print');
    showtohidden(!shouldShow);
  };
  return (
    <View style={styles.button}>
      <Button title="new" color="rgba(255,255,0,0.7)" onPress={onClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
});
export default MainButtonNew;
