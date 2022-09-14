import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import Category from './Category.js';
const EpisodeButton = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '(0, 0, 0, 10)', paddingTop: 20}}>
        <View style={{marginTop: 20}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category name="OCD 살인사건"></Category>
            <Category name="SSAFY"></Category>
            <Category name="교회"></Category>
            <Category name="송삼 오피스텔"></Category>
            <Category name="HUFS"></Category>
            <Category name="장소2"></Category>
            <Category name="장소2"></Category>
            <Category name="장소2"></Category>
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
