import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {setId} from '../../redux/login';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Video from 'react-native-video';

function StartPage({navigation}) {
  const [showTitle, setShowTitle] = useState('none');
  const dispatch = useDispatch();
  return (
    // 다음페이지로 넘어가기
    <View style={styles.container}>
      <Video
        source={require('./video/opening.webm')}
        style={styles.fullScreen}
        paused={false} // 재생/중지 여부
        resizeMode={'stretch'} // 프레임이 비디오 크기와 일치하지 않을 때 비디오 크기를 조정하는 방법을 결정합니다. cover : 비디오의 크기를 유지하면서 최대한 맞게
        onLoad={e => {
          setShowTitle('none');
        }} // 미디어가 로드되고 재생할 준비가 되면 호출되는 콜백 함수입니다.
        onEnd={() => setShowTitle('flex')}
        repeat={false} // video가 끝나면 다시 재생할 지 여부
        onAnimatedValueUpdate={() => {}}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={1}
        onPress={async () => {
          const userID = await AsyncStorage.getItem('userId');
          if (userID) {
            dispatch(setId(userID));
            navigation.navigate('EpisodePage');
          } else {
            navigation.navigate('Login');
          }
        }}>
        <View style={styles.titleView}>
          <Text
            style={{
              fontSize: 50,
              fontFamily: 'HeirofLightRegular',
              color: 'white',
              textAlign: 'center',
              display: showTitle,
            }}>
            탐정: 렌즈 속 비밀
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>게임을 시작하려면 화면을 터치하세요</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'HeirofLightRegular',
    color: 'white',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textView: {
    position: 'absolute',
    marginTop: '35%',
    width: '100%',
    height: '100%',
  },
  btn: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  titleView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontFamily: 'HeirofLightRegular',
    color: 'white',
    textAlign: 'center',
  },
});
export default StartPage;
