import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import UploadModeModal from "../../../camera/cameraModal";
import Icon from 'react-native-vector-icons/Ionicons';

const imagePickerOption = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

function IngameButtonCamera() {
  // 안드로이드를 위한 모달 visible 상태값
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const onPickImage = res => {
    if (res.didCancel || !res) {
      return;
    }
    console.log('PickImage', res);
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
        <Icon style={styles.icon}
                name="camera"
            />
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
  }
});

export default IngameButtonCamera;
