import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setresValue} from '../../redux/camres';
import {setcameraValue} from '../../redux/iscamera';

function CameraPage() {
  const cameraResult = useSelector(state => state.cameraResult.value);
  const isCamera = useSelector(state => state.isCamera.value);
  const [camera, setCamera] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const takePicture = async () => {
    console.log('camera taken : ' + camera);
    if (camera !== null) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.log('data : ' + data.uri);
      const arr = data.uri.split('/');
      if (data) {
        const res = await axios.post('http://j7e102.p.ssafy.io:8080/image', {
          // localhost 환경
          base64: data.base64,
          fileName: arr[arr.length - 1], // 파일 이
        });
        console.log('사진 분석 결과..?', res.data);
        // 여기서 비교하기
        //  [{"name": "camera", "percent": 0.7951256}, {"name": "bed", "percent": 0.157654}, {"name": "table", "percent": 0.985215}]
        dispatch(setresValue(res.data));
        dispatch(setcameraValue(true));
        // res.data.map(d =>
        //   dispatch(setresValue({name: d.name, percentage: d.percent})),
        // );
        CameraRoll.save(data.uri, 'photo')
          .then(onfulfilled => {
            ToastAndroid.show(onfulfilled, ToastAndroid.SHORT);
          })
          .catch(error => {
            ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT);
          });
      }
    }
  };

  const exitButton = () => {
    console.log('exitButton');
    navigation.pop();
  };

  return (
    <View>
      <ImageBackground
        source={require('../../images/background/chapter8/black.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.viewStyle}>
          <View style={styles.container}>
            <RNCamera
              ref={cam => {
                setCamera(cam);
              }}
              style={{height: 300, width: 500}}
              captureAudio={false}
            />
          </View>
          <View style={styles.ButtonContainer}>
            {/* <Button
              title="뒤로가기"
              style={styles.exitButtonStyle}
              onPress={exitButton}></Button> */}
            <View style={styles.innerButton}>
              <TouchableOpacity
                onPress={takePicture}
                style={styles.buttonStyle}></TouchableOpacity>
              <TouchableOpacity
                style={styles.exitButtonStyle}
                onPress={exitButton}>
                <ImageBackground
                  source={require('../../images/modal/button.png')}
                  style={{width: '100%', height: '100%'}}>
                  <Text style={styles.text}>뒤로가기</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  ButtonContainer: {
    width: 120,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle: {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  innerButton: {
    margin: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 10,
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor: 'red',
  },
  exitButtonStyle: {
    width: '80%',
    height: 0,
    backgroundColor: 'rgba(109,121,246,1)',
    position: 'absolute',
    height: '12%',
    bottom: 10,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: '10%',
    marginLeft: '5%',
    color: 'white',
    fontSize: 20,
    fontFamily: 'HeirofLightRegular',
  },
});
export default CameraPage;
