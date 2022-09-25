import React from 'react';
import EpisodeButton from '../../components/episode/button/chapter/index.js';
import EpisodeText from '../../components/episode/text/title/index.js';
import EpisodeButtonBack from '../../components/episode/button/back/index.js';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import MainButtonOption from '../../components/main/button/option';
import MainButtonAccount from '../../components/main/button/account';
function EpisodePage(props) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../images/start_page/background.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={{height: 400}}>
          <View style={styles.setbox}>
            <MainButtonOption />
            <MainButtonAccount />
          </View>
          <View style={styles.viewcontainer}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              <EpisodeText></EpisodeText>
            </Text>
            <EpisodeButton />
            <View style={styles.setboxback}>
              <EpisodeButtonBack></EpisodeButtonBack>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    marginTop: '10%',
    height: '86%',
  },
  setbox: {
    top: 10,
    left: 10,
    position: 'absolute',
    flexDirection: 'row',
  },
  setboxback: {
    bottom: 10,
    right: 10,
    position: 'absolute',
    flexDirection: 'column',
  },
});
export default EpisodePage;
