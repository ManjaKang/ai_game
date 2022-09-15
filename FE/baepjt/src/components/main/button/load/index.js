import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const ImageURI = {uri: './'};
function MainButtonLoad() {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        title="Load"
        color="rgba(100,200,200,0.6)"
        onPress={() => Alert.alert('불러오기 누름!')}>
        <Text style={{color: 'black', fontSize: 30}}>LOAD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 180,
    backgroundColor: 'rgba(255,255,0,0.7)',
    borderRadius: 40,
  },
});
export default MainButtonLoad;
