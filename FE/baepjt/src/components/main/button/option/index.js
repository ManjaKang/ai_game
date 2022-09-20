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
import ModalOption from '../../../modal/option/page';
import Icon from 'react-native-vector-icons/Ionicons';
function MainButtonOption() {
  const [settingModal, setSettingModal] = useState(false);
  return (
    <View>
      <ModalOption
        visible={settingModal}
        hideModalContentWhileAnimating={true}
        setter={setSettingModal}></ModalOption>

      <Icon
        name="volume-low"
        color="rgba(255,255,255,1)"
        size={40}
        onPress={() => setSettingModal(true)}
      />
    </View>
  );
}

export default MainButtonOption;
