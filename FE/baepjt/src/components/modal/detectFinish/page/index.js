import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';

function ModalDetectFinish(props) {
  return (
    <Modal
      style={styles.modal}
      visible={props.visible}
      animationType={'fade'}
      hideModalContentWhileAnimating={props.hideModalContentWhileAnimating}
      transparent={true}>
      <View style={styles.view}>
        <View style={styles.box}>
          <Text style={styles.check}>정말로 조사를 마치겠습니까?</Text>
          <Text style={styles.sub}>이번 조사가 끝납니다!</Text>
          <View style={styles.boxset}>
            <TouchableOpacity style={styles.ok} onPress={() => props.func(100)}>
              <Text style={styles.yesorno}>예!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.no}
              onPress={() => props.setter(false)}>
              <Text style={styles.yesorno}>아니오!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {},
  view: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '60%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    fontSize: 18,
    fontFamily: 'HeirofLightRegular',
    color: 'white',
  },
  sub: {
    fontSize: 16,
    fontFamily: 'HeirofLightRegular',
    color: 'white',
  },
  boxset: {
    marginTop: 15,
    width: '100%',
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ok: {
    backgroundColor: 'rgba(241, 235, 121, 0.75)',
    alignItems: 'center',
    borderRadius: 40,
    width: '20%',
    height: '100%',
  },
  no: {
    backgroundColor: 'rgba(241, 235, 121, 0.75)',
    minWidth: 30,
    alignItems: 'center',
    borderRadius: 40,
    width: '20%',
    height: '100%',
  },
  yesorno: {
    fontSize: 16,
    fontFamily: 'HeirofLightRegular',
    color: 'black',
    color: 'white',
  },
});

export default ModalDetectFinish;
