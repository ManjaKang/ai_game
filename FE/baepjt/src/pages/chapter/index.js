import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import ChapterButtonBack from '../../components/chapter/button/back';
import ChapterButton from '../../components/chapter/button/ingame';
import ChapterText from '../../components/chapter/text/title';
import MainButtonAccount from '../../components/main/button/account';
import MainButtonOption from '../../components/main/button/option';

function ChapterPage(props) {
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
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
              {/* <EpisodeText></EpisodeText> */}
              <ChapterText name={props.route.params.name}></ChapterText>
            </Text>
            {/* <EpisodeButton /> */}
            <ChapterButton
              name={props.route.params.name}
              number={props.route.params.number}
            />
            <View style={styles.setboxback}>
              {/* <EpisodeButtonBack></EpisodeButtonBack> */}
              {/* <ChapterButtonBack></ChapterButtonBack> */}
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    marginTop: '5%',
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

export default ChapterPage;
