import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useState} from 'react';
import ModalAccount from '../../../modal/account/page';
import Icon from 'react-native-vector-icons/Ionicons';
function MainButtonAccount() {
  const [settingModal, setSettingModal] = useState(false);
  return (
    <View style={styles.button}>
      <ModalAccount
        visible={settingModal}
        hideModalContentWhileAnimating={true}
        setter={setSettingModal}></ModalAccount>
      <Icon
        name="person-outline"
        color="rgba(255,123,0,0.7)"
        onPress={() => setSettingModal(true)}
        size={35}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
});

export default MainButtonAccount;
