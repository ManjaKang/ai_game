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
  console.log('chapterpage', props);
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          // uri: 'https://image.shutterstock.com/image-photo/flat-lay-composition-evidences-crime-600w-1859010208.jpg',
          uri: 'https://ak.picdn.net/shutterstock/videos/1069224121/thumb/5.jpg?ip=x480',
          cache: 'only-if-cached',
        }}
        style={{width: '100%', height: '100%'}}>
        <View style={{height: 400}}>
          <View style={styles.setbox}>
            <MainButtonOption />
            <MainButtonAccount />
          </View>
          <View style={styles.viewcontainer}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              {/* <EpisodeText></EpisodeText> */}
              <ChapterText name={props.route.params.name}></ChapterText>
            </Text>
            {/* <EpisodeButton /> */}
            <ChapterButton name={props.route.params.name} />
            <View style={styles.setboxback}>
              {/* <EpisodeButtonBack></EpisodeButtonBack> */}
              <ChapterButtonBack></ChapterButtonBack>
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

export default ChapterPage;
