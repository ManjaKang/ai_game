import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
function EpisodeButtonBack() {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('Main');
  };
  return (
    <Icon
      name="arrow-back-circle-outline"
      size={30}
      color="white"
      onPress={onClick}
    />
  );
}

export default EpisodeButtonBack;
