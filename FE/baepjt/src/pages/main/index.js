import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native';
import MainTextTitle from '../../components/main/text/title/index.js';
import MainButtonNew from '../../components/main/button/new/index.js';
import MainButtonLoad from '../../components/main/button/load';
import MainButtonOption from '../../components/main/button/option';
import MainButtonAccount from '../../components/main/button/account';

const MainPage = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../images/start_page/background.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View>
          <View style={styles.setbox}>
            <MainButtonOption />
            <MainButtonAccount />
          </View>
          <View style={styles.viewcontainer}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              <MainTextTitle />
            </Text>
            <View style={styles.fixbutton}>
              <MainButtonNew />
              <MainButtonLoad />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewcontainer: {
    marginTop: '10%',
  },
  setbox: {
    top: 10,
    left: 10,
    position: 'absolute',
    flexDirection: 'row',
  },
  fixbutton: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default MainPage;
