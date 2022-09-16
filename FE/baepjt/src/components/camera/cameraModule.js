import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  ImageBackground,
  Button,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import {useNavigation} from '@react-navigation/native';

function CameraPage() {
  const [camera, setCamera] = useState(null);
  const navigation = useNavigation();


  const takePicture = async () => {
    console.log('camera taken : ' + camera);
    if (camera !== null) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.log('data : ' + data.uri);
      if (data) {
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
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqSpCdnXNE1VVBcnKOW_yV9bzWQ5MeQCnqQ&usqp=CAU',
        }}
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
            <Button
              title="뒤로가기"
              style={styles.exitButtonStyle}
              onPress={exitButton}></Button>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={takePicture}
                style={styles.buttonStyle}></TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  ButtonContainer: {  marginRight: 20, height: '100%'},
  viewStyle: {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
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
    borderColor: 'gray',
    backgroundColor: 'pink',
    position: 'absolute',
    right: 20,
    top: 120,
  },
  exitButtonStyle: {
    top: 0,
  },
});
export default CameraPage;
