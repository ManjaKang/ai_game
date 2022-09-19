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
        name="settings-outline"
        color="rgba(255,123,0,0.7)"
        size={40}
        onPress={() => setSettingModal(true)}
      />
    </View>
  );
}

export default MainButtonOption;
