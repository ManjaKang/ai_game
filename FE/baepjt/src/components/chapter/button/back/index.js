import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet} from 'react-native';

function ChapterButtonBack() {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.goBack();
  };
  return (
    <Button title="뒤로가기" onPress={onClick}>
      뒤로 가기
    </Button>
  );
}

export default ChapterButtonBack;
