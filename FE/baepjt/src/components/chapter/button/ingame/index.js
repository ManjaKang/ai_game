import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Category from './Category';

function ChapterButton(props) {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '(0, 0, 0, 10)', paddingTop: 20}}>
        <View style={{marginTop: 20}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category name="챕터1" episode={props.name}></Category>
            <Category name="챕터2" episode={props.name}></Category>
            <Category name="챕터3" episode={props.name}></Category>
            <Category name="챕터4" episode={props.name}></Category>
            <Category name="챕터6" episode={props.name}></Category>
            <Category name="챕터5" episode={props.name}></Category>
            <Category name="챕터7" episode={props.name}></Category>
            <Category name="종장" episode={props.name}></Category>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ChapterButton;
