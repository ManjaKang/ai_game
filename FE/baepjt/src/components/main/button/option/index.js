import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Modal} from 'react-native';
import {IconButton} from 'react-native-paper';
import ModalOption from '../../../modal/option/page';

function MainButtonOption() {
  const [settingModal, setSettingModal] = useState(false);
  return (
    <View>
      <ModalOption
        visible={settingModal}
        hideModalContentWhileAnimating={true}
        setter={setSettingModal}></ModalOption>
      <Button
        title="Settings"
        color="rgba(255,123,0,0.7)"
        // onPress={() => Alert.alert('설정 버튼 누름!')} />
        onPress={() => setSettingModal(true)}
      />
    </View>
  );
}

export default MainButtonOption;
