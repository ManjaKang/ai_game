import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MainTextTitle() {
  return (
    <View>
      <Text style={styles.text}>프로젝트 이름</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    // font: ,
    color: 'rgba(200,100,100,1)',
  },
});
export default MainTextTitle;
