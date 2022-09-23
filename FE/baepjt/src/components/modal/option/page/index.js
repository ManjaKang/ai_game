import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  ImageBackground,
} from 'react-native';
import ModalOptionButtonBack from '../button/back';
import ModalSliderAudio from '../slider/audio';
import ModalOptionTextAudio from '../text/audio';
import { useSelector } from 'react-redux'
function ModalOption(props) {
  const Sound = useSelector((state)=>state.sound.value)
  console.log("소리값",Sound)
  return (
    <Modal
      style={styles.modal}
      // isVisible={props.isVisible}
      visible={props.visible}
      animationType={'fade'}
      hideModalContentWhileAnimating={props.hideModalContentWhileAnimating}
      transparent={true}>
      <ImageBackground
        source={require('../../../../images/optionbackground.png')}
        style={{
          height: '90%',
          width: '90%',
          marginLeft: '10%',
          marginTop: '5%',
        }}
        imageStyle={{borderRadius: 20}}>
        <ModalOptionButtonBack setter={props.setter} />
        <View style={styles.container}>
          <Text style={styles.volumetext}>음향조절</Text>
          <ModalOptionTextAudio text="배경음"/>
          <ModalSliderAudio volume={Sound.bgm} sound={"bgm"}/>
          <ModalOptionTextAudio text="효과음"/>
          <ModalSliderAudio volume={Sound.sfx} sound={"sfx"}/>
          <ModalOptionTextAudio text="음성" />
          <ModalSliderAudio volume={Sound.voice} sound={"voice"}/>
        </View>
      </ImageBackground>
    </Modal>
  );
}

const styles = StyleSheet.create({
  volumetext: {
    color: 'black',
    fontFamily: 'HeirofLightRegular',
    fontSize: 30,
    marginLeft: '27%',
  },
  container: {
    marginLeft: '10%',
    marginTop: '7%',
  },
});

export default ModalOption;
