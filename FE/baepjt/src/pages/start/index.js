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
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('Login')}>
      <ImageBackground
        source={require('../../images/start_page/background.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.text}>게임을 시작하려면 화면을 터치하세요</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'HeirofLightRegular',
    color: 'white',
  },
});
export default StartPage;
