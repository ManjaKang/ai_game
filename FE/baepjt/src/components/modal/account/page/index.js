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
        <View style={styles.backbutton}>
          <ModalAccountButtonBack setter={props.setter} />
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>개인 설정</Text>
        </View>

        <View style={styles.container}>
          <ModalAccountButtonInventory />
          <ModalAccountButtonLogout />
        </View>
      </ImageBackground>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backbutton: {
    marginRight: '10%',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
    margin: 40,
    opacity: 1,
  },
  container: {
    marginTop: '8%',
    marginLeft: '27%',
  },
  textcontainer: {
    marginTop: '10%',
    marginLeft: '35%',
  },
  text: {
    fontSize: 30,
    fontFamily: 'HeirofLightRegular',
    color: 'black',
  },
});

export default ModalAccount;
