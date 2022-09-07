import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

function StartPage() {
  return (
    <ImageBackground
      source={{
        uri: 'https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr',
        cache: 'only-if-cached',
      }}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>화면을 터치하세요</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text: {
    textAlign: 'center',
  },
});
export default StartPage;
