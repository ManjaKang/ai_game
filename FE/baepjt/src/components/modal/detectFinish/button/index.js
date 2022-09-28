import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ModalDetectFinishButton(props) {
  console.log(props);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.setstate(true)}>
      <ImageBackground
        source={require('../../../../images/modal/button.png')}
        style={{width: '100%', height: '100%'}}>
        <Text style={styles.text}>조사 마치기</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: '21%',
    height: '16%',
  },
  text: {
    marginTop: '15%',
    marginLeft: '15%',
    fontSize: 20,
    fontFamily: 'HeirofLightRegular',
  },
});
export default ModalDetectFinishButton;
