import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

function StartPage({navigation}) {
  return (
    // 다음페이지로 넘어가기
    // <TouchableOpacity onPress={() => Alert.alert('다음 게임 진행')}>
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqSpCdnXNE1VVBcnKOW_yV9bzWQ5MeQCnqQ&usqp=CAU',
      }}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('Main')} style={styles.text}>
          게임을 시작하려면 화면을 터치하세요
        </Text>
      </View>
    </ImageBackground>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
export default StartPage;
