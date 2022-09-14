import React from 'react';
import EpisodeButton from '../button/chapter/index.js';
import EpisodeText from '../text/title/index.js';
import EpisodeButtonBack from '../button/back/index.js';
import {View, Text} from 'react-native';

function EpisodePage(props) {
  console.log(props.shouldShow, 'episode페이지에서');
  return (
    <View style={styles.container}>
      <EpisodeText></EpisodeText>
      <EpisodeButton />
      <EpisodeButtonBack
        setShow={props.setShow}
        shouldShow={props.shouldShow}></EpisodeButtonBack>
    </View>
  );
}

export default EpisodePage;
