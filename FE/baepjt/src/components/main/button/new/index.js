import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

function MainButtonNew() {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('EpisodePage');
  };
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPress={onClick}>
        <ImageBackground
          source={require('../../../../images/main_page/door.jpg')}
          style={{width: '100%', height: '100%', borderRadius: 40}}>
          <View style={{marginTop: 130}}>
            <Text style={styles.text}>NEW</Text>
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
export default MainButtonNew;
