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
              name="OCD 살인"
              blocked="false"></Category>
            <Category
              imageUri={require('../../../../images/episode/flower.jpg')}
              name="몽환화"
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/doll.jpg')}
              name="침대 위 인형"
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/goggle.jpg')}
              name="고글 쓴 남자"
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/snowwhite.jpg')}
              name="백설공주"
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/brain.jpg')}
              name="세번째 피해자"
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/brain.jpg')}
              name="은밀한 사진관"
              blocked="true"></Category>
            <Category
              imageUri={require('../../../../images/episode/brain.jpg')}
              name="붉은 낙엽"
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
