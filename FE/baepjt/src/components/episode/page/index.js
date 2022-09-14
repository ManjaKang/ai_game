import React from 'react';
import EpisodeButton from '../button/chapter/index.js';
import EpisodeText from '../text/title/index.js';
import EpisodeButtonBack from '../button/back/index.js';
import {View, Text, StyleSheet} from 'react-native';

function EpisodePage(props) {
  return (
    <View style={{height: '100%'}}>
      <EpisodeText></EpisodeText>
      <EpisodeButton />
      <View style={styles.setbox}>
        <EpisodeButtonBack
          setShow={props.setShow}
          shouldShow={props.shouldShow}></EpisodeButtonBack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  setbox: {
    bottom: 10,
    right: 10,
    position: 'absolute',
    flexDirection: 'column',
  },
});
export default EpisodePage;
