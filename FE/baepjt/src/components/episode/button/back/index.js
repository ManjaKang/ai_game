import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet} from 'react-native';

function EpisodeButtonBack() {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('Main');
  };
  return (
    <Button title="뒤로가기" onPress={onClick}>
      뒤로 가기
    </Button>
  );
}

export default EpisodeButtonBack;
