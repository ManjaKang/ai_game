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
function ModalDialog(props) {
  console.log('modaldialog setter', props.state);
  return (
    props.visible && (
      <View style={styles.modal}>
        {/* {props.data && props.data.map(D => <IngameTextName data={D} />)} */}
        <IngameTextName dialog={props.data[props.state].name} />
        <IngameTextDialog dialog={props.data[props.state].text} />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(192,192,192,1)',
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    left: 0,
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
