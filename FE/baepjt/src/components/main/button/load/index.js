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
function MainButtonLoad() {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPress={() => Alert.alert('불러오기 누름!')}>
        <ImageBackground
          source={require('../../../../images/main_page/road.jpg')}
          style={{width: '100%', height: '100%', borderRadius: 40}}>
          <View style={{marginTop: 130}}>
            <Text style={styles.text}>LOAD</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170,
  },
  container: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'AssetBold',
  },
});
export default MainButtonLoad;
