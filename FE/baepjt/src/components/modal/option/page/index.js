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
import {useSelector} from 'react-redux';
function ModalOption(props) {
  const Sound = useSelector(state => state.sound.value);
  return (
    <Modal
      // isVisible={props.isVisible}
      visible={props.visible}
      animationType={'fade'}
      hideModalContentWhileAnimating={props.hideModalContentWhileAnimating}
      transparent={true}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            source={require('../../../../images/modal/optionbackground.png')}
            style={{
              marginTop: '3%',
              padding: '15%',
            }}
            resizeMode="stretch"
            imageStyle={{borderRadius: 20}}>
            <ModalOptionButtonBack setter={props.setter} />
            <View style={styles.container}>
              <Text style={styles.volumetext}>음향조절</Text>
              <ModalOptionTextAudio text="배경음" />
              <ModalSliderAudio volume={Sound.bgm} sound={'bgm'} />
              <ModalOptionTextAudio text="효과음" />
              <ModalSliderAudio volume={Sound.sfx} sound={'sfx'} />
              <ModalOptionTextAudio text="음성" />
              <ModalSliderAudio volume={Sound.voice} sound={'voice'} />
            </View>
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  volumetext: {
    color: 'black',
    fontFamily: 'HeirofLightRegular',
    fontSize: 25,
  },
  container: {
    height: '80%',
    width: '80%',
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalOption;
