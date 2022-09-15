import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import ModalAccount from "../../../modal/account/page";

function MainButtonAccount() {
    const [settingModal, setSettingModal] = useState(false);
    return (
      <View style={styles.button}>
        <ModalAccount
        visible={settingModal}
        hideModalContentWhileAnimating={true}
        setter={setSettingModal}>
        </ModalAccount>
        <Button
        title="Accounts"
        color="rgba(255,123,0,0.7)"
        // onPress={() => Alert.alert('설정 버튼 누름!')} />
        onPress={() => setSettingModal(true)} />
      </View>
    )
}

const styles = StyleSheet.create({
  button: {
  }
})

export default MainButtonAccount;