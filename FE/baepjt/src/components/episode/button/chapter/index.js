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
              imageUri={require("../../../../images/뇌.jpg")}
              name="OCD 살인"></Category>
            <Category
              imageUri={require("../../../../images/뇌.jpg")}
              name="몽환화"></Category>
            <Category
              imageUri={require("../../../../images/뇌.jpg")}
              name="침대 위 인형"></Category>
            <Category
              imageUri={require("../../../../images/뇌.jpg")}
              name="고글 쓴 남자"></Category>
            <Category
              imageUri={require("../../../../images/뇌.jpg")}
              name="백설공주"></Category>
            <Category
              imageUri={require("../../../../images/뇌.jpg")}
              name="세번째 피해자"></Category>
            <Category
              imageUri={require("../../../../images/뇌.jpg")}
              name="은밀한 사진관"></Category>
            <Category
              imageUri={require("../../../../images/뇌.jpg")}
              name="붉은 낙엽"></Category>
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
