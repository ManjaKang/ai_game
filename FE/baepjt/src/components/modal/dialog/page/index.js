import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import IngameTextDialog from '../../../ingame/text/dialog';
import IngameTextName from '../../../ingame/text/name';
import IngameButtonSkip from '../../../ingame/button/skip';

function ModalDialog(props) {
  return (
    props.visible && (
      <View style={styles.modal}>
        <View style={styles.view}>
          {/* {props.data && props.data.map(D => <IngameTextName data={D} />)} */}
          <IngameTextName dialog={props.data[props.state].name} />
          <IngameTextDialog dialog={props.data[props.state].text} />
        </View>
        <IngameButtonSkip orderSkip={props.orderSkip}></IngameButtonSkip>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  modal: {
    // backgroundColor: 'rgba(192,192,192,1)',
    width: '100%',
    height: '28%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: '80%',
    height: '100%',
    backgroundColor: 'rgba(84,84,84,0.8)',
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 9,
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderColor: 'blue',
    borderWidth: 5,
    top: 5,
    right: 5,
  },
});

export default ModalDialog;
