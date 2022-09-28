import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function IngameTextDialog(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.dialog}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginLeft: '3%',
    marginTop: '1%',
    // height: "80%",
    flex: 3,
  },
  text: {
    width: '90%',
    height: '100%',
    fontSize: 20,
    fontFamily: 'AssetLight',
    color: 'white',
  },
});

export default IngameTextDialog;
