import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import UploadModeModal from "../../../camera/cameraModal";

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
        <Text>카메라</Text>
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
  button: {
    backgroundColor: 'rgba(0,192,192,0.4)',
    // width: "80%",
    height: '18%',
    marginTop: '15%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IngameButtonCamera;
