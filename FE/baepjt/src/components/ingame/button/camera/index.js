import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import UploadModeModal from '../../../camera/cameraModal';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setresValue} from '../../../../redux/camres'
import {setcameraValue} from '../../../../redux/iscamera';
import SoundPlayer from 'react-native-sound-player';

const imagePickerOption = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

function IngameButtonCamera() {
  const cameraResult = useSelector(state => state.cameraResult.value);
  const isCamera = useSelector(state => state.isCamera.value);
  const [camera, setCamera] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // 안드로이드를 위한 모달 visible 상태값
  const [modalVisible, setModalVisible] = useState(false);
  const sound = useSelector(state => state.sound);

  const onPickImage = async res => {
    if (res.didCancel || !res) {
      return;
    }
    console.log('PickImage', res);
    SoundPlayer.setVolume(sound.value.sfx/100);
    SoundPlayer.playSoundFile('camera','mp3');
    const result = await axios.post('http://j7e102.p.ssafy.io:8080/image', {
      // localhost 환경
      base64: res.assets[0].base64,
      fileName: res.assets[0].fileName, // 파일 이름
    });
    console.log('사진 분석 결과 : ', result.data);
    dispatch(setresValue(result.data));
    dispatch(setcameraValue(true));
  };

  // 카메라 촬영
  const onLaunchCamera = () => {
    moveToCamera();
    // launchCamera(imagePickerOption, onPickImage);
  };

  // 갤러리에서 사진 선택
  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  // 선택 모달 오픈
  const modalOpen = () => {
    if (Platform.OS === 'android') {
      setModalVisible(true); // visible = true
    } else {
      // iOS
    }
  };

  const moveToCamera = () => {
    console.log('MoveToCamera called');
    navigation.navigate('CameraPage');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={modalOpen}>
      <Icon style={styles.icon} name="camera" />
      <UploadModeModal
        visible={modalVisible}
        statusBarTranslucent={true}
        onClose={() => setModalVisible(false)}
        onLaunchCamera={onLaunchCamera}
        onLaunchImageLibrary={onLaunchImageLibrary}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // button: {
  //   borderColor: 'rgba(192,192,192,1)',
  //   borderWidth: 1,
  //   height: '18%',
  //   marginTop: '10%',
  //   aspectRatio: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  button: {
    borderColor: 'rgba(192,192,192,1)',
    borderWidth: 1,
    height: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 64,
  },
});

export default IngameButtonCamera;
