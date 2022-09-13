import React, { useState } from "react";
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import { Modal } from "react-native";
import ModalOption from "../../../modal/option/page";

function MainButtonOption() {
  const [settingModal, setSettingModal] = useState(false);
  return (
    <View style={styles.button}>
      <ModalOption
      visible={settingModal}
      hideModalContentWhileAnimating={true}>
      </ModalOption>
      <Button
      title="Settings"
      color="rgba(255,123,0,0.7)"
      // onPress={() => Alert.alert('설정 버튼 누름!')} />
      onPress={() => setSettingModal(true)} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    top: 10,
    left: 10,
    position: "absolute",
  }
});
export default MainButtonOption;
