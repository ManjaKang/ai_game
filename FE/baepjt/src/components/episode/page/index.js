import React from 'react';
import EpisodeButton from '../button/chapter/index.js';
import EpisodeText from '../text/title/index.js';
import {View, Text} from 'react-native';

function EpisodePage() {
  return (
    <View>
      <EpisodeText></EpisodeText>
      <EpisodeButton />
    </View>
  );
}
export default EpisodePage;
