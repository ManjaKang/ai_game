import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  ImageBackground,
} from 'react-native';
import ModalAccountButtonBack from '../button/back';
import ModalAccountButtonInventory from '../button/inventory';
import ModalAccountButtonLogout from '../button/logout';

function ModalAccount(props) {
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
            <ModalAccountButtonBack setter={props.setter} />
            <View style={styles.modalview}>
              <Text style={styles.text}>개인 설정</Text>
              {/* <ModalAccountButtonInventory /> */}
              <ModalAccountButtonLogout />
            </View>
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backbutton: {
    marginRight: '10%',
  },
  modalview: {
    height: '100%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    marginTop: '2%',
    fontFamily: 'HeirofLightRegular',
    color: 'black',
  },
});

export default ModalAccount;
