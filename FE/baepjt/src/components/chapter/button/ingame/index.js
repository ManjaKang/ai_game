import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Category from './Category';

function ChapterButton(props) {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '(0, 0, 0, 10)', paddingTop: 20}}>
        <View style={{marginTop: 20}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              name="사건 발생"
              episode={props.name}
              order={1}></Category>
            <Category
              name="용의자 조사"
              episode={props.name}
              order={2}></Category>
            <Category
              name="피해자방 조사"
              episode={props.name}
              order={3}></Category>
            <Category name="백지현" episode={props.name} order={4}></Category>
            <Category name="임이지" episode={props.name} order={5}></Category>
            <Category name="김세영" episode={props.name} order={6}></Category>
            <Category name="임시윤" episode={props.name} order={7}></Category>
            <Category
              name="범인은 바로 너"
              episode={props.name}
              order={8}></Category>
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
