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
              imageUri={require('../../../../images/chapter/occur.jpg')}
              episode={props.name}
              order={1}></Category>
            <Category
              name="용의자 조사"
              imageUri={require('../../../../images/background/chapter1/room.png')}
              episode={props.name}
              order={2}></Category>
            <Category
              name="피해자방 조사"
              imageUri={require('../../../../images/background/chapter3/room.png')}
              episode={props.name}
              order={3}></Category>
            <Category
              name="백지현의 집"
              imageUri={require('../../../../images/background/chapter4/chapter4_wardrobe.png')}
              episode={props.name}
              order={4}></Category>
            <Category
              name="임이지의 집"
              imageUri={require('../../../../images/background/chapter5/2doors.png')}
              episode={props.name}
              order={5}></Category>
            <Category
              name="김세영의 집"
              imageUri={require('../../../../images/background/chapter6/paintingroom.png')}
              episode={props.name}
              order={6}></Category>
            <Category
              name="임시윤의 집"
              imageUri={require('../../../../images/white.png')}
              episode={props.name}
              order={7}></Category>
            <Category
              name="범인은 바로 너"
              imageUri={require('../../../../images/white.png')}
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
