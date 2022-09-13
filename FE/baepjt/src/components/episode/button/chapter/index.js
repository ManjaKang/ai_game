import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import Category from './Category.js';
const EpisodeButton = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
        <View style={{height: 130, marginTop: 20}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category name="공원"></Category>
            <Category name="도서관"></Category>
            <Category name="장소1"></Category>
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
