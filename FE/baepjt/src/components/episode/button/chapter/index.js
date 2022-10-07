import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Category from './Category.js';
const EpisodeButton = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '(0, 0, 0, 10)', paddingTop: 20}}>
        <View style={{marginTop: 20}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              imageUri={require('../../../../images/episode/brain.jpg')}
              name="틀린그림찾기"
              number={1}
              blocked="false"></Category>
            <Category
              imageUri={require('../../../../images/episode/flower.jpg')}
              name="몽환화"
              number={2}
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/doll.jpg')}
              name="침대 위 인형"
              number={3}
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/goggle.jpg')}
              name="고글 쓴 남자"
              number={4}
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/snowwhite.jpg')}
              name="백설공주"
              number={5}
              blocked="true"></Category>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EpisodeButton;
