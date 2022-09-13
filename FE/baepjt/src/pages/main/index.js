import React, { useState } from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import MainTextTitle from '../../components/main/text/title';
import MainButtonNew from '../../components/main/button/new';
import MainButtonLoad from '../../components/main/button/load';
import MainButtonOption from '../../components/main/button/option';

function MainPage() {

  return (
    <ImageBackground
      source={{
        // uri: 'https://image.shutterstock.com/image-photo/flat-lay-composition-evidences-crime-600w-1859010208.jpg',
        uri: 'https://media.istockphoto.com/photos/yellow-police-line-do-not-cross-on-concrete-wall-background-with-copy-picture-id1366991815',
        cache: 'only-if-cached',
      }}
      style={{width: '100%', height: '100%'}}>
      <MainButtonOption />
      <View style={styles.title}>
        <MainTextTitle />
      </View>
      <View style={styles.container}>
        <MainButtonNew />
        <MainButtonLoad />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default MainPage;
